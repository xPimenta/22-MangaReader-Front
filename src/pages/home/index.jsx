import { useContext, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/user.context";

import Header from "../../components/header.js";
// import Footer from "../../components/footer.js";
import * as S from "../../styles/global.style";
import * as s from "./style";

export default function HomePage() {
  const navigate = useRef(useNavigate());
  const { userToken } = useContext(UserContext);

  // useEffect(() => {
  //   if (!userToken) navigate.current("/");
  //   // if(!userToken) console.log("no token");
  // }, [userToken]);

  return (
    <>
      <Header />
      <S.Body>
        <s.BannerWrap> BANNER IMG </s.BannerWrap>
          <s.MostReadWrapp>
          <s.ListName>Most Read</s.ListName>
          <s.HorizontalList>
            <s.HorizontalListItem />
            <s.HorizontalListItem />
            <s.HorizontalListItem />
            <s.HorizontalListItem />
            <s.HorizontalListItem />
            <s.HorizontalListItem />
            <s.HorizontalListItem />
            
          </s.HorizontalList>
          </s.MostReadWrapp>

        <s.LatestChaptersWrapp>
          <s.ListName>Latest Chapters</s.ListName>
          <s.VerticalList>
            <s.VerticalListItem />
            <s.VerticalListItem />
            <s.VerticalListItem />
            <s.VerticalListItem />
            <s.VerticalListItem />
            <s.VerticalListItem />
            <s.VerticalListItem />
            <s.VerticalListItem />
            <s.VerticalListItem />
            <s.VerticalListItem />
          </s.VerticalList>
        </s.LatestChaptersWrapp>

        <s.Footer>
        <s.FooterContent> Manga Reader © 2022 </s.FooterContent>
      <s.FooterContent>
        This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of
        Service apply.
      </s.FooterContent>
        </s.Footer>
      </S.Body>
    </>
  );
}