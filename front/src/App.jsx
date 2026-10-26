import "./App.css";
import { IoMdDownload, IoMdMail } from "react-icons/io";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import logo from "./assets/logo.png";
function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="navbar-logo">
          <div className="button3">
            <a href="/">JH</a>
          </div>
          <ul>
            <li>
              <a href="/">Accueil</a>
            </li>
            <li>
              <a href="/about">À propos</a>
            </li>
            <li>
              <a href="/competences">Compétences</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/projects">Projets</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="content">
        <div className="presentation">
          <div className="presentation-text">
            <h1>Bonjour je suis,</h1>

            <h2>
              <span className="prenom">Jenny</span>{" "}
              <span className="nom">HOUNDONOUGBO</span>
            </h2>

            <p>
              Passionnée par la technologie et la création de solutions
              numériques, je conçois des applications web et mobiles qui allient
              performance, design et expérience utilisateur.
            </p>

            <div className="buttons">
              <div className="button1">
                <a href="/projects">Voir mes projets</a>
                <IoMdDownload className="download-icon" />
              </div>

              <div className="button2">
                <IoMdMail className="mail-icon" />
                <a href="/contact">Me contacter</a>
              </div>
            </div>
            <div className="social-icons">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:your.email@example.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoMdMail />
              </a>
            </div>
          </div>

          <div className="presentation-image">
            <img src={logo} alt="Profile" className="profile-image" />
          </div>
        </div>
      </div>
      <hr className="trait-blanc" />
    </div>
  );
}
export default App;
