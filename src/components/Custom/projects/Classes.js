import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { data } from "./data";
import FadeIn from "react-fade-in/lib/FadeIn";
import ClassBlock from "./ClassBlock";
import NavBuffer from "./NavBuffer";
import ProjectsMini from "../subProjects/ProjectsMini";
import { Redirect, Route } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

function Classes(props) {
  const [classInfo, setClassInfo] = useState(null);

  const id = uuidv4();
  const createProjectBlocks = (classes) => {
    // console.log(classes);
    const projectList = [];
    for (var i = 0; i < classes.length; i++) {
      //console.log(classes[i]);
      projectList.push(
        <ClassBlock
          dispId={id}
          key={uuidv4()}
          index={i}
          Class={classes[i]}
          setClassInfo={setClassInfo}
        />
      );
    }
    return projectList;
  };
  return (
    <div>
      {props.data ? (
        <DisplayArea id={id}>
          <Route exact path={`/projects`}>
            <FadeIn>
              <Title>Project Types</Title>
            </FadeIn>
            {/* <NavBuffer pad={80} transition={0.3}></NavBuffer> */}
            {/* <Title>Project Classes</Title> */}
            <FadeIn delay={250}>
              {createProjectBlocks(props.data.classes)}
            </FadeIn>
          </Route>
          {classInfo === null ? <Redirect to={"/projects"} /> : null}
          {classInfo != null ? (
            <Route path={`/projects/${classInfo.class}`}>
              <ProjectsMini
                routePath={`/projects/${classInfo.class}`}
                dispId={id}
                Class={classInfo}
                close={() => {
                  setClassInfo(null);
                }}
              />
            </Route>
          ) : null}
        </DisplayArea>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default Classes;

const DisplayArea = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;

  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
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
