import { FC, ReactNode } from "react";

type MiSegundoComponenteProps = {
  title: string;
  children?:ReactNode
};
export const MiSegundoComponente:FC<MiSegundoComponenteProps> = ({children,title}) => {
  return (
    <>
      <h1>{title}</h1>
      <h3> hola </h3>{children}
    </>
  );
};
