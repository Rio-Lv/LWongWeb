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

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";

function App() {
  const [navbar, setNavbar] = useState(false);
  useEffect(() => {}, []);
  const dispId = uuidv4;
  return (
    <div>
      <div>
        <DataProvider>
          {/* <ProjectsMini /> */}
          <Router>
            <Navbar dispId={dispId} setNavbar={setNavbar} />
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
  );
}

// notes:
// calss block is abit confusing, people think they can click a specific project
// client recommend title persists on hover

// project on back should go back to specific class type

// lock the nav bar

export default App;
