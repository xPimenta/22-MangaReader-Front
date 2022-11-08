import styled from "styled-components";

export const MostReadWrapp = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 32px;
  width: clamp(400px, 100%, 90%);
  height: auto;

  background-color: black;

  @media (max-width: ${({ theme }) => theme.breakPoints.laptop}) {
    heigth: 100vh;
  }
`;

export const ListName = styled.h1`

font-family: ${({ theme }) => theme.fonts.logoFont};
    font-style: normal;
  font-size: 50px;
  margin-left: 15px;

  color: white;

  form{

    margin-top: 15px;
    
display: flex;
flex-direction: column;
  }

  input{

    padding: 1rem;
    margin-bottom: 1rem;
    margin-right: 1rem;
    font-family: ${({ theme }) => theme.fonts.logoFont};
    font-size: ${({ theme }) => theme.fontSize.sm};
    border-radius: ${({ theme }) => theme.borderRadius.sm};
    border: none;
    background: ${({ theme }) => theme.colors.inputBackground};
    &::placeholder {
      color: ${({ theme }) => theme.colors.text2};
    }



      color: black;

  }

  button{
    padding: 1rem;
    margin-bottom: 1rem;
    margin-right: 1rem;
    font-family: ${({ theme }) => theme.fonts.logoFont};
    font-size: ${({ theme }) => theme.fontSize.sm};
    border-radius: ${({ theme }) => theme.borderRadius.sm};
    border: none;
    background: ${({ theme }) => theme.colors.inputBackground};
    &::placeholder {
      color: ${({ theme }) => theme.colors.text2};
    }
  }

`;

export const HorizontalList = styled.div`
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  padding: 15px 15px 15px 0px;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    display: none;
  }

  

  height: 320px;
  background-color: black;
`;

export const HorizontalListItem = styled.div`
  display: inline-block;
  margin-left: 15px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
   height: 100%;
   width: 180px;
   overflow: hidden;
   
   img{
    height: 270px;
    width: 100%;
   }
   background-color: white;
   border-radius: 5px;
`;

export const Body = styled.main`

  display: flex;
  flex-direction: column;
  align-items: center;

  min-height: calc(100vh - ${({ theme }) => theme.spacing.headerHeight});
  margin-top: ${({ theme }) => theme.spacing.headerHeight};
  transition: all 300ms ease;

  background-color: black;
`;