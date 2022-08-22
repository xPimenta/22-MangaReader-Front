import React, { useContext, useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Header from "../../components/header.js";
import Banner from "../../components/banner.jsx";

import * as S from "../../styles/global.style";
import * as s from "./style";

export default function Manga() {
  const { mangaId } = useParams();
  const navigate = useNavigate();

  const [manga, setManga] = useState([]);
  console.log(manga);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/manga/${mangaId}`)
      .then((res) => setManga(res.data));
  }, [mangaId]);

  const getMangaChapter = (chapterId) => {
    console.log(chapterId);
    navigate(`/reader/${chapterId}`);
    // window.location.reload(true);
  };

  return (
    <>
      <Header />
      <S.Body>
        <Banner />
        

        <s.LatestChaptersWrapp>
        <s.ListName>{manga[0] && manga[0]} Chapters</s.ListName>
          <s.VerticalList>
            {manga[1] && manga[1].map((chapter) => (
              <s.VerticalListItem key={chapter.id}
              onClick={() => getMangaChapter(chapter.id)}>
                <img src={chapter.coverUrl} alt="manga chapter" />
                <s.NameChapter>
                <h3>{chapter.name}</h3>
                <h3>Chapter {chapter.number}</h3>
                </s.NameChapter>
                <h4>{new Intl.DateTimeFormat('en-GB', { 
                    month: 'long', 
                    day: '2-digit',
                    year: 'numeric', 
                }).format(new Date(chapter.createdAt))}</h4>
              </s.VerticalListItem>
            ))}
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
