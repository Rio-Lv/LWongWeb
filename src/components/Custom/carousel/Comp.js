import React, { useState, useEffect } from "react";
import styled from "styled-components";
import FadeIn from "react-fade-in";

const width = window.innerWidth;
const height = window.innerHeight;
function Comp(props) {
  const [loaded, setLoaded] = useState();
  const [zoom, setZoom] = useState(false); // percent

  const [h, setH] = useState(window.innerHeight);
  const [w, setW] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setH(window.innerHeight);
      setW(window.innerWidth);
    });
  });

  useEffect(() => {
    const timer = 8000;
    var boo = true;
    setZoom(boo);
    setInterval(() => {
      boo = !boo;
      setZoom(boo);
    }, timer);
  }, []);

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
            style={{
              width: `${w}px`,
              height: `${h}px`,
              backgroundImage: `url(${props.url})`,
              backgroundSize: zoom ? "130%" : "110%",
              backgroundRepeat: "no-repeat",
            }}
          />
          <div
            style={{
              position: "fixed",

              width: `${w - 0}px`,
              height: `${h - 0}px`,

              // border: "3px solid red",
              transform: "translate(-50%,-50%)",
            }}
          >
            <BigImageInfoBox style={{ width: `${w}px` }}>
              <BigImageTitle style={{ width: `${w}px` }}>
                {props.text}
              </BigImageTitle>
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

  background-color: "black";
  background-position: center;
  transition: 9s ease;
`;
const BigImageTitle = styled.div`
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
