import React, { useState, useEffect } from "react";
import styled from "styled-components";
import FadeIn from "react-fade-in";

// helper to get current window dimensions
const getWindowSize = () => ({
  width: window.innerWidth,
  height: window.innerHeight,
});
function Comp(props) {
  const [loaded, setLoaded] = useState();
  const [zoom, setZoom] = useState(false); // percent
  const [windowSize, setWindowSize] = useState(getWindowSize());

  // update window dimensions on resize so mobile orientation changes are handled
  useEffect(() => {
    const handleResize = () => setWindowSize(getWindowSize());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const timer = 8000;
    var boo = true;
    setZoom(boo);
    setInterval(() => {
      boo = !boo;
      setZoom(boo);
    }, timer);
  }, []);

  const isPortrait = windowSize.height > windowSize.width;
  const bgSize = isPortrait
    ? zoom
      ? "auto 130%"
      : "auto 110%"
    : zoom
    ? "130%"
    : "110%";

  return (
    <div
      onMouseEnter={() => {
        setZoom(120);
      }}
      onMouseLeave={() => {
        setZoom(110);
      }}
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
      }}
    >
      <div>
        <FadeIn>
          <Image
            w={windowSize.width}
            h={windowSize.height}
            style={{
              backgroundImage: `url(${props.url})`,
              backgroundSize: bgSize,
              backgroundRepeat: "no-repeat",
            }}
          />
          <div
            style={{
              position: "fixed",

              width: `${windowSize.width}px`,
              height: `${windowSize.height}px`,

              // border: "3px solid red",
              transform: "translate(-50%,-50%)",
            }}
          >
            <BigImageInfoBox>
              <BigImageTitle w={windowSize.width}>{props.text}</BigImageTitle>
              {/* <BigImageInfo>click to view more projects</BigImageInfo> */}
            </BigImageInfoBox>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}

export default Comp;
const Div = styled.div``;

const Image = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* border: 3px solid red; */
  width: ${(props) => props.w}px;
  height: ${(props) => props.h}px;

  background-color: "black";
  background-position: center;
  transition: 9s ease;
`;
const BigImageTitle = styled.div`
  width: ${(props) => props.w}px;
  text-align: center;
  position: absolute;
  /* left: 100px; */
  bottom: 65px;
  font-size: 40px;
  color: #ffffff;
  opacity: 80%;
  font-weight: 600;
  transition: 0.3s;
`;
const BigImageInfo = styled.div`
  width: ${(props) => props.w}px;
  text-align: center;
  position: absolute;
  /* left: 100px; */
  bottom: 50px;
  font-size: 24px;
  color: #ffffff;
  opacity: 80%;
  font-weight: 400;
  transition: 0.3s;
`;

const BigImageInfoBox = styled.div`
  cursor: pointer;
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
