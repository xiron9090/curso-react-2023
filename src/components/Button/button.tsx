import { FC, ReactNode } from "react";
import { Buttontyled } from "./button.styled";
type ButtonProps = {
  children: ReactNode;
  onClick:()=>void
};
export const Button: FC<ButtonProps> = ({ children,onClick }) => {
  return <Buttontyled onClick={onClick}>{children}</Buttontyled>;
};
