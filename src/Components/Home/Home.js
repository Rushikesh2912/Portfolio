import React from 'react';
import { Link } from 'react-router-dom';
import img from '../Images/photo.png';
import './Home.css';

const Home = () => {
    return (
        <div className="container-fluid">
            <div className="row vh-100 justify-content-center align-items-center">
                <div className="col-lg-4 col-md-6 col-sm-8">
                    <div className="Imgspinner" role="status">
                        <img src={img} alt="" style={{ width: '100%', borderRadius: '50%' }} />
                    </div>
                </div>

                <div className="col-lg-5 col-md-8 col-sm-12">
                    <h1 className="typping-text-hello" style={{ fontSize: '5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                        <span className="typing-animation">Hello...!</span>
                    </h1>

                    <p style={{ fontSize: '1.4rem', marginBottom: 0, fontWeight: 900 }}>A Bit About Me</p>

                    <h5 className="typing-text" style={{ marginBottom: '3rem', fontFamily: 'monospace' }}>
                        Software engineer passionate about creating innovative solutions to real-world problems. Experienced in full-stack web development, with expertise in MERN Stack.
                    </h5>

                    <div className="d-flex justify-content-center">
                        <Link to="/resume" className="mySpinner mx-2" role="status" id="myResumeLink">
                            <span className="circle-span"><b>Resume</b></span>
                        </Link>
                        <Link to="/project" className="mySpinner mx-2" role="status" id="myProjectLink">
                            <span className="circle-span"><b>Project</b></span>
                        </Link>
                        <Link to="/contact" className="spinner mySpinner mx-2" role="status" id="myContactLink">
                            <span className="circle-span"><b>Contact</b></span>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;
