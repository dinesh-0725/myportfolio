const certifications = [
  {
    title: "Java Full Stack Certification",
    details: ["Project: Defect Handling in Steel Plant"],
    link: "https://drive.google.com/file/d/14JWqYPF2LlG7sWEBQPXVN_Bwj8m7SvVm/view?usp=drive_link",
  },
  {
    title: "Industrial Training - Machine Learning",
    details: ["Recommendation System using Python (HMI Services)"],
    link: "https://drive.google.com/file/d/14H64VfC9J4U2bfIbYbVFn2NLvjwMPwBN/view?usp=drive_link",
  },
  {
    title: "Python Essentials 1 & 2",
    subtitle: "Completed via Cisco Networking Academy (MVGR College of Engineering)",
    details: [
      "Python Essentials 1 – Completed on 13 Jun 2025",
      "Python Essentials 2 – Completed on 14 Jun 2025",
    ],
    link: "https://drive.google.com/file/d/14TgaUZJiEKhPcwIuAbbp1hGGEdm0xp_l/view?usp=drive_link",
  },
  {
    title: "Cisco CCNA Certification Track",
    details: [
      "Introduction to Networks",
      "Switching, Routing, and Wireless Essentials",
      "Enterprise Networking, Security, and Automation",
      "Introduction to Cybersecurity",
    ],
    link: "https://drive.google.com/file/d/14RpAZnYJK2AwmD3BZ2XEbKt9P7S2dN5z/view?usp=drive_link",
  },
  {
    title: "FORGE",
    details: ["DATA VISUALISATION"],
    link: "https://drive.google.com/file/d/14cAq1nD1nKHrY8VkKbfGG8vZ4WdpOJaS/view?usp=drive_link",
  },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="portfolio-section p-[60px_20px] my-[50px] mx-auto bg-[rgba(13,13,13,0.409)] shadow-[0_4px_12px_rgba(10,1,36,0.4)] rounded-lg max-w-[1100px]">
      <h2 className="text-3xl mb-4 border-l-4 border-secondary pl-3 text-foreground">Certifications</h2>
      <div className="flex flex-col items-center gap-5 mt-4">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="bg-card p-6 rounded-lg text-center max-w-[600px] w-full shadow-[0_4px_10px_rgba(58,55,55,0.5)]"
          >
            <h3 className="text-xl font-bold text-portfolio-link">{cert.title}</h3>
            {cert.subtitle && <p className="text-muted-foreground mt-1">{cert.subtitle}</p>}
            <ul className="mt-2 space-y-1">
              {cert.details.map((detail, i) => (
                <li key={i} className="text-muted-foreground">{detail}</li>
              ))}
            </ul>
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 px-4 py-2 bg-card text-muted-foreground rounded font-bold no-underline transition-colors duration-300 hover:bg-primary hover:text-primary-foreground border border-border"
            >
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CertificationsSection;
