import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Code2, 
  Database, 
  Palette, 
  Globe, 
  Layers, 
  Zap,
  Figma,
  Github,
  FileCode,
  Smartphone
} from 'lucide-react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    { name: "React.js", icon: Code2, color: "text-blue-500" },
    { name: "TypeScript", icon: FileCode, color: "text-blue-600" }, 
    { name: "JavaScript", icon: Code2, color: "text-yellow-500" },
    { name: "Next.js", icon: Globe, color: "text-gray-800 dark:text-white" },
    { name: "Tailwind CSS", icon: Palette, color: "text-cyan-500" },
    { name: "Framer Motion", icon: Zap, color: "text-purple-500" },
    { name: "Figma", icon: Figma, color: "text-orange-500" },
    { name: "Git & GitHub", icon: Github, color: "text-gray-700 dark:text-gray-300" },
    { name: "HTML5 & CSS3", icon: FileCode, color: "text-orange-600" },
    { name: "Responsive Design", icon: Smartphone, color: "text-green-500" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-background to-muted/30" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-poppins">
            Skills & Technologies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-inter">
            Technologies I use to build modern digital experiences
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              className="group"
            >
              <div className="p-4 md:p-6 bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl text-center transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:border-primary/30 hover:bg-card dark:hover:bg-card/90">
                <div className="flex flex-col items-center gap-3">
                  <skill.icon className={`w-6 h-6 md:w-8 md:h-8 ${skill.color} transition-all duration-300 group-hover:scale-110`} />
                  <span className="text-sm md:text-base font-medium text-foreground group-hover:text-primary transition-colors font-inter">
                    {skill.name}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;