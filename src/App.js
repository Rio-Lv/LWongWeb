import React, { useEffect } from "react";
import { DataProvider } from "./Data";
import Home from "./components/Custom/home/Home";
import Navbar from "./components/Custom/navbar/Navbar";
import Carousel from "./components/Custom/carousel/Carousel";
import Classes from "./components/Custom/projects/Classes";

import People from "./components/Custom/people/People";
import Careers from "./components/Custom/careers/Careers";
import Model from "./components/Custom/model/Model";
import Project from "./components/Custom/subProjects/Project";
import PhotoGallery from "./components/Custom/subProjects/PhotoGallery";
import About from "./components/Custom/About/About";
import Contact from "./components/Custom/Contact/Contact";

import Receiver from "./components/Custom/projects/Receiver";

import { storage } from "./firebase";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <DataProvider>
        {/* <ProjectsMini /> */}
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/home">
              <Carousel />
            </Route>
            <Route path="/projects">
              <Receiver />
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
  );
}

export default App;
