function Education({ education }) {
  return (
    <section id="education">
      <h2>Education</h2>

      {education.map((item, index) => (
        <div key={`${item.qualification}-${index}`}>
          <h3>{item.qualification}</h3>
          <p><strong>Institution:</strong> {item.institution}</p>
          <p><strong>Year:</strong> {item.year}</p>
        </div>
      ))}
    </section>
  );
}

export default Education;
