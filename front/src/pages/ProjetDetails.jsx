import { useParams, Link } from "react-router-dom";
import {
  FaArrowLeftLong,
  FaLandmark,
  FaFileSignature,
  FaCalendarCheck,
  FaFolderOpen,
  FaFlutter,
} from "react-icons/fa6";
import {
  FaLaravel,
  FaRegQuestionCircle,
  FaShieldAlt,
  FaReact,
  FaBrain,
} from "react-icons/fa";
import { BsBootstrapFill } from "react-icons/bs";
import vodoun from "../assets/culture-vodoun.jpg";
import boutique from "../assets/boutique.png";
import courses from "../assets/courses.png";
import event from "../assets/event.jpg";
import sigrh from "../assets/sigrh.webp";
import accueil_culture from "../assets/accueil_culture.png";
import accueil_sigrh from "../assets/accueil_sigrh.jpeg";
import accueil_event from "../assets/accueil_event.png";
import { MdOutlineShare } from "react-icons/md";
import { HiOutlineLightBulb } from "react-icons/hi";
import { BiMessageRounded } from "react-icons/bi";
import { CiDark, CiLocationOn } from "react-icons/ci";
import {
  IoLanguage,
  IoWalletOutline,
  IoStorefrontOutline,
} from "react-icons/io5";
import { SiMysql, SiDjango, SiFirebase } from "react-icons/si";
import { IoMdMenu, IoMdNotificationsOutline } from "react-icons/io";
import { GiShoppingCart } from "react-icons/gi";

function ProjetDetails() {
  const { nom } = useParams();

  const projets = {
    culture: {
      titre: "Culture du Bénin",
      description:
        "Plateforme numérique pour la gestion de la culture et des langues du Bénin",
      technologies: [
        <>
          <FaLaravel style={{ color: "FF2D20" }} /> Laravel
        </>,
        <>
          <SiMysql style={{ color: "cae70e" }} />
          MySQL
        </>,
      ],
      categorie: "Web",
      image1: <img src={vodoun} alt="Culture" className="img-detail" />,
      contexte: `Le Bénin possède une richesse culturelle et linguistique unique :
        traditions, contes, savoirs, pratiques culinaires et une grande diversité
        de langues nationales. Ce projet vise à concevoir une plateforme web
        participative permettant de documenter, valoriser et diffuser la culture
        béninoise, tout en mettant en avant les langues locales comme vecteur
        principal de transmission du savoir.`,
      image2: <img src={accueil_culture} alt="Accueil de culture" />,
      fonctionnalites: [
        {
          nom: "Découverte du patrimoine culturel",
          icone: <FaLandmark style={{ color: "blue", fontSize: "20px" }} />,
          resume: `Exploration des histoires, traditions, pratiques,
            savoirs et richesses culturelles du Bénin.`,
        },
        {
          nom: "Publication et partage de contenus",
          icone: <MdOutlineShare style={{ color: "blue", fontSize: "20px" }} />,
          resume: `Publication et consultation de contenus sur les
            recettes, les contes, les coutumes et les 
            traditions.`,
        },
        {
          nom: "Valorisation des langues nationales",
          icone: <IoLanguage style={{ color: "blue", fontSize: "20px" }} />,
          resume: `Mise en valeur des langues telles que le Fon,
            le Yoruba, le Dendi, le Goun et le Bariba.`,
        },
        {
          nom: "Gestion et modération des contenus",
          icone: <FaShieldAlt style={{ color: "blue", fontSize: "20px" }} />,
          resume: `Administration de la plateforme, gestion des
            publications et modération des contributions
            selon les rôles des utilisateurs.`,
        },
      ],
      problematique: `Ce patrimoine immatériel reste dispersé, souvent transmis à l’oral, 
        et peu accessible dans les environnements numériques modernes. 
        Comment le documenter et le valoriser, avec les langues locales 
        comme vecteur principal de transmission ???`,

      solutions: `Une plateforme web participative où l’on crée et diffuse des contenus
        culturels (contes, recettes, articles) directement dans les langues 
        nationales, avec une validation par les modérateurs avant publication.`,
    },

    eventflow: {
      titre: "EventFlow",
      description:
        "Une application de gestion d'événements permettant aux clients, organisateurs et prestataires de gérer leurs activités.",
      technologies: [
        <>
          <FaLaravel style={{ color: "FF2D20" }} /> Laravel
        </>,
        <>
          <SiMysql style={{ color: "cae70e" }} />
          MySQL
        </>,
        <>
          <BsBootstrapFill style={{ color: "#563d7c" }} />
          Bootstrap
        </>,
      ],
      categorie: "Web",
      image1: <img src={event} alt="EventFlow" className="img-detail" />,
      contexte: `L’organisation d’événements comme les mariages, les anniversaires 
        ou les communions est un secteur en pleine expansion au Bénin.
        Pourtant, clients, organisateurs et prestataires peinent à se 
        coordonner : les échanges sont dispersés et il n’existe pas de 
        plateforme centralisée pour trouver des prestataires fiables. 
        EventFlow répond à ce besoin en réunissant tous ces acteurs 
        dans un seul espace collaboratif.`,
      image2: <img src={accueil_event} alt="Accueil de EventFlow" />,
      fonctionnalites: [
        {
          nom: "Messagerie intégrée",
          icone: (
            <BiMessageRounded style={{ color: "blue", fontSize: "20px" }} />
          ),
          resume: `Échanges entre utilisateurs avec statut 
            en ligne et notifications par e-mail.`,
        },
        {
          nom: "Notifications en temps réel",
          icone: (
            <IoMdNotificationsOutline
              style={{ color: "blue", fontSize: "20px" }}
            />
          ),
          resume: `Alertes liées aux réservations et aux validations.`,
        },
        {
          nom: "Interface adaptative",
          icone: <CiDark style={{ color: "blue", fontSize: "20px" }} />,
          resume: `Affichage responsive et modes clair/sombre`,
        },
        {
          nom: "Authentification sécurisée",
          icone: <FaShieldAlt style={{ color: "blue", fontSize: "20px" }} />,
          resume: `Connexion Google via Firebase et vérification 
            par code envoyé par e-mail.`,
        },
      ],
      problematique: `La coordination entre ces acteurs reste complexe et fragmentée :
        communication difficile, responsabilités qui se chevauchent, 
        et aucune plateforme centralisée pour trouver des prestataires fiables.
        Comment réunir tout le monde dans un espace collaboratif unique, 
        fluide et sécurisé ?`,

      solutions: `La coordination entre ces acteurs reste complexe et fragmentée :
        communication difficile, responsabilités qui se chevauchent, et 
        aucune plateforme centralisée pour trouver des prestataires fiables. 
        Comment réunir tout le monde dans un espace collaboratif unique, 
        fluide et sécurisé ?`,
    },

    sigrh: {
      titre: "SIGRH-MND",
      description:
        "Une application web intelligente destinée à faciliter la gestion des processus administratifs des ressources humaines.",
      technologies: [
        <>
          <FaReact style={{ color: "#61DAFB" }} /> React js
        </>,
        <>
          <SiMysql style={{ color: "cae70e" }} />
          MySQL
        </>,
        <>
          <SiDjango style={{ color: "#15ae74" }} /> Django
        </>,
      ],
      categorie: "Web",
      image1: <img src={sigrh} alt="SIGRH" className="img-detail" />,
      contexte: `Dans les administrations publiques des pays en développement, la gestion des 
      ressources humaines reste un défi, alors que les systèmes d’information RH sont reconnus
      comme un levier de modernisation. Au Ministère du Numérique et de la Digitalisation, 
      mon enquête de terrain révèle des oublis récurrents d’avancements, des délais de traitement 
      de cinq à huit mois pour les actes administratifs, et des répondants qui signalent des demandes perdues.`,
      image2: <img src={accueil_sigrh} alt="Accueil de SIGRH" />,
      fonctionnalites: [
        {
          nom: "Gestion des demandes d’actes administratifs",
          icone: (
            <FaFileSignature style={{ color: "blue", fontSize: "20px" }} />
          ),
          resume: `Le système automatise la génération des
          documents au format PDF à partir de modèles
          officiels, facilite leur transmission pour 
          signature .`,
        },
        {
          nom: "Suivi de carrière et des avancements",
          icone: (
            <FaCalendarCheck style={{ color: "blue", fontSize: "20px" }} />
          ),
          resume: `Facilite le suivi de l’évolution professionnelle des
          agents en calculant les dates prévisionnelles de
          leurs prochains avancements.`,
        },
        {
          nom: "Dossier individuel numérique",
          icone: <FaFolderOpen style={{ color: "blue", fontSize: "20px" }} />,
          resume: `Centralise les documents administratifs de 
          chaque agent dans un espace numérique.`,
        },
        {
          nom: "Gestion des postes vacants et analyse des candidatures par IA",
          icone: <FaBrain style={{ color: "blue", fontSize: "20px" }} />,
          resume: `Grâce à l’intelligence artificielle, le système
          analyse les profils par rapport aux critères
          des postes et génère un score indicatif
          d’éligibilité pour faciliter l’évaluation..`,
        },
      ],
      problematique: `Ces dysfonctionnements lèsent les agents dans leurs droits et 
      contredisent l’image d’un ministère censé incarner la transformation numérique. 
      Dans quelle mesure un système web intelligent, intégrant de l’IA, peut-il y répondre
      et améliorer la qualité de service rendue aux agents ?`,

      solutions: `SIGRH-MND est un système web accessible depuis n’importe quel navigateur,
      sans installation. Il dématérialise les démarches RH des agents et automatise les
      tâches répétitives du service RH. Il complète le SIGRH national, qui gère la partie 
      administrative centrale (solde, positions, avancements officiels), en couvrant ce 
      qu’il ne traite pas : demandes d’actes, congés, dossiers individuels, postes vacants 
      et suivi des démarches en temps réel`,
    },

    shoptrack: {
      titre: "ShopTrack",
      description:
        "Application mobile pour planifier, budgétiser et monétiser ses achats au quotidien.",
      technologies: [
        <>
          <FaFlutter style={{ color: "#02569B" }} /> Flutter
        </>,
        <>
          <SiFirebase style={{ color: "#FFCA28" }} />
          Firebase
        </>,
      ],
      categorie: "Mobile",
      image1: <img src={boutique} alt="ShopTrack" className="img-detail" />,
      contexte: `Faire les courses du quotidien demande de jongler entre une liste, un 
      budget et le choix des boutiques. ShopTrack est une application mobile qui réunit 
      tout cela au même endroit : gestion de la liste, contrôle du budget, optimisation 
      des achats et géolocalisation. Elle s’adresse aux familles, aux professionnels 
      occupés, aux personnes âgées et aux étudiants avec un budget limité.`,
      image2: <img src={courses} alt="Courses" className="image-mobile" />,
      fonctionnalites: [
        {
          nom: "Gestion des courses",
          icone: <GiShoppingCart style={{ color: "blue", fontSize: "20px" }} />,
          resume: `Les utilisateurs peuvent définir un niveau de
          priorité, suivre l’état de chaque article et trier
          leur liste selon différents critères, notamment la
          priorité, la date ou le prix.`,
        },
        {
          nom: "Portefeuille et budget",
          icone: (
            <IoWalletOutline style={{ color: "blue", fontSize: "20px" }} />
          ),
          resume: `Offre un suivi du solde disponible et permet
          de définir un budget mensuel personnalisé.`,
        },
        {
          nom: "Boutiques et commandes",
          icone: (
            <IoStorefrontOutline style={{ color: "blue", fontSize: "20px" }} />
          ),
          resume: `Permet de consulter les produits proposés par
            différentes boutiques, d’associer les articles
            de sa liste de courses et de suivre l’évolution 
            des commandes en temps réel.`,
        },
        {
          nom: "Géolocalisation des boutiques",
          icone: <CiLocationOn style={{ color: "blue", fontSize: "20px" }} />,
          resume: `Intègre une carte interactive permettant deµ
          localiser les boutiques à proximité et de
          visualiser leur emplacement.`,
        },
      ],
      problematique: `Faire les courses du quotidien oblige à jongler entre une liste
      dispersée, un budget difficile à suivre et des boutiques qu’il faut chercher une
      par une, ce qui fait perdre du temps et de l’argent. Comment une application mobile
      peut-elle réunir la gestion de la liste, le contrôle du budget et la géolocalisation
      des boutiques pour simplifier cette organisation ?`,

      solutions: `ShopTrack est une application mobile construite autour de cinq modules,
      avec Firebase pour l’authentification et les données. Elle simplifie la gestion des
      courses quotidiennes, facilite les achats grâce à la géolocalisation et fait gagner
      du temps et de l’argent.`,
    },
  };

  const projet = projets[nom];

  if (!projet) {
    return (
      <div>
        <h1>Projet introuvable</h1>
        <Link to="/#projects">Retour aux projets</Link>
      </div>
    );
  }

  return (
    <div className="details-projet">
      <Link
        to="/#projects"
        className="retour-portfolio"
        style={{ padding: "20px" }}
      >
        <FaArrowLeftLong /> Retour aux projets
      </Link>

      <div className="detail-content">
        <div className="detail-head">
          <h1>{projet.titre}</h1>
          <span className="categorie">{projet.categorie}</span>

          <p>{projet.description}</p>

          <div className="technologies-projet">
            {projet.technologies.map((technologie) => (
              <span key={technologie}>{technologie}</span>
            ))}
          </div>
        </div>
        <div className="detail-image">{projet.image1}</div>
      </div>
      <div className="etude">
        <div className="etude-contenu">
          <div className="contexte-head">
            <div className="contexte-text">
              <IoMdMenu className="contact-icon2" />
              <h2>Contexte</h2>
            </div>
            <p>{projet.contexte}</p>
          </div>
          <div className="problematique">
            <div className="problematique-text">
              <FaRegQuestionCircle
                style={{ color: "#9747FF", padding: 10, margin: 5 }}
                size={35}
              />
              <h2>Problématique</h2>
            </div>
            <p>{projet.problematique}</p>
          </div>
          <div className="solutions">
            <div className="solutions-text">
              <HiOutlineLightBulb
                style={{ color: "#9747FF", padding: 10, margin: 5 }}
                size={35}
              />
              <h2>Solutions</h2>
            </div>
            <p>{projet.solutions}</p>
          </div>
        </div>
        <div className="image-card">
          <div className="contexte-image">{projet.image2}</div>
          <div className="fonctionnalites">
            {projet.fonctionnalites?.map((fonctionnalite, index) => (
              <div className="fonctionnalite-item" key={index}>
                <div className="fonctionnalite-icone">
                  {fonctionnalite.icone}
                  <h3>{fonctionnalite.nom}</h3>
                </div>

                <div className="fonctionnalite-texte">
                  <p>{fonctionnalite.resume}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjetDetails;
