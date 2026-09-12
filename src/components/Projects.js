function Projects({ projects }) {
  return (
    <section id="projects">
      <h2>Projects</h2>

      {projects.map((project, index) => (
        <div key={`${project.name}-${index}`}>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <p><strong>Technologies:</strong> {project.technologies}</p>
        </div>
      ))}
    </section>
  );
}

export default Projects;
