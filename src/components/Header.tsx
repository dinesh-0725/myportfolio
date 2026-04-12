const navItems = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Profiles", href: "#profiles" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  return (
    <header className="text-center py-8 px-4 backdrop-blur-md sticky top-0 z-10 shadow-[0_4px_12px_rgba(46,45,45,0.4)] bg-[rgba(5,5,20,0.6)]">
      <h1 className="text-4xl font-bold text-foreground">M. Dinesh</h1>
      <p className="text-lg text-primary mt-1">FULL STACK DEVELOPER AND WEB DESIGNER</p>
      <nav className="mt-4">
        <ul className="flex justify-center gap-5 flex-wrap list-none">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-muted-foreground font-medium hover:text-primary transition-colors duration-300"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
