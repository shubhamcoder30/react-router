import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import * as Sentry from "@sentry/react";
import logo from "./logo.svg";
import "./App.css";
import Contact from "./components/Contact";
import About from "./components/About";

function App() {
  const navigate = useNavigate();
  const aboutCalled = () => {
    
    navigate("about");
  };
  const contactCalled = () => {
    navigate("contact");
  };
  return (
    <div className="App">
      <button onClick={aboutCalled}>Hellooo about</button>
      <button onClick={contactCalled}>Hellooo Contact</button>
      
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default Sentry.withProfiler(App)
