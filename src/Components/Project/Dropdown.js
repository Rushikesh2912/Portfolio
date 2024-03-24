import React, { useState, useEffect } from 'react';
import C1 from '../Images/C1.png';
import C2 from '../Images/C2.png';
import { Link } from 'react-router-dom';
import './Dropdown.css'; // Import CSS for styling

const Dropdown = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lastScrollPos, setLastScrollPos] = useState(0);

  const majorProjectImages = [C1, C2];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % majorProjectImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [majorProjectImages.length]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  // Function to toggle content visibility
  const toggleContent = () => {
    setIsVisible(!isVisible);
  };

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
    <div className='project-section'>
      <button className="btn me-md-2 my-btn" type="button" onClick={toggleContent}>
        {isVisible ? 'Hide Project' : 'Show More Project'}
        <i class="fas fa-chevron-down"></i>
      </button>
      <div className={`content ${isVisible ? 'show' : ''}`}>
        <div className="row">
          <div className="col-md-6 my-4">
            <p className='course-name'>4. Mini-Project: Currency Converter</p>
            <span className='m-3'><b>Github Repository:</b></span>
            <Link to="https://github.com/Rushikesh2912/Currency-Converter" target="_blank" rel="noopener noreferrer">
              <i style={{ fontSize: '30px', cursor: 'pointer', color: 'black' }} className="fa-brands fa-github"></i>
            </Link>
            <p className='m-2 description'>A versatile tool for converting between different currencies effortlessly. It offers a straightforward interface, allowing users to input the desired amount and select the currencies they wish to convert. With instant conversion results, users can quickly obtain the equivalent amount in their desired currency. Whether for travel, business, or personal finance, this application streamlines the currency conversion process. Powered by up-to-date exchange rates, it ensures accurate and reliable conversions. Its user-friendly design enhances usability, catering to a wide range of users. With just a few clicks, users can access valuable currency conversion information anytime, anywhere. Simplify your currency conversions with the Currency Converter application. Experience seamless currency exchange and make informed financial decisions on the go.</p>
          </div>
          <div className="col-md-6 my-4">
            {majorProjectImages.map((image, index) => (
              <div className={`carousel-item ${index === currentIndex ? 'active' : ''}`} key={index}>
                <div id="imageContainer">
                  <img className={`d-block w-100 ${isVisible ? 'fade-in' : ''}`} src={image} alt="" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
