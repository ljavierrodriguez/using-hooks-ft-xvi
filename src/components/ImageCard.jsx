import React from 'react';

const ImageCard = ({ src, alt = 'Image', setImgSelected}) => {
    return (
        <div className="card" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setImgSelected({ src: src })}>
            <img src={src} className="card-img-top img-fluid" alt={alt} />
        </div>
    )
}

export default ImageCard;