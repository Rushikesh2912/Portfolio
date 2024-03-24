import React, { useEffect, useState } from 'react';
import './Resume.css';
// import file from '../Resume/Shinde_Rushikesh_Resume.pdf';

const Resume = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false); // Flag to track initial load

  useEffect(() => {
    if (!hasLoaded) {
      // Set isVisible to true after a short delay (e.g., 500 milliseconds)
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 500);

      // Clear the timeout to prevent memory leaks
      return () => clearTimeout(timer);
    } else {
      // Set isVisible to true immediately after the initial load
      setIsVisible(true);
    }
  }, [hasLoaded]); // Run whenever hasLoaded changes

  // Mark the component as loaded after the first render
  useEffect(() => {
    setHasLoaded(true);
  }, []);

  // const downloadResume = () => {
  //   // Replace 'resume.pdf' with the path to your resume file
  //   const fileUrl = '';
  //   window.open(fileUrl, '_blank');
  // };

  return (
    <div className="container">
      {/* Work Experience */}
      <div className="row">
        <div className={`col-md-4 my-5 ${isVisible ? 'fade-in' : ''}`}>
          <span className='resume'>Resume</span>
        </div>
        <div className="col-md-4 offset-md-3 d-flex justify-content-center">
        <button className="btn me-md-2 my-btn" type="button">
                Resume <i className="fa-solid fa-download"></i>
        </button>
        </div>
      </div>
      <div className="row">
        <div className={`col-sm-4 text-center ${isVisible ? 'fade-in' : ''}`}>
          <p style={{ fontSize: '2rem', fontWeight: 700 }}>Work <br /><span>Experience</span></p>
        </div>
        <div className="col-sm-8 col-md-4 text-end eduction-field">
          Jan’23 – Feb’23
        </div>
        <div className="col-sm-8 col-md-4 tex-start">
          <p className='course-name'>MERN Stack Intern | R3 Systems India Private Limited</p>
          <p className='description'>Detail-oriented MERN stack enthusiast with a strong grasp of JavaScript, React, Node.js, and
            MongoDB. Experienced in developing responsive web applications and eager to apply skills in an
            internship role. Proficient in both front-end and back-end development, with a focus on creating
            intuitive user interfaces and scalable architectures. Excited to collaborate with dynamic teams and
            contribute to innovative projects while expanding knowledge and expertise. Seeking an internship
            opportunity to further professional growth in a fast-paced company environment.</p>
        </div>
      </div>

      <hr className='my-5' />

      {/* Education */}
      <div className="row">
        <div className={`col-sm-4 text-center ${isVisible ? 'fade-in' : ''}`}>
          <p style={{ fontSize: '2rem', fontWeight: 700 }}>Education</p>
        </div>
        <div className="col-sm-8 col-md-4 text-end eduction-field">
          2021 - Present
        </div>
        <div className="col-sm-8 col-md-4 text-start">
          <p className='course-name'>Computer Engineering | R.C.Patel Institute of Technology, Shirpur</p>
          <p style={{ fontSize: '1rem' }}><span>CGPA : </span>7.84 (Till Date)</p>
        </div>
        <div className={`col-sm-4 text-end ${isVisible ? 'fade-in' : ''}`}>
          <p style={{ fontSize: '2rem', fontWeight: 700, display: 'none' }}></p>
        </div>
        <div className="col-sm-8 col-md-4 text-end eduction-field">
          2019 - 2020
        </div>
        <div className="col-sm-8 col-md-4 text-start">
          <p className='course-name'>XII (HSC) |<br />M.K.Shinde Jr.College, Kusumba</p>
          <p style={{ fontSize: '1rem' }}><span>Percentage : </span> 75%</p>
        </div>
        <div className={`col-sm-4 text-end ${isVisible ? 'fade-in' : ''}`}>
          <p style={{ fontSize: '2rem', fontWeight: 700, display: 'none' }}></p>
        </div>
        <div className="col-sm-8 col-md-4 text-end eduction-field">
          2017 - 2018
        </div>
        <div className="col-sm-8 col-md-4 text-start">
          <p className='course-name'>X (SSC) |<br />M.K.Shinde High School, Kusumba</p>
          <p style={{ fontSize: '1rem' }}><span>Percentage : </span> 76%</p>
        </div>
      </div>

      <hr className='my-5' />

      {/* Skills */}
      <div className="row">
        <div className={`col-sm-4 text-center ${isVisible ? 'fade-in' : ''}`}>
          <p style={{ fontSize: '2rem', fontWeight: 700 }}>Skill & <br /> Expertise</p>
        </div>
        <div className="col-md-5 ms-auto text-start">
          <ul>
            <li className='course-name'>Core Java </li>
            <p className='description'>Skilled in Core Java programming with expertise in object-oriented principles and design patterns. Proficient in developing robust applications using Java SE, including multi-threading and collections. Experienced in utilizing Java frameworks and libraries to streamline development processes. Strong understanding of fundamental concepts such as inheritance and polymorphism. Capable of troubleshooting and debugging Java applications effectively. Committed to staying updated with the latest advancements in Java technology.</p>
            <li className='course-name'>HTML, CSS, Javascript, Bootstrap </li>
            <p className='description'>Proficient in HTML, CSS, and JavaScript for front-end web development. Experienced in creating responsive and visually appealing user interfaces using Bootstrap framework. Skilled in implementing interactive features and enhancing user experience through JavaScript libraries and frameworks. Knowledgeable in modern web design principles and cross-browser compatibility. Capable of designing and developing dynamic web applications with a focus on usability and accessibility.</p>
            <li className='course-name'>MERN Stack</li>
            <p className='description'>Proficient in the MERN (MongoDB, Express.js, React.js, Node.js) stack for full-stack web development. Experienced in building scalable and efficient web applications utilizing MongoDB as the NoSQL database, Express.js as the backend framework, React.js for front-end development, and Node.js for server-side scripting. Skilled in integrating various components of the MERN stack to create seamless user experiences. Capable of designing RESTful APIs and implementing CRUD operations. Knowledgeable in deploying MERN applications and maintaining their performance and security.</p>
            <li className='course-name'>C (Basic)</li>
            <p className='description'>Familiar with basic C programming concepts including data types, control structures, functions, and arrays. Capable of writing simple programs to solve basic problems. Understanding of fundamental principles such as memory management and pointers. Proficient in debugging and troubleshooting simple C programs. Committed to further developing skills in C programming through practice and learning.</p>
          </ul>
        </div>
      </div>



    </div>
  );
}

export default Resume;
