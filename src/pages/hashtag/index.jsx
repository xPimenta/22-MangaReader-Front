import { useContext, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Header from "../../components/header.js";
import PostsHash from "../../components/PostsUser/hashtag.posts.jsx";
import * as S from "../../styles/global.style";
import { Div, TimelineHeader } from "../home/style";
import Trending from "../../components/trending.jsx";

import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/user.context";


export default function Hashtag() {
  const { hashtag } = useParams();

  const navigate = useRef(useNavigate());
  const { userToken } = useContext(UserContext);

  useEffect(() => {
    if (!userToken) navigate.current("/");
    // if(!userToken) console.log("no token");
  }, [userToken]);

  // const [user, setUser] = useState();

  // useEffect(() => {
  //   const requisicao = axios.get(`${process.env.REACT_APP_API_URL}/hashtag/${hashtag}`);
  //   requisicao.then((res) => {
  //     setUser(res.data);
  //     console.log(user)
  //   });
  // }, []);

  return (
    <>
      <Header />
      <S.Body>
        <S.ContentWrapper>
          <S.PostsWrapper>
            <Div>
              <TimelineHeader>#{hashtag}</TimelineHeader>
            </Div>
            <PostsHash />
          </S.PostsWrapper>
          <S.TrendWrapper>
          <Trending/>
        </S.TrendWrapper>
        </S.ContentWrapper>
      </S.Body>
    </>
  );
}
