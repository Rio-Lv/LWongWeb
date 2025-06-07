import React, { useEffect, useState } from "react";
import styled from "styled-components";

import FadeIn from "react-fade-in/lib/FadeIn";
import ProjectBlockMini from "./ProjectBlockMini";
import NavBuffer from "../projects/NavBuffer";
import Project from "./Project";
import { Link, Redirect, Route } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
const isMobile = window.innerWidth <= 768; // mobile breakpoint (px)
// this takes in data from Projects
function ProjectsMini(props) {
  const [project, setProject] = useState(null);
  const [routePath, setRoutePath] = useState(props.routePath);

  const id = uuidv4();

  const createProjectBlocks = (projects) => {
    const projectList = [];
    for (var i = 0; i < projects.length; i++) {
      // console.log(projects[i].imageUrl);
      projectList.push(
        <Link to={`${props.routePath}/${projects[i].name}`}>
          <ProjectBlockMini
            dispId={props.dispId}
            key={uuidv4()}
            func={(project) => {
              setProject(project);
              document.getElementById(props.dispId).scrollTop = 0;
            }}
            index={i}
            project={projects[i]}
          />
        </Link>
      );
    }
    return projectList;
  };
  const arraySplit = (array) => {
    if (!isMobile) {
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
    } else {
      return { leftArray: array, rightArray: [] };
    }
  };

  useEffect(() => {
    console.log(props);
  }, []);

  return (
    <div>
      <Route exact path={`${props.routePath}`}>
        <div
          id={id}
          onClick={() => {
            console.log("scrolling from project blocks mini");
            console.log((document.getElementById(id).scroll = -1000));
          }}
        >
          <div>
            {/* <FadeIn>
            <NavBuffer pad={80} transition={0.3}></NavBuffer>
          </FadeIn> */}
            <Title>{props.className}</Title>

            <Link style={{ textDecoration: "none" }} to={`/projects`}>
              <ClassTitle>
                <FadeIn delay={1000}>
                  <div
                    style={{
                      fontWeight: 600,
                      fontSize: "17px",
                      transform: "translate(10px,10px)",
                    }}
                  >
                    Back to projects
                  </div>
                </FadeIn>
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
              {/* <Line></Line> */}
              {!isMobile && (
                <DisplayArea2>
                  <FadeIn delay={250}>
                    {createProjectBlocks(
                      arraySplit(props.Class.projects).rightArray
                    )}
                  </FadeIn>
                </DisplayArea2>
              )}
            </DisplayAreaFull>
          </div>
        </div>
      </Route>
      {project ? (
        <Route path={`${props.routePath}/${project.name}`}>
          <Project
            navbar={props.navbar}
            project={project}
            func={() => {
              setProject(null);
            }}
          ></Project>
        </Route>
      ) : null}
    </div>
  );
}

export default ProjectsMini;

const DisplayAreaFull = styled.div`
  margin-left: 4px;
  margin-right: 4px;
  display: flex;
  background-color: #f2f2f2;
  flex-direction: row;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const DisplayArea = styled.div`
  width: 100%;
  height: 100%;
  padding-right: 4px;
  /* border-right: 3px solid white; */
`;
const DisplayArea2 = styled.div`
  right: 0;
  width: 100%;

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
  width: 100%;
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
