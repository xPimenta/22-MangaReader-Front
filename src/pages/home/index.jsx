import { useContext, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/user.context";

import Header from "../../components/header.js";
import Banner from "../../components/banner.jsx";
import MostReadMangas from "../../components/MostReadMangas";
import LatestChapters from "../../components/LatestChapters";

// import Footer from "../../components/footer.js";
import * as S from "../../styles/global.style";
import * as s from "./style";

export default function HomePage() {
  const navigate = useNavigate();
  const { userToken } = useContext(UserContext);

  // useEffect(() => {
  //   if (!userToken) navigate.current("/");
  //   // if(!userToken) console.log("no token");
  
  // }, [userToken]);

  useEffect(() => {
    navigate("/");
  }, []);



  return (
    <>
      <Header />
      <S.Body>
        <Banner />
        <s.MostReadWrapp>
          <s.ListName>Most Read</s.ListName>
          <MostReadMangas />
        </s.MostReadWrapp>

        <s.LatestChaptersWrapp>
          <s.ListName>Latest Chapters</s.ListName>
          <LatestChapters />
        </s.LatestChaptersWrapp>

        <s.Footer>
          <s.FooterContent> Manga Reader © 2022 </s.FooterContent>
          <s.FooterContent>
            This site is protected by Google Privacy Policy and Terms of
            Service apply.
          </s.FooterContent>
        </s.Footer>
      </S.Body>
    </>
  );
}
