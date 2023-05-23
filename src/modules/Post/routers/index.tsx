import { Routes, Route, Navigate } from "react-router-dom";
import { PostList } from "../pages/PostList";
import { PostDetails } from "../pages/PostDetail";
const PostRouter = () => {
  return (
    <Routes>
      <Route index element={<PostList />} />
      <Route path=":id" element={<PostDetails />} />
      <Route path={"*"} element={<Navigate to={"/post"} replace />} />
    </Routes>
  );
};

export default PostRouter;
