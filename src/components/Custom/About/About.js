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
      <FadeIn delay={250}>
        <Title>About Us</Title>

        <MainImage
          style={{
            backgroundImage: `url(${"https://dr3h7ptpe31k5.cloudfront.net/Site/Logo/5605/HS-workspace%20hero.jpeg"})`,
          }}
        />
        <InfoTitle> Consult | Construct</InfoTitle>
        <div style={{ position: "relative", width: "100%", height: "220px" }}>
          <Info>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
            deleniti saepe aut asperiores illo mollitia corporis vitae harum non
            provident cupiditate iure dolore quos voluptatum, molestiae animi
            sapiente magni nostrum. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Dolore, nam eum? Cum, vel. Numquam laborum officia
            voluptas, praesentium libero velit ducimus magni iusto tenetur.
            Corrupti aperiam modi ex deleniti laboriosam? Lorem, ipsum dolor sit
            amet consectetur adipisicing elit. Debitis, enim officia. Soluta
            consequatur velit praesentium? Explicabo velit obcaecati aliquid
            placeat sit mollitia nisi quam rem reiciendis ipsum dignissimos,
            error libero.
          </Info>
        </div>
        <div style={{ position: "relative", width: "100%", height: "520px" }}>
          <SecondImage
            style={{
              backgroundImage: `url(${"https://dr3h7ptpe31k5.cloudfront.net/Site/Logo/5605/HS-workspace%20hero.jpeg"})`,
            }}
          />
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
  background-color: #00000078;
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
`;
