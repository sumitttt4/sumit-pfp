import { motion } from 'framer-motion';
import { Figma, Smartphone, Monitor, PenTool, Users, BarChart3 } from 'lucide-react';

const DesignProcess = () => {
  const processSteps = [
    {
      icon: Users,
      title: 'Research',
      description: 'User interviews, surveys, and competitive analysis to understand real problems and user needs.'
    },
    {
      icon: PenTool,
      title: 'Ideation',
      description: 'Wireframing, user flows, and information architecture to structure the solution.'
    },
    {
      icon: Figma,
      title: 'Design',
      description: 'High-fidelity mockups, design systems, and interactive prototypes in Figma.'
    },
    {
      icon: BarChart3,
      title: 'Validate',
      description: 'User testing, feedback iteration, and measuring design success metrics.'
    }
  ];

  const capabilities = [
    {
      icon: Smartphone,
      title: 'Mobile Design',
      description: 'Native iOS and Android app interfaces with platform-specific patterns'
    },
    {
      icon: Monitor,
      title: 'SaaS & Dashboards',
      description: 'Conversion-focused landing pages and complex data visualization interfaces'
    },
    {
      icon: PenTool,
      title: 'Design Systems',
      description: 'Scalable component libraries and consistent design languages'
    }
  ];

  return (
    <section id="design-process" className="py-20 bg-secondary/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Design Process */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Design Process
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            My approach to creating user-centered digital experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="notion-card text-center p-6"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <step.icon className="w-6 h-6 text-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Design Capabilities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-semibold text-foreground mb-4">
            Design Capabilities
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, y: 30, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ 
                rotateY: 5,
                rotateX: -5,
                y: -8,
                scale: 1.02,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" 
              }}
              className="notion-card p-8 cursor-pointer"
              style={{ transformStyle: "preserve-3d" } as any}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-6">
                <capability.icon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-3">
                {capability.title}
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                {capability.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignProcess;