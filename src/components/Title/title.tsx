import { FC, ReactNode } from "react";
import { TitleStyled } from "./title.styled";
type TitleProps = {
  children: ReactNode;
};
export const Title: FC<TitleProps> = ({ children }) => {
  return <TitleStyled>{children}</TitleStyled>;
};
