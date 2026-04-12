const educationData = [
  {
    position: "left",
    title: "SSC - 10th Standard",
    school: "Balaji High School (2018)",
    description: "Scored 90% and built a strong foundation in mathematics and science, which sparked interest in computing and logic-based problem solving.",
  },
  {
    position: "right",
    title: "Diploma in Computer Science",
    school: "Govt Polytechnic College, Anakapalli (2020–2023)",
    description: "Completed a 3-year diploma with 76%. Gained hands-on experience in C, Java, DBMS, Web Development, and participated in industrial training.",
  },
  {
    position: "left",
    title: "B.Tech in Computer Science and Engineering",
    school: "MVGR College of Engineering (2023–2026)",
    description: "Currently pursuing B.Tech with a strong focus on Full Stack Web Development, AI/ML, and Software Engineering. Actively building real-world projects and improving coding proficiency.",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="portfolio-section p-[60px_20px] my-[50px] mx-auto bg-[rgba(13,13,13,0.409)] shadow-[0_4px_12px_rgba(10,1,36,0.4)] rounded-lg max-w-[1100px]">
      <h2 className="text-3xl mb-4 border-l-4 border-secondary pl-3 text-foreground">Education</h2>
      <div className="timeline-tree">
        {educationData.map((item, index) => (
          <div key={index} className={`timeline-item ${item.position}`}>
            <div className="content">
              <h3 className="text-xl font-bold text-primary">{item.title}</h3>
              <p className="text-muted-foreground italic">{item.school}</p>
              <p className="mt-2">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
