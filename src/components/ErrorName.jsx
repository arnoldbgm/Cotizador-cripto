import styled from "@emotion/styled";
const Texto = styled.div`
  background-color: #b7332c;
  color: #fff;
  font-size: 22px;
  padding: 15px;
  text-transform: uppercase;
  font-family: "Lato", sans-serif;
  font-weight: 700;
  text-align: center;
`;

const ErrorName = ({children}) => {
  return <Texto>{children}</Texto>;
};

export default ErrorName;
