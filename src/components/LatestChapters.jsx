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
    window.location.reload(true);
  };

  return (
    <s.VerticalList>
        {latestChapters.map((chapter) => (
          <s.VerticalListItem key={chapter.id}
          onClick={() => getMangaChapter(chapter.id)}>
            <h3>{chapter.name}</h3>
            <h3>Chapter {chapter.number}</h3>
            <h3>{chapter.createdAt}</h3>
          </s.VerticalListItem>
        ))}
    </s.VerticalList>
  );
}
