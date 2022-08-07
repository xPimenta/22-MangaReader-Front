import styled from "styled-components";
import { DebounceInput } from "react-debounce-input";
import { BsSearch } from "react-icons/bs";

export const SearchBarWrapper = styled.div`
  position: relative;
  z-index: 2;
  width: clamp(100px, 100%, 500px);
`;

export const Input = styled(DebounceInput)`
  color: ${({ theme }) => theme.colors.text2};
  font-size: 1.1rem;

  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};

  height: calc(${({ theme }) => theme.spacing.headerHeight} - 45%);
  width: clamp(100px, 100%, 500px);
  padding: 1rem;
`;

export const SearchIcon = styled(BsSearch)`
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  right: 1rem;

  color: ${({ theme }) => theme.colors.text2};
  font-size: 1.2rem;
`;

export const ResultsContainer = styled.div`
  background: ${({ theme }) => theme.colors.lightGray};
  position: absolute;
  width: 100%;
  padding: 30px 10px 10px 10px;
  top: calc(${({ theme }) => theme.spacing.headerHeight} - 50%);
  border-radius: 0 0 ${({ theme }) => theme.borderRadius.md};

  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: -2;

  animation: slidein 300ms ease-in;

  @keyframes slidein {
    from {
      transform: translateY(-60%);
    }
    to {
      transform: translateY(0);
    }
  }
`;

export const UserResult = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: ${({ theme }) => theme.colors.text3};
  font-size: ${({ theme }) => theme.fontSize.sm};

  padding: 0 10px;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  :hover {
    cursor: pointer;
    background: gray;
    color: white;
    border-radius: 25px 50px;
  }
`;

export const HideTransitionBlock = styled.div`
  position: absolute;
  z-index: -1;
  top: -1rem;
  background: ${({ theme }) => theme.colors.main};
  width: 100%;
  height: 2rem;
`;
