import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { Footerr } from "../styles/global.style.js";

export default function Footer() {
  return (
    <Footerr>
      <FooterContent> MangaLivre © 2022 </FooterContent>
      <FooterContent>
        This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of
        Service apply.
      </FooterContent>
    </Footerr>
  );
}
