import styled from "styled-components";
import React, { useState, useEffect } from "react";
import FadeIn from "react-fade-in";
import { Route } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
const timer = 3; // image zoom
const timer2 = 1;
const zoom = 1.1;
const shade = "#F2F2F2"; // base background
const shade3 = "#595959"; // text
const shade2 = "white"; // line between left right

const blockHeight = 400; // px height

function ProjectBlockMini(props) {
  const [project, setProject] = useState(props.project);
  const [even, setEven] = useState(true);
  const [infoHover, setInfoHover] = useState(false);

  // scroll to top
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  useEffect(() => {
    if (props.index % 2 === 0) {
      setEven(true);
    } else {
      setEven(false);
    }
  }, []);
  useEffect(() => {
    setProject(props.project);
  }, [props.project]);

  const makeDivList = (list) => {
    const array = [];
    list.forEach((item) => {
      array.push(<ListItem key={uuidv4()}>{item}</ListItem>);
    });
    return array;
  };

  return (
    <div
      onClick={() => {
        props.func(project);
        console.log("scrolling from project blocks mini");
        document.getElementById(props.dispId).scrollTop = 0;
      }}
      onMouseEnter={() => {
        setInfoHover(true);
      }}
      onMouseLeave={() => {
        setInfoHover(false);
      }}
    >
      {!even ? (
        // images on the right
        <Block>
          <Info style={{ width: infoHover ? `30%` : `50%` }}>
            <Text style={{ opacity: infoHover ? 0 : 1 }}>{project.name}</Text>
            {infoHover ? (
              <BriefBox>
                <FadeIn delay={150}>{makeDivList(project.listInfo)}</FadeIn>
              </BriefBox>
            ) : null}
          </Info>
          <ImageContainer
            style={{
              borderLeft: `0px solid ${shade2}`,
              width: infoHover ? `70%` : `50%`,
            }}
          >
            <Image
              style={{
                backgroundImage: `url(${project.photos[0].src})`,
              }}
            ></Image>
          </ImageContainer>
        </Block>
      ) : (
        // images on the left
        <Block>
          <ImageContainer
            style={{
              borderRight: `0px solid ${shade2}`,
              width: infoHover ? `70%` : `50%`,
            }}
          >
            <Image
              style={{
                backgroundImage: `url(${project.photos[0].src})`,
              }}
            ></Image>
          </ImageContainer>

          <Info style={{ width: infoHover ? `30%` : `50%` }}>
            <Text
              style={{
                opacity: infoHover ? 0 : 1,
                backgroundColor: infoHover ? "white" : `white`,
              }}
            >
              {project.name}
            </Text>
            {infoHover ? (
              <BriefBox>
                <FadeIn delay={150}>{makeDivList(project.listInfo)}</FadeIn>
              </BriefBox>
            ) : null}
          </Info>
        </Block>
      )}
    </div>
  );
}

// change to animate info up and fade in the rest simultaneously

export default ProjectBlockMini;

const Text = styled.div`
  line-height: 3vh;
  font-weight: 600;
  font-size: 20px;
  position: absolute;
  color: ${shade3};
  top: 50%;
  white-space: nowrap;
  word-spacing: 3px;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: ${0.5}s;
`;
const BriefBox = styled.div`
  transition: 0.2s;

  position: absolute;

  height: ${blockHeight / 3}px;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: ${timer2}s;
  overflow: scroll;
  font-size: 20px;
`;

const ImageContainer = styled.div`
  height: ${blockHeight}px;

  overflow: hidden;
  transition-delay: 1s;
  transition: ${timer2}s;
`;
const Image = styled.div`
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center;
  transform: scale(1);
  transition: ${timer}s;
`;

const Block = styled.div`
  width: 100%;
  height: ${400}px;

  display: flex;
  flex-direction: row;
  border-bottom: 5px solid #f2f2f2;
  cursor: pointer;
  &:hover ${Image} {
    transform: scale(${zoom});
  }
`;
const Info = styled.div`
  position: relative;
  display: block;
  height: 100%;

  /* border: 1px solid black; */
  background-color: white;
  text-align: center;
  transition: ${timer2}s;
`;

const ListItem = styled.div`
  white-space: nowrap;
  font-size: 20px;
  line-height: 4vh;
  font-weight: 400;
  color: #595959;
`;
