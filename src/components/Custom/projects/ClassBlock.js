import styled from "styled-components";
import React, { useState, useEffect } from "react";
import FadeIn from "react-fade-in";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const timer = 3;
const timer2 = 1;
const zoom = 1.1;
const shade = "#ffffff"; // base background
const shade3 = "#595959"; // text
const shade2 = "white"; // line between left right

const shade4 = shade2; // line between top bot
const blockHeight = 400; // px height
const infoWidth = 20; //vw use these to divi it up
const imageWidth = 80; // vw
const shiftVal = 10;

function ClassBlock(props) {
  const [even, setEven] = useState(true);
  const [infoHover, setInfoHover] = useState(false);

  const [shift, setShift] = useState(0);
  //scroll to top
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  useEffect(() => {
    if (props.index % 2 === 0 || props.index === 0) {
      setEven(true);
    } else {
      setEven(false);
    }
  }, [props.index]);

  const makeProjectList = () => {
    const list = [];

    if (props.Class.projects) {
      props.Class.projects.forEach((project) => {
        // console.log(project.name);
        list.push(<ListItem key={uuidv4()}>{project.name}</ListItem>);
      });
    }
    return list;
  };
  return (
    <div>
      {props.Class.projects.length ? (
        <div>
          {!even ? (
            // images on the right
            <Link to={`/projects/${props.Class.class}`}>
              <Block
                onClick={() => {
                  props.setClassInfo(props.Class);
                  // props.disp.scrollTop = 0;
                  document.getElementById(props.dispId).scrollTop = 0;
                }}
              >
                <Info
                  style={{ width: `${infoWidth + shift}vw` }}
                  onMouseEnter={() => {
                    setInfoHover(true);
                    setShift(shiftVal);
                  }}
                  onMouseLeave={() => {
                    setInfoHover(false);
                    setShift(0);
                  }}
                >
                  <Text style={{ opacity: infoHover ? 0 : 1 }}>
                    {props.Class.class}
                  </Text>
                  {infoHover ? (
                    <ListBox>
                      <FadeIn delay={150}>{makeProjectList()}</FadeIn>
                    </ListBox>
                  ) : null}
                </Info>
                <ImageContainer style={{ borderLeft: `3px solid ${shade2}` }}>
                  <Image
                    style={{
                      backgroundImage: `url(${props.Class.projects[0].photos[0].src})`,
                    }}
                  ></Image>
                </ImageContainer>
              </Block>
            </Link>
          ) : (
            // images on the left
            <Link to={`/projects/${props.Class.class}`}>
              <Block
                onClick={() => {
                  // props.disp.scrollTop = 0;
                  props.setClassInfo(props.Class);
                }}
              >
                <ImageContainer style={{ borderRight: `3px solid ${shade2}` }}>
                  <Image
                    style={{
                      backgroundImage: `url(${props.Class.projects[0].photos[0].src})`,
                    }}
                  ></Image>
                </ImageContainer>

                <Info
                  style={{ width: `${infoWidth + shift}vw` }}
                  onMouseEnter={() => {
                    setInfoHover(true);
                    setShift(shiftVal);
                  }}
                  onMouseLeave={() => {
                    setInfoHover(false);
                    setShift(0);
                  }}
                >
                  <Text style={{ opacity: infoHover ? 0 : 1 }}>
                    {props.Class.class}
                  </Text>
                  {infoHover ? (
                    <ListBox>
                      <FadeIn delay={150}>{makeProjectList()}</FadeIn>
                    </ListBox>
                  ) : null}
                </Info>
              </Block>
            </Link>
          )}
        </div>
      ) : null}
    </div>
  );
}

// change to animate info up and fade in the rest simultaneously

export default ClassBlock;

const Info = styled.div`
  position: relative;
  display: block;
  height: 100%;

  /* border: 1px solid black; */
  background-color: ${shade};
  text-align: center;
  transition: ${timer2}s;

  margin: auto;
`;
const Text = styled.div`
  line-height: 3vh;
  font-weight: 600;
  font-size: 20px;
  position: absolute;
  letter-spacing: 2px;

  color: ${shade3};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: ${0.5}s;
  white-space: nowrap;
`;
const ListBox = styled.div`
  ::-webkit-scrollbar {
    display: none;
  }
  transition: 0.2s;

  position: absolute;

  height: ${blockHeight / 2}px;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: ${timer2}s;
  overflow: scroll;
`;
const ListItem = styled.div`
  font-size: 18px;
  line-height: 4vh;
  font-weight: 400;
  color: ${shade3};
  white-space: nowrap;
`;
const ImageContainer = styled.div`
  height: ${blockHeight}px;
  width: ${imageWidth}vw;

  box-sizing: border-box;
  overflow: hidden;
`;
const Image = styled.div`
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center;
  transform: scale(1);
  transition: ${timer}s ease;
  &:hover {
    transform: scale(${zoom});
  }
`;

const Block = styled.div`
  width: 100%;
  height: ${400}px;
  border: 0px solid black;
  display: flex;
  flex-direction: row;
  border-bottom: 3px solid ${shade4};
  cursor: pointer;
`;
