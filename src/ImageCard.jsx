import React from 'react';

const ImageCard = ({src, projectName}) => {
  const style = {
    backgroundImage: `url(${src})`,
    backgroundRepeat: `no-repeat`
  }

  return (
    <div className="ImageCard">
      <h3
        style={style}>
          {projectName}
      </h3>
    </div>
  );
}

export default ImageCard;
