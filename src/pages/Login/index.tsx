import { useNavigate } from "react-router-dom";
import { Input } from "../../components/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Formulario } from "../../components/Form";
import { useAuth } from "../../context/UserContext";

const signInSchema = yup.object().shape({
  email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
  password: yup.string().required("Senha obrigatória"),
});

interface txtData {
  email: string;
  password: string;
}

export const Login = () => {
  const history = useNavigate();

  const { signIn } = useAuth();
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<txtData>({ resolver: yupResolver(signInSchema) });

  const sender = (data: txtData) => {
    signIn(data);
  };

  return (
    <Formulario onSubmit={handleSubmit(sender)}>
      <div className="titulo">
        <h1>Login</h1>
      </div>
      <div className="entrada">
        <Input
          register={register}
          name="email"
          error={errors.email?.message}
          label="Email"
          placeholder="fulanito@detal.com"
        />

        <Input
          register={register}
          name="password"
          error={errors.password?.message}
          label="Senha"
          type="password"
        />
      </div>
      <div className="botonera">
        <button onClick={() => history("/signup")}>SignUp</button>
        <button type="submit">Entrar</button>
      </div>
    </Formulario>
  );
};
