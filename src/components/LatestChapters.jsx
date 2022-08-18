import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import * as s from "../pages/home/style";

export default function LatestChapters() {
  const navigate = useNavigate();

  return (
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
  );
}
