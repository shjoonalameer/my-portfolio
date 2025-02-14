'use client';

import './globals.css';

/*import Image from 'next/image';*/

export default function Home() {
  return (
    <div className="container">
      {/* Header Section */}
      <div className="header">
        <nav className="navLinks">
          <a href="mailto:shjoonsultan@hotmail.com">Email Me</a>
          <a href="https://www.linkedin.com/in/shjoon-binalameer-4a4148207/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="/MyResume.pdf" target="_blank">Resume</a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="content">
        <div className="logoSection">
        <img src="/my-portfolio/mylogo2.png" alt="Logo" className="logo" width="550" height="340" />

          <h1>Shjoon Binalameer</h1>
          <p className="title">Information Technology</p>
        </div>

        <div className="aboutMe">
          <h2>About Me</h2>
          <p>
            A final-year Information Technology student specializing in Cybersecurity,<br />
            passionate about combining security and user experience (UX/UI) design.
          </p>
        </div>
      </div>
    </div>
  );
}
