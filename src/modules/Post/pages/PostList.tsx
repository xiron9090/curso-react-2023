import { useNavigate } from "react-router-dom";
import { Container } from "../../../components/Container";
import { Description } from "../../../components/Description/description";
import { Title } from "../../../components/Title/title";
import { ButtonShowMore } from "../components/ButtonShowMore";
import { PostContainer } from "../components/PostContainer";
import { useGetPosts } from "../hooks/useGetPost";
import { Loading } from "../../../components/Loading";
import { useContext } from "react";
import { AppContext } from "../../../context";

export const PostList = () => {
  const { post, error, loading } = useGetPosts();
  const {data} = useContext(AppContext)
  const navigate = useNavigate();
  const handleShowMore = (id: number) => {
    navigate({ pathname: id.toString() });
  };
  return (
    <>
    {
      loading&&<Loading/>
    }
      {data.posts.map((element) => (
        <PostContainer key={element.id}>
          <Title>{element.title.toUpperCase()}</Title>
          <Description>{element.body}</Description>
          <ButtonShowMore onClick={() => handleShowMore(element.id)}>
            Show More
          </ButtonShowMore>
        </PostContainer>
      ))}
    </>
  );
};
