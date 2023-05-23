import { FC, ReactNode } from "react";
import { DescriptionStyled } from "./description.styled";
type DescriptionStyledProps = {
  children: ReactNode;
};
export const Description: FC<DescriptionStyledProps> = ({ children }) => {
  return <DescriptionStyled>{children}</DescriptionStyled>;
};
