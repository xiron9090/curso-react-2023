import { useContext } from "react";
import { PostForm } from "../components/PostForm"
import { AppContext } from "../../../context";
import { IPost } from "../models/post/post";

export const PostUpdate=()=>{
    const { data, setData } = useContext(AppContext);
      const onChangeDta = (item: IPost) => {
        data.posts.push(item);
        setData({ ...data });
      };
    return(
        <>
        <PostForm onChangeDta={(e)=>{onChangeDta(e)}} initialValue={data.post}/>
        </>
    )
}