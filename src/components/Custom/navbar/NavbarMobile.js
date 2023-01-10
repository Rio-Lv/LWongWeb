import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { data } from "./data";
import { Link } from "react-router-dom";
import logo from "./logo.png";

function NavbarMobile(props) {
  const [hide, setHide] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setHide(false);
    }, 2000);
  }, []);

  useEffect(() => {
    var hider;
    clearInterval(hider);
    if (hide === false) {
      hider = setTimeout(() => {
        // setHide(true);
      }, 10000);
    }
  }, [hide]);

  const createBar = () => {
    const tabs = [];
    data.tabs.forEach((tab) => {
      tabs.push(
        <Link
          key={tab.name}
          to={`/${tab.name}`}
          style={{ textDecoration: "none", userSelect: "none" }}
        >
          <Tab
            onMouseOver={() => {
              setHide(false);
            }}
            onClick={() => {
              tab.func();
              setOpenMenu(false);
              // setHide(true);
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
      <Nav>
        <Link
          style={{
            textDecoration: "none",
            color: "black",
            // margin: "auto",
          }}
          to={"/"}
        >
          <Title style={{ userSelect: "none" }}>{data.title.name}</Title>
        </Link>

        <Menu
          onClick={() => {
            setOpenMenu(true);
          }}
        />

        {openMenu ? <Bar>{createBar()}</Bar> : null}
      </Nav>
      <NavGradientTop />
      <NavGradientBottom />
    </div>
  );
}

export default NavbarMobile;

const color0 = "#F2F2F2";
const color1 = "#A6A6A6";
const color2 = "#595959";
const color3 = "#262626";
const color4 = "#0D0D0D";

const gradC = "#29292924";

const Menu = styled.div`
  width: 50px;
  height: 45px;
  border-radius: 50% auto;
  background-image: url("./icons/menu.svg");
  /* background-color: black; */
  background-position: center;
  position: absolute;
  right: 0px;
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 22px;
  white-space: nowrap;
  color: ${color4};
  cursor: pointer;
  transition: 0.15s ease;
  font-weight: 900;
  margin-top: 7px;
  margin-left: 10px;
  position: absolute;
`;

const Bar = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  position: absolute;
  top: 45px;
  right: 0;
  background-color: white;
  padding: 10px;
  padding-bottom: 20px;
  border-bottom-left-radius: 5px;
`;
const Tab = styled.div`
  margin-right: 50px;
  margin-left: 50px;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 800;
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
  /* overflow: hidden; */
  width: 100%;
  height: 45px;
  z-index: 9;
  transition: 0.8s ease;
  /* background-color: blue; */
`;
