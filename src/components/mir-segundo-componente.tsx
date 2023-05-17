import { FC, ReactNode } from "react";

type MiSegundoComponenteProps = {
  title: string;
  children?: ReactNode;
  onclick?: (value: string) => void;
};
export const MiSegundoComponente: FC<MiSegundoComponenteProps> = ({
  children,
  title,
  onclick,
}) => {
  return (
    <>
      <button onClick={() => onclick("Titulo cambiado desde el hijos")}>
        Cambiar Titutlo
      </button>
      <h1>{title}</h1>
      {children}
    </>
  );
};
