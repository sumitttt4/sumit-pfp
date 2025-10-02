import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email Me",
      description: "Response within 24 hours",
      action: "sumitsharma9128@gmail.com",
      link: "mailto:sumitsharma9128@gmail.com"
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Let's Work Together
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Have a project in mind? I'd love to hear about it and discuss how we can work together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 mb-12 max-w-md mx-auto">
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 30, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ 
                rotateY: 5,
                rotateX: -5,
                y: -8,
                scale: 1.05,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" 
              }}
              className="notion-card text-center hover:border-muted-foreground/50 transition-all duration-300 cursor-pointer"
              style={{ transformStyle: "preserve-3d" } as any}
            >
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mx-auto mb-4">
                <method.icon className="w-6 h-6 text-foreground" />
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {method.title}
              </h3>
              
              <p className="text-muted-foreground mb-4">
                {method.description}
              </p>
              
              <a
                href={method.link}
                className="btn-secondary inline-flex items-center gap-2"
              >
                {method.action}
              </a>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30, rotateX: 10 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          whileHover={{ 
            rotateX: -2, 
            y: -3, 
            scale: 1.02,
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" 
          }}
          className="notion-card text-center max-w-2xl mx-auto cursor-pointer"
          style={{ transformStyle: "preserve-3d" } as any}
        >
          <h3 className="text-xl font-semibold text-foreground mb-3">
            Ready to Start Your Project?
          </h3>
          
          <p className="text-muted-foreground mb-6">
            Let's create something amazing together.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:sumitsharma9128@gmail.com?subject=New Project Inquiry"
              className="btn-primary inline-flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              Start a Project
            </a>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Based in India • Remote Worldwide</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Available for new projects</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;