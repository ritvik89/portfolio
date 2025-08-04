import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Header Section */}
      <header className="header">
        <h1>
          Hi, I'm <span className="highlight">Ritvik Chandrikapure</span>
        </h1>
        <p>MCA Graduate | Web Developer | React.js Enthusiast</p>
        <div className="socials">
          <a href="https://github.com/ritvik89" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/ritvik-chandrikapure" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="mailto:ritvikchandrikapure@gmail.com">
            <FaEnvelope />
          </a>
        </div>

        {/* Resume Button */}
        <div style={{ marginTop: "20px" }}>
          <a
            href={`${import.meta.env.BASE_URL}RitvikResume.pdf`}
            target="_blank"
            rel="noreferrer"
            className="resume-btn"
          >
            View My Resume
          </a>


        </div>
      </header>

      {/* About Section */}
      <section className="about">
        <h2>About Me</h2>
        <p>
          I'm Ritvik Chandrikapure, an MCA (Master of Computer Applications) graduate specializing in Information Technology.
          I have a strong foundation in web development, with skills in HTML, CSS, JavaScript, React.js, Node.js,
          and MongoDB. I am passionate about building responsive and user-friendly web applications and have
          completed several academic and personal projects during my MCA. My goal is to work as a Web Developer
          in a reputed IT company where I can apply my skills, learn new technologies, and contribute to innovative solutions.
        </p>
      </section>

      {/* Skills Section */}
      <section className="skills">
        <h2>Technical Skills</h2>
        <ul>
          <li>Frontend: HTML, CSS, JavaScript, React.js</li>
          <li>Backend: Node.js, Express.js</li>
          <li>Database: MongoDB</li>
          <li>Tools: Git, GitHub, VS Code</li>
        </ul>
      </section>

      {/* Education Section */}
      <section className="education">
        <h2>Education</h2>
        <div className="edu-card">
          <h3>MCA - Master of Computer Applications</h3>
          <p>Ranibai Agnihotri Institude Of CS & IT</p>
          <p>RTMNU University (2024)</p>
        </div>
        <div className="edu-card">
          <h3>B.SC - Bachelor of Science</h3>
          <p>DRB Sindhu Mahavidyalaya</p>
          <p>RTMNU University (2021)</p>
        </div>
      </section>

      {/* Experience  */}
  <section className="experience">
  <h2>Experience</h2>
  <div className="edu-card">
    <h3>Software Development Intern | MSIT Services-CMS, Nagpur</h3>
    <p><i>Jan 2024 – June 2024</i></p>
    <ul>
      <li>Developed a live face detection system using OpenCV for real-time facial recognition.</li>
      <li>Optimized computer vision algorithms to enhance accuracy and processing speed.</li>
    </ul>
  </div>
</section>


      {/* Projects Section */}
      <section className="projects">
        <h2>Projects</h2>
        <div className="project-card">
          <h3>Portfolio Website</h3>
          <p>A personal portfolio built using React.js</p>
          <a href="https://github.com/ritvik89/portfolio" target="_blank" rel="noreferrer">
            View Project
          </a>
        </div>
        <div className="project-card">
          <h3>Online Fitness Center</h3>
          <p>MERN Stack web app for workouts & fitness tracking.</p>
          <a href="https://github.com/ritvik89/online-fitness-center.git" target="_blank" rel="noreferrer">
            View Project
          </a>
        </div>
        <div className="project-card">
          <h3>Spotify Clone</h3>
          <p>Front-end clone of Spotify using HTML & CSS.</p>
          <a href="https://github.com/ritvik89/Spotify-Clone.git" target="_blank" rel="noreferrer">
            View Project
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <h2>Contact Me</h2>
        <p>📞 Phone: <a href="#">+91 8975585801</a></p>
        <p>📧 Email: <a href="mailto:ritvikchandrikapure@gmail.com">ritvikchandrikapure@gmail.com</a></p>
        <p>🔗 LinkedIn: <a href="https://linkedin.com/in/ritvik-chandrikapure" target="_blank" rel="noreferrer">linkedin.com/in/ritvik</a></p>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2025 Ritvik | All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
