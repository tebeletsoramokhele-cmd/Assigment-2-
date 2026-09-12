function Experience({ experiences }) {
  return (
    <section id="experience">
      <h2>Work Experience</h2>

      {experiences.map((item, index) => (
        <div key={`${item.position}-${index}`}>
          <h3>{item.position}</h3>
          <p><strong>Organisation:</strong> {item.organisation}</p>
          <p>{item.description}</p>

          {item.responsibilities?.length > 0 && (
            <>
              <h4>Responsibilities</h4>
              <ul>
                {item.responsibilities.map((responsibility, responsibilityIndex) => (
                  <li key={responsibilityIndex}>{responsibility}</li>
                ))}
              </ul>
            </>
          )}
        </div>
      ))}
    </section>
  );
}

export default Experience;
