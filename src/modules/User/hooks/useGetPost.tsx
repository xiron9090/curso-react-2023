import { useEffect, useState } from "react";
import { IPost } from "../models/post/post";
import { getPost } from "../services/PostServices/index.service";

export const useGetPost = () => {
  const [post, setPost] = useState<IPost[]>([]);
  const [loading, setSloading] = useState<boolean>(false);
  const [error, setError] = useState();
  const handleGetPost = async () => {
    setSloading(true);
    try {
     const result = await getPost()
     setPost(result.data)
      setSloading(false);
    } catch (error ) {
      
      setError(error.message)
      setSloading(false);
    }
  };
  useEffect(() => {
    handleGetPost();
  }, []);
  return { post,loading,error };
};
