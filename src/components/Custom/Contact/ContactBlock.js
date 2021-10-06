import React, { useState } from "react";
import styled from "styled-components";
import FadeIn from "react-fade-in/lib/FadeIn";

function ContactBlock(props) {
  const [hover, setHover] = useState(false);
  return (
    <FadeIn delay={300}>
      <Block
        onMouseEnter={() => {
          setHover(false);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
      >
        {!hover ? (
          <div>
            <FadeIn>
              <ContactTitle>{props.title}</ContactTitle>
              <ContactRequirements>{props.requirements}</ContactRequirements>
            </FadeIn>
          </div>
        ) : (
          <FadeIn>
            <ContactInfo>
              Send us your CV at : careers@lwongconsulting.com
            </ContactInfo>
            <ContactInfo2>Using Title : Apply {props.title}</ContactInfo2>
          </FadeIn>
        )}
      </Block>
    </FadeIn>
  );
}

export default ContactBlock;

const Block = styled.div`
  margin: 20px;
  width: 600px;
  height: 200px;
  font-weight: 600;
  line-height: 30px;
  text-align: center;
  font-size: 20px;
  border: 1px solid #f2f2f2;
  border-radius: 5px;
  color: #595959;
  background-color: white;
  cursor: pointer;
  &:hover {
    border: 1px solid white;
  }
`;

const ContactTitle = styled.div`
  margin-top: 70px;
  font-weight: 600;
  font-size: 20px;
  cursor: pointer;
  color: #595959;
`;
const ContactRequirements = styled.div`
  font-weight: 400;
  font-size: 20px;
  cursor: default;
  color: #595959;
`;

const ContactInfo = styled.div`
  margin-top: 48px;
  font-weight: 600;
  font-size: 20px;
  cursor: pointer;
  color: #595959;
`;
const ContactInfo2 = styled.div`
  font-weight: 400;
  font-size: 20px;
  cursor: pointer;
  color: #595959;
`;
