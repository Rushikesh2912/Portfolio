import React, { useState, useEffect } from 'react';
import './Project.css';
import dbImg from '../Images/dbImg.png';
import addNote from '../Images/addNote.png';
import login from '../Images/login.png';
import signUp from '../Images/signUp.png';
import SS1 from '../Images/SS1.png';
import SS2 from '../Images/SS2.png';
import SS3 from '../Images/SS3.png';
import SS4 from '../Images/SS4.png';
import SS5 from '../Images/SS5.png';
import T1 from '../Images/Tadd.png';
import T2 from '../Images/Tbook.png';
import T3 from '../Images/Tdashboard.png';
import T4 from '../Images/Tforget.png';
import T5 from '../Images/Tuser.png';
import T6 from '../Images/Tpackage.png';
import T7 from '../Images/Tupdate.png';
import T8 from '../Images/Tusercreate.png';
import projectImg from '../Images/ProjectDone.png'
import Dropdown from './Dropdown';
import { Link } from 'react-router-dom';

const Project = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lastScrollPos, setLastScrollPos] = useState(0);

  // Array of image URLs
  const majorProjectImages = [dbImg, addNote, login, signUp];
  const cloudPointImages = [SS1, SS2, SS3, SS4, SS5];
  const travelSystem = [T1, T2, T3, T4, T5, T6, T7, T8];

  // Function to change the image
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % majorProjectImages.length);
    }, 5000);

    // Clear the interval on component unmount
    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, []);

  // Set isVisible to true after initial load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    // Clear the timeout to prevent memory leaks
    return () => clearTimeout(timer);
    // eslint-disable-next-line
  }, []);


  // For Animation
  //For Animation
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (currentScrollPos > lastScrollPos) {
        // Scrolling down
        const projectSections = document.querySelectorAll('.project-section');
        projectSections.forEach((section) => {
          const sectionTop = section.getBoundingClientRect().top;
          const windowBottom = window.innerHeight;
          if (sectionTop < windowBottom) {
            section.classList.add('active');
            section.classList.remove('left'); // Remove left class
          }
        });
      } 
      setLastScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollPos]);



  return (
    <>
      <div className='container text-start'>
        <div className="row">
          <div className="col-sm-4 my-5 fade-in">
            <span className="project">Project's</span>
          </div>
          <div className="col-md-4 offset-md-3 d-flex justify-content-center">
           <img style={{width: '37rem'}} src={projectImg} alt="" />
        </div>
        </div>
        <div className="row ">
          <div className="row">
            <div className={"col-sm-4 my-5 fade-in"}>
              Major Project
            </div>
          </div>
          <div className={`col-md-6 my-4`}>
            <p className='course-name '>1. EasyMed – MERN Stack Based Digital Notebook</p>
            <span className='m-3'><b>Github Repositry :</b></span>
            <Link to="https://github.com/Rushikesh2912/Digital-Note-Book" target="_blank" rel="noopener noreferrer">
              <i style={{ fontSize: '30px', cursor: 'pointer', color: 'black' }} className="fa-brands fa-github"></i>
            </Link>
            <p className='m-2 description'>The application is an end-to-end system focusing on user management, note creation, updating, and deletion. It utilizes MongoDB for database management, React.js for the frontend interface, Express.js for the backend server, and Node.js for server-side JavaScript execution. Users can securely register and log in, with passwords hashed using bcrypt and JWT employed for authentication. Authenticated users can manage their notes, which are associated with their accounts. The backend, built with Express.js, uses Mongoose for MongoDB interaction, with defined routes for authentication and note management. The frontend, developed with React.js, includes components for user interaction and utilizes Axios for HTTP requests. Overall, the application ensures seamless data storage and retrieval, providing a robust user experience.</p>
          </div>
          <div className={`col-md-6 my-4`}>
            {majorProjectImages.map((image, index) => (
              <div className={`carousel-item ${index === currentIndex ? 'active' : ''}`} key={index}>
                <div id="imageContainer">
                  <img className={`d-block w-100 ${isVisible ? 'fade-in' : ''}`} src={image} alt="" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <hr  style={{color:'orange'}} className="container m-5" />

        <div className="row project-section">
          <div className="col-md-6 my-4">
            <p className='course-name'>2. CloudPoint - APT Based News Application</p>
            <span className='m-3'><b>Github Repositry :</b></span>
            <Link to="https://github.com/Rushikesh2912/NewsReport" target="_blank" rel="noopener noreferrer">
              <i style={{ fontSize: '30px', cursor: 'pointer', color: 'black' }} className="fa-brands fa-github"></i>
            </Link>
            <p className='m-2 description'>This Node.js and JavaScript-based application utilizes a News API to provide real-time news updates alongside interactive mapping functionality. The Express.js server fetches news data from the API and serves it to the frontend. The frontend interface, built with HTML, CSS, and JavaScript, displays the news content and integrates a map using Leaflet.js or Google Maps API. Additional features such as filtering news by category, searching for specific topics, and saving favorite articles are implemented to enhance user experience. The application ensures optimized performance and security measures, handling user interactions seamlessly. Thorough testing and debugging are conducted before deploying the application to a hosting platform like Heroku or AWS for public access.</p>
          </div>
          <div className="col-md-6 my-4">
            {cloudPointImages.map((image, index) => (
              <div className={`carousel-item ${index === currentIndex ? 'active' : ''}`} key={index}>
                <div id="imageContainer">
                  <img className={`d-block w-100 ${isVisible ? 'fade-in' : ''}`} src={image} alt="" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <hr  style={{color:'orange'}} className="container m-5" />

        <div className="row project-section">
          <div className="col-md-6 my-4">
            <p className='course-name'>3. Travel and Tourism Management System</p>
            <span className='m-3'><b>Github Repositry :</b></span>
            <Link to="https://github.com/Rushikesh2912/Travel-Management-System" target="_blank" rel="noopener noreferrer">
              <i style={{ fontSize: '30px', cursor: 'pointer', color: 'black' }} className="fa-brands fa-github"></i>
            </Link>
            <p className='m-2 description'>The provided Java Swing code snippet demonstrates the creation of a basic graphical user interface (GUI) for a Travel Management System. It includes components such as text fields, buttons, and text areas to facilitate user interaction. The GUI allows users to search for travel locations by entering keywords in a text field and clicking a search button. Upon clicking the button, a dummy search operation is performed, and the results are displayed in a text area. This example serves as a starting point for developing more advanced features such as managing travel plans, reserving services, and displaying travel information within a Java Swing application</p>
          </div>
          <div className="col-md-6 my-4">
            {travelSystem.map((image, index) => (
              <div className={`carousel-item ${index === currentIndex ? 'active' : ''}`} key={index}>
                <div id="imageContainer">
                  <img className={`d-block w-100 ${isVisible ? 'fade-in' : ''}`} src={image} alt="" />
                </div>
              </div>
            ))}
          </div>
        </div>
        <hr  style={{color:'orange'}} className="container m-5" />
        <Dropdown/>
      </div>

    </>
  );
}

export default Project;
