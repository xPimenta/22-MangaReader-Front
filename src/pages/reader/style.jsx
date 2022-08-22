import styled from "styled-components";

export const Image = styled.img`
    flex: 0 0 auto;
  justify-content: center;
  margin-bottom: 15px;

  width: calc(20% + 300px);
  height: auto;
`;

export const VerticalReader = styled.div`
margin-top: 55px;
    display: flex;
    align-items: center;
  flex-direction: column;
  flex-wrap: nowrap;
  overflow-x: auto;
  padding: 15px 15px 0px 15px;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    display: none;
  }

  width: 100%;
  height: 100%;
  background-color: black;
`;

export const ChapterTitle = styled.div`
font-family: ${({ theme }) => theme.fonts.logoFont};
    font-style: normal;
    font-size: 40px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    font-weight: bold;
    text-align: center;
    padding: 5px 15px 5px 15px;
    margin-bottom: -50px;

`;