import profileImg from '../assets/profile.jpg';
const AboutSection = () => {
  return (
    <section id="about" className="portfolio-section p-[60px_20px] my-[50px] mx-auto bg-[rgba(13,13,13,0.409)] shadow-[0_4px_12px_rgba(10,1,36,0.4)] rounded-lg max-w-[1100px]">
      <h2 className="text-3xl mb-4 border-l-4 border-secondary pl-3 text-foreground">About Me</h2>
      <div className="flex flex-wrap items-center gap-8">
        <div className="flex-shrink-0">
          <img
            src={profileImg}
            alt="Profile"
            className="w-[180px] rounded-full border-4 border-primary"
            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
          />
        </div>
        <div className="flex-1 min-w-[280px] space-y-3">
          <p>Hello! I'm <strong>M. Dinesh</strong>, a passionate Computer Science &amp; Engineering student from MVGR College of Engineering, expected to graduate in 2026.</p>
          <p>I specialize in Full Stack Web Development and have hands-on experience building projects using modern technologies such as React.js, Java, PHP, and MySQL.</p>
          <p>My interests lie in developing scalable software, exploring AI, and mastering backend systems. I constantly seek to improve my skills and contribute to meaningful projects.</p>
          <p>When I'm not coding, I enjoy exploring tech communities, learning new tools, and building personal projects that challenge me.</p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
