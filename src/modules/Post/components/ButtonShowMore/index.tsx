import { FC, ReactNode } from "react";
import { ButtonShowMoreStyled } from "./index.styled";

type ButtonShowMoreProps = {
  children: ReactNode;
  onClick:()=>void
};
export const ButtonShowMore: FC<ButtonShowMoreProps> = ({ children,onClick }) => {
  return <ButtonShowMoreStyled onClick={onClick}>{children}</ButtonShowMoreStyled>;
};
