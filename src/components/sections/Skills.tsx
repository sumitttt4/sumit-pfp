import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Code, 
  Palette, 
  Database, 
  Globe, 
  Figma, 
  Github,
  Smartphone,
  Zap
} from 'lucide-react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code,
      skills: ["React.js", "TypeScript", "Next.js", "Vue.js", "HTML5", "CSS3"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "UI/UX Design",
      icon: Palette,
      skills: ["Figma", "Adobe XD", "Sketch", "Prototyping", "Wireframing", "User Research"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Backend & Database",
      icon: Database,
      skills: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "REST APIs", "GraphQL"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Tools & Frameworks",
      icon: Globe,
      skills: ["Git", "Docker", "Webpack", "Vite", "Jest", "Cypress"],
      color: "from-orange-500 to-red-500"
    }
  ];

  const techIcons = [
    { name: "React", icon: Code, delay: 0 },
    { name: "TypeScript", icon: Code, delay: 0.1 },
    { name: "Figma", icon: Figma, delay: 0.2 },
    { name: "GitHub", icon: Github, delay: 0.3 },
    { name: "Mobile", icon: Smartphone, delay: 0.4 },
    { name: "Performance", icon: Zap, delay: 0.5 }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-background to-secondary/30" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to create exceptional digital experiences
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent/50 mx-auto mt-6"></div>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="card-glass card-floating rounded-2xl p-6 border border-border/50 relative overflow-hidden group"
            >
              {/* Gradient Top */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${category.color}`}></div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className={`p-3 rounded-xl bg-gradient-to-r ${category.color} text-white`}
                  >
                    <category.icon size={24} />
                  </motion.div>
                  <h3 className="text-lg font-semibold text-gradient">{category.title}</h3>
                </div>
                
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: (index * 0.1) + (skillIndex * 0.05) }}
                      className="flex items-center space-x-2"
                    >
                      <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Hover Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
              />
            </motion.div>
          ))}
        </div>

        {/* Tech Icons Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl font-semibold mb-8 text-gradient-accent">Technologies I Love</h3>
          
          <div className="flex flex-wrap justify-center items-center gap-8">
            {techIcons.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + tech.delay }}
                whileHover={{ 
                  scale: 1.2, 
                  rotate: [0, -10, 10, 0],
                  transition: { duration: 0.3 }
                }}
                className="group"
              >
                <div className="relative">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="absolute -inset-2 bg-gradient-to-r from-accent/20 to-accent/5 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <div className="relative p-4 card-glass rounded-2xl border border-border/50 bg-background/50">
                    <tech.icon size={32} className="text-accent mx-auto" />
                    <span className="block mt-2 text-xs font-medium text-muted-foreground">
                      {tech.name}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;