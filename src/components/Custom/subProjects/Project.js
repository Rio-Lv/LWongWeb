import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Close from "./Close";
import NavBuffer from "./NavBuffer";
import FadeIn from "react-fade-in/lib/FadeIn";
import PhotoGallery from "./PhotoGallery";
function Project(props) {
  const [project, setProject] = useState(props.project);
  const [zoomBack, setZoomBack] = useState(1);
  useEffect(() => {
    console.log(props.project.photos[0].src);
    setProject(props.project);
  }, [props.project]);
  useEffect(() => {
    setTimeout(() => {
      setZoomBack(1.2);
    }, 500);
  }, []);
  return (
    <div>
      {/* <NavBuffer pad={80} transition={0.3}></NavBuffer> */}

      <DisplayArea>
        <FadeIn>
          <BackDrop
            style={{
              backgroundImage: `url(${project.photos[0].src})`,
              transform: `scale(${zoomBack})`,
            }}
          ></BackDrop>
        </FadeIn>

        <FadeIn>
          <BigImage
            onMouseEnter={() => {
              setZoomBack(1.2);
              console.log("Big Image");
            }}
            onMouseLeave={() => {
              setZoomBack(1);
            }}
          >
            <Close
              func={() => {
                props.func();
              }}
            />
            <BigImageInfoBox>
              <BigImageTitle>{project.details[0].title}</BigImageTitle>
              <BigImageInfo>{project.details[0].text}</BigImageInfo>
            </BigImageInfoBox>
          </BigImage>

          <RowInfo>
            <CenterText>
              <CenterTextTitle>{project.details[1].title}</CenterTextTitle>
              <div>{project.details[1].text}</div>
            </CenterText>
          </RowInfo>
          <Row>
            <ColumnImage
              style={{
                backgroundImage: `url(${project.photos[1].src})`,
                transform: `scale(${zoomBack})`,
              }}
            ></ColumnImage>
            <ColumnInfo>
              <CenterText>
                <CenterTextTitle>{project.details[2].title}</CenterTextTitle>
                <div>{project.details[2].text}</div>
              </CenterText>
            </ColumnInfo>
          </Row>
        </FadeIn>
        <GalleryAreaBack>
          <GalleryTitle>GALLERY</GalleryTitle>
          <GalleryArea>
            <GalleryAreaBox>
              <PhotoGallery photos={project.photos} />
            </GalleryAreaBox>
          </GalleryArea>
        </GalleryAreaBack>
      </DisplayArea>
    </div>
  );
}

export default Project;

const BackDrop = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #3e82be;
  background-size: cover;
  background-position: center;
  transition: 8s ease;
`;
const DisplayArea = styled.div`
  position: relative;
  width: 100%;
`;

const BigImage = styled.div`
  position: relative;
  width: 100%;
  height: ${window.innerHeight - 80}px;
`;
const BigImageTitle = styled.div`
  position: absolute;
  left: 100px;
  bottom: 100px;
  font-size: 32px;
  color: #ffffff;
  opacity: 80%;
  font-weight: 600;
  transition: 0.3s;
`;
const BigImageInfo = styled.div`
  position: absolute;
  left: 100px;
  bottom: 50px;
  font-size: 24px;
  color: #ffffff;
  opacity: 80%;
  font-weight: 400;
  transition: 0.3s;
`;

const BigImageInfoBox = styled.div`
  width: 100%;
  height: 180px;
  background-color: #0d0d0d50;
  position: absolute;
  left: 0px;
  bottom: 0px;
  &:hover ${BigImageInfo} {
    opacity: 100%;
  }
  &:hover ${BigImageTitle} {
    opacity: 100%;
  }
`;
const RowInfo = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  color: #595959;
  background-color: #ffffff;
  overflow: scroll;
`;
const CenterText = styled.div`
  position: absolute;
  text-align: center;
  font-size: 20px;
  line-height: 32px;
  width: 70%;
  left: 50%;
  top: 50%;
  font-weight: 400;

  transform: translate(-50%, -50%);
`;
const CenterTextTitle = styled.div`
  font-weight: 600;
  margin-bottom: 30px;
  font-size: 24px;
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
  overflow: hidden;
`;
const ColumnInfo = styled.div`
  position: relative;
  width: 30%;
  height: 800px;
  background-color: #f2f2f2;
  color: #595959;
  overflow: scroll;
`;
const ColumnImage = styled.div`
  position: relative;
  width: 70%;
  height: 800px;
  background-color: aliceblue;
  background-size: cover;
  background-position: center;
  transition: 8s ease;
  transform: scale(1);
  &:hover {
    transform: scale(1.2);
  }
`;
const GalleryArea = styled.div`
  position: relative;
  width: 100%;
  height: 1500px;

  transform: scale(1.244) translate(0, 140px);
`;
const GalleryAreaBox = styled.div`
  position: absolute;
  width: 80%;
  left: 50%;
  transform: translate(-50%, 0);
  background-color: #ffffff;
`;
const GalleryAreaBack = styled.div`
  width: 100%;

  position: relative;
  background-color: #ffffff;
  overflow: hidden;
  text-align: center;
`;
const GalleryTitle = styled.div`
  color: #595959;
  font-size: 24px;
  margin-top: 50px;
  margin-bottom: 30px;
  font-weight: 600;
`;
