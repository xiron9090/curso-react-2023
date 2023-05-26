import { mycustomAxios } from "../../../../axios/axios.config";
import { IPost } from "../../models/post/post";

export const getPost = async () => {
 
    return await mycustomAxios.get<IPost[]>("posts/");
   
};
