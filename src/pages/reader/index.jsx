import React, { useContext, useEffect, useRef, useState } from "react";
import { useParams } from "react-router"
import axios from 'axios';
import { useNavigate } from "react-router-dom";

import Header from "../../components/header.js";

import * as S from "../../styles/global.style";
import * as s from "./style";

export default function Reader() {
    const { chapterId } = useParams();
    const navigate = useRef(useNavigate());

    const [chapter, setChapter] = useState([]);

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL}/chapter/${chapterId}`)
            .then((res) => setChapter(res.data))
    } , [chapterId]);

    return (
        <>
              {/* <Header /> */}
            <s.ChapterTitle>
                <h1>{chapter && chapter[1]} - {chapter && chapter[2]}</h1>
                <h2 onClick={() => navigate.current(-1)}>Return</h2>
                </s.ChapterTitle>
            <s.VerticalReader>
                    {chapter[0] &&  chapter[0].map((image, index) => (
                        <s.Image
                            key={index}
                            src={image.url}
                        />
                    ))}
             </s.VerticalReader>
        </>
    );
}

