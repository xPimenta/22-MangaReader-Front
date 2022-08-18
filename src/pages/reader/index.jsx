import React, { useEffect, useState } from 'react';
import { axios } from 'axios';
import { useParams } from 'react-router-dom';


export default function Reader() {
    const [images, setImages] = useState([]);

    console.log(images);
    const { chapterId } = useParams();

    useEffect(() => {
        axios  
            .get(`${process.env.REACT_APP_API_URL}/getChapter/${chapterId}`)
            .then((res) => setImages(res.data));
    }, []);

    return (
        <>
        <div>
            <h1 className="title">Cloudinary Gallery v3</h1>
            <div className="gallery">
                {images &&
                    images.map((image, index) => (
                        <p>IMAGE</p>
                        // <Image
                        //     key={index}
                        //     publicId={image}
                        //     width="300"
                        //     crop="scale"
                        // />
                    ))}
            </div>
        </div>
    </>

    );
}