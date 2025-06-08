import React, { useEffect } from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";
import FadeIn from "react-fade-in";
function About() {
  useEffect(() => {
    // document.getElementById("vid").play();
  }, []);
  return (
    <div>
      {/* <video
        id="vid"
        width="1620"
        height="640"
        controls={0}
        autoplay
        muted
        loop
      >
        <source
          src="https://firebasestorage.googleapis.com/v0/b/lwongconsulting-37781.appspot.com/o/videos%2Flee%20set%20bush%20flash%20kill.webm?alt=media&autoplay=1&token=9673149c-ed51-48b3-a71e-676d98da91f7"
          type="video/webm"
        />
      </video> */}
      <FadeIn delay={150}>
        <Title>About Us</Title>

        <MainImage
          style={{
            backgroundImage: `url(${"/images/about1.jpg"})`,
          }}
        />
        <InfoTitle>ESTABLISHMENT</InfoTitle>
        <div style={{ position: "relative", width: "100%", height: "180px" }}>
          <Info>
            LWong Consulting is a registered Mozambican consulting company
            established in 1994 and has since then carried out extensive range
            of projects all over Mozambique. Our core staff comprise of highly
            competent professionals, with experiences ranging from 5 to 30 years
            and a profound knowledge of Mozambican working conditions. The
            multi-lingual capability of the company staff has allowed for highly
            effective coordination and communication with a wide array of
            consulting and construction companies.
          </Info>
        </div>
        <div style={{ position: "relative", width: "100%", height: "420px" }}>
          <SecondImage
            style={{
              backgroundImage: `url(${"/images/about2.jpg"})`,
            }}
          />
        </div>
        <InfoTitle>VISION</InfoTitle>
        <div style={{ position: "relative", width: "100%", height: "220px" }}>
          <Info>
            Our vision is to be one of the leading companies in sustainable and
            green projects, aiming to bring about the development and well being
            of the local population. We aim to accomplish this through constant
            investigations and collaborations with leading consulting companies
            around the globe to ensure maximum efficiency and quality of
            services. Our mission is to offer our best professional knowledge
            and expertise in order to satisfy our clients’ needs whilst
            contributing towards the development of Mozambique.
          </Info>
        </div>

        <div
          style={{ position: "relative", width: "100%", height: "220px" }}
        ></div>
      </FadeIn>
    </div>
  );
}

export default About;
const Title = styled.div`
  height: 80px;
  width: 100%;
  line-height: 80px;
  font-size: 24px;
  color: #f2f2f2;
  text-align: center;
  font-weight: 600;
  background-color: #000000;
`;

const MainImage = styled.div`
  width: 100%;
  height: 400px;
  background-color: grey;
  background-size: cover;
  background-position: center;
`;
const SecondImage = styled.div`
  width: 60%;
  height: 400px;
  background-color: grey;
  background-size: cover;
  background-position: center;
  left: 50%;
  transform: translate(-50%, 0);
  position: absolute;
  @media (max-width: 768px) {
    width: 100%;
    left: 0;
    transform: none;
    position: relative;
  }
`;
const InfoTitle = styled.div`
  height: 80px;
  width: 100%;
  line-height: 80px;
  font-size: 24px;
  color: #595959;
  text-align: center;
  font-weight: 600;
  background-color: #ffffff;
`;
const Info = styled.div`
  left: 50%;

  position: absolute;
  height: 80px;
  width: 60%;
  line-height: 30px;
  font-size: 20px;
  color: #595959;
  text-align: center;
  font-weight: 400;
  background-color: #ffffff;
  transform: translate(-50%, 0);
  @media (max-width: 768px) {
    position: relative;
    left: 0;
    transform: none;
    width: 90%;
    height: auto;
    margin: auto;
    text-align: left;
    padding: 0 20px;
  }
`;
