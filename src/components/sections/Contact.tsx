import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Calendar, MessageCircle, ArrowRight } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactOptions = [
    {
      icon: Mail,
      title: "Email Me",
      description: "Get in touch via email",
      value: "sumitsharma9128@gmail.com",
      href: "mailto:sumitsharma9128@gmail.com",
      color: "bg-blue-500",
    },
    {
      icon: Calendar,
      title: "Schedule a Call",
      description: "Book a 30-minute chat",
      value: "Let's talk",
      href: "https://cal.com/sumit-sharma",
      color: "bg-green-500",
    },
    {
      icon: MessageCircle,
      title: "Quick Message",
      description: "Send a direct message",
      value: "Start conversation",
      href: "#contact-form",
      color: "bg-purple-500",
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950"
    >
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-purple-600 dark:text-purple-400 tracking-wide uppercase">
            Contact
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4 text-gray-900 dark:text-white">
            Let’s <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Open to collaborations, freelance projects, or just a friendly chat.
          </p>
        </motion.div>

        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactOptions.map((option, index) => (
            <motion.a
              key={option.title}
              href={option.href}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:border-purple-200 dark:hover:border-purple-700 transition-all hover:shadow-lg hover:shadow-purple-500/10"
            >
              <div
                className={`w-12 h-12 ${option.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
              >
                <option.icon size={24} className="text-white" />
              </div>

              <h3 className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                {option.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                {option.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-purple-600 dark:text-purple-400">
                  {option.value}
                </span>
                <ArrowRight
                  size={16}
                  className="text-gray-400 group-hover:text-purple-500 group-hover:translate-x-1 transition-all"
                />
              </div>
            </motion.a>
          ))}
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white"
        >
          <h3 className="text-xl font-semibold mb-4">
            Ready to start your project?
          </h3>
          <p className="text-purple-100 mb-6 max-w-lg mx-auto">
            I’m currently available for new projects and collaborations. Let’s
            discuss how we can bring your vision to life.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:sumitsharma9128@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-purple-600 rounded-xl font-medium hover:bg-gray-50 transition-colors"
            >
              <Mail size={18} />
              Send Email
            </a>
            <a
              href="https://cal.com/sumit-sharma"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-white/20 text-white rounded-xl font-medium hover:bg-white/10 transition-colors"
            >
              <Calendar size={18} />
              Schedule Call
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
