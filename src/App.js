import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleNavClick = (section) => {
    setActiveSection(section);
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="portfolio-container">
      <header>
        <nav>
          <ul>
            {['about', 'education', 'projects', 'skills', 'contact'].map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  className={activeSection === section ? 'active' : ''}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(section);
                  }}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hero">
          <h1>Gudipudi Sasanka Abhinav</h1>
          <p className="subtitle">Backend Developer</p>
          <p className="hero-description">Specializing in secure and scalable RESTful APIs with Java & Spring Boot</p>
        </div>
      </header>

      <main>
        <section id="about" className="section">
          <h2>Professional Summary</h2>
          <div className="content-box">
            <p>Backend developer experienced in designing robust, scalable REST APIs using Java and Spring Boot. Proficient in JWT, OAuth 2.0, and RBAC for secure authentication. Integrated real-time features with STOMP over WebSockets and built typo-tolerant search with ElasticSearch. Strong understanding of MySQL optimization, schema design, and Docker-based containerization.</p>
          </div>
        </section>

        <section id="education" className="section">
          <h2>Education</h2>
          <div className="content-box">
            <h3>IIIT Naya Raipur, Chhattisgarh</h3>
            <p className="date">Aug 2023 – May 2027</p>
            <p>B.Tech in Data Science and Artificial Intelligence</p>
            <ul>
              <li>CGPA: 7.54 / 10</li>
              <li>Relevant Courses: Data Structures & Algorithms, OOP, Operating Systems, DBMS, Computer Networks</li>
            </ul>
          </div>
        </section>

        <section id="projects" className="section">
          <h2>Projects</h2>
          <div className="project-grid">
            <div className="project-card">
              <h3>
                LinkSphere
                <a href="https://github.com/Abhinav1416" target="_blank" className="project-link" rel="noreferrer">
                  GitHub
                </a>
              </h3>
              <p className="project-subtitle">Professional Networking Platform — Full Stack (Backend Focus)</p>
              <ul>
                <li>Developed REST APIs for authentication, posts, profiles, connections, real-time chat, and notifications with complete validation and error handling.</li>
                <li>Designed normalized MySQL schema with relational modeling, indexing, and query profiling for performance optimization.</li>
                <li>Enabled real-time communication via STOMP over WebSockets with proper session management.</li>
                <li>Implemented ElasticSearch and Apache Lucene to support fuzzy, typo-tolerant user search.</li>
                <li>Secured user authentication with JWT (access/refresh tokens) and integrated Google OAuth 2.0 with automatic refresh handling.</li>
                <li>Built a personalized feed ranking algorithm using engagement-weighted scores from first and second-degree connections.</li>
              </ul>
            </div>

            <div className="project-card">
              <h3>
                EventVault
                <a href="https://github.com/Abhinav1416" target="_blank" className="project-link" rel="noreferrer">
                  GitHub
                </a>
              </h3>
              <p className="project-subtitle">Event Ticketing Backend System</p>
              <ul>
                <li>Developed APIs for event creation, allowing organizers to specify key metadata like title, time, venue, ticket limits, and access types.</li>
                <li>Generated QR-code-based tickets with ZXing for secure, verifiable entry supported by manual override when needed.</li>
                <li>Implemented transactional logic to prevent overbooking, ticket reuse, or availability post-deadline, ensuring accurate inventory management.</li>
                <li>Integrated Keycloak for scoped role-based access, separating organizer and collaborator privileges.</li>
                <li>Automated email dispatch of event summaries including configuration details upon setup completion.</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <h2>Technical Skills</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Programming Languages</h3>
              <ul>
                <li>Java</li>
                <li>C++</li>
                <li>Python</li>
                <li>SQL (MySQL)</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Backend Frameworks</h3>
              <ul>
                <li>Spring Boot</li>
                <li>Spring Security</li>
                <li>Hibernate</li>
                <li>Apache Lucene</li>
                <li>ZXing (QR Code)</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Web Technologies</h3>
              <ul>
                <li>REST APIs</li>
                <li>WebSocket (STOMP)</li>
                <li>API Design</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Authentication & Security</h3>
              <ul>
                <li>JWT</li>
                <li>OAuth 2.0</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Frontend (Basic)</h3>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>React.js</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Dev Tools & Platforms</h3>
              <ul>
                <li>Docker</li>
                <li>Git & GitHub</li>
                <li>Maven / Gradle</li>
                <li>Postman</li>
                <li>IntelliJ IDEA</li>
                <li>VS Code</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Databases & Search</h3>
              <ul>
                <li>MySQL</li>
                <li>ElasticSearch</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Competitive Programming</h3>
              <ul>
                <li>Codeforces Max Rating: 1336 (Pupil)</li>
                <li>LeetCode Max Rating: 1731</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <h2>Contact</h2>
          <div className="contact-info">
            <p><span role="img" aria-label="phone">📱</span> +91 73829 87369</p>
            <p><span role="img" aria-label="email">✉️</span> gudipudiabhinav2005@gmail.com</p>
            <p>
              <span role="img" aria-label="linkedin">🔗</span>
              <a href="https://linkedin.com/in/gudipudi-abhinav-a04a1728b" target="_blank" rel="noreferrer">
                LinkedIn Profile
              </a>
            </p>
            <p>
              <span role="img" aria-label="github">💻</span>
              <a href="https://github.com/Abhinav1416" target="_blank" rel="noreferrer">
                GitHub Profile
              </a>
            </p>

          </div>
        </section>
      </main>
    </div>
  );
}

export default App;