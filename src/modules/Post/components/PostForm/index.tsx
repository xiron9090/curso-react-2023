import { useFormik } from "formik";
import { Button } from "../../../../components/Button/button";
import { ContainerStyle } from "../../../../components/Container/index.styled";
import { ContainerForm, Error, InputForm } from "./index.styled";
import { FC, useContext } from "react";
import { IPost } from "../../models/post/post";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

type PostForm = {
  initialValue?: Omit<IPost, "id">;
  onChangeDta: (item: IPost) => void;
};
const postFormValidateSchema = Yup.object().shape({
  userId: Yup.number().required(),

  title: Yup.string().required("Required").min(3),
  body: Yup.string().required("Required").min(3),
});
export const PostForm: FC<PostForm> = ({ onChangeDta, initialValue }) => {
  //   const { data, setData } = useContext(AppContext);
  //   const onChangeDta = (item: IPost) => {
  //     data.posts.push(item);
  //     setData({ ...data });
  //   };
  const navigate = useNavigate();
  const postFormik = useFormik<Omit<IPost, "id">>({
    initialValues: initialValue ?? {
      userId: 0,
      title: "",
      body: "",
    },
    onSubmit: (values) => {
      onChangeDta({ ...values, id: 3 });
      navigate(-1);
    },
    validationSchema: postFormValidateSchema,
  });
  return (
    <ContainerStyle>
      <ContainerForm>
        <InputForm
          name="userId"
          placeholder="User Id"
          onChange={postFormik.handleChange}
          value={postFormik.values.userId}
          withError={postFormik.errors.userId?.length > 0}
        />
        {/* {postFormik.errors.userId?.length > 0 && (
          <Error>{postFormik.errors.userId}</Error>
        )} */}
        <InputForm
          name="title"
          placeholder="Title"
          onChange={postFormik.handleChange}
          value={postFormik.values.title}
          withError={postFormik.errors.title?.length > 0}
        />
        {/* {postFormik.errors.title?.length > 0 && (
          <h1>{postFormik.errors.userId}</h1>
        )} */}
        <InputForm
          name="body"
          placeholder="Body"
          onChange={postFormik.handleChange}
          value={postFormik.values.body}
          withError={postFormik.errors.body?.length > 0}
        />
        {/* {postFormik.errors.body?.length > 0 && (
          <Error>{postFormik.errors.userId}</Error>
        )} */}
      </ContainerForm>
      <Button onClick={postFormik.handleSubmit}>{`${
        initialValue ? "Update" : "Create"
      }`}</Button>
    </ContainerStyle>
  );
};
