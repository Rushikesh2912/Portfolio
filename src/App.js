import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar'
import Resume from './Components/Resume/Resume';
import Project from './Components/Project/Project';
import Contact from './Components/Contact/Contact';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Footer from './Components/Footer';
function App() {
  return (
    <>
     <Router>
  <Navbar />
  <Routes>
    <Route path="/home" element={<Home />} />
    <Route path="/resume" element={<Resume />} />
    <Route path="/project" element={<Project />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
  <hr className='container'/>
  <Footer/>
</Router>
    </>
  );
}

export default App;
