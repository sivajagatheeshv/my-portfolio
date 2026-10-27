
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import './App.css'

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="logo">
        PORT<span>FOLIO</span>
      </NavLink>

      <div className="nav-links">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/skills">Skills</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </nav>
  )
}


function Home() {
  return (
    <main className="page hero">
      <p className="tag">MSc DCS STUDENT AT CIT</p>

      <h1>
        Hi, I'm
        <br />
        <span>SIVAJAGATHEESH V</span>
      </h1>

      <p className="intro">
        I'm a first-year MSc Decision and Computing Science
        student at CIT. I'm learning programming and web
        development and trying to improve my skills.
      </p>

      <NavLink className="button" to="/projects">
        View My Projects
      </NavLink>
    </main>
  )
}


function About() {
  return (
    <main className="page">
      <p className="tag">01 / ABOUT ME</p>
      <h1>About Me</h1>

      <div className="content-card">
        <h2>SIVAJAGATHEESH V</h2>
        <p>
          I'm a first-year MSc Decision and Computing Science
          student at CIT. I'm developing my programming skills
          and exploring web development, computing, and problem-solving.
        </p>
        <p>
          My goal is to keep learning, build practical projects,
          and grow as a developer.
        </p>
        <p>
          This portfolio is one of my projects, where I'm
          learning to build a website using React, CSS and JavaScript.
        </p>
      </div>
    </main>
  )
}


function Skills() {
  const skills = [
    ['HTML5', 'Creating web pages'],
    ['CSS3', 'Styling web pages'],
    ['JavaScript', 'Learning web interactivity'],
    ['React', 'Building my portfolio'],
    ['Python', 'Programming basics'],
    ['MATLAB', 'Maths and statistics exercises']
  ]

  return (
    <main className="page">
      <p className="tag">MY SKILLS</p>
      <h1>What I'm Learning</h1>

      <p className="intro">
        These are some of the technologies I've been learning
        through my coursework and personal practice.
      </p>

      <div className="card-grid">
        {skills.map(([name, description]) => (
          <article className="content-card" key={name}>
            <h2>{name}</h2>
            <p>{description}</p>
          </article>
        ))}
      </div>
    </main>
  )
}


function Projects() {
  const projects = [
    {
      number: '01',
      name: 'FitZone Gym Management',
      technology: 'HTML · CSS · PHP',
      description:
        'A gym management website project focused on page layout and web development fundamentals.'
    },
    {
      number: '02',
      name: 'Student Performance Analysis',
      technology: 'MATLAB',
      description:
        'A statistics exercise exploring student scores, measures of dispersion, and data visualisation.'
    },
    {
      number: '03',
      name: 'Net Excess Profit Visualisation',
      technology: 'MATLAB · Double Integrals',
      description:
        'An academic demonstration exploring how double integrals can be applied to a net excess profit model.'
    }
  ]

  return (
    <main className="page">
      <p className="tag">03 / MY WORK</p>
      <h1>Projects & Coursework</h1>
      <p className="intro">
        Selected web development and computing projects.
      </p>

      <div className="card-grid">
        {projects.map((project) => (
          <article className="content-card" key={project.number}>
            <p className="tag">{project.number} / PROJECT</p>
            <h2>{project.name}</h2>
            <p className="technology">{project.technology}</p>
            <p>{project.description}</p>
          </article>
        ))}
      </div>
    </main>
  )
}

function Contact() {
  return (
    <main className="page">
      <p className="tag">04 / GET IN TOUCH</p>
      <h1>Let's Connect.</h1>

      <div className="content-card">
        <p>
          Thanks for visiting my portfolio! You can connect with
          me through the links below.
        </p>

        <div className="contact-links">
          <a href="https://github.com/sivajagatheeshv" target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
          <a href="www.linkedin.com/in/sivajagatheesh-v-936697420" target="_blank" rel="noreferrer">
            LinkedIn ↗
          </a>
        </div>
      </div>
    </main>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div className="portfolio">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <footer>
          SIVAJAGATHEESH V · Built with React © 2026
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App
