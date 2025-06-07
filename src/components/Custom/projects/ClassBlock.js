/* ClassBlock.jsx
 * -------------------------------------------------------------
 * Fully-self-contained component with:
 *  • Desktop (≥ 769 px)   → 400 px tall, 30 vw info / 70 vw image
 *  • Mobile  (≤ 768 px)   → 200 px tall, 40 vw info / 60 vw image
 *  • Text wraps automatically on mobile
 *  • Click handler restores previous behaviour and is null-safe
 *  • Optional-chaining protects against missing photo arrays
 * ------------------------------------------------------------- */

import styled from "styled-components";
import React, { useState, useEffect } from "react";
import FadeIn from "react-fade-in";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

/* ---------------- constants ---------------- */
const DESKTOP_BLOCK_H = 400;  // px
const MOBILE_BLOCK_H  = 150;  // px

const DESKTOP_INFO_W  = 30;   // vw
const MOBILE_INFO_W   = 40;   // vw  → image gets 60 vw

const shade  = "#ffffff";
const shade2 = "white";
const shade3 = "#595959";
const shade4 = shade2;

const timer  = 3;
const timer2 = 1;
const zoom   = 1.1;
const shiftVal = 10;

const BP = 768;               // mobile breakpoint (px)
/* ------------------------------------------- */

function ClassBlock(props) {
  /* ----------- viewport detection ----------- */
  const [isMobile, setIsMobile] = useState(window.innerWidth <= BP);
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= BP);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  /* derived sizes */
  const blockH = isMobile ? MOBILE_BLOCK_H : DESKTOP_BLOCK_H;
  const infoW  = isMobile ? MOBILE_INFO_W  : DESKTOP_INFO_W;
  const imageW = 100 - infoW;          // 70 or 60

  /* ----------- existing logic --------------- */
  const [even, setEven] = useState(true);
  const [infoHover, setInfoHover] = useState(false);
  const [shift, setShift] = useState(0);

  useEffect(() => window.scroll(0, 0), []);
  useEffect(
    () => setEven(props.index % 2 === 0 || props.index === 0),
    [props.index]
  );

  const makeProjectList = () =>
    props.Class.projects?.map(p => (
      <ListItem key={uuidv4()}>{p.name}</ListItem>
    )) ?? [];

  /* nothing to render if no projects */
  if (!props.Class.projects?.length) return null;

  /* ----------- render ----------------------- */
  return (
    <Link to={`/projects/${props.Class.class}`}>
      <Block
        height={blockH}
        onClick={() => {
          /* set class for parent */
          props.setClassInfo?.(props.Class);

          /* scroll chosen container to top, if present */
          if (props.dispId) {
            const el = document.getElementById(props.dispId);
            if (el) el.scrollTop = 0;
          }
        }}
      >
        {/* The info / image order flips depending on “even” */}
        {!even && (
          <Info
            infoWidth={infoW + shift}
            onMouseEnter={() => {
              setInfoHover(true);
              setShift(shiftVal);
            }}
            onMouseLeave={() => {
              setInfoHover(false);
              setShift(0);
            }}
          >
            <Text $mobile={isMobile} style={{ opacity: infoHover ? 0 : 1 }}>
              {props.Class.class}
            </Text>
            {infoHover && (
              <ListBox
                style={{
                  height: `${(blockH * makeProjectList().length) / 10}px`,
                }}
              >
                <FadeIn delay={150}>{makeProjectList()}</FadeIn>
              </ListBox>
            )}
          </Info>
        )}

        <ImageContainer
          height={blockH}
          imgWidth={imageW}
          style={
            !even
              ? { borderLeft: `3px solid ${shade2}` }
              : { borderRight: `3px solid ${shade2}` }
          }
        >
          <Image
            style={{
              backgroundImage: `url(${
                props.Class.projects?.[0]?.photos?.[0]?.src || ""
              })`,
            }}
          />
        </ImageContainer>

        {even && (
          <Info
            infoWidth={infoW + shift}
            onMouseEnter={() => {
              setInfoHover(true);
              setShift(shiftVal);
            }}
            onMouseLeave={() => {
              setInfoHover(false);
              setShift(0);
            }}
          >
            <Text $mobile={isMobile} style={{ opacity: infoHover ? 0 : 1 }}>
              {props.Class.class}
            </Text>
            {infoHover && (
              <ListBox
                style={{
                  height: `${(blockH * makeProjectList().length) / 10}px`,
                }}
              >
                <FadeIn delay={150}>{makeProjectList()}</FadeIn>
              </ListBox>
            )}
          </Info>
        )}
      </Block>
    </Link>
  );
}

export default ClassBlock;

/* --------------- styled components --------------- */
const Info = styled.div`
  position: relative;
  height: 100%;
  background-color: ${shade};
  text-align: center;
  transition: ${timer2}s;
  width: ${({ infoWidth }) => infoWidth}vw;
`;

const Text = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: 600;
  font-size: 20px;
  line-height: 3vh;
  letter-spacing: 2px;
  color: ${shade3};
  transition: 0.5s;
  white-space: ${({ $mobile }) => ($mobile ? "normal" : "nowrap")};
`;

const ListBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: ${timer2}s;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const ListItem = styled.div`
  font-size: 18px;
  line-height: 4vh;
  font-weight: 400;
  color: ${shade3};
  white-space: normal;
`;

const ImageContainer = styled.div`
  height: ${({ height }) => height}px;
  width:  ${({ imgWidth }) => imgWidth}vw;
  overflow: hidden;
  box-sizing: border-box;
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
  height: ${({ height }) => height}px;
  display: flex;
  border-bottom: 3px solid ${shade4};
  cursor: pointer;
`;
