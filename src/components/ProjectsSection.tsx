const projects = [
  {
    title: "Lawyer Consultancy Website",
    description: "A responsive website where users can book consultations with lawyers. Includes login, search, and admin dashboard.",
    tech: "Tech Used: HTML, CSS, JavaScript, PHP, MySQL",
  },
  {
    title: "Detection Management System",
    description: "Enterprise system for defect tracking and workflow in steel plant environments. Role-based dashboards for employees, mechanics, and admin.",
    tech: "Tech Used: Java Full Stack (JSP, Servlets, JDBC, Oracle)",
  },
  {
    title: "Random Chat Application",
    description: "Real-time anonymous chatting between users using React and WebSocket support.",
    tech: "Tech Used: React.js, Node.js",
  },
  {
    title: "HREION - ERP Management System",
    description: "A comprehensive ERP-based web application designed to manage organizational operations such as employees, departments, roles, and workflows through a centralized system.",
    tech: "Tech Used: React.js, Node.js",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="portfolio-section p-[60px_20px] my-[50px] mx-auto bg-[rgba(13,13,13,0.409)] shadow-[0_4px_12px_rgba(10,1,36,0.4)] rounded-lg max-w-[1100px]">
      <h2 className="text-3xl mb-4 border-l-4 border-secondary pl-3 text-foreground">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-card p-6 rounded-lg text-center shadow-[0_3px_6px_rgba(110,110,110,0.3)] min-h-[220px] flex flex-col justify-center"
          >
            <h3 className="text-xl font-bold text-primary mb-2">{project.title}</h3>
            <p className="text-muted-foreground">{project.description}</p>
            <p className="mt-2 text-sm text-muted-foreground italic">{project.tech}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
