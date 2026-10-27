import "./App.css";
import { IoMdDownload, IoMdMail } from "react-icons/io";
import { FaGithub, FaLinkedin,FaFlutter  } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMysql,SiDjango,SiVisualparadigm,SiFirebase,SiDart } from "react-icons/si";
import { BsBootstrapFill } from "react-icons/bs";
import { VscVscode } from "react-icons/vsc";
import {
  FaBriefcase,
  FaCogs,
  FaGraduationCap,
  FaHeart,
  FaCode,
  FaDatabase,
  FaGlobe,
  FaHtml5,
  FaCss3,
  FaReact,
  FaLaravel,
  FaPhp,
  FaPython,
  FaTools
} from "react-icons/fa";
import { FiSmartphone } from "react-icons/fi";
import { BsJavascript } from "react-icons/bs";
import logo from "./assets/logo.png";
import about from "./assets/about.png";
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
              <a href="#about">À propos</a>
            </li>
            <li>
              <a href="#competences">Compétences</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#projects">Projets</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="content">
        <div className="presentation">
          <div className="presentation-text" id="about">
            <h1>Bonjour je suis,</h1>

            <h2>
              <span className="prenom">Jenny</span>{" "}
              <span className="nom">HOUNDONOUGBO</span>
            </h2>

            <p>Passionnée par la technologie et la création de solutions</p>
            <p>numériques, je conçois des applications web et mobiles</p>
            <p>qui allient performance, design et expérience utilisateur.</p>

            <div className="buttons">
              <div className="button1">
                <a href="#projects">Voir mes projets</a>
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
      <div className="stats">
        <div className="stat">
          <FaBriefcase className="stat-icon" />
          <div className="stat-info">
            <p>4+</p>
            <h3>Projets réalisés</h3>
          </div>
        </div>
        <div className="stat">
          <FaCogs className="stat-icon" />
          <div className="stat-info">
            <p>5+</p>
            <h3>Technologies maîtrisées</h3>
          </div>
        </div>
        <div className="stat">
          <FaGraduationCap className="stat-icon" />
          <div className="stat-info">
            <h3>Licence en </h3>
            <h3>Informatique de Gestion</h3>
          </div>
        </div>
        <div className="stat">
          <FaHeart className="stat-icon" />
          <div className="stat-info">
            <h3>Motivée pour la suite</h3>
          </div>
        </div>
      </div>
      <div className="about">
        <div className="about-text">
          <ul>
            <li>
              <h2 style={{ color: "#622EDD" }}>À propos de moi</h2>
            </li>
          </ul>
          <h3>Je transforme vos idées en</h3>
          <h3 style={{ color: "#622EDD" }}>solutions digitales</h3>
          <p>
            Je suis Jenny HOUNDONOUGBO, développeuse spécialisée en informatique
            de gestion,
          </p>
          <p>
            Analyse Informatique et Programmation, titulaire d’une Licence en
            Informatique de Gestion.
          </p>
          <p>
            J’interviens sur l’ensemble du cycle de développement, de l’analyse
            des besoins et de la
          </p>
          <p>
            conception jusqu’au développement, aux tests et à la mise en
            production.
          </p>
        </div>
        <div className="presentation-image">
          <img src={about} alt="About" className="about-image" />
        </div>
      </div>
      <div className="divcomp">
        <div className="developpement">
          <div className="web">
            <FaCode className="dev-icon" />
            <p>Développement Web</p>
          </div>
          <div className="mobile">
            <FiSmartphone className="dev-icon" />
            <p>Développement Mobile</p>
          </div>
        </div>
        <div className="others">
          <div className="base">
            <FaDatabase className="dev-icon" />
            <p>Base de données</p>
          </div>
          <div className="analyse">
            <FaCogs className="dev-icon" />
            <p>Analyse Informatique</p>
          </div>
        </div>
      </div>
      <div className="competence" id="competences">
        <ul>
          <li>
            <h2 style={{ color: "#622EDD" }}>Mes Compétences</h2>
          </li>
        </ul>
        <h3>Des technologies que je maîtrise et que j’aime utiliser</h3>
        <p>
          Au fil de mes projets et de ma formation, j’ai développé des
          compétences solides dans plusieurs domaines du déeloppement.
        </p>
        <div className="competence-list">
          <div className="competence-item">
            <FaGlobe className="dev-icon" />
            <h4 style={{marginTop:"0"}}>FrontEnd</h4>
            <div className="html">
              <FaHtml5 className="icon-html" />
              <p>HTML</p>
            </div>
            <div className="css">
              <FaCss3 className="icon-css" />
              <p>CSS</p>
            </div>
            <div className="javascript">
              <BsJavascript className="icon-javascript" />
              <p>JavaScript</p>
            </div>
            <div className="react">
              <FaReact className="icon-react" />
              <p>React js</p>
            </div>
            <div className="tailwind">
              <RiTailwindCssFill className="icon-tailwind" />
              <p>Tailwind CSS</p>
            </div>
          </div>
          <div className="competence-item">
            <FaDatabase className="dev-icon" />
            <h4 style={{marginTop:"0"}}>Backend</h4>
            <div className="laravel">
              <FaLaravel className="icon-laravel" />
              <p>Laravel</p>
            </div>
            <div className="php">
              <FaPhp className="icon-php" />
              <p>PHP</p>
            </div>
            <div className="django">
              <SiDjango className="icon-django" />
              <p>Django</p>
            </div>
            <div className="python">
              <FaPython className="icon-python" />
              <p>Python</p>
            </div>
            <div className="mysql">
              <SiMysql className="icon-mysql" />
              <p>MySQL</p>
            </div>
          </div>
          <div className="competence-item">
            <FaTools  className="dev-icon" />
            <h4 style={{marginTop:"0"}}>Outils & Divers</h4>
            <div className="laravel">
              <FaGithub className="icon-git" />
              <p>Git & GitHub</p>
            </div>
            <div className="vscode">
              <VscVscode className="icon-vscode" />
              <p>VS Code</p>
            </div>
            <div className="bootstrap">
              <BsBootstrapFill className="icon-bootstrap" />
              <p>Bootstrap</p>
            </div>
            <div className="paradigm">
              <SiVisualparadigm className="icon-paradigm" />
              <p>Visual Paradigm</p>
            </div>
          </div>
          <div className="competence-item">
            <FiSmartphone  className="dev-icon" />
            <h4 style={{marginTop:"0"}}>Mobile</h4>
            <div className="flutter">
              <FaFlutter  className="icon-flutter" />
              <p>Flutter</p>
            </div>
            <div className="dart">
              <SiDart   className="icon-dart" />
              <p>Dart</p>
            </div>
            <div className="firebase">
              <SiFirebase className="icon-firebase" />
              <p>Firebase</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
