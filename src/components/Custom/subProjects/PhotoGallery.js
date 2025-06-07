import React from "react";
import Gallery from "react-photo-gallery";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

function PhotoGallery(props) {
  const imageRenderer = ({ left, top, key, photo, margin, direction }) => {
    const imgStyle = { margin, display: "block" };
    if (direction === "column") {
      imgStyle.position = "absolute";
      imgStyle.left = left;
      imgStyle.top = top;
    }
    return (
      <PhotoView key={key} src={photo.src}>
        <img {...photo} style={imgStyle} />
      </PhotoView>
    );
  };

  return (
    <PhotoProvider>
      <Gallery photos={props.photos} margin={5} renderImage={imageRenderer} />
    </PhotoProvider>
  );
}
export default PhotoGallery;
