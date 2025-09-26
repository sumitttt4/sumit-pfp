import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Product Manager at TechCorp",
      company: "TechCorp",
      content: "Sumit's design work increased our user engagement by 45%. His attention to detail and user-centric approach made our app intuitive and beautiful.",
      rating: 5,
      avatar: "SC"
    },
    {
      name: "Michael Rodriguez",
      role: "CEO at StartupX",
      company: "StartupX", 
      content: "Working with Sumit was a game-changer. He transformed our complex workflow into a simple, elegant interface that our users love.",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "Emily Johnson",
      role: "Marketing Director",
      company: "DesignCo",
      content: "Sumit delivers exceptional design work on time, every time. His prototypes in Figma helped us validate ideas before development.",
      rating: 5,
      avatar: "EJ"
    }
  ];

  return (
    <section id="testimonials" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            What Clients Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Trusted by teams at startups and established companies to deliver exceptional design experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="notion-card relative"
            >
              <Quote className="w-8 h-8 text-muted-foreground/30 mb-4" />
              
              <div className="flex items-center mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                ))}
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-sm font-medium">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-medium text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;