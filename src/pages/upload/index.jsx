import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/user.context";

import Header from "../../components/header.js";
// import Footer from "../../components/footer.js";
import * as S from "../../styles/global.style";
import * as s from "./style";

export default function Upload() {
    const [fileInputState, setFileInputState] = useState('');
    const [previewSource, setPreviewSource] = useState([]);
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [successMsg, setSuccessMsg] = useState('');
    const [errMsg, setErrMsg] = useState('');

    console.log(previewSource);

    const navigate = useRef(useNavigate());
    const { userToken } = useContext(UserContext);

    // console.log(previewSource)

  // useEffect(() => {
  //   if (!userToken) navigate.current("/");
  //   // if(!userToken) console.log("no token");
  // }, [userToken]);


    const handleFileInputChange = (e) => {
        const files = [...e.target.files];
        files.sort((a, b) => a.name.localeCompare(b.name));
        setPreviewSource([]);
        previewFile(files);
        setSelectedFiles(files);
        setFileInputState(e.target.value);
    };

    const previewFile = (files) => {
      files.forEach((file) => {
        console.log(file.name)
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setPreviewSource(previewSource => [...previewSource, [reader.result, file.name]]);
        };
      });
    }

    const handleSubmitFile = (e) => {
        e.preventDefault();
        if (!selectedFiles) return;
        const reader = new FileReader();
        reader.readAsDataURL(selectedFiles);
        reader.onloadend = () => {
            uploadImage(reader.result);
        };
        reader.onerror = () => {
            console.error('AHHHHHHHH!!');
            setErrMsg('something went wrong!');
        };
    };

    const uploadImage = async (base64EncodedImage) => {
        try {
            await fetch(`${process.env.REACT_APP_API_URL}/api/upload`, {
                method: 'POST',
                body: JSON.stringify({ data: base64EncodedImage }),
                headers: { 'Content-Type': 'application/json' },
            });
            setFileInputState('');
            setPreviewSource('');
            setSuccessMsg('Image uploaded successfully');
        } catch (err) {
            console.error(err);
            setErrMsg('Something went wrong!');
        }
    };

  return (
    <>
      <Header />
      <S.Body>
        <s.MostReadWrapp>
          <s.ListName>Post Manga</s.ListName>

          <s.ListName>
          <form onSubmit={handleSubmitFile} className="form">
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
              <img key={index} src={source[0]} alt="preview"/>
                <p>{source[1]}</p>
                </s.HorizontalListItem>
            ))}
          </s.HorizontalList>
        </s.MostReadWrapp>

        {/* <s.Footer>
          <s.FooterContent> Manga Reader © 2022 </s.FooterContent>
          <s.FooterContent>
            This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of
            Service apply.
          </s.FooterContent>
        </s.Footer> */}
      </S.Body>
    </>
  );
}
