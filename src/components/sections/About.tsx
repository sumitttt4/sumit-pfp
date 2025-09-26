import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-semibold text-foreground mb-8">
            About
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30, rotateX: 10 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          whileHover={{ 
            rotateX: -2, 
            y: -5, 
            scale: 1.02,
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" 
          }}
          className="notion-card cursor-pointer"
          style={{ transformStyle: "preserve-3d" } as any}
        >
          <div className="max-w-2xl mx-auto space-y-6 text-muted-foreground leading-relaxed">
            <p>
              I'm a UI/UX Designer and Frontend Developer currently interning at Metry AI in Tokyo, Japan. 
              I specialize in creating comprehensive digital experiences that work seamlessly across mobile and desktop platforms.
            </p>
            
            <p>
              My design process combines user research, information architecture, and visual design to solve complex problems. 
              I specialize in mobile apps, enterprise dashboards, and conversion-focused SaaS landing pages that drive business results.
            </p>
            
            <p>
              I use Figma for design systems and prototyping, React and TypeScript for development, 
              and believe in the power of design thinking to create meaningful user experiences.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
