import { styled } from "styled-components";
import { ContainerStyle } from "../../../../components/Container/index.styled";

export const ContainerForm = styled(ContainerStyle)`
  display: flex;
  /* flex-direction: column; */
  justify-content: space-between;
  margin-bottom: 5px;
`;
interface IInputFormProps {
  withError?: boolean;
}
export const InputForm = styled.input<IInputFormProps>`
  border-color: ${(props) => props.withError && 'red'};
`;
export const Error = styled.h4`
  color: red;
`;
