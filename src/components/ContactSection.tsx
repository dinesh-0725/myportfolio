const ContactSection = () => {
  return (
    <section id="contact" className="portfolio-section p-[60px_20px] my-[50px] mx-auto bg-[rgba(13,13,13,0.409)] shadow-[0_4px_12px_rgba(10,1,36,0.4)] rounded-lg max-w-[1100px]">
      <h2 className="text-3xl mb-4 border-l-4 border-secondary pl-3 text-foreground">Contact</h2>
      <div className="bg-card p-6 rounded-lg text-center max-w-[400px] mx-auto shadow-[0_4px_10px_rgba(62,59,59,0.5)]">
        <p className="font-bold text-lg mb-2">Email</p>
        <a
          href="mailto:metikotidinesh45@gmail.com"
          className="text-muted-foreground no-underline hover:text-primary transition-colors"
        >
          metikotidinesh45@gmail.com
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
