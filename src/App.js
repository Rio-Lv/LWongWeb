import React, { useEffect, useState } from "react";
import { DataProvider } from "./Data";
import Navbar from "./components/Custom/navbar/Navbar";
import Carousel from "./components/Custom/carousel/Carousel";
import Careers from "./components/Custom/careers/Careers";
import About from "./components/Custom/About/About";
import Contact from "./components/Custom/Contact/Contact";
import Receiver from "./components/Custom/projects/Receiver";
import { v4 as uuidv4 } from "uuid";
import SpinUp from "./components/SpinUp/SpinUp";
import logo from "./logo.png";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";
import NavbarMobile from "./components/Custom/navbar/NavbarMobile";

function App() {
  const [navbar, setNavbar] = useState(false);
  const [mobile, setMobile] = useState(window.innerWidth < 500);
  useEffect(() => {}, []);
  const dispId = uuidv4;
  return (
    <div>
      {mobile ? (
        <div>
          <div
            style={{
              width: "80%",
              position: "absolute",
              left: "50%",
              top: "160px",
              transform: "translate(-50%)",
            }}
          >
            Mobile Version of this website is still under construction.
          </div>
          <div
            style={{
              width: "80%",
              position: "absolute",
              left: "50%",
              top: "220px",
              transform: "translate(-50%)",
            }}
          >
            Please Use Our Desktop Mode.
          </div>
          <div
            style={{
              position: "fixed",

              top: "10px",

              backgroundImage: "url(./faviconLwong.png)",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              opacity: "5%",
              width: "100vw",
              height: "100vw",
            }}
          />
        </div>
      ) : (
        <div>
          <div>
            <DataProvider>
              {/* <ProjectsMini /> */}
              <Router>
                <Navbar dispId={dispId} setNavbar={setNavbar} mobile={mobile} />

                <Switch>
                  <Route path="/about">
                    <About />
                  </Route>
                  <Route exact path={["/"]}>
                    <Carousel />
                  </Route>
                  <Route path="/projects">
                    <Receiver dispId={dispId} navbar={navbar} />
                    {/* This has classes from projects */}
                  </Route>
                  <Route path="/Careers">
                    <Careers />
                  </Route>
                  <Route path="/Contact">
                    <Contact />
                  </Route>
                  {/* <Route path="/people">
              <People />
            </Route> */}
                </Switch>
              </Router>

              {/* <Model></Model> */}
            </DataProvider>
          </div>
          <SpinUp />
        </div>
      )}
    </div>
  );
}

// notes:
// calss block is abit confusing, people think they can click a specific project
// client recommend title persists on hover

// project on back should go back to specific class type

// lock the nav bar

export default App;
