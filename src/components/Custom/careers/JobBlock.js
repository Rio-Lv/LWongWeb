import React, { useState } from "react";
import styled from "styled-components";
import FadeIn from "react-fade-in/lib/FadeIn";

function JobBlock(props) {
  const [hover, setHover] = useState(false);
  return (
    <FadeIn delay={300}>
      <Block
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
      >
        {!hover ? (
          <div>
            <FadeIn>
              <JobTitle>{props.title}</JobTitle>
              <JobRequirements>{props.requirements}</JobRequirements>
            </FadeIn>
          </div>
        ) : (
          <FadeIn>
            <JobInfo>Send us your CV at : careers@lwongconsulting.com</JobInfo>
            {/* <JobInfo2>Using Title : Apply {props.title}</JobInfo2> */}
          </FadeIn>
        )}
      </Block>
    </FadeIn>
  );
}

export default JobBlock;

const Block = styled.div`
  margin: 20px;
  width: 600px;
  height: 150px;
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

const JobTitle = styled.div`
  margin-top: 48px;
  font-weight: 600;
  font-size: 20px;
  cursor: pointer;
  color: #595959;
`;
const JobRequirements = styled.div`
  font-weight: 400;
  font-size: 20px;
  cursor: default;
  color: #595959;
`;

const JobInfo = styled.div`
  margin-top: 48px;
  font-weight: 600;
  font-size: 20px;
  cursor: pointer;
  color: #595959;
`;
const JobInfo2 = styled.div`
  font-weight: 400;
  font-size: 20px;
  cursor: pointer;
  color: #595959;
`;
