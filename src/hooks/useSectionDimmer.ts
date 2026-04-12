import { useEffect } from "react";

const useSectionDimmer = () => {
  useEffect(() => {
    const sections = document.querySelectorAll(".portfolio-section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            sections.forEach((sec) => sec.classList.add("dimmed"));
            entry.target.classList.remove("dimmed");
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);
};

export default useSectionDimmer;
