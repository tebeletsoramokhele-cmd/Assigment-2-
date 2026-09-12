function Skills({ skills, showSkills, setShowSkills }) {
  return (
    <section id="skills">
      <div>
        <h2>Skills</h2>

        <button onClick={() => setShowSkills(!showSkills)}>
          {showSkills ? "Hide Skills" : "Show Skills"}
        </button>
      </div>

      {showSkills && (
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default Skills;