import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const titles = [
  "Full Stack Developer",
  "React Specialist",
  "Java & Spring Boot",
  "Web Designer",
];

function TypingEffect() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = titles[titleIndex];
    const speed = deleting ? 40 : 80;

    if (!deleting && charIndex === current.length) {
      setTimeout(() => setDeleting(true), 2000);
      return;
    }

    if (deleting && charIndex === 0) {
      setDeleting(false);
      setTitleIndex((prev) => (prev + 1) % titles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setCharIndex((prev) => prev + (deleting ? -1 : 1));
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, titleIndex]);

  return (
    <span className="text-accent">
      {titles[titleIndex].substring(0, charIndex)}
      <span className="animate-pulse">|</span>
    </span>
  );
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.5 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function HeroOverlay() {
  return (
    <div className="absolute inset-0 z-10 flex flex-col pointer-events-none">
      {/* Top bar */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex items-center justify-between px-6 py-5 md:px-10"
      >
        <div className="pointer-events-auto">
          <h2 className="text-xl font-bold tracking-tight text-foreground">
            M. <span className="text-primary">Dinesh</span>
          </h2>
        </div>
        <nav className="hidden md:flex gap-6 pointer-events-auto">
          {["About", "Projects", "Skills", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </nav>
      </motion.div>

      {/* Center content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex-1 flex flex-col items-center justify-center text-center px-6 gap-5"
      >
        <motion.p
          variants={itemVariants}
          className="text-sm md:text-base uppercase tracking-[0.3em] text-primary/80 font-medium"
        >
          Welcome to my universe
        </motion.p>

        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-tight text-foreground"
        >
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Dinesh
          </span>
        </motion.h1>

        <motion.div
          variants={itemVariants}
          className="text-lg sm:text-xl md:text-2xl font-light text-muted-foreground h-8"
        >
          <TypingEffect />
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="max-w-lg text-sm md:text-base text-muted-foreground/70 leading-relaxed"
        >
          Building scalable applications &amp; crafting beautiful digital experiences
          with modern web technologies.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 mt-4 pointer-events-auto"
        >
          <a
            href="#projects"
            className="group relative px-8 py-3 rounded-full text-sm font-semibold text-primary-foreground overflow-hidden transition-all duration-300"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full" />
            <span className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
            <span className="relative z-10">View Projects</span>
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-full text-sm font-semibold border border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/60 transition-all duration-300"
          >
            Contact Me
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="flex flex-col items-center pb-10 gap-2"
      >
        <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground/50">
          Scroll Down
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1"
        >
          <motion.div className="w-1 h-2 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </div>
  );
}
