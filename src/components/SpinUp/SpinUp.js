import React, { useEffect, useState } from "react";
import center from "./center.png";
import circle1 from "./circle1.png";
import circle2 from "./circle2.png";
import circle3 from "./circle3.png";
import FadeIn from "react-fade-in/lib/FadeIn";
import styled from "styled-components";

function SpinUp() {
  const [r1, setR1] = useState(420);
  const [r2, setR2] = useState(240);
  const [r3, setR3] = useState(720);

  const [darken, setDarken] = useState(false);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setOpacity(100);
      setR1(0);
      setR2(0);
      setR3(0);
      setDarken(true);
      setTimeout(() => {
        setOpacity(0);
      }, 4000);
    }, 1000);
  }, []);

  const filter = darken
    ? `drop-shadow(0px 0px 10px #0000009f)`
    : `drop-shadow(0px 0px 10px #ffffff0)`;

  return (
    <div style={{ pointerEvents: "none" }}>
      <Box
        style={{
          backgroundImage: `url(${center})`,
          transform: `translate(-50%, -50%)`,
          opacity: opacity,
          filter: filter,
        }}
      ></Box>
      <Box
        style={{
          backgroundImage: `url(${circle1})`,
          transform: `translate(-50%, -50%) rotate(${r1}deg)`,
          opacity: opacity,
          filter: filter,
        }}
      ></Box>
      <Box
        style={{
          backgroundImage: `url(${circle2})`,
          transform: `translate(-50%, -50%) rotate(${r2}deg)`,
          opacity: opacity,
          filter: filter,
        }}
      ></Box>
      <Box
        style={{
          backgroundImage: `url(${circle3})`,
          transform: `translate(-50%, -50%) rotate(${r3}deg)`,
          opacity: opacity,
          filter: filter,
        }}
      ></Box>
    </div>
  );
}

export default SpinUp;

const Box = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;

  width: 600px;
  height: 600px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  /* border: 3px solid red; */
  transition: transform 3s ease, filter 3s, opacity 1s;

  @media (max-width: 768px) {
    width: calc(100% - 32px);
    height: calc(100% - 32px);
  }
`;
