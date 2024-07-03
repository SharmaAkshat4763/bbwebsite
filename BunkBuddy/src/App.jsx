import React, { useState } from 'react';
import profileImage from './assets/icon.png'; // Make sure to save the image in the src directory
import resumePDF from './assets/resume.pdf'; // Import the PDF file
import apk from './assets/bunkbuddy.apk';
import Footer from './Footer';

const Portfolio = () => {
  const [downloadCount, setDownloadCount] = useState(0);

  const handleDownloadClick = () => {
    setDownloadCount(downloadCount + 1);
  };

  return (
    <>
      <div className="portfolio">
        <header className="header">
          <div className="logo">
            <img src='https://i.ibb.co/xGdJhZs/2.png' alt="profile" height="100px"/>
          </div>

          <nav className="navigation">
          <a href="https://bunkbuddy.netlify.app/two">Try Web??</a>
            <a href={resumePDF} download="Akshat_Resume.pdf">Developer</a>
            <a href="https://github.com/akshat4763">Projects</a>
            
            {/* <a href="#">Contacts</a> */}
            <a href="#">|</a>
          </nav>
          <div className="social-media">
            <a href="https://www.instagram.com/_akshat4763/" className="icon">
              <img src='https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/instagram-white-icon.png' width="20px" alt="Instagram"/>
            </a>
            <a href="https://www.linkedin.com/in/akshat-sharma4763/" className="icon">
              <img src='https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/linkedin-app-white-icon.svg' width="20px" alt="LinkedIn"/>
            </a>
            <a href="https://github.com/akshat4763" className="icon">
              <img src='https://img.icons8.com/?size=100&id=38362&format=png&color=FFFFFF' width="20px" alt="GitHub"/>
            </a>
            <a href="https://x.com/Akshat9570" className="icon">
              <img src='https://img.icons8.com/?size=100&id=A4DsujzAX4rw&format=png&color=FFFFFF' width="20px" alt="Twitter"/>
            </a>
          </div>
        </header>
        <main className="main-content">
          <div className="intro">
            <h1>HI, I'M ATTENDANCE CALCULATOR</h1>
            <h2>BUNKBUDDY</h2>
            <p>Built with React Native, helps college students manage their attendance and plan bunks without worrying about shortages. By offering real-time tracking and strategic suggestions, the app ensures students can balance their academic and personal lives effectively.</p>
            <a href={apk} download="bunkbuddy.apk" className="view-projects-btn" onClick={handleDownloadClick}>
              <img className='link' src='https://img.icons8.com/?size=100&id=92&format=png&color=FFFFFF' alt="Download Icon" />
              Download For Android
            </a>
            {/* <p style={{ color: 'grey', marginTop: '10px', padding:'10px' }}>Downloaded {downloadCount} times</p> */}
          </div>
          <div className="profile-image-container">
            <img src={profileImage} alt="Akshat" className="profile-image" />
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Portfolio;
