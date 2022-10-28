// import { Container } from "./style";
import { ReactNode } from "react";
interface HeaderProps {
  children: ReactNode;
}

export const Header = ({ children }: HeaderProps) => <div>{children}</div>;
