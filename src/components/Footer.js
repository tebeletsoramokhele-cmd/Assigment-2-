function Footer({ name, email, phone }) {
  return (
    <footer className="footer">

      <h3>{name}</h3>

      <p>{email}</p>

      <p>{phone}</p>

      <p>
        © 2026 {name}. All Rights Reserved.
      </p>

    </footer>
  );
}

export default Footer;