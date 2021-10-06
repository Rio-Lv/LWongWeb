import React, { useState } from "react";
import styled from "styled-components";
import { data } from "./data";
import Card from "./Card";
import Person from "./Person";
import FadeIn from "react-fade-in";

const columnH = 80; //vh
const itemsPerRow = 4;

function People() {
  const [person, setPerson] = useState(null);
  const createProfiles = (profiles, rowNum) => {
    const col = [];
    var row = [];
    for (let i = 0; i < profiles.length; i++) {
      const card = (
        <div
          onClick={() => {
            console.log(profiles[i]);
            setPerson(profiles[i]);
          }}
        >
          <FadeIn delay={200 + i * 300}>
            <Card profile={profiles[i]} />
          </FadeIn>
        </div>
      );
      if ((i + 1) % rowNum === 0 || i === profiles.length - 1) {
        row.push(card);
        col.push(<Row>{row}</Row>);
        row = [];
      } else {
        row.push(card);
      }
    }
    return (
      <CenterColumn>
        <FadeIn delay={300}>{col}</FadeIn>
      </CenterColumn>
    );
  };

  return (
    <div>
      {person !== null ? (
        <FadeIn>
          <ProfileArea>
            <Person
              person={person}
              close={() => {
                setPerson(null);
              }}
            ></Person>
          </ProfileArea>
        </FadeIn>
      ) : (
        <div>
          <FadeIn>
            <TitleBox>
              <Title>Our Team</Title>
            </TitleBox>
          </FadeIn>
          <FadeIn>{createProfiles(data.people, itemsPerRow)}</FadeIn>
        </div>
      )}
    </div>
  );
}

export default People;

const ProfileArea = styled.div`
  width: 100%;
  height: ${columnH}vh;
`;

const CenterColumn = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  margin: auto;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const TitleBox = styled.div`
  position: relative;
  height: 80px;
  width: 100%;
  background-color: #f2f2f2;
`;
const Title = styled.div`
  position: relative;
  height: 80px;
  width: 100%;
  line-height: 80px;
  font-size: 30px;
  color: #595959;
  text-align: center;
  font-weight: 600;
  background-color: #f2f2f2;
  z-index: 3;
  border-bottom: 3px solid white;
  cursor: default;
  transition: 0.4s ease;
`;
