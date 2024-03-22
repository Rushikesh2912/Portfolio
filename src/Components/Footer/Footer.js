import React from 'react';
import './Footer.css'; // Import CSS file

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="containers text-center">
                <div className="footer row row-cols-1 row-cols-sm-2 row-cols-md-4">
                    <div className="col">
                        <p className='my-1 footer-name'>Phone</p>
                        <p style={{ color: 'white' }}>+91 9623548002</p>
                    </div>
                    <div className="col">
                        <p className='my-1 footer-name'>Email</p>
                        <p style={{ color: 'white' }}>omkumar7828@gmail.com</p>
                    </div>
                    <div className="col">
                        <div className="my-1">
                            <p className='footer-name text-center'>Follow me</p>
                        </div>
                        <div className="d-flex justify-content-center">
                            <a href="https://github.com/Rushikesh2912" target="_blank" rel="noopener noreferrer">
                                <i style={{ fontSize: '23px', cursor: 'pointer', color: 'white' }} className="fa-brands fa-github mx-2"></i>
                            </a>
                            <a href="https://www.instagram.com/rushikesh_shinde_828" target="_blank" rel="noopener noreferrer">
                                <i style={{ fontSize: '23px', cursor: 'pointer', color: 'white' }} className="fa-brands fa-instagram mx-2"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/rushikeshshinde7828" target="_blank" rel="noopener noreferrer">
                                <i style={{ fontSize: '23px', cursor: 'pointer', color: 'white' }} className="fab fa-linkedin-in mx-2"></i>
                            </a>
                            <a href="https://twitter.com/Rushike32313211" target="_blank" rel="noopener noreferrer">
                                <i style={{ fontSize: '23px', cursor: 'pointer', color: 'white' }} className="fa-brands fa-twitter mx-2"></i>
                            </a>
                        </div>
                    </div>

                    <div className="col">
                        <p className='my-4 footer-name'>&copy; 2024 By Rushikesh Shinde.</p>
                    </div>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="svg-background" style={{width: '100%'}}>
                <path fill="#273036" fillOpacity="1" d="M0,160L26.7,144C53.3,128,107,96,160,80C213.3,64,267,64,320,90.7C373.3,117,427,171,480,160C533.3,149,587,75,640,58.7C693.3,43,747,85,800,101.3C853.3,117,907,107,960,96C1013.3,85,1067,75,1120,90.7C1173.3,107,1227,149,1280,176C1333.3,203,1387,213,1413,218.7L1440,224L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path>
            </svg>
        </div>
    )
}

export default Footer;
