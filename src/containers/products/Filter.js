import React, { useState } from "react";
import styled from "styled-components";
import iconCheck from "../../assets/icon-check.png";
import iconUncheck from "../../assets/icon-uncheck.png";
const Wrapper = styled.div`
    width: 210px;
    color: #1a212f;
    h2 {
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        margin-bottom: 20px;
    }
`;

const Price = styled.div`
    display: flex;
    gap: 10px;
    font-size: 14px;
    line-height: 17px;
    margin-bottom: 35px;
    & > input {
        width: 50%;
        padding: 5px;
    }
`;

const Item = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 15px;
`;

const Button = styled.button`
    width: 185px;
    background: ${(props) => props.variant==="primary" ? "#fac663" : "#FFFEFD"};
    border: 2px solid #fac663;
    box-sizing: border-box;
    border-radius: 25px;
    padding: 12px 0;
    text-align: center;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    margin: 10px 0;
    cursor: pointer;
`;

const Checkbox = () => {
    const [checked, setChecked] = useState(false);
    return (
        <>
            {checked ? (
                <img
                    src={iconCheck}
                    onClick={() => setChecked(false)}
                    alt="checked"
                />
            ) : (
                <img
                    src={iconUncheck}
                    alt="unchecked"
                    onClick={() => setChecked(true)}
                />
            )}
        </>
    );
};

export default function Filter() {
    return (
        <Wrapper>
            <h2>Mức tiền</h2>
            <Price>
                <input type="number" placeholder="Từ 100.000" />
                <input type="number" placeholder="đến 600.000" />
            </Price>
            <h2>Diện tích</h2>
            <Item>
                <Checkbox />
                <span>0,63 м2</span>
            </Item>
            <Item>
                <Checkbox />
                <span>0,90 м2</span>
            </Item>
            <Item>
                <Checkbox />
                <span>1,13 м2</span>
            </Item>
            <Item>
                <Checkbox />
                <span>1,56 м2</span>
            </Item>
            <Item>
                <Checkbox />
                <span>2,56 м2</span>
            </Item>
            <Item>
                <Checkbox />
                <span>2,88 м2</span>
            </Item>
            <h2>Thiết bị phòng</h2>
            <Item>
                <Checkbox />
                <span>Đồ chơi</span>
            </Item>
            <Item>
                <Checkbox />
                <span>Giường tắm nắng</span>
            </Item>
            <Item>
                <Checkbox />
                <span>Bài cào</span>
            </Item>
            <Item>
                <Checkbox />
                <span>Trò chơi phức tạp</span>
            </Item>
            <Item>
                <Checkbox />
                <span>Nhà nhỏ</span>
            </Item>
            <Button variant="primary">Áp dụng</Button>
            <Button>Đặt lại bộ lọc</Button>
        </Wrapper>
    );
}
