import { FC, ReactNode } from "react";
import { PostContainerStyled } from "./index.styled";

type PostContainerProps = {
  children: ReactNode;
};
export const PostContainer: FC<PostContainerProps> = ({ children }) => {
  return <PostContainerStyled>{children}</PostContainerStyled>;
};
