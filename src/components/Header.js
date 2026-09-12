function Header({ name, title, darkMode, setDarkMode, printCV }) {
  const sections = [
    ['Profile', 'profile'],
    ['Contact', 'contact'],
    ['Education', 'education'],
    ['Skills', 'skills'],
    ['Experience', 'experience'],
    ['Projects', 'projects'],
    ['References', 'references']
  ];

  return (
    <header className="header">
      <h1>{name}</h1>
      <h2>{title}</h2>

      <nav aria-label="CV sections">
        {sections.map(([label, id]) => (
          <a href={`#${id}`} key={id}>{label}</a>
        ))}
      </nav>

      <div className="header-buttons">
        <button type="button" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
        <button type="button" onClick={printCV}>Print CV</button>
      </div>
    </header>
  );
}

export default Header;
