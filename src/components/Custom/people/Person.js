import React, { useState, useEffect } from "react";
import styled from "styled-components";
import FadeIn from "react-fade-in/lib/FadeIn";
import Close from "./Close";

function Person(props) {
  const [rotation, setRotation] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setRotation(225);
    }, 600);
  }, []);
  return (
    <div>
      {props.person !== null ? (
        <Back>
          <BigImage
            style={{ backgroundImage: `url(${props.person.urlBig})` }}
          ></BigImage>
          <TextArea>
            <Title>{props.person.name}</Title>
            <Text>{props.person.info}</Text>
          </TextArea>
          <Close
            func={() => {
              props.close();
            }}
          />
        </Back>
      ) : null}
    </div>
  );
}

export default Person;
const Back = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;

  /* border: 3px solid red; */
  overflow: hidden;
`;

const BigImage = styled.div`
  position: absolute;
  width: 66%;
  height: ${window.innerHeight}px;
  left: 0;
  bottom: 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #ffffff;
  transform: scale(1);
  transition: 8s ease;
  :hover {
    transform: scale(1.1);
  }
`;
const TextArea = styled.div`
  position: absolute;

  width: 34%;
  height: 100%;
  right: 0;
  background-color: #f2f2f2;
  overflow: scroll;
  /* text-align: center; */
`;
const Text = styled.div`
  margin: 100px;
  margin-top: 0px;
  font-size: 20px;
  line-height: 40px;
  color: #595959;
  cursor: default;
`;
const Title = styled.div`
  /* font-weight: 600; */
  margin: 100px;
  margin-top: 50px;
  margin-bottom: 30px;
  font-size: 24px;
  color: #595959;
`;
