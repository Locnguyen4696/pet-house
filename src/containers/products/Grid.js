import React, { useState } from "react";
import styled from "styled-components";
import imgCat from "../../assets/img-cat.png";
import imgCat1 from "../../assets/img-cat1.png";
import imgCat2 from "../../assets/img-cat2.png";
import imgCat3 from "../../assets/img-cat3.png";
import imgCat4 from "../../assets/img-cat4.png";
import imgCat5 from "../../assets/img-cat5.png";
import iconNone from "../../assets/icon-none.png";
import iconToy from "../../assets/icon-toy.png";
import iconToys from "../../assets/icon-toys.png";
import iconBed from "../../assets/icon-bed.png";
import iconHouse from "../../assets/icon-house.png";
import Button from "../../components/button";
const Wrapper = styled.div`
    width: 100%;
    display: grid;
    gap: 30px;
    grid-template: repeat(2, 1fr) / repeat(3, 1fr);
`;

const GridItem = styled.div`
    background: #ffffff;
    border: 1px solid #e1e1e1;
    box-sizing: border-box;
    box-shadow: 0px 0px 25px rgba(208, 208, 208, 0.25);
    border-radius: 6px;
    cursor: pointer;
`;
const ImgContainer = styled.div`
    width: 100%;
    img {
        max-width: 100%;
    }
`;
const Content = styled.div`
    padding: 20px;
    h3 {
        font-weight: 500;
        font-size: 20px;
        line-height: 24px;
        margin-bottom: 15px;
    }
    p {
        font-size: 14px;
        line-height: 25px;
    }
    button {
        margin-top: 20px;
        width: 100%;
    }
`;

export default function Grid() {
    return (
        <Wrapper>
            <GridItem>
                <ImgContainer>
                    <img src={imgCat} alt="img" />
                </ImgContainer>
                <Content>
                    <h3>Phòng 1</h3>
                    <p>
                        Kích thước - 90х70х180 см <br />
                        Diện tích - 0,63 м2 <br />
                        Thiết bị phòng <img src={iconNone} alt="img" /> <br />
                        Giá: 100.000 VND
                    </p>
                    <Button variant="primary">Đặt phòng</Button>
                </Content>
            </GridItem>
            <GridItem>
                <ImgContainer>
                    <img src={imgCat2} alt="img" />
                </ImgContainer>
                <Content>
                    <h3>Phòng 2</h3>
                    <p>
                        Kích thước - 90х100х180 см <br />
                        Diện tích - 0,90 м2 <br />
                        Thiết bị phòng <img src={iconBed} alt="img" />
                        <img src={iconToy} alt="img" /> <br />
                        Giá: 200.000 VND
                    </p>
                    <Button variant="primary">Đặt phòng</Button>
                </Content>
            </GridItem>
            <GridItem>
                <ImgContainer>
                    <img src={imgCat2} alt="img" />
                </ImgContainer>
                <Content>
                    <h3>Phòng 3</h3>
                    <p>
                        Kích thước - 100х125х180 см <br />
                        Diện tích - 1,13 м2 <br />
                        Thiết bị phòng <img src={iconBed} alt="img" />
                        <img src={iconToy} alt="img" />
                        <img src={iconToys} alt="img" /> <br />
                        Giá: 250.000 VND
                    </p>
                    <Button variant="primary">Đặt phòng</Button>
                </Content>
            </GridItem>
            <GridItem>
                <ImgContainer>
                    <img src={imgCat3} alt="img" />
                </ImgContainer>
                <Content>
                    <h3>Phòng 4</h3>
                    <p>
                        Kích thước - 125х125х180 см <br />
                        Diện tích - 1,56 м2 <br />
                        Thiết bị phòng <img src={iconBed} alt="img" />
                        <img src={iconToy} alt="img" />
                        <img src={iconToys} alt="img" /> <br />
                        Giá: 350.000 VND
                    </p>
                    <Button variant="primary">Đặt phòng</Button>
                </Content>
            </GridItem>
            <GridItem>
                <ImgContainer>
                    <img src={imgCat4} alt="img" />
                </ImgContainer>
                <Content>
                    <h3>Phòng 5</h3>
                    <p>
                        Kích thước - 160х160х180 см <br />
                        Diện tích - 2,56 м2 <br />
                        Thiết bị phòng <img src={iconBed} alt="img" />
                        <img src={iconToy} alt="img" />
                        <img src={iconToys} alt="img" />
                        <img src={iconHouse} alt="img" /> <br />
                        Giá: 400.000 VND
                    </p>
                    <Button variant="primary">Đặt phòng</Button>
                </Content>
            </GridItem>
            <GridItem>
                <ImgContainer>
                    <img src={imgCat5} alt="img" />
                </ImgContainer>
                <Content>
                    <h3>Phòng 6</h3>
                    <p>
                        Kích thước - 100х125х180 см <br />
                        Diện tích - 2,88 м2 <br />
                        Thiết bị phòng <img src={iconBed} alt="img" />
                        <img src={iconToy} alt="img" />
                        <img src={iconToys} alt="img" />
                        <img src={iconHouse} alt="img" /> <br />
                        Giá: 600.000 VND
                    </p>
                    <Button variant="primary">Đặt phòng</Button>
                </Content>
            </GridItem>
        </Wrapper>
    );
}
