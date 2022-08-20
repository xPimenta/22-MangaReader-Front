import styled from "styled-components";

export const Image = styled.img`
    flex: 0 0 auto;
  justify-content: center;
  margin-bottom: 15px;

  width: calc(20% + 300px);
  height: auto;

  background-color: red;
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
  background-color: green;
`;

export const ChapterTitle = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: 30px;
    font-weight: bold;
    text-align: center;
    padding: 30px;
    margin-bottom: -50px;

`;