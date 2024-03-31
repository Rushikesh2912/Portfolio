import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import pic from '../Images/om dada.jpg';
import './Home.css';

const Home = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollX;
            const windowHeight = window.innerHeight;
            const elementOffset = document.querySelector('.animate-on-scroll').offsetTop;

            if (scrollPosition > elementOffset - windowHeight / 1.5) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="container-fluid">
            <div style={{}} className="row vh-200 justify-content-center align-items-center">
                <div className={`col-lg-4 col-md-6 col-sm-8 animate-on-scroll ${isVisible ? 'fade-in-left' : ''}`}>
                    <div className="Imgspinner" role="status">
                        <img src={pic} alt="img..." style={{ width: '100%', borderRadius: '50%' }} />
                    </div>
                </div>

                <div className={`col-lg-5 col-md-8 col-sm-12 animate-on-scroll ${isVisible ? 'fade-in-right' : ''}`}>
                    <h1 className="typping-text-hello" style={{ fontSize: '5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                        <span className="typing-animation">Hello...!</span>
                    </h1>

                    <p style={{ fontSize: '1.4rem', marginBottom: 0, fontWeight: 900 }} className="animate-on-scroll">
                        A Bit About Me
                    </p>

                    <h5 className="typing-text animate-on-scroll" style={{ marginBottom: '3rem', fontFamily: 'monospace' }}>
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
