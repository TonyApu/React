import styled from "styled-components";
import { mobile } from "../reponsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://scontent.fsgn13-2.fna.fbcdn.net/v/t39.30808-6/247992506_2058320667661379_2822601962746549461_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=PbdQ_RQDxfAAX_saBPV&_nc_ht=scontent.fsgn13-2.fna&oh=e47a086653802a5223cf25da33420a92&oe=61A23650");
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: 300;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Đăng Nhập</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />
          <Button>Đăng Nhập</Button>
          <Link>Quên Mật Khẩu?</Link>
          <Link>Đăng Ký Tài Khoản Mới</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
