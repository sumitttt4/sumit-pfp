import { motion } from 'framer-motion';
import { Palette, Smartphone, Monitor, Layers, Zap, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "User-centered design for web and mobile applications with focus on usability and conversion.",
      deliverables: ["User Research", "Wireframes", "Prototypes", "Design Systems"]
    },
    {
      icon: Smartphone,
      title: "Mobile App Design",
      description: "Native iOS and Android app interfaces that feel intuitive and follow platform guidelines.",
      deliverables: ["App Mockups", "Interactive Prototypes", "App Store Assets", "Handoff Files"]
    },
    {
      icon: Monitor,
      title: "Web Design",
      description: "Responsive websites and web applications optimized for all devices and screen sizes.",
      deliverables: ["Responsive Designs", "Component Library", "Style Guide", "Developer Handoff"]
    },
    {
      icon: Layers,
      title: "Design Systems",
      description: "Scalable design systems that maintain consistency across all digital touchpoints.",
      deliverables: ["Component Library", "Design Tokens", "Documentation", "Figma Templates"]
    },
    {
      icon: Zap,
      title: "Frontend Development",
      description: "Pixel-perfect implementation of designs using modern frameworks and best practices.",
      deliverables: ["React Components", "Responsive Code", "Performance Optimization", "Testing"]
    },
    {
      icon: Users,
      title: "UX Consultation",
      description: "Strategic guidance on user experience improvements and design system implementation.",
      deliverables: ["UX Audit", "Strategy Planning", "Team Training", "Process Setup"]
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            What I Do
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I help companies create digital products that users love and businesses grow with.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="notion-card group hover:border-muted-foreground/50 transition-all duration-300"
            >
              <div className="mb-4">
                <service.icon className="w-8 h-8 text-foreground mb-3" />
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {service.description}
                </p>
              </div>

              <div>
                <p className="text-sm font-medium text-foreground mb-2">
                  What you get:
                </p>
                <ul className="space-y-1">
                  {service.deliverables.map((item, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                      <div className="w-1 h-1 bg-muted-foreground rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-6">
            Ready to start your project?
          </p>
          <a 
            href="#contact"
            className="btn-primary inline-flex items-center gap-2"
          >
            Let's Work Together
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;