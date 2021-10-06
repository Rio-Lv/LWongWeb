import React, { useState } from "react";
import FadeIn from "react-fade-in/lib/FadeIn";
import Person from "./Person";
import styled from "styled-components";
const cardW = 300;
const cardH = 300; // px
export default function Card(props) {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div>
      <ProfileCard
        onMouseEnter={() => {
          // setShowInfo(true);
        }}
        onMouseLeave={() => {
          // setShowInfo(false);
        }}
      >
        <Circle>
          <CircleImage style={{ backgroundImage: `url(${props.profile.url})` }}>
            <InfoBox style={{ bottom: showInfo ? "0%" : "-100%" }}></InfoBox>
          </CircleImage>
        </Circle>
        <CardText>{props.profile.name}</CardText>
      </ProfileCard>
    </div>
  );
}
const Circle = styled.div`
  width: ${cardW}px;
  height: ${cardH}px;
  border-radius: 3px;
  border: 1px solid #a6a6a6;

  background-position: center;
  overflow: hidden;
  position: relative;
`;
const CircleImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  transition: 4s;
  transform: scale(1);
  &:hover {
    transform: scale(1.1);
  }
`;
const ProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  margin: 25px;
  cursor: pointer;
`;
const CardText = styled.div`
  margin-top: 10px;
  text-align: center;
  width: 100%;
  font-size: 18px;
  color: #595959;

  /* border: 3px solid red; */
`;
const InfoBox = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0;
  background-color: #ffffff;
  transition: 0.3s;
  text-align: center;
`;
