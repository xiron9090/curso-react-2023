import { FC, useContext, useEffect, useState } from "react";
import { IPost } from "../models/post/post";
import { getPost } from "../services/PostServices/index.service";
import { AxiosError } from "axios";
import { AppContext } from "../../../context";
import { getPostID } from "../../../services/PostServices/index.service";

export const useGetPosts = () => {
  const [post, setPost] = useState<IPost[]>([]);
  const [loading, setSloading] = useState<boolean>(false);
  const [error, setError] = useState();
  const { data, setData } = useContext(AppContext);
  const handleGetPost = async () => {
    setSloading(true);
    try {
      const result = await getPost();

      setPost(result.data);
      setData({ ...data, posts: result.data });
      setSloading(false);
    } catch (error) {
      setError(error.message);
      setSloading(false);
    }
  };
  useEffect(() => {
    handleGetPost();
  }, []);
  return { post, loading, error };
};

export const useGetPost = (id: string) => {
  const [loading, setSloading] = useState<boolean>(false);
  const [error, setError] = useState();
  const { data, setData } = useContext(AppContext);
  const handleGetPost = () => {
    setSloading(true);
    try {
      const result = data.posts.find((element) => element.id.toString() === id);

      setData({ ...data, post: result! });
      setSloading(false);
    } catch (error) {
      setError(error.message);
      setSloading(false);
    }
  };
  useEffect(() => {
    handleGetPost();
  }, []);
  return { loading, error };
};
