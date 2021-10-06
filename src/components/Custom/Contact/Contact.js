import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ContactBlock from "./ContactBlock";
import FadeIn from "react-fade-in/lib/FadeIn";
function Contact() {
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
            filter: blur ? "blur(3px)  brightness(.8)" : "blur(0px)",
            backgroundImage: `url(${"https://i.pinimg.com/originals/ea/b8/1b/eab81b084590fc13c98d55fe4522ef34.png"})`,
          }}
        ></Box>
        <Title>Contact Us</Title>
        <Row>
          <FadeIn delay={500}>
            <ContactBlock
              title={"EMail"}
              requirements={"inquiries@lwongconsulting@gmail.com"}
            />
            <ContactBlock
              title={"Call"}
              requirements={"+258...Office Number"}
            />
          </FadeIn>
        </Row>
      </FadeIn>
    </div>
  );
}

export default Contact;

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
  transition: 0.8s ease;
`;
const Row = styled.div`
  flex-direction: row;
  display: flex;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
`;
