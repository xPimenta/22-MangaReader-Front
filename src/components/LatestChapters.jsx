import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import * as s from "../pages/home/style";

export default function LatestChapters() {
  const navigate = useNavigate();

  const [latestChapters, setLatestChapters] = useState([]);

  useEffect(() => {
      axios
        .get(`${process.env.REACT_APP_API_URL}/latestChapters`)
        .then((res) => setLatestChapters(res.data))
  }, []);

  const getMangaChapter = (chapterId) => {
    navigate(`/reader/${chapterId}`);
    //window.location.reload(true);
  };

  return (
    <s.VerticalList>
        {latestChapters && latestChapters.map((chapter) => (
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
  );
}
