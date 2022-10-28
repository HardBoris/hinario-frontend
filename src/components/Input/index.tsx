// import { Container } from "./style";
import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  register: any;
  name: string;
  error?: any;
  label?: string;
}

export const Input = ({
  label,
  register,
  name,
  error,
  ...rest
}: InputProps) => {
  return (
    <>
      <div>
        {label} {!!error && <span>: {error} </span>}
      </div>

      <input {...register(name)} {...rest} />
    </>
  );
};
