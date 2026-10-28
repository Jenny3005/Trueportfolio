import "./App.css";
import { useState, useEffect } from "react";
import { IoMdDownload, IoMdMail, IoIosSend } from "react-icons/io";
import { FaGithub, FaLinkedin, FaFlutter } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { CiCircleCheck, CiCircleChevRight, CiLocationOn } from "react-icons/ci";
import {
  SiMysql,
  SiDjango,
  SiVisualparadigm,
  SiFirebase,
  SiDart,
  SiMediamarkt,
} from "react-icons/si";
import { BsBootstrapFill, BsJavascript } from "react-icons/bs";
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
  FaTools,
} from "react-icons/fa";
import { FiSmartphone } from "react-icons/fi";
import logo from "./assets/logo.png";
import culture from "./assets/culture.png";
import about from "./assets/about.png";
import sigrh from "./assets/sigrh.png";
import shop from "./assets/shop.png";
import eventflow from "./assets/eventflow.png";
function App() {
  const phrases = [
    "Développeuse web et mobile",
    "Je donne vie à des idées numériques",
  ];

  const [phraseIndex, setPhraseIndex] = useState(0);
  const [texte, setTexte] = useState("");
  const [effacement, setEffacement] = useState(false);

  useEffect(() => {
    const phrase = phrases[phraseIndex];

    const delai = effacement ? 50 : 100;

    const timer = setTimeout(() => {
      if (!effacement) {
        setTexte(phrase.substring(0, texte.length + 1));

        if (texte.length + 1 === phrase.length) {
          setTimeout(() => setEffacement(true), 1200);
        }
      } else {
        setTexte(phrase.substring(0, texte.length - 1));

        if (texte.length === 1) {
          setEffacement(false);
          setPhraseIndex((phraseIndex + 1) % phrases.length);
        }
      }
    }, delai);

    return () => clearTimeout(timer);
  }, [texte, effacement, phraseIndex]);
  const [filtre, setFiltre] = useState("Tous");
  const projets = [
    { id: 1, categorie: "Web", technologies: ["Laravel", "MySQL"] },
    {
      id: 2,
      categorie: "Web",
      technologies: ["Laravel", "MySQL", "Bootstrap"],
    },
    {
      id: 3,
      categorie: "Web",
      technologies: ["React js", "MySQL", "Django"],
    },
    {
      id: 4,
      categorie: "Mobile",
      technologies: ["Flutter", "Firebase"],
    },
  ];

  const projetsFiltres = projets.filter((projet) => {
    if (filtre === "Tous") return true;

    if (filtre === "Web" || filtre === "Mobile") {
      return projet.categorie === filtre;
    }

    return projet.technologies.includes(filtre);
  });
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
            <h1 className="typing-title">
              {texte}
              <span className="typing-cursor">|</span>
            </h1>

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
            <h4 style={{ marginTop: "0" }}>FrontEnd</h4>
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
            <h4 style={{ marginTop: "0" }}>Backend</h4>
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
            <FaTools className="dev-icon" />
            <h4 style={{ marginTop: "0" }}>Outils & Divers</h4>
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
            <FiSmartphone className="dev-icon" />
            <h4 style={{ marginTop: "0" }}>Mobile</h4>
            <div className="flutter">
              <FaFlutter className="icon-flutter" />
              <p>Flutter</p>
            </div>
            <div className="dart">
              <SiDart className="icon-dart" />
              <p>Dart</p>
            </div>
            <div className="firebase">
              <SiFirebase className="icon-firebase" />
              <p>Firebase</p>
            </div>
          </div>
        </div>
      </div>
      <div className="services" id="services">
        <ul>
          <li>
            <h2 style={{ color: "#622EDD" }}>Mes Services</h2>
          </li>
        </ul>
        <h3>Des services que je propose pour vos projets</h3>
        <p>
          De la conception au déploiement, j’accompagne vos projets digitaux
          avec expertise et passion
        </p>
        <div className="service-list1">
          <div className="service-item1">
            <h4 style={{ color: "#13ea30" }}>Développement mobile</h4>
            <p>Applications mobiles pour IOS et Android avec Flutter</p>
            <div className="div">
              <CiCircleCheck className="check-icon" />
              <p>IOS & Android natifs</p>
            </div>
            <div className="div">
              <CiCircleCheck className="check-icon" />
              <p>Notifications push</p>
            </div>
            <div className="div">
              <CiCircleCheck className="check-icon" />
              <p>APIs en temps réel</p>
            </div>
          </div>
          <div className="service-item2">
            <h4 style={{ color: "#E9800F" }}>Développement Web</h4>
            <p>Applications webs complètes de l’interface au backend</p>
            <div className="div">
              <CiCircleCheck className="check-icon2" />
              <p>Tableaux de bord</p>
            </div>
            <div className="div">
              <CiCircleCheck className="check-icon2" />
              <p>APIs RESTFUL</p>
            </div>
            <div className="div">
              <CiCircleCheck className="check-icon2" />
              <p>Applications SPA</p>
            </div>
          </div>
          <div className="service-item3">
            <h4 style={{ color: "#1692D1" }}>Base de données</h4>
            <p>Architectures et optimisation de bases de données </p>
            <div className="div">
              <CiCircleCheck className="check-icon3" />
              <p>Modélisation de données</p>
            </div>
            <div className="div">
              <CiCircleCheck className="check-icon3" />
              <p>Optimisation requêtes</p>
            </div>
            <div className="div">
              <CiCircleCheck className="check-icon3" />
              <p>Migration de données</p>
            </div>
          </div>
        </div>
        <div className="service-list2">
          <div className="service-item4">
            <h4 style={{ color: "#C415F9" }}>Backend & APIs</h4>
            <p>Services backend pour alimenter vos applications </p>
            <div className="div">
              <CiCircleCheck className="check-icon4" />
              <p>Authentification sécurisée</p>
            </div>
            <div className="div">
              <CiCircleCheck className="check-icon4" />
              <p>Gestion des rôles</p>
            </div>
            <div className="div">
              <CiCircleCheck className="check-icon4" />
              <p>Intégration tierces</p>
            </div>
          </div>
          <div className="service-item5">
            <h4 style={{ color: "#402FF8" }}>Déploiement & Maintenance</h4>
            <p>Mise en production, et maintenace de vos applications</p>
            <div className="div">
              <CiCircleCheck className="check-icon5" />
              <p>Hébergement</p>
            </div>
            <div className="div">
              <CiCircleCheck className="check-icon5" />
              <p>Optimisation performance</p>
            </div>
            <div className="div">
              <CiCircleCheck className="check-icon(" />
              <p>Monitoring</p>
            </div>
          </div>
        </div>
      </div>
      <div className="project" id="projects">
        <ul>
          <li>
            <h2 style={{ color: "#622EDD" }}>Mes Projets</h2>
          </li>
        </ul>
        <h3>Des solutions concrètes pour un impact réel</h3>
        <p>
          Voici quelques-uns de mes projets réalisés, chacun avec des objectifs
          spécifiques et des technologies adaptées{" "}
        </p>
        <div className="filtres">
          <button
            className={`filter ${filtre === "Tous" ? "active" : ""}`}
            onClick={() => setFiltre("Tous")}
          >
            Tous
          </button>

          <button
            className={`filter ${filtre === "Web" ? "active" : ""}`}
            onClick={() => setFiltre("Web")}
          >
            Web
          </button>

          <button
            className={`filter ${filtre === "Mobile" ? "active" : ""}`}
            onClick={() => setFiltre("Mobile")}
          >
            Mobile
          </button>

          <button
            className={`filter ${filtre === "Laravel" ? "active" : ""}`}
            onClick={() => setFiltre("Laravel")}
          >
            Laravel
          </button>

          <button
            className={`filter ${filtre === "React js" ? "active" : ""}`}
            onClick={() => setFiltre("React js")}
          >
            React js
          </button>
        </div>
        <div className="cartes">
          <div className="projects-list">
            {projetsFiltres.some((p) => p.id === 1) && (
              <div className="project-card">
                <div className="project-preview">
                  <img src={culture} alt="Aperçu de Culture du Bénin" />
                </div>

                <div className="project-info">
                  <div className="project-heading">
                    <h3>Culture du Bénin</h3>
                    <span>Web</span>
                  </div>

                  <p>
                    Plateforme numérique pour la gestion de la culture et des
                    langues du Bénin.
                  </p>

                  <div className="project-tech">
                    <span>
                      <FaLaravel style={{ color: "FF2D20" }} />
                      Laravel
                    </span>
                    <span>
                      <SiMysql style={{ color: "cae70e" }} />
                      MySQL
                    </span>
                    <a href="" className="icon-right">
                      <CiCircleChevRight />
                    </a>
                  </div>
                </div>
              </div>
            )}

            {projetsFiltres.some((p) => p.id === 2) && (
              <div className="project-card">
                <div className="project-preview">
                  <img src={eventflow} alt="Aperçu d'EventFlow" />
                </div>

                <div className="project-info">
                  <div className="project-heading">
                    <h3>EventFlow</h3>
                    <span>Web</span>
                  </div>

                  <p>
                    Plateforme web de gestion d'événements pour les
                    organisateurs, prestataires et clients.
                  </p>

                  <div className="project-tech">
                    <span>
                      <FaLaravel style={{ color: "FF2D20" }} />
                      Laravel
                    </span>
                    <span>
                      <SiMysql style={{ color: "cae70e" }} />
                      MySQL
                    </span>
                    <span>
                      <BsBootstrapFill style={{ color: "#563d7c" }} />
                      Bootstrap
                    </span>
                    <a href="" className="icon-right">
                      <CiCircleChevRight />
                    </a>
                  </div>
                </div>
              </div>
            )}
            {projetsFiltres.some((p) => p.id === 3) && (
              <div className="project-card">
                <div className="project-preview">
                  <img src={sigrh} alt="Aperçu de SIGRH" />
                </div>
                <div className="project-info">
                  <div className="project-heading">
                    <h3>SIGRH-MND</h3>
                    <span>Web</span>
                  </div>
                  <p>
                    Plateforme web intelligent de gestion des ressources
                    humaines au MND
                  </p>
                  <div className="project-tech">
                    <span>
                      <FaReact style={{ color: "#61DAFB" }} />
                      React Js
                    </span>
                    <span>
                      <SiMysql style={{ color: "#cae70e" }} />
                      MySQL
                    </span>
                    <span>
                      <SiDjango style={{ color: "#15ae74" }} />
                      Django
                    </span>
                    <a href="" className="icon-right">
                      <CiCircleChevRight />
                    </a>
                  </div>
                </div>
              </div>
            )}
            {projetsFiltres.some((p) => p.id === 4) && (
              <div className="project-card">
                <div className="project-preview">
                  <img src={shop} alt="Aperçu de ShopTrack" />
                </div>
                <div className="project-info">
                  <div className="project-heading">
                    <h3>ShopTrack</h3>
                    <span>Mobile</span>
                  </div>
                  <p>
                    Application mobile pour planifier, budgétiser et monétiser
                    ses achats au quotidien
                  </p>
                  <div className="project-tech">
                    <span>
                      <FaFlutter style={{ color: "#02569B" }} />
                      Flutter
                    </span>
                    <span>
                      <SiFirebase style={{ color: "#FFCA28" }} />
                      Firebase
                    </span>
                    <a href="" className="icon-right">
                      <CiCircleChevRight />
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="footer">
          <div className="contact" id="contact">
            <ul>
              <li>
                <h2 style={{ color: "#622EDD" }}>CONTACT</h2>
              </li>
            </ul>
            <h3>Echangeons ensemble !</h3>
            <p>
              Une idée de projet, une collaboration ou simplement envie de
              discuter ?
            </p>
            <p>Je suis toujours ouverte aux nouvelles opportunités</p>
            <div className="cont">
              <IoMdMail className="contact-icon" />
              <p>jennyhoundon@gmail.com</p>
            </div>
            <div className="cont">
              <FiSmartphone className="contact-icon" />
              <p>+229 0161623834</p>
            </div>
            <div className="cont">
              <CiLocationOn className="contact-icon" />
              <p>Bénin</p>
            </div>
            <div className="cont">
              <SiMediamarkt className="contact-icon" />
              <div className="social-icons2">
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
          </div>
          <div className="form">
            <form action="">
              <label htmlFor="nom">
                Nom complet <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="text"
                id="nom"
                placeholder="Entrez votre nom complet"
              />

              <label htmlFor="email">
                Email <span style={{ color: "red" }}>*</span>
              </label>
              <input type="text" id="email" placeholder="Votre@email.com" />

              <label htmlFor="message">
                Message <span style={{ color: "red" }}>*</span>
              </label>
              <input type="text" id="message" placeholder="Votre message ..." />

              <button className="send">
                Envoyez un message <IoIosSend style={{ color: "#8D17E8" }} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
