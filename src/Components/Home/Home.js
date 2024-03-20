import React from 'react'
import { Link } from 'react-router-dom'
import img from '../Images/pic.png'
import './Home.css'
const Home = () => {
    return (
        <div>
            <div className="row g-0 justify-content-center align-items-center vh-100">
                <div style={{ width: '29%' }} className="col-3">
                    <div className="Imgspinner" role="status">
                        <img src={img} alt="" srcset="" style={{
                            width: '100%',
                            height: '106%',
                            borderRadius: '50%'
                        }} />
                    </div>
                </div>

                <div className="col-md-8 gx-0 mx-0 my-4" style={{ width: '33rem' }}>
                   
                    <h1 className='typping-text-hello' style={{ fontSize: '5rem', fontWeight: 'bold', marginBottom: '1rem' }}><span className='typing-animation'>Hello...!</span></h1>
                   
                    <p style={{ fontSize: '1.4rem', marginBottom: 0, fontWeight: 900 }}>A Bit About Me</p>
                    
                    <h5 className='typing-text' style={{ width: '25rem', marginBottom: '3rem', fontFamily: 'monospace' }}>Software engineer passionate about creating innovative solutions to real-world problems. Experienced in full-stack web development, with expertise in MERN Stack..</h5>
                   
                    <div className="sub-cricle d-flex">

                        <Link to="/resume" className='mySpinner' role="status" id="myResumeLink">
                            <span className='circle-span'><b>Resume</b></span>
                        </Link>
                        <Link to="/project" className="mySpinner  mx-3" role="status" id="myProjectLink">
                            <span className='circle-span'><b>Project</b></span>
                        </Link>
                        <Link to="/contact" className="spinner mySpinner" role="status" id="myContactLink">
                            <span className='circle-span'><b>Contact</b></span>
                        </Link>

                    </div>
                </div>
            </div>
        </div >
    )
}

export default Home
