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

const ProfilesSection = () => {
  return (
    <section id="profiles" className="portfolio-section p-[60px_20px] my-[50px] mx-auto bg-[rgba(13,13,13,0.409)] shadow-[0_4px_12px_rgba(10,1,36,0.4)] rounded-lg max-w-[1100px]">
      <h2 className="text-3xl mb-4 border-l-4 border-secondary pl-3 text-foreground">Profiles</h2>
      <div className="flex flex-wrap justify-center gap-5 mt-4">
        {profiles.map((profile) => (
          <a
            key={profile.title}
            href={profile.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-card text-muted-foreground p-6 rounded-lg text-center w-[260px] no-underline transition-transform duration-300 hover:-translate-y-1 shadow-[0_4px_10px_rgba(45,44,44,0.5)]"
          >
            <h3 className="text-portfolio-cyan font-bold mb-2">{profile.title}</h3>
            <p>{profile.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ProfilesSection;
