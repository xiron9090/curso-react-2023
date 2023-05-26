import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getPostID } from "../../../services/PostServices/index.service";
import { IPost } from "../models/post/post";
import { PostContainer } from "../components/PostContainer";
import { Title } from "../../../components/Title/title";
import { Description } from "../../../components/Description/description";
import { ButtonShowMore } from "../components/ButtonShowMore";
import { AppContext } from "../../../context";
import { useGetPost } from "../hooks/useGetPost";

export const PostDetails = () => {
  const [post, setPost] = useState<IPost>();
  const { data, setData } = useContext(AppContext);
  const params = useParams();
  //   const { loading } = useGetPost(params!.id);
  const navigate = useNavigate();
  const handleShowPost = () => {
    const result = data.posts.find(
      (element) => element.id.toString() === params.id
    );
    setData({ ...data, post: result! });
  };
  //   const getPost = async () => {
  //     const result = await getPostID(params.id);
  //     setPost(result.data);
  //   };
  const onBack = () => {
    navigate(-1);
  };
  useEffect(() => {
    handleShowPost();
  }, []);
  return (
    <PostContainer>
      <Title>{data.post?.title.toUpperCase()}</Title>
      <Description>{data.post?.body}</Description>
      <ButtonShowMore onClick={onBack}>Back</ButtonShowMore>
    </PostContainer>
  );
};
