import { useGetPost } from "../../hooks/useGetPost";

export const PostList = () => {
  const post = useGetPost();
  return <>{JSON.stringify(post)}</>;
};
