import { useState, useEffect, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import {
  Github,
  Linkedin,
  Mail,
  Database,
  BarChart3,
  Brain,
  Code,
  Download,
  ExternalLink,
  ChevronDown,
  Contact,
  FileSpreadsheet,
  TrendingUp,
  Zap,
  Activity,
  Menu,
  X
} from 'lucide-react'
import './App.css'

// Composant pour l'animation de comptage
function CountingNumber({ end, duration = 2000, suffix = "" }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    let startTime = null
    const startValue = 0

    const animate = (currentTime) => {
      if (startTime === null) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      const currentCount = Math.floor(progress * (end - startValue) + startValue)
      setCount(currentCount)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isInView, end, duration])

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  )
}

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Fermer le menu mobile quand on clique en dehors ou scroll
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('.navbar')) {
        setIsMobileMenuOpen(false)
      }
    }

    const handleScroll = () => {
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    window.addEventListener('scroll', handleScroll)

    return () => {
      document.removeEventListener('click', handleClickOutside)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isMobileMenuOpen])

  const skills = [
    { name: 'SAS Guide', level: 'Expert', icon: Activity },
    { name: 'SAS VA', level: 'Expert', icon: TrendingUp },
    { name: 'Excel', level: 'Expert', icon: FileSpreadsheet },
    { name: 'LangChain', level: 'Expert', icon: Zap },
    { name: 'Python', level: 'Expert', icon: Code },
    { name: 'SQL', level: 'Intermédiaire', icon: Database },
    { name: 'Machine Learning', level: 'Intermédiaire', icon: Brain },
    { name: 'Data Visualization', level: 'Intermédiaire', icon: BarChart3 },
    { name: 'R', level: 'Intermédiaire', icon: Code },
    { name: 'Power BI', level: 'Intermédiaire', icon: BarChart3 }
  ]

  const projects = [
    {
      title: "Analyse Prédictive des Ventes",
      description: "Modèle de machine learning pour prédire les ventes avec 92% de précision",
      tech: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
      github: "#",
      demo: "#"
    },
    {
      title: "Dashboard Analytics E-commerce",
      description: "Tableau de bord interactif pour analyser les performances e-commerce",
      tech: ["Power BI", "SQL", "DAX", "Excel"],
      github: "#",
      demo: "#"
    },
    {
      title: "Segmentation Client",
      description: "Clustering des clients pour optimiser les stratégies marketing",
      tech: ["Python", "K-means", "Seaborn", "Jupyter"],
      github: "#",
      demo: "#"
    }
  ]

  const experiences = [
    {
      title: "Machine Learning Engineer",
      company: "Velar Technology",
      period: "2025",
      description: "Développement de modèles prédictifs et analyse exploratoire"
    },
    {
      title: "Data Analyst",
      company: "MMA Assurances",
      period: "2023 - 2025",
      description: "Analyse de données business, création de dashboards et reporting, Etudes de performances"
    },
    {
      title: "Stagiaire Data Science",
      company: "Université de Rennes",
      period: "2024 - 2025",
      description: "Développement de modèles prédictifs et analyse exploratoire"
    },
    {
      title: "Développeur Web Laravel",
      company: "IRISA Rennes",
      period: "2022 - 2023",
      description: "Transposition d'un site web en PHP en Laravel"
    }

  ]

  return (
    <div className="portfolio">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">Vélar TANO</div>

          {/* Menu desktop */}
          <div className="nav-links">
            <a href="#home" onClick={() => setActiveSection('home')}>Accueil</a>
            <a href="#about" onClick={() => setActiveSection('about')}>À propos</a>
            <a href="#skills" onClick={() => setActiveSection('skills')}>Compétences</a>
            <a href="#projects" onClick={() => setActiveSection('projects')}>Projets</a>
            <a href="#experience" onClick={() => setActiveSection('experience')}>Expérience</a>
            <a href="#contact" onClick={() => setActiveSection('contact')}>Contact</a>
          </div>

          {/* Bouton menu mobile */}
          <button
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menu mobile */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="mobile-menu"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <a href="#home" onClick={() => setIsMobileMenuOpen(false)}>Accueil</a>
              <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>À propos</a>
              <a href="#skills" onClick={() => setIsMobileMenuOpen(false)}>Compétences</a>
              <a href="#projects" onClick={() => setIsMobileMenuOpen(false)}>Projets</a>
              <a href="#experience" onClick={() => setIsMobileMenuOpen(false)}>Expérience</a>
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hero-header">
            <div className="profile-photo">
              <img
                src="/IMG_1875.jpg"
                alt="Vélar TANO"
                className="profile-image"
              />
            </div>
            <div className="hero-text">
              <h1 className="hero-title">
                Vélar TANO
                <span className="hero-subtitle">Junior Data Scientist & Analyst</span>
              </h1>
            </div>
          </div>
          <p className="hero-description">
            Passionné par l'analyse de données et l'intelligence artificielle, je donne la valeur aux données brutes en les transformant en informations clés.
            Actuellement, je suis à la <b>Recherche d'un CDI en Data Science ou Data Analyst</b>.
            
          </p>
          <div className="hero-buttons">
            <a href="/CV_ANALYSTE_DE_DONNEE_VELAR_TANO.pdf" download="CV_ANALYSTE_DE_DONNEE_VELAR_TANO.pdf" className="btn-primary">
              <Download size={20} />
              Télécharger CV
            </a>
            {/* <button className="btn-secondary">
              <Mail size={20} />
              Me contacter
            </button> */}
          </div>
          <div className="social-links">
            <a href="#" className="social-link">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/tano-velar-francois" target="_blank" rel="noopener noreferrer" className="social-link">
              <Linkedin size={24} />
            </a>
            <a href="mailto:velar.tano@gmail.com" className="social-link">
              <Mail size={24} />
            </a>
          </div>
        </motion.div>

        {/* Contact & Availability Info */}
        <motion.div
          className="contact-availability-info"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="info-card">
            <h3 className="info-card-title">Informations</h3>
            <div className="info-item">
              <Contact size={18} />
              <span>+33 7 45 59 73 57</span>
            </div>
            <div className="info-item">
              <div className="availability-dot"></div>
              <span>Disponible immédiatement</span>
            </div>
            <div className="info-item">
              <span>📍 Localisation flexible</span>
            </div>
          </div>
        </motion.div>
        <div className="scroll-indicator">
          <ChevronDown size={24} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">À propos de moi</h2>

            <div className="about-content">
              <div className="about-text">
                <p>
                Titulaire d’un Master MIAGE(Méthodes Informatiques Appliquées à la Gestion des Entreprises) parcours Data & Business Intelligence (mention BIEN), j’ai acquis deux années d’expérience en alternance au sein du Groupe COVÉA (MMA Assurances) au Mans, où j’ai contribué à des projets data à fort impact opérationnel.
                
                <br></br>Passionné par l’Intelligence Artificielle et l'analyse de données, Je conçois et déploie des modèles prédictifs, de classification et des architectures de réseaux de neurones, y compris LLM et Transformers, pour analyser les données et automatiser des décisions métier. 
                <br></br>Ces compétences me permettent d’apporter des solutions innovantes aux problématiques de valorisation et d’analyse des données.
                <br></br><br></br>Convaincu que l’avenir de la data passe par le cloud, je me forme activement aux services AWS et prépare la certification Machine Learning Engineer. Cet engagement illustre ma volonté d’enrichir continuellement mes compétences pour être capable de concevoir, déployer et industrialiser des solutions IA et data à forte valeur ajoutée.
                
                {/* &nbsp;<ul><li><b>Conception d'un Datamart RH :</b></li></ul>Conception d’un entrepôt de données collaborateurs permettant de centraliser et fiabiliser l’information, réduisant de 80 % le temps consacré aux reportings.
                 <ul><li><b>Mise en place d’un Reporting financier :</b></li></ul> Développement d’un outil de suivi des unités de comptes offrant aux managers une vision claire sur la performance et l’usage des produits financiers.
                 */}
                 {/* &nbsp;<br></br><br></br>Ces expériences m’ont permis de consolider mes compétences en :
                 <br></br>✔️ Conception et modélisation de bases de données
                 <br></br>✔️ BI & Reporting (datamarts, tableaux de bord, automatisation)
                 <br></br>✔️ Analyse de données pour l’aide à la décision
                 <br></br>✔️ Communication avec les équipes métiers et managers */}
                
                 <br></br><br></br>Enfin, je me distingue par ma rigueur, mon esprit d’analyse et ma volonté constante d’apprendre. Mon objectif est de mettre mes compétences au service de projets data qui apportent une valeur concrète aux décisions stratégiques et opérationnelles des entreprises.
                
                  {/* Ma passion pour les mathématiques et la programmation m'a naturellement
                  orienté vers le domaine de la data science, où je peux combiner
                  analyse statistique et développement pour résoudre des problèmes concrets. */}
                </p>
              </div>

              {/* Statistiques à droite */}
              <div className="about-stats">
                <motion.div
                  className="stat"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <h3><CountingNumber end={10} suffix="+" /></h3>
                  <p>Projets réalisés</p>
                </motion.div>
                <motion.div
                  className="stat"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h3><CountingNumber end={2} suffix="+" /></h3>
                  <p>Années d'expérience</p>
                </motion.div>
                <motion.div
                  className="stat"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <h3><CountingNumber end={10} suffix="+" /></h3>
                  <p>Technologies maîtrisées</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <h2 className="section-title">Compétences</h2>
          <div className="skills-scroll-container">
            <motion.div
              className="skills-scroll"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 25,
                  ease: "linear",
                },
              }}
            >
              {/* Premier set de compétences */}
              {skills.map((skill, index) => (
                <div key={`first-${skill.name}`} className="skill-card">
                  <div className="skill-icon">
                    <skill.icon size={32} />
                  </div>
                  <h3>{skill.name}</h3>
                  <span className={`skill-level skill-level-${skill.level.toLowerCase()}`}>{skill.level}</span>
                </div>
              ))}
              {/* Deuxième set pour continuité */}
              {skills.map((skill, index) => (
                <div key={`second-${skill.name}`} className="skill-card">
                  <div className="skill-icon">
                    <skill.icon size={32} />
                  </div>
                  <h3>{skill.name}</h3>
                  <span className={`skill-level skill-level-${skill.level.toLowerCase()}`}>{skill.level}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">Projets</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="project-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tech.map(tech => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} className="project-link">
                    <Github size={20} />
                    Code
                  </a>
                  <a href={project.demo} className="project-link">
                    <ExternalLink size={20} />
                    Demo
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience">
        <div className="container">
          <h2 className="section-title">Expériences</h2>
          <div className="timeline">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                className="timeline-item"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="timeline-content">
                  <h3>{exp.title}</h3>
                  <h4>{exp.company}</h4>
                  <span className="period">{exp.period}</span>
                  <p>{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Contact</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Parlons de vos projets data !</h3>
              <p>
                Je suis toujours intéressé par de nouveaux défis dans le domaine
                de l'analyse de données et à la recherche d'un CDI. N'hésitez pas à me contacter !
              </p>
              <div className="contact-details">
                <div className="contact-item">
                  <Mail size={20} />
                  <span>tanovelar6@gmail.com</span>
                </div>
                <div className="contact-item">
                  <Linkedin size={20} />
                  <a href="https://www.linkedin.com/in/tano-velar-francois" target="_blank" rel="noopener noreferrer" className="contact-link">
                    linkedin.com/in/tano-velar-francois
                  </a>
                </div>
                <div className="contact-item">
                  <Github size={20} />
                  <span>github.com/votre-username</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Vélar François TANO. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
