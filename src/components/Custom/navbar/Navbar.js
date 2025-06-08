import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { data } from "./data";
import { Link } from "react-router-dom";
import logo from "./logo.png";

function Navbar(props) {
  const [hide, setHide] = useState(true);
  const [lock, setLock] = useState(false);
  const [mouseOnNav, setMouseOnNav] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);
  useEffect(() => {
    setTimeout(() => {
      setHide(false);
    }, 2000);
  }, []);

  const wheel = (e) => {
    if (!lock) {
      if (e.deltaY < 0) {
        setHide(false);
      } else if (e.deltaY > 0) {
        setHide(true);
      }
    }
  };

  const prevScrollY = useRef(window.scrollY);
  const handleScroll = () => {
    if (!lock) {
      const currentY = window.scrollY;
      if (currentY > prevScrollY.current) {
        setHide(true);
      } else if (currentY < prevScrollY.current) {
        setHide(false);
      }
      prevScrollY.current = currentY;
    }
  };

  useEffect(() => {
    var hider;
    clearInterval(hider);
    if (hide === false) {
      hider = setTimeout(() => {
        // setHide(true);
      }, 10000);
    }
  }, [hide]);

  useEffect(() => {
    props.setNavbar(hide);
  }, [hide]);

  useEffect(() => {
    window.addEventListener("wheel", wheel);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("wheel", wheel);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        menuOpen &&
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(e.target)
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);
  const createBar = () => {
    const tabs = [];
    data.tabs.forEach((tab) => {
      tabs.push(
        <Link
          key={tab.name}
          to={`/${tab.name}`}
          style={{ textDecoration: "none", userSelect: "none" , width: isMobile ? "100%" : "100%", display: "flex", justifyContent: "center" }}
        >
          <Tab
            onMouseOver={() => {
              setHide(false);
            }}
            onClick={() => {
              tab.func();
              setMenuOpen(false);
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
            hide && !mouseOnNav ? "translate(0,-70px)" : "translate(0px)",
          height: hide ? "0" : "70px",
          backgroundColor: isMobile || mouseOnNav ? "#0D0D0D" : "white",
        }}
      >

        <Brand>
          <LogoLink to={"/"}>
            <img
              src={logo}
              alt=""
              style={{
                height: "45px",
                transition: ".2s ease",
                filter:
                  !mouseOnNav && !isMobile
                    ? "invert(0) grayscale(0) contrast(1.3) brightness(0)"
                    : "invert(1) grayscale(1) contrast(1) brightness(5)",
              }}
            />
          </LogoLink>

          <TitleLink to={"/"}>
            <Title style={{ userSelect: "none" }}>
              {data.title.name}
              {/* <SubTitle> /about</SubTitle> */}
            </Title>
          </TitleLink>
        </Brand>


        <Hamburger
          sx
          style={{
            color: !mouseOnNav && !isMobile ? "black" : "white",
          }}
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
          ref={hamburgerRef}
        >
          &#9776;
        </Hamburger>
        <Bar ref={menuRef} open={menuOpen}>{createBar()}</Bar>
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
  font-size: 22px;
  white-space: nowrap;
  color: ${color4};
  cursor: pointer;
  transition: 0.15s ease;
  font-weight: 800;
  margin-left: 2px;
  @media (max-width: 768px) {
    margin-left: 0;
    color: ${color0};
  }
`;
const Back = styled.div`
  position: fixed;
  width: 100%;
  background-color: white;
`;

const LogoLink = styled(Link)`
  text-decoration: none;
  color: black;
  margin: auto 0;
`;

const TitleLink = styled(Link)`
  text-decoration: none;
  color: black;
  @media (max-width: 768px) {
    color: ${color0};
  }
`;

const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-left: 16px;
`;
const Hamburger = styled.div`
  display: none;
  font-size: 36px;
  margin: auto;
  margin-right: 20px;
  margin-bottom:16px;
  cursor: pointer;
  user-select: none;
  @media (max-width: 768px) {
    display: block;
  }
`;
const Bar = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin: auto;
  margin-right: 50px;
  @media (max-width: 768px) {
    position: absolute;
    top: 70px;
    left: 0;
    flex-direction: column;
    background-color: #0d0d0d;
    width: 100%;
    padding: 10px 0;
    margin-right: 0;
    align-items: stretch; 
    display: ${(props) => (props.open ? 'flex' : 'none')};
  }
`;
const Tab = styled.div`
  margin-right: 20px;
  font-size: 20px;
  color: ${color4};
  cursor: pointer;
  transition: 0.1s ease;
  fill: transparent;
  background-color: transparent;
  /* border: 3px solid red; */
  
  &:hover {
    color: white;
  }
  @media (max-width: 768px) {
    margin: 10px 0;
    margin-right: 0;
    color: ${color0};
    padding: 5px 20px;
    width: fit-content;
    
    text-align: center;
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
  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  z-index: 9;
  transition: 0.8s ease;
  @media (max-width: 768px) {
    justify-content: space-between;
  }
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
