import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import * as s from "../pages/home/style";

export default function MostReadMangas() {
  const navigate = useNavigate();

  const [mostRead, setMostRead] = useState([]);
  console.log(mostRead)

  useEffect(() => {
      axios
        .get(`${process.env.REACT_APP_API_URL}/getMostRead`)
        .then((res) => setMostRead(res.data))
  }, []);

  const getManga = (mangaId) => {
    navigate(`/manga/${mangaId}`);
    window.location.reload(true);
  };

  return (
<s.HorizontalList>
        {mostRead.map((manga) => (
          <s.HorizontalListItem key={manga.id}
          onClick={() => getManga(manga.id)}>
            <h3>{manga.name}</h3>
            <h3>{manga.createdAt}</h3>
            </s.HorizontalListItem >
        ))}
</s.HorizontalList>
  );
}

