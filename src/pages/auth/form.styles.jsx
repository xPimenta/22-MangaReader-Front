import styled from "styled-components";

export const FormWrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  @media (max-width: ${({ theme }) => theme.breakPoints.laptop}) {
    flex-direction: column;
  }
`;

export const FormBanner = styled.section`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.secondary};
  background: ${({ theme }) => theme.colors.main};
  box-shadow: ${({ theme }) => theme.shadow.gray};
  height: 100vh;
  width: 90%;
  font-family: ${({ theme }) => theme.fonts.logoFont};
  div {
    margin-top: 20%;
    margin-left: 15%;
    h1 {
      font-size: ${({ theme }) => theme.fontSize.xl};
      margin-bottom: 1rem;
    }
    h4 {
      font-size: ${({ theme }) => theme.fontSize.md};
      width: clamp(30%, 330px, 80vw);
    }
  }
  @media (max-width: ${({ theme }) => theme.breakPoints.laptop}) {
    height: 30vh;
    width: 100%;
    div {
      margin: auto auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      h1 {
        font-size: ${({ theme }) => theme.fontSize.lg};
        margin-bottom: 0;
      }
      h4 {
        text-align: center;
        font-size: ${({ theme }) => theme.fontSize.sm};
        width: clamp(30%, 330px, 60vw);
      }
    }
  }
`;

const inputHeight = "3rem";
const inputWidth = "80%";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  margin: auto auto;
  width: clamp(400px, 100%, 600px);
  @media (max-width: ${({ theme }) => theme.breakPoints.laptop}) {
    heigth: 100vh;
  }
  input {
    width: ${inputWidth};
    height: ${inputHeight};
    padding: 1rem;
    font-family: ${({ theme }) => theme.fonts.logoFont};
    font-size: ${({ theme }) => theme.fontSize.sm};
    border-radius: ${({ theme }) => theme.borderRadius.sm};
    border: none;
    background: ${({ theme }) => theme.colors.inputBackground};
    &::placeholder {
      color: ${({ theme }) => theme.colors.text2};
    }
  }
  button {
    width: ${inputWidth};
    height: ${inputHeight};
    cursor: pointer;
    font-family: ${({ theme }) => theme.fonts.logoFont};
    font-size: ${({ theme }) => theme.fontSize.sm};
    border-radius: ${({ theme }) => theme.borderRadius.sm};
    border: none;
    background: ${({ theme }) => theme.colors.buttonBackground};
    color: ${({ theme }) => theme.colors.secondary};
  }
  a {
    color: ${({ theme }) => theme.colors.buttonBackground};
    font-size: ${({ theme }) => theme.fontSize.xs};
    text-decoration: underline;
    cursor: pointer;
    margin: 10px;
  }
`;