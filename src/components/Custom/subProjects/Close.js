import React, { useState, useEffect } from "react";
import styled from "styled-components";
import FadeIn from "react-fade-in/lib/FadeIn";

// use these to adjust where the x button will be from top and right
const right = 15; // px
const top = 10; //px

function Close(props) {
  const [rotation, setRotation] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setRotation(225);
    }, 600);
  }, []);
  return (
    <FadeIn>
      <CloseButton
        onClick={() => {
          props.func();
        }}
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        +
      </CloseButton>
    </FadeIn>
  );
}

export default Close;

const CloseButton = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  right: ${right}px;
  top: ${top}px;
  font-weight: 600;
  /* background-color: #a6a6a6; */
  border-radius: 50%;
  color: #595959;
  text-align: center;
  font-size: 30px;
  line-height: 30px;
  transition: 1s;
  cursor: pointer;
`;
