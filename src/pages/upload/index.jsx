import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/user.context";
import axios from "axios";

import Header from "../../components/header.js";
// import Footer from "../../components/footer.js";
import * as S from "../../styles/global.style";
import * as s from "./style";

export default function Upload() {
  const [fileInputState, setFileInputState] = useState("");
  const [previewSource, setPreviewSource] = useState([]);
  const [mangaUploadData, setMangaUploadData] = useState([]);
  const [mangaName, setMangaName] = useState([]);
  const [mangaChapter, setMangaChapter] = useState([]);
  const [successMsg, setSuccessMsg] = useState("");
  const [errMsg, setErrMsg] = useState("");

  console.log(previewSource);

  const navigate = useRef(useNavigate());
  const { userToken } = useContext(UserContext);

  // useEffect(() => {
  //   if (!userToken) navigate.current("/");
  //   // if(!userToken) console.log("no token");
  // }, [userToken]);

  const handleNameInputChange = (e) => {
    setMangaName(e.target.value);
  };

  const handleChapterInputChange = (e) => {
    setMangaChapter(e.target.value);
  };

  const handleFileInputChange = (e) => {
    const files = [...e.target.files];
    files.sort((a, b) => a.name.localeCompare(b.name));
    setPreviewSource([]);
    previewFile(files);
    setFileInputState(e.target.value);
  };

  const previewFile = (files) => {
    files.forEach((file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setPreviewSource((previewSource) => [
          ...previewSource,
          [reader.result, file.name],
        ]);
      };
    });
  };

  const handleSubmitMangaChapter = async (e) => {
    // JSON.stringify({ previewSource}), // STRINGIFY PREVIEWSOURCE PRA REDUZIR O TAMANHO
    // DO ENVIO PRA A API
    e.preventDefault();
    if (!previewSource) return;
    try {
      uploadMangaData([mangaName, mangaChapter, previewSource]);
    } catch (err) {
      console.error(err);
      setErrMsg("Something went wrong!");
    }
  };

  const uploadMangaData = async (mangaUploadData) => {
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/api/upload`, mangaUploadData)

      setFileInputState("");
      // setSuccessMsg("Image uploaded successfully");
    } catch (err) {
      console.error(err);
      setErrMsg("Something went wrong!");
    }
  };

  return (
    <>
      <Header />
      <S.Body>
        <s.MostReadWrapp>
          <s.ListName>Post Manga</s.ListName>

          <s.ListName>
            <form onSubmit={handleSubmitMangaChapter} className="form">
              <input
                id="mangaName"
                placeholder="Manga name"
                onChange={handleNameInputChange}
                value={mangaName}
              ></input>
              <input
                id="mangaChapter"
                placeholder="Manga chapter"
                onChange={handleChapterInputChange}
                value={mangaChapter}
              ></input>
              <input
                id="fileInput"
                type="file"
                name="image"
                onChange={handleFileInputChange}
                value={fileInputState}
                className="form-input"
                multiple
              />
              <button className="btn" type="submit">
                Submit
              </button>
            </form>
          </s.ListName>

          <s.HorizontalList>
            {previewSource.map((source, index) => (
              <s.HorizontalListItem key={index}>
                <img key={index} src={source[0]} alt="preview" />
                <p>{source[1]}</p>
              </s.HorizontalListItem>
            ))}
          </s.HorizontalList>
        </s.MostReadWrapp>

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
