import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getPostID } from "../../../services/PostServices/index.service";
import { IPost } from "../models/post/post";
import { PostContainer } from "../components/PostContainer";
import { Title } from "../../../components/Title/title";
import { Description } from "../../../components/Description/description";
import { ButtonShowMore } from "../components/ButtonShowMore";

export const PostDetails = () => {
  const [post, setPost] = useState<IPost>();
  const params = useParams();
  const navigate=useNavigate()
  const getPost = async () => {
    const result = await getPostID(params.id);
    setPost(result.data);
  };
  const onBack=()=>{
    navigate(-1)
  }
  useEffect(() => {
    getPost();
  }, []);
  return (
    <PostContainer >
      <Title>{post?.title.toUpperCase()}</Title>
      <Description>{post?.body}</Description>
      <ButtonShowMore onClick={onBack}>
        Back
      </ButtonShowMore>
    </PostContainer>
  );
};
