import { ReactNode } from "react";

interface FormularioProps {
  children: ReactNode;
  onSubmit?: () => void;
  border?: string;
}

export const Formulario = ({ children, ...rest }: FormularioProps) => (
  <form {...rest}>{children}</form>
);
