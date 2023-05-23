import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/home/Home";
import { Suspense, lazy } from "react";
import { Loading } from "../components/Loading";
const PostRouter = lazy(() => import('../modules/Post/routers/'));
export const RootRouter = () => {
  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route
        path="/post/*"
        element={
          <Suspense fallback={<Loading/>}>
            <PostRouter />
          </Suspense>
        }
      />
    </Routes>
  );
};
