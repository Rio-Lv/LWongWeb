import React, { useEffect, useState } from "react";
import styled from "styled-components";

import FadeIn from "react-fade-in/lib/FadeIn";
import ProjectBlockMini from "./ProjectBlockMini";
import NavBuffer from "../projects/NavBuffer";
import Project from "./Project";
import { Link, Redirect } from "react-router-dom";

// this takes in data from Projects
function ProjectsMini(props) {
  const [project, setProject] = useState(null);
  const createProjectBlocks = (projects) => {
    const projectList = [];
    for (var i = 0; i < projects.length; i++) {
      // console.log(projects[i].imageUrl);
      projectList.push(
        <ProjectBlockMini
          func={(project) => {
            setProject(project);
          }}
          index={i}
          project={projects[i]}
        />
      );
    }
    return projectList;
  };
  const arraySplit = (array) => {
    const leftArray = [];
    const rightArray = [];
    for (let i = 0; i < array.length; i++) {
      if (i % 2 === 0) {
        // even value
        // console.log("even:" + i);
        // console.log(array[i]);
        leftArray.push(array[i]);
      } else {
        // odd value
        // console.log("odd: " + i);
        // console.log(array[i]);
        rightArray.push(array[i]);
      }
    }
    // console.log(leftArray);
    // console.log(rightArray);
    return { leftArray, rightArray };
  };

  useEffect(() => {
    console.log(props);
  }, []);

  return (
    <div>
      {project === null ? (
        <div>
          {/* <FadeIn>
            <NavBuffer pad={80} transition={0.3}></NavBuffer>
          </FadeIn> */}
          <Title>Sub Projects</Title>

          <Link style={{ textDecoration: "none" }} to={`/projects`}>
            <ClassTitle>
              <FadeIn delay={1000}>Back To Projects</FadeIn>
            </ClassTitle>
          </Link>
          <DisplayAreaFull>
            <DisplayArea>
              <FadeIn delay={250}>
                {createProjectBlocks(
                  arraySplit(props.Class.projects).leftArray
                )}
              </FadeIn>
            </DisplayArea>
            <Line></Line>
            <DisplayArea2>
              <FadeIn delay={250}>
                {createProjectBlocks(
                  arraySplit(props.Class.projects).rightArray
                )}
              </FadeIn>
            </DisplayArea2>
          </DisplayAreaFull>
        </div>
      ) : (
        <Project
          project={project}
          func={() => {
            setProject(null);
          }}
        ></Project>
      )}
    </div>
  );
}

export default ProjectsMini;

const DisplayAreaFull = styled.div`
  margin-left: 4px;
  margin-right: 4px;
  display: flex;
  flex-direction: row;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const DisplayArea = styled.div`
  width: ${window.innerWidth / 2 - 1.5}px;
  height: 100%;
  /* border-right: 3px solid white; */
`;
const DisplayArea2 = styled.div`
  right: 0;
  width: ${window.innerWidth / 2 - 1.5}px;
  height: 100%;
`;
const Line = styled.div`
  position: fixed;
  left: 50%;
  transform: translate(-50%, -0px);
  height: 120%;
  border: 2px solid #f2f2f2;
  z-index: 1;
`;
const ClassTitle = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  width: 300px;
  height: 70px;
  text-align: right;
  padding-right: 25px;
  font-size: 20px;
  color: #a6a6a6;

  font-weight: 600;
  line-height: 70px;
  cursor: pointer;
  z-index: 2;
  transition: 0.3s ease;
  &:hover {
    color: #595959;
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
  border-bottom: 3px solid #f2f2f2;
  cursor: default;
  transition: 0.4s ease;
`;
