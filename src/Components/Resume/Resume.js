import React from 'react'
import './Resume.css'
const Resume = () => {
  return (
    <div>
      {/* Work Experiance */}

      <div className="container">
        <div className="row">
          <div className="col-sm-4 my-5 text-center">
            <p style={{ fontSize: '3rem', fontWeight: 700 }}>Resume</p>
          </div>
        </div>
        <div className="row ">
          <div className="col-sm-4 text-center">
            <p style={{ fontSize: '2rem', fontWeight: 700 }}>Work <br /><span>Experience</span></p>
          </div>
          <div className="col text-end eduction-field">
            Jan’23 – Feb’23
          </div>
          <div className="col-5 tex-start">
            <p className='course-name'>MERN Stack Intern | R3 Systems India Private Limited</p>
            Detail-oriented MERN stack enthusiast with a strong grasp of JavaScript, React, Node.js, and
            MongoDB. Experienced in developing responsive web applications and eager to apply skills in an
            internship role. Proficient in both front-end and back-end development, with a focus on creating
            intuitive user interfaces and scalable architectures. Excited to collaborate with dynamic teams and
            contribute to innovative projects while expanding knowledge and expertise. Seeking an internship
            opportunity to further professional growth in a fast-paced company environment.
          </div>
        </div>
      </div>

      <hr className='container my-5' />

         {/* Eduction */}
      <div className="container">
        <div className="row">
          <div className="col-sm-4 text-center">
            <p style={{ fontSize: '2rem', fontWeight: 700 }}>Education</p>
          </div>
          <div className="col text-end eduction-field">
            2021 - Present
          </div>
          <div className="col-5 tex-start">
            <p className='course-name'>Computer Engineering |<br />R.C.Patel Institute of Technology, Shirpur</p>
            <p style={{ fontSize: '1rem' }}><span>CGPA : </span>7.84 (Till Date)</p>
          </div>
        </div>
        <div className="row my-5">
          <div className="col text-end eduction-field">
            2019 - 2020
          </div>
          <div className="col-5 tex-start">
            <p className='course-name'>XII (HSC) |<br />M.K.Shinde Jr.College, Kusumba</p>
            <p style={{ fontSize: '1rem' }}><span>Percentage : </span> 75%</p>
          </div>
        </div>
        <div className="row my-5">
          <div className="col text-end eduction-field">
            2017 - 2018
          </div>
          <div className="col-5 tex-start">
            <p className='course-name'>X (SSC) |<br />M.K.Shinde High School, Kusumba</p>
            <p style={{ fontSize: '1rem' }}><span>Percentage : </span> 76%</p>
          </div>
        </div>
      </div>

      <hr className='container my-5' />

      {/* Skill */}
      <div className="container">
        <div className="row">
          <div className="col-sm-4 text-center">
            <p style={{ fontSize: '2rem', fontWeight: 700 }}>Education</p>
          </div>
          <div className="col text-end eduction-field">
            2021 - Present
          </div>
          <div className="col-5 tex-start">
            <p className='course-name'>Computer Engineering |<br />R.C.Patel Institute of Technology, Shirpur</p>
            <p style={{ fontSize: '1rem' }}><span>CGPA : </span>7.84 (Till Date)</p>
          </div>
        </div>
        <div className="row my-5">
          <div className="col text-end eduction-field">
            2019 - 2020
          </div>
          <div className="col-5 tex-start">
            <p className='course-name'>XII (HSC) |<br />M.K.Shinde Jr.College, Kusumba</p>
            <p style={{ fontSize: '1rem' }}><span>Percentage : </span> 75%</p>
          </div>
        </div>
        <div className="row my-5">
          <div className="col text-end eduction-field">
            2017 - 2018
          </div>
          <div className="col-5 tex-start">
            <p className='course-name'>X (SSC) |<br />M.K.Shinde High School, Kusumba</p>
            <p style={{ fontSize: '1rem' }}><span>Percentage : </span> 76%</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume
