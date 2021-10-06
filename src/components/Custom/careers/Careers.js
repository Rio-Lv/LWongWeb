import React, { useState, useEffect } from "react";
import styled from "styled-components";
import JobBlock from "./JobBlock";
import FadeIn from "react-fade-in/lib/FadeIn";

function Careers() {
  const [blur, setBlur] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setBlur(true);
    }, 800);
  }, []);
  return (
    <div>
      <FadeIn>
        <Box
          style={{
            position: "absolute",
            filter: blur ? "blur(2px)  brightness(.8)" : "blur(0px) ",
            backgroundImage: `url(${"https://www.visitpreston.com/assets/images/~/9412/Overall-Aerial-Hand-Sketch-web.jpg"})`,
          }}
        ></Box>
        <Title>Availabe Positions</Title>
        <Column>
          <FadeIn delay={400}>
            <JobBlock
              title={"Bio Sewage Treatment System Designer"}
              requirements={"2 weeks swimming experience"}
            />
            <JobBlock
              title={"House Plant"}
              requirements={"182+ years at a rainforest"}
            />
            <JobBlock
              title={"Library Cat"}
              requirements={
                "Harvard degree in criminal phsycology and marine biology"
              }
            />
            <JobBlock title={"Library Dog"} requirements={"Degree in fun"} />
          </FadeIn>
        </Column>
      </FadeIn>
    </div>
  );
}

export default Careers;

const Title = styled.div`
  position: relative;
  height: 80px;
  width: 100%;
  line-height: 80px;
  font-size: 30px;
  color: #f2f2f2;
  text-align: center;
  font-weight: 600;
  background-color: #00000078;
  z-index: 3;
`;
const Box = styled.div`
  width: 100%;
  height: 100%;
  /* border: 3px solid red; */
  background-position: center;
  background-size: cover;
  transition: 1s ease;
`;
const Column = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
`;
