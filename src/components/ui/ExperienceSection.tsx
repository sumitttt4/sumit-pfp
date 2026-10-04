import { experience } from "@/data/profile";

export default function ExperienceSection() {
  return (
    <section className="section">
      <div className="section-heading">
        <h2>Experience.</h2>
        <span>Building with teams. And on my own.</span>
      </div>
      <div className="experience-rows">
        {experience.map((item) => (
          <article key={item.company} className="experience-row">
            <div className="experience-title">
              <h3>
                {item.company}
                {item.current && (
                  <span className="current-dot" aria-label="Current role" />
                )}
              </h3>
              <span>{item.role}</span>
            </div>
            <div>
              <p className="experience-date">{item.date}</p>
              <p className="experience-description">{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
