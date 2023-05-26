import { Routes, Route, Navigate } from "react-router-dom";
import { PostList } from "../pages/PostList";
import { PostDetails } from "../pages/PostDetail";
import { AppContext, IAppContext } from "../../../context";
import { useState } from "react";
const PostRouter = () => {
  const [data, setData] = useState<IAppContext>({
    posts: [],
    post: {
      body: "",
      id: 0,
      title: "",
      userId: 0,
    },
  });
  return (
    <AppContext.Provider value={{ data, setData }}>
      <Routes>
        <Route index element={<PostList />} />
        <Route path=":id" element={<PostDetails />} />
        <Route path={"*"} element={<Navigate to={"/post"} replace />} />
      </Routes>
    </AppContext.Provider>
  );
};

export default PostRouter;
