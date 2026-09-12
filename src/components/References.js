function References({ references }) {
  return (
    <section id="references" className="section">
      <h2>References</h2>

      <div className="references-container">
        {references.map((references, index) => (
          <div className="card" key={index}>
            <h3>{references.name}</h3>

            <p>
              <strong>Position:</strong> {references.position}
            </p>

            <p>
              <strong>Organisation:</strong> {references.organisation}
            </p>

            <p>
              <strong>Email:</strong> {references.email}
            </p>

            <p>
              <strong>Phone:</strong> {references.phone}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default References;