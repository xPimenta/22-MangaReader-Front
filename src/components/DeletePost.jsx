import axios from "axios";
import { useState } from "react";
import { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../contexts/user.context";

const Title = styled.h1`
  color: white;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  overflow-wrap: break-word;
  width: 60%;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 1rem;

  button {
    border-radius: ${({ theme }) => theme.borderRadius.sm};
    border: none;
    width: 134px;
    height: 37px;
    font-size: 1.1rem;
    cursor: pointer;
  }
`;

const Button = styled.button`
  color: ${({ theme, del }) => (del ? "white" : theme.colors.buttonBackground)};
  background: ${({ theme, del }) => (del ? theme.colors.buttonBackground : "white")};
`;

export default function DeletePost({ postId, closeModal }) {
  const { userToken } = useContext(UserContext);

  const [isLoading, setIsLoading] = useState(false);

  const submitDelete = () => {
    setIsLoading(true);
    axios
      .delete(`${process.env.REACT_APP_API_URL}/posts/${postId}`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
      .then(() => {
        window.location.reload();
      })
      .catch(() => {
        closeModal();
        window.alert("Algo deu errado. Não foi possivel excluir o post");
      });
  };

  if (isLoading) return <Title>Loading</Title>;

  return (
    <>
      <Title>Are you sure you want to delete this post?</Title>{" "}
      <ButtonWrapper>
        <Button onClick={closeModal}>No, go Back</Button>
        <Button del={true} onClick={submitDelete}>
          Yes, delete it
        </Button>
      </ButtonWrapper>
    </>
  );
}
