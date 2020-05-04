import React from 'react';
import ImageCard from './ImageCard';
import imageCards from './ImageCardList.json';

const ImageCardGallery = () => {

  return (
    <div className="ImageCardGallery">
      {imageCards.map(({src, projectName}) =>
        <ImageCard src={src} projectName={projectName} />
      )}
    </div>
  )
}

export default ImageCardGallery;
