import styled from "styled-components";
import { mobile } from "../reponsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://scontent.fsgn3-1.fna.fbcdn.net/v/t1.6435-9/196609128_1926346784192102_1491512791479934277_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=ZEp0ChxWASQAX9vtnBN&_nc_ht=scontent.fsgn3-1.fna&oh=226e8d9d17371e266b28e93ee08dbdaa&oe=61C13403");
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;  
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: 300;
`;
const Input = styled.input`
    flex:1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`;
const Argeement = styled.span`
    font-size: 12px;
    margin: 20px 0px;   
`;
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Đăng Ký Tài Khoản</Title>
        <Form>
          <Input placeholder="name" />
          <Input placeholder="lastname" />
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <Argeement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Argeement>
          <Button>Tạo</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
