import React, { useEffect, useState } from 'react';
import { Image } from 'cloudinary-react';

export default function Reader() {
    const [imageIds, setImageIds] = useState();
    const loadImages = async () => {
        try {
            const res = await fetch(`${process.env.REACT_APP_API_URL}/api/images`);
            const data = await res.json();
            setImageIds(data);
        } catch (err) {
            console.error(err);
        }
    };
    useEffect(() => {
        loadImages();
    }, []);

    return (
        <>
        <div>
            <h1 className="title">Cloudinary Gallery v3</h1>
            <div className="gallery">
                {imageIds &&
                    imageIds.map((imageId, index) => (
                        <Image
                            key={index}
                            cloudName="dlua7rfnv"
                            publicId={imageId}
                            width="300"
                            crop="scale"
                        />
                    ))}
            </div>
        </div>
    </>

    );
}