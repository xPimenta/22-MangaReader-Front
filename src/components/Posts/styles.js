import styled from "styled-components";

export const PostsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
  max-height: 60vh;
  position: relative;


`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;

  h1 {
    color: ${({ theme }) => theme.colors.secondary};
    font-size: ${({ theme }) => theme.fontSize.sm};
  }

  h3 {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
`;

export const PostWrapper = styled.article`
  background: ${({ theme }) => theme.colors.postBackground};
  color: ${({ theme }) => theme.colors.text4};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  box-shadow: ${({ theme }) => theme.shadow.gray};

  width: clamp(10%, 611px, 100vw);
  height: 276px;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 21px;
  gap: 1rem;
`;

export const PostHeader = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  align-self: start;

  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }

  :hover {
    img,
    h1 {
      cursor: pointer;
    }
  }
`;

export const LinkWrapper = styled.div`
  height: 155px;
  width: 100%;
  align-self: end;
  margin-left: 2rem;

  border: 1px solid ${({ theme }) => theme.colors.linkBorder};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  cursor: pointer;

  display: flex;

  div {
    width: 100%;
    overflow-x: hidden;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 5px;

    h1 {
      color: ${({ theme }) => theme.colors.text5};
      font-size: ${({ theme }) => theme.fontSize.xs};
      overflow: hidden;
      max-height: 47%;
    }

    p {
      color: ${({ theme }) => theme.colors.text6};
      font-size: ${({ theme }) => theme.fontSize.xxs};
      overflow: hidden;
      text-overflow: ellipsis;
      max-height: 34%;
    }

    h3 {
      color: ${({ theme }) => theme.colors.text5};
      font-size: ${({ theme }) => theme.fontSize.xxs};
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
  }

  img {
    height: 100%;
    aspect-ratio: 1;
    object-fit: cover;
    object-position: right top;
    border-radius: 0 ${({ theme }) => theme.borderRadius.md}
      ${({ theme }) => theme.borderRadius.md} 0;
  }
`;

export const BottomWrapper = styled.div`
  display: flex;
`;

export const LikesWrapper = styled.div`
  width: 10%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;

  svg {
    font-size: 1.6rem;
    cursor: pointer;
    color: ${({ isLiked, theme }) => (isLiked ? theme.colors.likeButton : "white")};
  }

  h3 {
    font-size: 0.8rem;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: auto;
  margin-right: 10px;
  gap: 8px;

  svg {
    font-size: 1.5rem;
    cursor: pointer;
  }
`;

export const ModalStyle = {
  content: {
    background: "#333",
    borderRadius: "50px",
    height: "262px",
    width: "550px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
  },
};

export const EditInput = styled.textarea`
  resize: none;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  padding: 5px;
`;
