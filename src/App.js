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
          <Route exact path="/current-pulse" element={<Home />} />
          <Route path="/current-pulse/business" element={<Data val="business" />} />
          <Route path="/current-pulse/entertainment" element={<Data val="entertainment" />} />
          <Route path="/current-pulse/sports" element={<Data val="sports" />} />
          <Route path="/current-pulse/health" element={<Data val="health" />} />
          <Route path="/current-pulse/science" element={<Data val="science" />} />
          <Route path="/current-pulse/technology" element={<Data val="technology" />} />
        </Routes>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
