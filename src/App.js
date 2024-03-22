import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar'
import Resume from './Components/Resume/Resume';
import Project from './Components/Project/Project';
import Contact from './Components/Contact/Contact';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <>
     <Router>
  <Navbar />
  <Routes>
    <Route extact path="/home" element={<Home />} />
    <Route extact path="/resume" element={<Resume />} />
    <Route extact path="/project" element={<Project />} />
    <Route extact path="/contact" element={<Contact />} />
  </Routes>
  <Footer/>
</Router>
    </>
  );
}

export default App;
