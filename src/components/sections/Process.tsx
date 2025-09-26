import React from 'react';
import { motion } from 'framer-motion';
import { Search, Lightbulb, Palette, Code } from 'lucide-react';

const Process = () => {
  const steps = [
    { 
      icon: Search, 
      title: 'Research', 
      desc: 'Understanding users and problems'
    },
    { 
      icon: Lightbulb, 
      title: 'Ideate', 
      desc: 'Brainstorming and conceptualizing'
    },
    { 
      icon: Palette, 
      title: 'Design', 
      desc: 'Creating beautiful interfaces'
    },
    { 
      icon: Code, 
      title: 'Develop', 
      desc: 'Bringing designs to life'
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-semibold text-foreground mb-4">
            My Process
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            How I approach design and development projects
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              className="notion-card text-center simple-hover"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 bg-foreground text-background rounded-full flex items-center justify-center mx-auto mb-4">
                <step.icon className="w-5 h-5" />
              </div>
              
              <h3 className="font-medium mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;