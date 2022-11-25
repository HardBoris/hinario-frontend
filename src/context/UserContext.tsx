import { createContext, ReactNode, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { localApi as api } from "../services/api";

interface UserProviderProps {
  children: ReactNode;
}

/* interface User {
  email: string;
  userId: string;
  userCategory: string;
} */

interface AuthState {
  token: string;
  user: string;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface UserContextData {
  user: string;
  token: string;
  signIn: (credentials: SignInCredentials) => Promise<void>;
  signOut: () => void;
  signUp: (info: SignInCredentials) => void;
  mensaje: string;
  email: string;
}

const UserContext = createContext<UserContextData>({} as UserContextData);

const useAuth = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};

const UserProvider = ({ children }: UserProviderProps) => {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  // const [data, setData] = useState({} as AuthState);

  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem("@Hinario:token");
    const user = localStorage.getItem("@Hinario:user");

    if (token && user) {
      return { token, user };
    }

    return {} as AuthState;
  });

  const signIn = async ({ email, password }: SignInCredentials) => {
    await api
      .post("/users/login", { email, password })
      .then((response) => {
        const { user, token } = response.data;
        localStorage.setItem("@Hinario:token", token);
        localStorage.setItem("@Hinario:user", user);

        setData({ user, token });
      })
      .catch((error) => {
        setMensaje(error.response.data);
      });
  };

  const signUp = async ({ email, password }: SignInCredentials) => {
    await api
      .post("/users/register", { email, password })
      .then((response) => {
        console.log(response.data);
        const { email } = response.data;
        setEmail(email);
      })
      .then(() => history("/login"))
      .catch((err) => {
        console.log(err);
      });
  };

  const signOut = () => {
    localStorage.removeItem("@Hinario:token");
    localStorage.removeItem("@Hinario:user");

    setData({} as AuthState);
    setEmail("");
  };

  return (
    <UserContext.Provider
      value={{
        token: data.token,
        user: data.user,
        signIn,
        signOut,
        signUp,
        mensaje,
        email,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, useAuth };
