import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import * as s from "../pages/home/style";

export default function MostReadChapters() {
  const navigate = useNavigate();

  return (
    <s.HorizontalList>
      <s.HorizontalListItem />
      <s.HorizontalListItem />
      <s.HorizontalListItem />
      <s.HorizontalListItem />
      <s.HorizontalListItem />
      <s.HorizontalListItem />
      <s.HorizontalListItem />
    </s.HorizontalList>
  );
}
