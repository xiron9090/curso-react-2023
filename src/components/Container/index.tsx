import { CSSProperties, FC, ReactNode } from "react";
import { ContainerStyle } from "./index.styled";

type ContainerProps = {
  children: ReactNode;
};
export const Container: FC<ContainerProps> = ({ children }) => {
  return <ContainerStyle>{children}</ContainerStyle>;
};
