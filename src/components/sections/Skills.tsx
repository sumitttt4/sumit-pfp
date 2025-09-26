import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    'Figma', 'Adobe XD', 'React', 'TypeScript', 'JavaScript', 
    'Next.js', 'Tailwind CSS', 'Framer Motion', 'Git', 'VS Code',
    'User Research', 'Prototyping', 'Design Systems', 'HTML5', 'CSS3'
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

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="notion-card"
        >
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <motion.span 
                key={skill}
                className="px-3 py-2 bg-muted text-muted-foreground rounded text-sm simple-hover cursor-pointer"
                initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ delay: index * 0.05, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.1, 
                  rotateY: 10,
                  rotateX: -5,
                  y: -2,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2)" 
                }}
                whileTap={{ scale: 0.95 }}
                style={{ transformStyle: "preserve-3d" } as any}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;