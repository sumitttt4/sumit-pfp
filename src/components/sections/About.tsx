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
              I'm a UI/UX Designer and Frontend Developer currently working as an intern at Metry AI. 
              I enjoy creating digital products that are both functional and visually appealing.
            </p>
            
            <p>
              My approach focuses on understanding user needs and translating them into clean, 
              intuitive interfaces. I work with tools like Figma for design and React for development.
            </p>
            
            <p>
              When I'm not designing or coding, I'm exploring new technologies and learning 
              from the design community.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
