import React, { useState, useRef } from "react";
import styled from "styled-components";
import FadeIn from "react-fade-in";
import { Route, Redirect } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import ClassBlock from "./ClassBlock";
import ProjectsMini from "../subProjects/ProjectsMini";

/*
 * ------------------------------------------------------------------
 *  • keeps the title perfectly centred on every device
 *  • stops any accidental horizontal scroll that was nudging it right
 *  • locks the scroll-container id with useRef so it never changes
 * ------------------------------------------------------------------
 */

function Classes({ data, navbar }) {
  const [classInfo, setClassInfo] = useState(null);

  /* stable id for the scroll container (persists across re-renders) */
  const dispId = useRef(uuidv4()).current;

  const makeBlocks = (classes) =>
    classes.map((c, i) => (
      <ClassBlock
        key={uuidv4()}
        index={i}
        Class={c}
        navbar={navbar}
        dispId={dispId}
        setClassInfo={setClassInfo}
      />
    ));

  /* ----------------------- render ----------------------- */
  if (!data) return null;

  return (
    <Wrapper>
      <DisplayArea id={dispId}>
        {/* ------------- list view ------------- */}
        <Route exact path="/projects">
          <FadeIn>
            <Title>Project&nbsp;Types</Title>
          </FadeIn>

          <FadeIn delay={250}>{makeBlocks(data.classes)}</FadeIn>
        </Route>

        {/* ------------- redirect fallback ------------- */}
        {classInfo === null && <Redirect to="/projects" />}

        {/* ------------- mini project view ------------- */}
        {classInfo && (
          <Route path={`/projects/${classInfo.class}`}>
            <ProjectsMini
              routePath={`/projects/${classInfo.class}`}
              navbar={navbar}
              className={classInfo.class}
              dispId={dispId}
              Class={classInfo}
              close={() => setClassInfo(null)}
            />
          </Route>
        )}
      </DisplayArea>
    </Wrapper>
  );
}

export default Classes;

const isMobile = window.innerWidth < 768;

/* ---------------------- styled ---------------------- */

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const DisplayArea = styled.div`
  /* position: fixed; */
  width: 100%;
  height: 100%;

  /* vertical scrolling only — prevents the “title drift” on mobile */
  overflow-y: scroll;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;

  ::-webkit-scrollbar {
    display: none;
  }
`;

/* flex-box keeps the text centred no matter what */
const Title = styled.div`
  height: ${isMobile ? "50px" : "80px"};
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: ${isMobile ? "20px" : "40px"};
  font-weight: 600;
  color: #595959;
  font-size: 24px;

  background-color: #f2f2f2;
  border-bottom: 3px solid #ffffff;
  cursor: default;
  z-index: 3;

  transition: 0.4s ease;
`;
