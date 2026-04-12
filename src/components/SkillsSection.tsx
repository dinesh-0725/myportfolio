const skillCategories = [
  {
    title: "Web Skills",
    skills: ["HTML", "CSS", "JavaScript", "React.js"],
  },
  {
    title: "Programming Languages",
    skills: ["Java", "Python", "C++ (Basic)", "C (Basic)"],
  },
  {
    title: "Database",
    skills: ["MySQL / SQL"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="portfolio-section p-[60px_20px] my-[50px] mx-auto bg-[rgba(13,13,13,0.409)] shadow-[0_4px_12px_rgba(10,1,36,0.4)] rounded-lg max-w-[1100px]">
      <h2 className="text-3xl mb-4 border-l-4 border-secondary pl-3 text-foreground">Skills</h2>
      {skillCategories.map((category, index) => (
        <div key={index} className="mt-6">
          <h3 className="text-xl font-bold text-primary mb-3">{category.title}</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {category.skills.map((skill) => (
              <div
                key={skill}
                className="bg-card p-4 rounded-lg text-center font-bold shadow-[0_3px_6px_rgba(110,110,110,0.3)]"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default SkillsSection;
