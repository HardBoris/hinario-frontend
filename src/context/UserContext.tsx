import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";

import { localApi as api } from "../services/api";

interface UserProviderProps {
  children: ReactNode;
}

interface User {
  email: string;
  userId: string;
  userCategory: string;
}

interface AuthState {
  token: string;
  user: User;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface UserContextData {
  user: User;
  token: string;
  signIn: (credentials: SignInCredentials) => Promise<void>;
  signOut: () => void;
  mensaje: string;
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
  const [mensaje, setMensaje] = useState("");
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem("@Hinario:token");
    const user = localStorage.getItem("@Hinario:user");

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }: SignInCredentials) => {
    await api
      .post("/users/login", { email, password })
      .then((response) => {
        const { user, token } = response.data;
        console.log(response);
        localStorage.setItem("@Hinario:token", token);
        localStorage.setItem("@Hinario:user", JSON.stringify(user));

        setData({ user, token });
      })
      .catch((error) => {
        setMensaje(error.response.data);
      });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem("@Hinario:token");
    localStorage.removeItem("@Hinario:user");

    setData({} as AuthState);
  }, []);

  return (
    <UserContext.Provider
      value={{
        token: data.token,
        user: data.user,
        signIn,
        signOut,
        mensaje,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, useAuth };
