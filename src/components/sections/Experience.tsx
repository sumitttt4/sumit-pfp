import { motion } from 'framer-motion';
import { Calendar, MapPin, Building2 } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: 'Metry AI',
      role: 'UI/UX Designer Intern',
      period: 'August 2025 - Present',
      location: 'Tokyo, Japan',
      description: 'Designing user interfaces and experiences for AI-powered analytics platform. Working on dashboard design, user flows, and improving overall user experience.',
      skills: ['Figma', 'User Research', 'Prototyping', 'Design Systems'],
      type: 'current'
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and work experience
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="notion-card p-8 hover:border-muted-foreground/50 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                {/* Company Logo Placeholder */}
                <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-8 h-8 text-muted-foreground" />
                </div>

                {/* Experience Details */}
                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-1">
                      {exp.role}
                    </h3>
                    <p className="text-lg text-muted-foreground font-medium mb-2">
                      {exp.company}
                    </p>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                        {exp.type === 'current' && (
                          <span className="ml-2 px-2 py-1 bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400 text-xs rounded-full">
                            Current
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12 p-6 notion-card"
        >
          <p className="text-muted-foreground">
            Looking for new opportunities to create meaningful digital experiences.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;