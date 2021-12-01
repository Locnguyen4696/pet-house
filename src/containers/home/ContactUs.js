import React from "react";
import styled from "styled-components";
import Container from "../../components/container";
import Map from "../../assets/map.png";
import IconFacebook from "../../assets/icon-facebook.png";
import IconInstagram from "../../assets/icon-instagram.png";
import IconTiktok from "../../assets/icon-tiktok.png";
const Wrapper = styled.div`
    background: url(${Map}) #f5ac3c;
    background-size: 55% 100%;
    background-repeat: no-repeat;
    background-position: right;
    padding: 60px 0;
`;
const Content = styled.div`
    width: 35%;
    color: #1a212f;
    h1 {
        font-weight: bold;
        font-size: 36px;
        line-height: 43px;
        margin-bottom: 10px;
    }
    h2 {
        font-weight: bold;
        font-size: 16px;
        line-height: 19px;
        margin-bottom: 10px;
    }
    p {
        font-size: 16px;
        line-height: 19px;
        margin-bottom: 32px;
    }
    img {
        margin-right: 20px;
    }
`;
export default function ContactUs() {
    return (
        <Wrapper>
            <Container>
                <Content>
                    <h1>Làm thế nào để tìm thấy chúng tôi</h1>
                    <h2>Địa chỉ</h2>
                    <p>
                        Toà C Golden Land, 275 Nguyễn Trãi, Thanh Xuân, Hà Nội
                    </p>
                    <h2>Thời gian làm việc</h2>
                    <p>Mở cửa từ 9:00 đến 20:00</p>
                    <h2>Điện thoại liên hệ</h2>
                    <p>039485998495</p>
                    <h2>E-mail</h2>
                    <p>Pethouse@gmail.com</p>
                    <h2>Mạng xã hội</h2>
                    <p>
                        <img src={IconFacebook} alt="icon-facebook" />
                        <img src={IconInstagram} alt="icon-instagram" />
                        <img src={IconTiktok} alt="icon-tiktok" />
                    </p>
                </Content>
            </Container>
        </Wrapper>
    );
}
