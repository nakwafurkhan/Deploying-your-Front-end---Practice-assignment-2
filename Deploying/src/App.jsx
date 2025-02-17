import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <header>
        <nav>
          <h2>Furkhan Nakwa</h2>
          <input type="checkbox" id="nav-toggle" className="nav-toggle" />
          <label htmlFor="nav-toggle" className="nav-toggle-label">
            <span></span>
            <span></span>
            <span></span>
          </label>
          <div className="nav-links">
            <a href="#portfolio">Portfolio</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      </header>

      <main>
        <div className="hero">
          <div className="hero-content">
            <h1>Furkhan Nakwa</h1>
            <p className="subtitle">Crafting Digital Experiences with Classical Elegance</p>
          </div>

          <div className="separator">
            <div className="line"></div>
            <svg className="scroll-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M12 5L12 19M12 19L18 13M12 19L6 13" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div className="line"></div>
          </div>

          <div className="intro-card">
            <p>
              Welcome to my digital atelier. As a software engineer with a passion for combining 
              classical aesthetics with modern technology, I create elegant solutions that stand 
              the test of time. My work is guided by principles of clarity, proportion, and harmony.
            </p>
            <button className="cta-button">Explore My Works</button>
          </div>
        </div>

        <section className="features">
          <div className="feature-card">
            <h3>Expertise</h3>
            <ul>
              <li>Frontend Architecture</li>
              <li>Backend Development</li>
              <li>System Design</li>
            </ul>
          </div>
          
          <div className="feature-card">
            <h3>Recent Works</h3>
            <ul>
              <li>E-Commerce Platform</li>
              <li>Analytics Dashboard</li>
              <li>Mobile Application</li>
            </ul>
          </div>
        </section>

        <footer>
          <h3>Connect</h3>
          <div className="social-links">
            <a href="#" aria-label="Email">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <rect x="2" y="4" width="20" height="16" rx="2" strokeWidth="2"/>
                <path d="M22 4L12 12L2 4" strokeWidth="2"/>
              </svg>
            </a>
            <a href="#" aria-label="GitHub">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M12 2C6.47715 2 2 6.47715 2 12C2 16.4129 4.88438 20.0992 8.83838 21.4878C9.33838 21.5875 9.52513 21.2875 9.52513 21.0252C9.52513 20.7878 9.51175 19.9878 9.51175 19.1502C7 19.6129 6.35 18.5002 6.15 17.9252C6.0375 17.6502 5.55 16.7502 5.125 16.5129C4.775 16.3252 4.275 15.8625 5.1125 15.8502C5.9 15.8378 6.4625 16.6252 6.65 16.9129C7.55 18.4375 8.9875 17.9625 9.5625 17.7002C9.6625 17.0252 9.9625 16.5752 10.3 16.3252C7.975 16.0752 5.55 15.2002 5.55 11.4752C5.55 10.3875 5.92513 9.4875 6.675 8.7875C6.5625 8.5375 6.225 7.5125 6.775 6.1375C6.775 6.1375 7.6125 5.875 9.525 7.1625C10.325 6.9375 11.175 6.825 12.025 6.825C12.875 6.825 13.725 6.9375 14.525 7.1625C16.4375 5.8625 17.275 6.1375 17.275 6.1375C17.825 7.5125 17.4875 8.5375 17.375 8.7875C18.125 9.4875 18.5 10.3752 18.5 11.4752C18.5 15.2125 16.0625 16.0752 13.7375 16.3252C14.1625 16.6375 14.5375 17.2375 14.5375 18.1752C14.5375 19.5125 14.525 20.6875 14.525 21.0252C14.525 21.2875 14.7125 21.6 15.2125 21.4878C19.1165 20.0992 22 16.4129 22 12C22 6.47715 17.5228 2 12 2Z" strokeWidth="2"/>
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <rect x="2" y="2" width="20" height="20" rx="2" strokeWidth="2"/>
                <path d="M8 10V16M8 7V7.01M16 16V11.5C16 10.1193 14.8807 9 13.5 9C12.1193 9 11 10.1193 11 11.5V16" strokeWidth="2"/>
              </svg>
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;