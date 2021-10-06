import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { data } from "./data";

const gap = 120;

const M = 50;
const L = M - gap;
const R = M + gap;

const timer = 1000;
const delayFactor = 1.1;
const hideTimer = 300;

const button_color = "#262626";

function Carousel(props) {
  const [posA, setPosA] = useState(L);
  const [posB, setPosB] = useState(M);
  const [posC, setPosC] = useState(R);

  const [visA, setVisA] = useState(1);
  const [visB, setVisB] = useState(1);
  const [visC, setVisC] = useState(1);

  const [indexA, setIndexA] = useState(0);
  const [indexB, setIndexB] = useState(1);
  const [indexC, setIndexC] = useState(2);

  const maxIndex = data.images.length - 1;

  const [infoA, setInfoA] = useState(data.images[indexA]);
  const [infoB, setInfoB] = useState(data.images[indexB]);
  const [infoC, setInfoC] = useState(data.images[indexC]);

  const [clickable, setClickable] = useState(true);

  useEffect(() => {
    setInfoA(data.images[indexA]);
  }, [indexA]);
  useEffect(() => {
    setInfoB(data.images[indexB]);
  }, [indexB]);
  useEffect(() => {
    setInfoC(data.images[indexC]);
  }, [indexC]);

  // makes invisible during turn and moves to other side
  const hideLoop = (set, setVis, setIndex, index, name) => {
    const newIndexAfterLeft = (index) => {
      console.log(`before func ${name} = ${index}`);
      if (index + 3 > maxIndex) {
        // console.log("index === maxIndex");
        console.log(
          `after func ${name} = ${
            index + 3 - maxIndex - 1
          }    index === maxIndex`
        );
        return index + 3 - maxIndex - 1;
      } else {
        // console.log("index > maxIndex");
        console.log(`after func ${name} = ${index + 3}     index < maxIndex`);
        return index + 3;
      }
    };
    const newIndexAfterRight = (index) => {
      console.log(`before func ${name} = ${index}`);
      if (index - 3 < 0) {
        // console.log("index === maxIndex");
        console.log(
          `after func ${name} = ${maxIndex - index + 1}    index === maxIndex`
        );
        return maxIndex - (2 - index);
      } else {
        // console.log("index > maxIndex");
        console.log(`after func ${name} = ${index - 3}     index < maxIndex`);
        return index - 3;
      }
    };

    set((val) => {
      if (val < L) {
        const newIndex = newIndexAfterLeft(index);
        setVis(0);
        setIndex(newIndex);
        setTimeout(() => {
          setVis(1);
        }, timer);
        return R;
      } else if (val > R) {
        const newIndex = newIndexAfterRight(index);
        setVis(0);
        setIndex(newIndex);
        setTimeout(() => {
          setVis(1);
        }, timer);
        return L;
      } else {
        setVis(1);
        return val;
      }
    });
  };

  const left = () => {
    if (clickable) {
      console.log("running left function");
      setClickable(false);
      // shift things to the left
      const pushLeft = (set) => {
        set((val) => {
          // console.log("from push left " + val);
          return val + gap;
        });
      };
      pushLeft(setPosA);
      pushLeft(setPosB);
      pushLeft(setPosC);

      setTimeout(() => {
        hideLoop(setPosA, setVisA, setIndexA, indexA, "indexA");
        hideLoop(setPosB, setVisB, setIndexB, indexB, "indexB");
        hideLoop(setPosC, setVisC, setIndexC, indexC, "indexC");
      }, hideTimer);
      setTimeout(() => {
        setClickable(true);
      }, timer * delayFactor);
    }

    // console.log("left has been run");
  };
  const right = () => {
    if (clickable) {
      console.log("running right function");
      setClickable(false);
      // shift things to the right
      const pushRight = (set) => {
        set((val) => {
          // console.log(val);
          return val - gap;
        });
      };
      pushRight(setPosA);
      pushRight(setPosB);
      pushRight(setPosC);

      setTimeout(() => {
        hideLoop(setPosA, setVisA, setIndexA, indexA, "indexA");
        hideLoop(setPosB, setVisB, setIndexB, indexB, "indexB");
        hideLoop(setPosC, setVisC, setIndexC, indexC, "indexC");
      }, hideTimer);
      setTimeout(() => {
        setClickable(true);
      }, timer * delayFactor);
    }
    // console.log("right has been run");
  };
  return (
    <DisplayArea style={{ height: `${props.H}vh` }}>
      <Box
        style={{
          left: `${posA}vw`,
          opacity: visA,
          height: `${props.H}vh`,
          width: `${props.W}vw`,
        }}
      >
        {infoA}
      </Box>
      <Box
        style={{
          left: `${posB}vw`,
          opacity: visB,
          height: `${props.H}vh`,
          width: `${props.W}vw`,
        }}
      >
        {infoB}
      </Box>
      <Box
        style={{
          left: `${posC}vw`,
          opacity: visC,
          height: `${props.H}vh`,
          width: `${props.W}vw`,
        }}
      >
        {infoC}
      </Box>

      <RightButton
        style={{}}
        onClick={() => {
          right();
        }}
      ></RightButton>
      <LeftButton
        disabled={!clickable}
        onClick={() => {
          left();
        }}
      ></LeftButton>
    </DisplayArea>
  );
}

export default Carousel;

const DisplayArea = styled.div`
  position: fixed;
  width: 100%;
  top: 50%;
  transform: translate(0, -50%);
  /* border: 3px solid red; */
`;
const Box = styled.div`
  position: absolute;
  /* border: 1px solid blue; */
  /* overflow: hidden; */
  transform: translate(-50%, 0);
  transition: left ${timer / 1000}s;
`;
const RightButton = styled.div`
  position: absolute;
  top: 50%;
  right: 20px;

  transform: translate(0, -50%);
  overflow: hidden;
  border-left: 40px solid ${button_color};
  border-right: 0px solid transparent;
  border-top: 40px solid transparent;
  border-bottom: 40px solid transparent;

  transition: 0.3s opacity;
  cursor: pointer;
  opacity: 10%;
  &:hover {
    opacity: 100%;
  }
`;
const LeftButton = styled.div`
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translate(0, -50%);
  border-right: 40px solid ${button_color};
  border-left: 0px solid transparent;
  border-top: 40px solid transparent;
  border-bottom: 40px solid transparent;

  transition: 0.3s opacity;
  cursor: pointer;
  opacity: 10%;
  &:hover {
    opacity: 100%;
  }
`;
