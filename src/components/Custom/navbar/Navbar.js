import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { data } from "./data";
import { Link } from "react-router-dom";

function Navbar() {
  const [hide, setHide] = useState(false);
  const [lock, setLock] = useState(false);
  const [mouseOnNav, setMouseOnNav] = useState(false);

  const wheel = (e) => {
    if (!lock) {
      if (e.deltaY < 0) {
        setHide(false);
      } else if (e.deltaY > 0) {
        setHide(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", wheel);
  }, []);
  const createBar = () => {
    const tabs = [];
    data.tabs.forEach((tab) => {
      tabs.push(
        <Link
          key={tab.name}
          to={`/${tab.name}`}
          style={{ textDecoration: "none" }}
        >
          <Tab
            onClick={() => {
              tab.func();
            }}
          >
            {tab.name}
          </Tab>
        </Link>
      );
    });

    return tabs;
  };
  return (
    <div>
      {/* <Back style={{ height: hide ? "0px" : "80px" }} /> */}
      <Nav
        onMouseEnter={() => {
          setMouseOnNav(true);
        }}
        onMouseLeave={() => {
          setMouseOnNav(false);
        }}
        style={{
          transform:
            hide && !mouseOnNav ? "translate(0,-80px)" : "translate(0px)",
          height: hide ? "0px" : "80px",
          backgroundColor: hide
            ? "transparent"
            : mouseOnNav
            ? "#0D0D0D"
            : "white",
        }}
      >
        <Link
          style={{
            textDecoration: "none",
            color: "black",
            margin: "auto",
            marginLeft: "80px",
          }}
          to={"/home"}
        >
          <Title>
            {data.title.name}
            {/* <SubTitle> /about</SubTitle> */}
          </Title>
        </Link>
        <Bar>{createBar()}</Bar>
      </Nav>
      <NavGradientTop />
      <NavGradientBottom />
    </div>
  );
}

export default Navbar;

const color0 = "#F2F2F2";
const color1 = "#A6A6A6";
const color2 = "#595959";
const color3 = "#262626";
const color4 = "#0D0D0D";

const gradC = "#29292924";
const SubTitle = styled.div`
  color: color2;
  font-size: 20px;
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 24px;
  white-space: nowrap;
  color: ${color4};
  cursor: pointer;
  transition: 0.1s ease;
  font-weight: 600;
`;
const Back = styled.div`
  position: fixed;
  width: 100%;
  background-color: white;
`;
const Bar = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin: auto;
  margin-right: 50px;
`;
const Tab = styled.div`
  width: 100px;
  font-size: 20px;
  color: ${color4};
  cursor: pointer;
  transition: 0.1s ease;
  fill: transparent;
  background-color: transparent;
  &:hover {
    color: white;
  }
`;

const NavGradientTop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  background-image: linear-gradient(${gradC}, transparent);
  pointer-events: none;
  z-index: 12;
`;
const NavGradientBottom = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  background-image: linear-gradient(transparent, ${gradC});
  pointer-events: none;
  z-index: 12;
`;

const Nav = styled.div`
  position: relative;

  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  z-index: 9;
  transition: 0.8s ease;
  :hover {
    background-color: #262626;
  }
  &:hover ${Tab} {
    color: ${color1};

    :hover {
      color: ${color0};
    }
  }
  &:hover ${Title} {
    color: ${color0};
  }
`;