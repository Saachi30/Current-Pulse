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
          <Route exact path="/" element={<Home />} />
          <Route path="/business" element={<Data val="business" />} />
          <Route path="/entertainment" element={<Data val="entertainment" />} />
          <Route path="/sports" element={<Data val="sports" />} />
          <Route path="/health" element={<Data val="health" />} />
          <Route path="/science" element={<Data val="science" />} />
          <Route path="/technology" element={<Data val="technology" />} />
        </Routes>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
