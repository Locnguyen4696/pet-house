import React, { useState } from "react";
import styled from "styled-components";
import Container from "../../components/container";
import iconUp from "../../assets/icon-up.png";
import iconDown from "../../assets/icon-down.png";
import iconDropdown from "../../assets/icon-dropdown.png";

const Wrapper = styled.div`
    & > div {
        padding: 65px 0;
        display: flex;
        justify-content: space-between;
        h1 {
            font-weight: bold;
            font-size: 36px;
            line-height: 43px;
        }
    }
`;

const Sort = styled.div`
    width: 175px;
    background: #ffffff;
    box-shadow: 0px 2px 12px rgba(173, 152, 143, 0.18);
    border-radius: 25px;
    padding: 10px 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    & > div {
        img {
            margin-right: 10px;
        }
    }
`;
const Dropdown = styled.div`
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: #ffffff;
    box-shadow: 0px 2px 12px rgba(173, 152, 143, 0.18);
    border-radius: 4px;
    padding: 10px 20px;
    font-size: 14px;
    line-height: 17px;
    & > div:first-child {
        margin-bottom: 20px;
    }
`;
export default function Heading() {
    const [showDropdown, setShowDropdown] = useState(false);
    const [sort, setSort] = useState(false);

    return (
        <Wrapper>
            <Container>
                <h1>Phòng</h1>
                <Sort
                    onClick={() =>
                        showDropdown
                            ? setShowDropdown(false)
                            : setShowDropdown(true)
                    }
                >
                    <div>
                        {sort ? (
                            <img src={iconUp} alt="iconUp" />
                        ) : (
                            <img src={iconDown} alt="iconDown" />
                        )}
                        Giá
                    </div>
                    <img src={iconDropdown} alt="iconDropdown" />
                    {showDropdown && (
                        <Dropdown>
                            <div
                                onClick={() => {
                                    setSort(true);
                                }}
                            >
                                Theo giá tăng
                            </div>
                            <div
                                onClick={() => {
                                    setSort(false);
                                }}
                            >
                                Theo giá giảm
                            </div>
                        </Dropdown>
                    )}
                </Sort>
            </Container>
        </Wrapper>
    );
}
