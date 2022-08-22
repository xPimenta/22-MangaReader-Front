import React from "react";
import styled from "styled-components";

import banner from "../assets/default_banner2.jpg";

export default function Banner() {
  return (
    <BannerWrap>
        <img src={banner} alt="banner" />
    </BannerWrap>
  );
}

const BannerWrap = styled.div`
  display: flex;
  justify-content: center;
  width: clamp(400px, 100%, 100%);
  height: 200px;

  background-color: grey;

  img{
    width: 100%;
    height: 100%;
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.laptop}) {
    heigth: 100vh;
  }
`;
