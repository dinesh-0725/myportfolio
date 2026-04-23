import { useState, useEffect } from "react";
import { SceneGraph } from "@/components/SceneGraph";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ExternalLink, Github, Mail, Code, Terminal, Database, Download, Briefcase, Award } from "lucide-react";

// EXACT PRESERVED DATA
const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "profiles", label: "Profiles" },
  { id: "internships", label: "Internships" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

const educationData = [
  {
    title: "SSC - 10th Standard",
    school: "Balaji High School (2020)",
    description: "Scored 90% and built a strong foundation in mathematics and science, which sparked interest in computing and logic-based problem solving.",
  },
  {
    title: "Diploma in Computer Science",
    school: "Govt Polytechnic College, Anakapalli (2020–2023)",
    description: "Completed a 3-year diploma with 76%. Gained hands-on experience in C, Java, DBMS, Web Development, and participated in industrial training.",
  },
  {
    title: "B.Tech in Computer Science and Engineering",
    school: "MVGR College of Engineering (2023–2026)",
    description: "Currently pursuing B.Tech with a strong focus on Full Stack Web Development, AI/ML, and Software Engineering. Actively building real-world projects and improving coding proficiency.",
  },
];

const projects = [
  {
    title: "Lawyer Consultancy Website",
    description: "A responsive website where users can book consultations with lawyers. Includes login, search, and admin dashboard.",
    tech: "Tech Used: HTML, CSS, JavaScript, PHP, MySQL",
    github: "https://github.com/dinesh-0725/layer.git",
  },
  {
  title: "Vision Assistant",
  description: "AI-powered vision assistant system for real-time object detection, recognition, and intelligent assistance using computer vision and deep learning concepts.",
  tech: "Tech Used: Python, OpenCV, TensorFlow, Deep Learning, Computer Vision",
  github: "https://github.com/dinesh-0725/vision-assistant.git",
  },
  {
    title: "Detection Management System",
    description: "Enterprise system for defect tracking and workflow in steel plant environments. Role-based dashboards for employees, mechanics, and admin.",
    tech: "Tech Used: Java Full Stack (JSP, Servlets, JDBC, Oracle)",
    github: "https://github.com/dinesh-0725/Defect-Handling.git",
  },
  {
    title: "Random Chat Application",
    description: "Real-time anonymous chatting between users using React and WebSocket support.",
    tech: "Tech Used: React.js, Node.js",
    github: "https://github.com/dinesh-0725/chat-application.git",
  },
  {
    title: "HREION - ERP Management System",
    description: "A comprehensive ERP-based web application designed to manage organizational operations such as employees, departments, roles, and workflows through a centralized system.",
    tech: "Tech Used: React.js, Node.js",
    github: "https://github.com/dinesh-0725/hreion.git",
  },
  {
    title: "AI Tool for PDF Extraction & Summarization",
    description: "An intelligent web application that automates the extraction and summarization of text from PDF documents using machine learning endpoints.",
    tech: "Tech Used: HTML, Python, APIs",
    github: "https://github.com/dinesh-0725/AI-TOOL.git",
  },
  {
    title: "Medicore - Hospital Management System",
    description: "A comprehensive and modern hospital administration platform with a fast frontend and secure backend service for managing healthcare workflows.",
    tech: "Tech Used: React.js (Vite), Supabase",
    github: "https://github.com/dinesh-0725/medicaree.git",
  },
];

const skillCategories = [
  {
    title: "Web Skills",
    skills: ["HTML", "CSS", "JavaScript", "React.js"],
    icon: <Code className="w-6 h-6 text-cyan-400" />
  },
  {
    title: "Programming Languages",
    skills: ["Java", "Python", "C++ (Basic)", "C (Basic)"],
    icon: <Terminal className="w-6 h-6 text-purple-400" />
  },
  {
    title: "Frameworks & Tools",
    skills: ["Django", "Flask", "Node.js", "Git"],
    icon: <Code className="w-6 h-6 text-blue-400" />
  },
  {
    title: "Data & AI",
    skills: ["MySQL / SQL", "Power BI", "Data Analysis", "AI/ML"],
    icon: <Database className="w-6 h-6 text-emerald-400" />
  },
];

const profiles = [
  {
    title: "GitHub",
    description: "github.com/dinesh-0725",
    url: "https://github.com/dinesh-0725",
  },
  {
    title: "HackerRank",
    description: "hackerrank.com/metikotidinesh45",
    url: "https://www.hackerrank.com/metikotidinesh45",
  },
  {
    title: "LinkedIn",
    description: "linkedin.com/in/dinesh-metikoti-9b1955278",
    url: "https://www.linkedin.com/in/dinesh-metikoti-9b1955278",
  },
];

// INTERNSHIP DATA
const INTERNSHIP_LIST = [
  {
    title: "Machine Learning Internship",
    organization: "HMI Services",
    duration: "6 months",
    details: ["Recommendation System using Python", "Applied ML techniques in a real-world environment"],
    link: "machine_learning.pdf",
    color: "from-blue-500/20 to-cyan-500/20",
    border: "border-cyan-500/30",
    badge: "bg-cyan-500/10 text-cyan-300 border-cyan-500/30",
  },
  {
    title: "Java Full Stack intern",
    organization: "MVGR College of Engineering — wipro talent next course",
    duration: "6 months",
    details: ["Built using JSP, Servlets, JDBC, Oracle", "Role-based dashboards for Admin, Employee & Mechanic"],
    link: "java_fullstack_cert.pdf",
    color: "from-purple-500/20 to-blue-500/20",
    border: "border-purple-500/30",
    badge: "bg-purple-500/10 text-purple-300 border-purple-500/30",
  },
  {
    title: "React Developer Internship",
    organization: "S Technologies",
    duration: "2 months",
    details: ["Developed responsive web applications using React.js", "Worked on real-world client projects with modern UI/UX"],
    link: "react_certificate.pdf",
    color: "from-emerald-500/20 to-teal-500/20",
    border: "border-emerald-500/30",
    badge: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30",
  },
  {
    title: "Java Full Stack Internship",
    organization: "Steel plant IT department",
    duration: "1 month",
    details: ["Completed structured Java Full Stack training", "Covered Spring Boot, React, REST APIs, and databases"],
    link: "java_full_stack_internship.pdf",
    color: "from-orange-500/20 to-amber-500/20",
    border: "border-orange-500/30",
    badge: "bg-orange-500/10 text-orange-300 border-orange-500/30",
  },
];

// CERTIFICATION DATA
const CERTIFICATION_LIST = [
  {
    title: "Python Essentials 1 & 2",
    issuer: "Cisco Networking Academy — MVGR College of Engineering",
    details: [
      "Python Essentials 1 – Completed on 13 Jun 2025",
      "Python Essentials 2 – Completed on 14 Jun 2025",
    ],
    link: "python_essentials.pdf",
    color: "from-yellow-500/20 to-orange-500/20",
    border: "border-yellow-500/30",
  },
  {
    title: "Cisco CCNA Certification Track",
    issuer: "Cisco Networking Academy",
    details: [
      "Introduction to Networks",
      "Switching, Routing, and Wireless Essentials",
      "Enterprise Networking, Security, and Automation",
      "Introduction to Cybersecurity",
    ],
    link: "CCNA.pdf",
    color: "from-blue-500/20 to-indigo-500/20",
    border: "border-blue-500/30",
  },
  {
    title: "Data Visualisation",
    issuer: "FORGE — Forage Virtual Experience",
    details: ["Data Visualisation using modern tools and techniques"],
    link: "data.pdf",
    color: "from-pink-500/20 to-rose-500/20",
    border: "border-pink-500/30",
  },
  {
    title: "NPTEL 1",
    issuer: "NPTEL (National Programme on Technology Enhanced Learning)",
    details: ["Completed NPTEL online certification course", "Awarded by IITs / IISc"],
    link: "nptel1.pdf",
    color: "from-teal-500/20 to-green-500/20",
    border: "border-teal-500/30",
  },
  {
    title: "NPTEL 2",
    issuer: "NPTEL (National Programme on Technology Enhanced Learning)",
    details: ["Completed second NPTEL online certification course", "Awarded by IITs / IISc"],
    link: "nptel2.pdf",
    color: "from-violet-500/20 to-purple-500/20",
    border: "border-violet-500/30",
  },
  {
    title: "Java Full Stack Certification",
    issuer: "MVGR College of Engineering",
    details: ["Java Full Stack development certification", "Project: Defect Handling System in Steel Plant"],
    link: "java_fullstack_cert.pdf",
    color: "from-orange-500/20 to-red-500/20",
    border: "border-orange-500/30",
  },
  {
    title: "Hackathon Certificate",
    issuer: "Hackathon / Tech Fest",
    details: ["Participated and achieved recognition in hackathon", "Demonstrated problem-solving and teamwork skills"],
    link: "hackathon.pdf",
    color: "from-amber-500/20 to-yellow-500/20",
    border: "border-amber-500/30",
  },
];

export default function Index() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      let currentSection = "home";
      NAV_LINKS.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY + windowHeight * 0.45) {
          currentSection = id;
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    setIsMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.offsetTop, behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full text-white bg-transparent font-sans selection:bg-cyan-500/50">
      <div className="fixed inset-0 z-[-1] pointer-events-none">
        <SceneGraph activeSection={activeSection} />
      </div>

      <header className="fixed top-0 left-0 w-full z-50 py-4 px-6 md:px-12 flex justify-between items-center backdrop-blur-md bg-black/20 border-b border-white/10 transition-all duration-300">
        <div className="text-3xl font-black tracking-tighter cursor-pointer drop-shadow-lg" onClick={() => scrollToSection("home")}>
          M. DINESH<span className="text-cyan-400">_</span>
        </div>

        <nav className="hidden md:flex gap-6 relative">
          {NAV_LINKS.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`text-sm font-semibold tracking-widest uppercase transition-all duration-300 relative group
                ${activeSection === id ? "text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]" : "text-white/60 hover:text-white"}`}
            >
              {label}
              {activeSection === id && (
                <motion.span layoutId="navIndicator" className="absolute -bottom-2 left-0 w-full h-[2px] bg-cyan-400 shadow-[0_0_10px_#22d3ee]" />
              )}
            </button>
          ))}
        </nav>

        <button className="md:hidden z-50 relative text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="fixed inset-0 z-40 bg-black/90 backdrop-blur-3xl flex flex-col items-center justify-center gap-8"
          >
            {NAV_LINKS.map(({ id, label }) => (
              <motion.button
                key={id}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                onClick={() => scrollToSection(id)}
                className={`text-3xl font-black tracking-widest uppercase ${activeSection === id ? "text-cyan-400" : "text-white"}`}
              >
                {label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <main className="relative z-10 space-y-32 pb-32">
        {/* ═══════════════ HOME ═══════════════ */}
        <section id="home" className="min-h-screen flex flex-col justify-center px-8 md:px-16 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl"
          >
            <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black tracking-tighter leading-[0.9] drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
              M. <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">DINESH</span>
            </h1>
            <p className="text-xl md:text-3xl text-cyan-100/80 font-light tracking-wide max-w-2xl mt-8 border-l-2 border-cyan-500 pl-4">
              Full Stack Web Developer &amp; Software Engineer
            </p>

            {/* ── Resume Download Button ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a
                href="/resume.pdf"
                download="M_Dinesh_Resume.pdf"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold text-base hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] hover:scale-105 transition-all duration-300 border border-cyan-400/30"
              >
                <Download size={20} />
                Download Resume
              </a>
              <button
                onClick={() => scrollToSection("contact")}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/5 text-white font-bold text-base hover:bg-white/15 transition-all duration-300 border border-white/20"
              >
                <Mail size={20} />
                Contact Me
              </button>
            </motion.div>
          </motion.div>
        </section>

        {/* ═══════════════ ABOUT ═══════════════ */}
        <section id="about" className="min-h-screen flex items-center px-8 md:px-16 relative">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden border border-white/20 p-2 glassmorphism max-w-[350px] mx-auto md:mx-0"
            >
              <img
                src="/profile.jpg"
                alt="M. Dinesh Profile"
                className="w-full h-auto rounded-xl object-cover filter brightness-110 contrast-125"
                onError={(e) => {
                  const img = e.target as HTMLImageElement;
                  if (img.src.includes('profile.jpg')) {
                    img.src = '/profiile.jpg';
                  } else {
                    img.src = '/placeholder.svg';
                  }
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glassmorphism p-10 md:p-12 rounded-3xl border border-white/10"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">About Me</h2>
              <div className="space-y-6 text-lg text-white/80 leading-relaxed font-light">
                <p>Hello! I'm <strong>M. Dinesh</strong>, a passionate Computer Science &amp; Engineering student from MVGR College of Engineering, expected to graduate in 2026.</p>
                <p>I specialize in Full Stack Web Development and have hands-on experience building projects using modern technologies such as React.js, Java, PHP, and MySQL.</p>
                <p>My interests lie in developing scalable software, exploring AI, and mastering backend systems. I constantly seek to improve my skills and contribute to meaningful projects.</p>
                <p>When I'm not coding, I enjoy exploring tech communities, learning new tools, and building personal projects that challenge me.</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ═══════════════ EDUCATION ═══════════════ */}
        <section id="education" className="min-h-screen py-20 px-8 md:px-16 flex flex-col justify-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl md:text-6xl font-black mb-20 text-center text-blue-400"
          >
            Education
          </motion.h2>
          <div className="max-w-4xl mx-auto space-y-12 relative w-full">
            <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-400/0 via-cyan-400 to-purple-500/0 md:-translate-x-1/2 shadow-[0_0_15px_#22d3ee]" />
            {educationData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`relative flex items-center justify-start md:justify-${index % 2 === 0 ? 'start' : 'end'} w-full pl-16 md:pl-0`}
              >
                <div className={`md:w-[45%] glassmorphism p-8 rounded-2xl border border-cyan-500/20 shadow-[0_0_30px_rgba(6,182,212,0.1)] hover:-translate-y-2 transition-transform duration-300 relative group`}>
                  <div className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_15px_#22d3ee] left-[-72px] md:left-auto md:group-hover:scale-150 transition-transform duration-300 
                    ${index % 2 === 0 ? 'md:-right-[calc(11.1%+8px)]' : 'md:-left-[calc(11.1%+8px)]'}" style={index % 2 === 0 ? { right: '-11%' } : { left: '-11%' }} />
                  <h3 className="text-2xl font-bold text-cyan-300 mb-2">{item.title}</h3>
                  <p className="text-purple-300 text-sm font-semibold mb-4 tracking-wider">{item.school}</p>
                  <p className="text-white/70 leading-relaxed text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ═══════════════ PROJECTS ═══════════════ */}
        <section id="projects" className="min-h-screen py-20 px-8 md:px-16 flex flex-col justify-center">
          <div className="max-w-7xl mx-auto w-full">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-4xl md:text-6xl font-black mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400"
            >
              Projects
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ y: -10, rotateX: 5, rotateY: 5 }}
                  viewport={{ once: true }}
                  className="glassmorphism border border-white/10 p-8 rounded-3xl bg-gradient-to-br from-black/60 to-blue-900/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)] group relative flex flex-col"
                >
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[inset_0_0_40px_rgba(34,211,238,0.2)] pointer-events-none" />

                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-3xl font-bold text-white group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-white/20 transition-colors text-white/50 hover:text-white z-10">
                        <Github size={24} />
                      </a>
                    )}
                  </div>

                  <p className="text-white/70 text-lg mb-6 leading-relaxed font-light flex-grow">{project.description}</p>
                  <div className="inline-block self-start px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm font-mono tracking-tight">
                    {project.tech}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════ SKILLS ═══════════════ */}
        <section id="skills" className="min-h-[80vh] flex flex-col justify-center px-8 md:px-16 py-20">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl md:text-6xl font-black mb-16 text-center text-emerald-400 drop-shadow-[0_0_15px_rgba(52,211,153,0.3)]"
          >
            Skills
          </motion.h2>
          <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
            {skillCategories.map((category, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="glassmorphism p-8 rounded-3xl border border-white/10 flex flex-col items-center text-center hover:border-emerald-500/50 transition-colors"
              >
                <div className="p-4 rounded-full bg-white/5 border border-white/10 mb-6 group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-8">{category.title}</h3>
                <div className="grid grid-cols-2 gap-4 w-full">
                  {category.skills.map((skill) => (
                    <div key={skill} className="px-4 py-3 rounded-xl bg-black/40 border border-white/5 text-sm font-semibold text-emerald-200 shadow-[0_0_10px_rgba(0,0,0,0.5)]">
                      {skill}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ═══════════════ PROFILES ═══════════════ */}
        <section id="profiles" className="min-h-[60vh] flex flex-col justify-center px-8 py-20 relative">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl md:text-6xl font-black mb-16 text-center text-white"
          >
            Profiles
          </motion.h2>
          <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-6">
            {profiles.map((profile, i) => (
              <motion.a
                key={profile.title}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -10 }}
                transition={{ delay: i * 0.1 }}
                className="glassmorphism w-full md:w-[300px] p-8 rounded-3xl border border-white/10 text-center relative overflow-hidden group block"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <h3 className="text-2xl font-black text-cyan-400 mb-4">{profile.title}</h3>
                <p className="text-white/60 text-sm truncate">{profile.description}</p>
                <ExternalLink className="absolute top-4 right-4 w-5 h-5 text-white/30 group-hover:text-cyan-400 transition-colors" />
              </motion.a>
            ))}
          </div>
        </section>

        {/* ═══════════════ INTERNSHIPS ═══════════════ */}
        <section id="internships" className="min-h-screen py-20 px-8 md:px-16 flex flex-col justify-center relative overflow-hidden">
          {/* Animated Circuit Background */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="intern-node" style={{ left: `${10 + i * 12}%`, top: `${15 + (i % 3) * 30}%`, animationDelay: `${i * 0.6}s` }} />
            ))}
            {[...Array(5)].map((_, i) => (
              <div key={i} className="intern-hex" style={{ right: `${5 + i * 15}%`, bottom: `${10 + (i % 2) * 40}%`, animationDelay: `${i * 0.9}s` }} />
            ))}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-950/20 via-transparent to-blue-950/20" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16 relative z-10"
          >
            <div className="inline-flex items-center gap-3 mb-4">
              <Briefcase className="w-8 h-8 text-cyan-400" />
              <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Internships
              </h2>
            </div>
            <p className="text-white/50 text-lg mt-2">Hands-on industry experience &amp; training programs</p>
          </motion.div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 w-full relative z-10">
            {INTERNSHIP_LIST.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative glassmorphism p-8 rounded-3xl border ${item.border} bg-gradient-to-br ${item.color} shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:-translate-y-2 transition-all duration-300 group flex flex-col justify-between`}
              >
                <div className="absolute top-4 right-4">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full border ${item.badge} uppercase tracking-wider`}>
                    Internship
                  </span>
                </div>

                <div>
                  <Briefcase className="w-8 h-8 text-white/40 mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-1 pr-20">{item.title}</h3>
                  <p className="text-white/50 text-sm font-semibold mb-5 tracking-wide">{item.organization}</p>
                  <ul className="space-y-2 mb-6">
                    {item.details.map((d, i) => (
                      <li key={i} className="text-white/70 flex items-start text-sm">
                        <span className="text-cyan-400 mr-2 mt-0.5">▹</span> {d}
                      </li>
                    ))}
                  </ul>
                </div>

                {item.link ? (
                  <a
                    href={`/${item.link}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="self-start inline-flex items-center px-6 py-3 rounded-full bg-white/10 text-white font-bold text-sm hover:bg-cyan-500 hover:text-white transition-all border border-white/20"
                  >
                    View Certificate <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                ) : (
                  <span className="self-start inline-flex items-center px-6 py-3 rounded-full bg-white/5 text-white/40 text-sm border border-white/10 cursor-not-allowed">
                    Certificate Upcoming
                  </span>
                )}
              </motion.div>
            ))}
          </div>
        </section>

        {/* ═══════════════ CERTIFICATIONS ═══════════════ */}
        <section id="certifications" className="min-h-screen py-20 px-8 md:px-16 flex flex-col justify-center relative overflow-hidden">
          {/* Animated Stars/Orbs Background */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="cert-star" style={{ left: `${Math.floor((i * 137.5) % 90 + 5)}%`, top: `${Math.floor((i * 97.3) % 80 + 10)}%`, width: `${4 + (i % 3) * 3}px`, height: `${4 + (i % 3) * 3}px`, animationDelay: `${i * 0.4}s`, animationDuration: `${3 + (i % 4)}s` }} />
            ))}
            {[...Array(3)].map((_, i) => (
              <div key={i} className="cert-orb" style={{ left: `${15 + i * 35}%`, top: `${20 + i * 20}%`, width: `${150 + i * 80}px`, height: `${150 + i * 80}px`, animationDelay: `${i * 1.5}s` }} />
            ))}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-950/20 via-transparent to-pink-950/20" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16 relative z-10"
          >
            <div className="inline-flex items-center gap-3 mb-4">
              <Award className="w-8 h-8 text-purple-400" />
              <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                Certifications
              </h2>
            </div>
            <p className="text-white/50 text-lg mt-2">Academic &amp; professional certifications earned</p>
          </motion.div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-full relative z-10">
            {CERTIFICATION_LIST.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`glassmorphism p-8 rounded-3xl border ${cert.border} bg-gradient-to-br ${cert.color} shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:-translate-y-2 transition-all duration-300 group flex flex-col justify-between`}
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-5 border border-white/10">
                    <Award className="w-5 h-5 text-purple-300" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
                  <p className="text-purple-300/80 text-xs font-semibold tracking-wider mb-5">{cert.issuer}</p>
                  <ul className="space-y-2 mb-6">
                    {cert.details.map((d, i) => (
                      <li key={i} className="text-white/70 flex items-start text-sm">
                        <span className="text-purple-400 mr-2 mt-0.5">▹</span> {d}
                      </li>
                    ))}
                  </ul>
                </div>

                {cert.link ? (
                  <a
                    href={`/${cert.link}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="self-start inline-flex items-center px-5 py-2.5 rounded-full bg-purple-600/20 text-purple-300 font-bold text-sm hover:bg-purple-500 hover:text-white transition-all border border-purple-500/50"
                  >
                    View Certificate <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                ) : (
                  <span className="self-start inline-flex items-center px-5 py-2.5 rounded-full bg-white/5 text-white/40 text-sm border border-white/10 cursor-not-allowed">
                    Certificate Upcoming
                  </span>
                )}
              </motion.div>
            ))}
          </div>
        </section>

        {/* ═══════════════ CONTACT ═══════════════ */}
        <section id="contact" className="min-h-[80vh] flex items-center justify-center px-8 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="w-full max-w-4xl glassmorphism rounded-[3rem] border border-cyan-500/30 bg-black/40 backdrop-blur-3xl p-12 md:p-20 text-center shadow-[0_0_50px_rgba(34,211,238,0.1)] relative overflow-hidden"
          >
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500 rounded-full blur-[100px] opacity-20 pointer-events-none" />
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full blur-[100px] opacity-20 pointer-events-none" />

            <h2 className="text-5xl md:text-7xl font-black mb-8 text-white">Contact</h2>
            <p className="text-2xl text-cyan-200/80 mb-12 font-light">
              Let's build something extraordinary together.
            </p>

            <a
              href="mailto:metikotidinesh45@gmail.com"
              className="inline-flex items-center px-12 py-6 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-black text-xl rounded-full hover:shadow-[0_0_40px_rgba(34,211,238,0.6)] hover:scale-105 transition-all duration-300"
            >
              <Mail className="mr-4" size={28} /> metikotidinesh45@gmail.com
            </a>
          </motion.div>
        </section>
      </main>

      <style dangerouslySetInnerHTML={{
        __html: `
        .glassmorphism {
          background: rgba(10, 10, 15, 0.4);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }

        /* ── INTERNSHIP background nodes (cyan circuit dots) ── */
        .intern-node {
          position: absolute;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: rgba(34, 211, 238, 0.5);
          box-shadow: 0 0 12px rgba(34, 211, 238, 0.7), 0 0 30px rgba(34, 211, 238, 0.3);
          animation: internPulse 2.5s ease-in-out infinite alternate;
        }
        .intern-hex {
          position: absolute;
          width: 40px;
          height: 40px;
          border: 1.5px solid rgba(34, 211, 238, 0.25);
          border-radius: 8px;
          transform: rotate(45deg);
          animation: internSpin 8s linear infinite;
        }
        @keyframes internPulse {
          0%   { opacity: 0.2; transform: scale(1); }
          100% { opacity: 0.9; transform: scale(1.6); }
        }
        @keyframes internSpin {
          0%   { transform: rotate(45deg) scale(1);   opacity: 0.15; }
          50%  { transform: rotate(225deg) scale(1.2); opacity: 0.4; }
          100% { transform: rotate(405deg) scale(1);  opacity: 0.15; }
        }

        /* ── CERTIFICATION background stars & orbs ── */
        .cert-star {
          position: absolute;
          border-radius: 50%;
          background: rgba(192, 132, 252, 0.9);
          box-shadow: 0 0 6px rgba(192, 132, 252, 0.9), 0 0 18px rgba(192, 132, 252, 0.4);
          animation: certTwinkle 3s ease-in-out infinite alternate;
        }
        .cert-orb {
          position: absolute;
          border-radius: 50%;
          border: 1px solid rgba(168, 85, 247, 0.15);
          animation: certOrbit 12s linear infinite;
        }
        @keyframes certTwinkle {
          0%   { opacity: 0.15; transform: scale(0.8); }
          100% { opacity: 1;    transform: scale(1.4); }
        }
        @keyframes certOrbit {
          0%   { transform: rotate(0deg)   scale(1);    opacity: 0.08; }
          50%  { transform: rotate(180deg) scale(1.05); opacity: 0.2; }
          100% { transform: rotate(360deg) scale(1);    opacity: 0.08; }
        }
      `}} />
    </div>
  );
}
