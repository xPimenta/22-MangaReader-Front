import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Header from "../../components/header.js";
import Posts from "../../components/PostsUser/PostsUser";
import * as S from "../../styles/global.style";
import { Div, TimelineHeader } from "../home/style";

export default function UserProfile() {
  const { id } = useParams();
  const [user, setUser] = useState();

  useEffect(() => {
    const requisicao = axios.get(`${process.env.REACT_APP_API_URL}/user/${id}`);
    requisicao.then((res) => {
      setUser(res.data[0].username);
    });
  }, []);

  return (
    <>
      <Header />
      <S.Body>
        <S.ContentWrapper>
          <S.PostsWrapper>
            <Div>
              <TimelineHeader>{user}'s posts</TimelineHeader>
            </Div>
            <Posts />
          </S.PostsWrapper>
        </S.ContentWrapper>
      </S.Body>
    </>
  );
}
