import styled from "styled-components";

export const BannerWrap = styled.div`
  display: flex;
  justify-content: center;
  width: clamp(400px, 100%, 100%);
  height: 200px;

  background-color: #f5f5f5;

  @media (max-width: ${({ theme }) => theme.breakPoints.laptop}) {
    heigth: 100vh;
  }
`;

export const ChapterCard = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  
  `;

export const MostReadWrapp = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 32px;
  width: clamp(400px, 100%, 90%);

  background-color: white;
  border-radius: 5px;

  @media (max-width: ${({ theme }) => theme.breakPoints.laptop}) {
    heigth: 100vh;
  }
`;

export const ListName = styled.h1`

font-family: ${({ theme }) => theme.fonts.logoFont};
    font-style: normal;
    font-size: 45px;
  line-height: 64px;
  margin-left: 15px;

  color: black;
`;

export const HorizontalList = styled.div`
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  background-color: white;
  border-radius: 5px;
  padding: 15px 0px 15px 0px;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    /* display: none; */
  }

  height: 300px;
  background-color: black;
`;

export const HorizontalListItem = styled.div`
  display: inline-block;
  margin-right: 15px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
   height: 100%;
   width: 175px;
   overflow-x: hidden;

    &:hover {
  
      background-color: black;
      color: white;
      cursor: pointer;

    }
   

  img{
    width: 100%;
    height: 85%;
    overflow: hidden;
  }

  h3{
    overflow: hidden;
    margin-left: 10px;
  }

   border-radius: 5px;

   font-family: ${({ theme }) => theme.fonts.logoFont};
    font-size: 25px;
   
   background-color: white;
`;

export const LatestChaptersWrapp = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 45px;
  margin-bottom: 30px;
  width: clamp(400px, 100%, 90%);

  background-color: white;
  border-radius: 5px;

  @media (max-width: ${({ theme }) => theme.breakPoints.laptop}) {
    heigth: 100vh;
  }
`;

export const VerticalList = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  overflow-x: auto;
  padding: 15px 0px 0px 0px;

  border-radius: 5px;

  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    display: none;
  }

  width: 100%;
  height: 1165px;
  background-color: black;
`;

export const VerticalListItem = styled.div`
  display: flex;
  flex: 0 0 auto;
  margin-bottom: 15px;
  justify-content: space-between;
  position: relative;

  font-family: ${({ theme }) => theme.fonts.logoFont};
    font-size: 25px;
    color: white;

    border: 1px outset white;

  width: 100%;
  height: 100px;
  background-color: black;
  border-radius: 5px;
  overflow: hidden;


  :hover {
    background-color: white;
    color: black;
  }

  img{
    width: 100px;
    height: 100px;
  }

  h4{
    position: relative;
    top: 10px;
    right: 10px;
    font-family: ${({ theme }) => theme.fonts.logoFont};
    font-style: normal;
    font-size: large;
  }
`;

export const NameChapter = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 110px;
  top: 10px;

  h3{
    margin:5px
  }
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: clamp(400px, 100%, 90%);
  height: 100px;
  background-color: white;
  border-radius: 5px;
`;
export const FooterContent = styled.div`
  font-family: "Oswald";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  text-align: center;
  margin-top: 15px;
`;
