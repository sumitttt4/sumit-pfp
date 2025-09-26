import { motion } from 'framer-motion';

const Tools = () => {
  const toolCategories = [
    {
      category: "Design Tools",
      tools: [
        { name: "Figma", level: 95, description: "Primary design tool for UI/UX" },
        { name: "Adobe Creative Suite", level: 85, description: "Photoshop, Illustrator, After Effects" },
        { name: "Framer", level: 80, description: "Advanced prototyping & interactions" },
        { name: "Principle", level: 75, description: "Animation & micro-interactions" }
      ]
    },
    {
      category: "Development",
      tools: [
        { name: "React & TypeScript", level: 90, description: "Frontend development & component libraries" },
        { name: "Tailwind CSS", level: 88, description: "Utility-first styling framework" },
        { name: "Next.js & Vercel", level: 85, description: "Full-stack React framework & deployment" },
        { name: "Framer Motion", level: 82, description: "React animation library" }
      ]
    },
    {
      category: "UX Research",
      tools: [
        { name: "User Interviews", level: 85, description: "Qualitative research & insights" },
        { name: "Hotjar & Analytics", level: 80, description: "User behavior tracking" },
        { name: "A/B Testing", level: 75, description: "Data-driven design decisions" },
        { name: "Surveys & Forms", level: 78, description: "User feedback collection" }
      ]
    },
    {
      category: "Collaboration",
      tools: [
        { name: "Slack & Discord", level: 90, description: "Team communication" },
        { name: "Notion & Miro", level: 85, description: "Documentation & ideation" },
        { name: "GitHub", level: 88, description: "Version control & code collaboration" },
        { name: "Linear & Asana", level: 80, description: "Project management" }
      ]
    }
  ];

  return (
    <section id="tools" className="py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Tools & Technologies
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The tools I use to bring ideas to life, from initial concept to final product.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {toolCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="notion-card"
            >
              <h3 className="text-xl font-semibold text-foreground mb-6">
                {category.category}
              </h3>
              
              <div className="space-y-6">
                {category.tools.map((tool, toolIndex) => (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: (categoryIndex * 0.2) + (toolIndex * 0.1) }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-foreground">{tool.name}</span>
                      <span className="text-sm text-muted-foreground">{tool.level}%</span>
                    </div>
                    
                    <div className="w-full bg-muted h-2 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${tool.level}%` }}
                        transition={{ duration: 1, delay: (categoryIndex * 0.2) + (toolIndex * 0.1) + 0.3 }}
                        viewport={{ once: true }}
                        className="h-full bg-foreground rounded-full"
                      />
                    </div>
                    
                    <p className="text-sm text-muted-foreground">
                      {tool.description}
                    </p>
                  </motion.div>
                ))}
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
          <div className="notion-card max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-foreground mb-3">
              Always Learning
            </h3>
            <p className="text-muted-foreground text-sm">
              Currently exploring: AI-assisted design tools, advanced prototyping with Framer, 
              and the latest in accessibility standards. I believe in staying ahead of the curve 
              to deliver cutting-edge solutions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Tools;