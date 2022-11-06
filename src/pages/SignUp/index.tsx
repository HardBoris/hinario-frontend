import { useNavigate } from "react-router-dom";
import { Input } from "../../components/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Formulario } from "../../components/Form";
import { useAuth } from "../../context/UserContext";

const signInSchema = yup.object().shape({
  email: yup.string().required("Campo obrigatório").email("E-mail inválido"),
  password: yup.string().required("Campo obrigatório"),
  confirmpassword: yup
    .string()
    .required("Campo obrigatório")
    .oneOf([yup.ref("password")], "Password must match"),
});

interface txtInfo {
  email: string;
  password: string;
  confirmpassword: string;
}

export const SignUp = () => {
  const history = useNavigate();

  const { signUp } = useAuth();
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<txtInfo>({ resolver: yupResolver(signInSchema) });

  const sender = (data: txtInfo) => {
    const { confirmpassword, ...dataInfo } = data;
    signUp(dataInfo);
  };

  return (
    <>
      <Formulario onSubmit={handleSubmit(sender)}>
        <div className="titulo">
          <h1>Cadastro</h1>
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

          <Input
            register={register}
            name="confirmpassword"
            error={errors.confirmpassword?.message}
            label="Confirmar Senha"
            type="password"
          />
        </div>
        <div className="botonera">
          <button onClick={() => history("/login")}>Login</button>
          <button type="submit">Cadastrar</button>
        </div>
      </Formulario>
    </>
  );
};
