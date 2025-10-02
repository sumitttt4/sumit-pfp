import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Design',
      skills: ['UI/UX Design', 'Figma', 'User Research', 'Prototyping', 'Design Systems', 'Mobile Design', 'Dashboard Design']
    },
    {
      title: 'Development',
      skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Framer Motion']
    },
    {
      title: 'Specialties',
      skills: ['SaaS Landing Pages', 'Data Visualization', 'Conversion Optimization', 'Cross-platform Design']
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-semibold text-foreground mb-8">
            Skills & Tools
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="notion-card"
            >
              <h3 className="text-lg font-semibold text-foreground mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, index) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full hover:bg-muted-foreground/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;