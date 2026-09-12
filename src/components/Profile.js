function Profile({ name, title, summary }) {
  return (
    <section id="profile">
      <h2>Professional Profile</h2>
      <h3>{name}</h3>
      <h4>{title}</h4>
      <p>{summary}</p>
    </section>
  );
}

export default Profile;
