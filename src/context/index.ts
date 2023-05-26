import { createContext } from "react";
import { IPost } from "../models/post/post";

export interface IAppContext {
  posts: IPost[];
  post: IPost;
}

export interface IAppContextProps {
  data: IAppContext;
  setData: (data: IAppContext) => void;
}

export const AppContext = createContext<IAppContextProps>({
  data: {
    posts: [],
    post: {
      body: "",
      id: 0,
      title: "",
      userId: 0,
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setData: () => {},
});
