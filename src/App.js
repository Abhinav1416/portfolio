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
            {['about', 'education', 'projects', 'skills', 'achievements', 'coursework', 'contact'].map((section) => (
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
        </div>
      </header>

      <main>
        <section id="about" className="section">
          <h2>Professional Summary</h2>
          <div className="content-box">
            <p>Backend developer with practical experience building secure, scalable microservices and REST APIs using Java and Spring Boot. Delivered robust authentication with Keycloak, OAuth 2.0, and JWT. Integrated Kafka for event-driven workflows and applied Resilience4j to handle failures gracefully. Deployed real-time systems via STOMP over WebSockets and optimized search with Apache Lucene. Boosted performance through Redis caching and tuned persistence with PostgreSQL. Containerized environments with Docker.</p>
          </div>
        </section>

        <section id="education" className="section">
          <h2>Education</h2>
          <div className="content-box">
            <h3>IIIT Naya Raipur, Chhattisgarh</h3>
            <p className="date">Aug 2023 – May 2027 (Expected)</p>
            <p>B.Tech in Data Science and Artificial Intelligence</p>
            <ul>
              <li>CGPA: 7.54 / 10</li>
            </ul>
          </div>
        </section>

        <section id="projects" className="section">
          <h2>Projects</h2>
          <div className="project-grid">

            <div className="project-card">
              <h3>
                CommerceCore
                <a href="https://github.com/Abhinav1416/CommerceCore-Microservices" target="_blank" className="project-link" rel="noreferrer">
                  GitHub
                </a>
              </h3>
              <p className="project-subtitle">E-commerce Microservices Backend</p>
              <ul>
                <li>Architected a modular e-commerce system with isolated microservices for products, users, orders, reviews, and cart.</li>
                <li>Streamlined communication through <strong>Kafka (KRaft mode)</strong> to trigger review propagation and order workflows.</li>
                <li>Applied <strong>CircuitBreaker</strong>, <strong>Retry</strong>, <strong>RateLimiter</strong>, and <strong>Bulkhead</strong> patterns via <strong>Resilience4j</strong> to ensure service resilience.</li>
                <li>Secured APIs with <strong>Keycloak</strong>, <strong>OAuth2</strong>, and <strong>JWT</strong>, including custom email templates for account actions.</li>
                <li>Reduced DB load by caching product metadata with <strong>Redis</strong>.</li>
              </ul>
            </div>

            <div className="project-card">
              <h3>
                LinkSphere
                <a href="https://github.com/Abhinav1416/LinkSphere" target="_blank" className="project-link" rel="noreferrer">
                  GitHub
                </a>
              </h3>
              <p className="project-subtitle">Professional Networking Platform</p>
              <ul>
                <li>Implemented <strong>Google OAuth</strong>-based authentication, JWT <strong>access/refresh</strong> token handling, and secure <strong>password reset and recovery</strong> flows.</li>
                <li>Developed an engagement-based algorithm to rank user connections by activity and relationship depth.</li>
                <li>Built real-time messaging using <strong>STOMP over WebSockets</strong> with dynamic presence tracking.</li>
              </ul>
            </div>

            <div className="project-card">
              <h3>
                EventVault
                <a href="https://github.com/Abhinav1416/EventVault" target="_blank" className="project-link" rel="noreferrer">
                  GitHub
                </a>
              </h3>
              <p className="project-subtitle">Event Ticketing Backend System</p>
              <ul>
                <li>Generated encrypted QR codes with <strong>ZXing</strong> for ticket validation and fallback manual override.</li>
                <li>Enforced ticket integrity through transactional rules—prevented overbooking, blocked resale, and auto-closed availability.</li>
                <li>Restricted access by defining scoped roles in <strong>Keycloak</strong> for organizers and collaborators.</li>
              </ul>
            </div>

          </div>
        </section>

        <section id="skills" className="section">
          <h2 className="text-2xl font-bold mb-6">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-2 text-slate-700">Languages</h3>
              <p className="text-slate-500">Java, Python, SQL</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2 text-slate-700">Backend</h3>
              <p className="text-slate-500">Spring Boot, Spring Security, Hibernate, REST APIs, WebSocket (STOMP), ZXing, Apache Kafka</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2 text-slate-700">Auth & Security</h3>
              <p className="text-slate-500">Keycloak, OAuth 2.0, JWT</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2 text-slate-700">Databases & Caching</h3>
              <p className="text-slate-500">PostgreSQL, Redis</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2 text-slate-700">Search Technologies</h3>
              <p className="text-slate-500">Apache Lucene, Hibernate Search</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2 text-slate-700">DevOps & Tools</h3>
              <p className="text-slate-500">Docker, Git, GitHub, Maven, Gradle, Postman, IntelliJ IDEA, VS Code</p>
            </div>
          </div>
        </section>

        {/* New Achievements Section */}
        <section id="achievements" className="section">
          <h2>Achievements</h2>
          <div className="content-box">
            <ul>
              <li><strong>Codeforces:</strong> Max Rating <strong>1336</strong> (Pupil)</li>
              <li><strong>LeetCode:</strong> Max Rating <strong>1731</strong> (Top 10% globally)</li>
            </ul>
          </div>
        </section>

        {/* New Coursework Section */}
        <section id="coursework" className="section">
          <h2>Relevant Coursework</h2>
          <div className="content-box">
            <ul>
              <li>Data Structures and Algorithms</li>
              <li>Distributed Systems</li>
              <li>Database Management Systems (DBMS)</li>
              <li>Operating Systems</li>
              <li>Object-Oriented Programming</li>
              <li>Computer Networks</li>
              <li>Introduction to Competitive Programming</li>
            </ul>
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