import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 bg-gradient-to-br from-secondary/20 to-background relative"
    >
      <div className="max-w-3xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let’s <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Open to collaborations, opportunities, or just a friendly chat.
          </p>
        </motion.div>

        {/* Contact Options */}
        <div className="grid sm:grid-cols-1 gap-6">
          {/* Email */}
          <motion.a
            href="mailto:sumitsharma9128@gmail.com"
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center justify-center p-6 rounded-2xl card-glass border border-border/40 hover:border-accent/50 transition"
          >
            <Mail className="text-accent mb-3" size={26} />
            <span className="text-sm text-muted-foreground">Email</span>
            <span className="font-medium text-center">
              sumitsharma9128@gmail.com
            </span>
          </motion.a>
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <h4 className="text-xl font-semibold mb-4 text-gradient-accent">
            Want to Chat?
          </h4>
          <motion.a
            href="https://cal.com/sumit-sharma" // replace with your scheduling link
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-glow px-8 py-4 rounded-xl font-medium inline-flex items-center space-x-2"
          >
            <Mail size={18} />
            <span>Book a Call</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
