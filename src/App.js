import React from "react";
import "./App.css";
import Navbar from "./components/Navbar"
import Home from "./components/pages/Home"
import Data from "./components/Data"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";


function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/Current-Pulse/" element={<Home />} />
          <Route path="/Current-Pulse/business" element={<Data val="business" />} />
          <Route path="/Current-Pulse/entertainment" element={<Data val="entertainment" />} />
          <Route path="/Current-Pulse/sports" element={<Data val="sports" />} />
          <Route path="/Current-Pulse/health" element={<Data val="health" />} />
          <Route path="/Current-Pulse/science" element={<Data val="science" />} />
          <Route path="/Current-Pulse/technology" element={<Data val="technology" />} />
        </Routes>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
