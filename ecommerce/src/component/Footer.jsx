import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Room,
  Telegram,
  Twitter,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../reponsive";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;
const Desc = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Payment = styled.img`
    width: 50%;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>PU SHOP</Logo>
        <Desc>
          Nơi bạn có thể tìm kiếm những chiếc đồ xinh xắn cho bản thân với giá
          cực kì hạt dẻ.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Telegram />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Link Hữu Ích</Title>
        <List>
          <ListItem>Trang Chủ</ListItem>
          <ListItem>Giỏ Hàng</ListItem>
          <ListItem>Set</ListItem>
          <ListItem>Quần Jean</ListItem>
          <ListItem>Váy</ListItem>
          <ListItem>Tài Khoản</ListItem>
          <ListItem>Theo Dõi Đơn Hàng</ListItem>
          <ListItem>Yêu Thích</ListItem>
          <ListItem>Yêu Thích</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Liên Hệ</Title>
        <ContactItem>
          <Room style={{marginRight: "10px"}} />
          154/18c Nguyễn Văn Linh, P. Bình Thuận, Quận 7
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight: "10px"}}/>
          +84 966 016 654
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight: "10px"}}/>
          tony04@gmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
