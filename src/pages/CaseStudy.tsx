import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Users, Layers, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const caseStudies: Record<string, any> = {
  bazuroo: {
    title: "Bazuroo",
    subtitle: "Local Store Delivery Platform",
    tagline: "Connecting customers with local stores for seamless delivery",
    hero: {
      image: "/src/assets/BrutualHQ.jpg.png",
      gradient: "from-purple-600 to-blue-600"
    },
    overview: {
      role: "Lead Product Designer",
      duration: "8 months",
      tools: "Figma, Miro, UserTesting",
      team: "4 designers, 6 developers",
      platform: "iOS, Android, Web"
    },
    problem: {
      title: "The Challenge",
      description: "Local stores struggled to compete with large e-commerce platforms, while customers wanted the convenience of online shopping with the personal touch of local businesses.",
      points: [
        "Limited online presence for local stores",
        "Complex ordering and delivery coordination",
        "Trust and reliability concerns",
        "Inefficient merchant-customer communication"
      ],
      goal: "Create a platform that bridges the gap between local stores and customers, enabling seamless online ordering and delivery while maintaining the personal touch of local shopping."
    },
    research: {
      competitive: {
        title: "Competitive Analysis",
        description: "Analyzed major platforms like Instacart, DoorDash, and local delivery services to identify gaps and opportunities.",
        findings: [
          "Most platforms focus on restaurants or large chains",
          "Limited support for small local businesses",
          "Complex onboarding for merchants",
          "Poor communication tools between stores and customers"
        ]
      },
      userInsights: {
        title: "User Research Insights",
        description: "Conducted 25+ interviews with local store owners and 50+ customer surveys.",
        customers: [
          "Want to support local businesses but need convenience",
          "Concerned about delivery times and product freshness",
          "Prefer visual browsing experience",
          "Need reliable customer support"
        ],
        merchants: [
          "Struggle with digital presence and online orders",
          "Need simple inventory management",
          "Want control over pricing and promotions",
          "Require efficient order notification system"
        ]
      }
    },
    process: {
      customerFlow: {
        title: "Customer Journey",
        steps: [
          {
            title: "Discovery",
            description: "Browse local stores by category, distance, or popularity",
            features: ["Store ratings", "Real-time availability", "Delivery estimates"]
          },
          {
            title: "Shopping",
            description: "Visual product catalog with search and filters",
            features: ["Product images", "Price comparison", "Cart management"]
          },
          {
            title: "Checkout",
            description: "Streamlined payment and delivery options",
            features: ["Multiple payment methods", "Delivery scheduling", "Order tracking"]
          },
          {
            title: "Delivery",
            description: "Real-time tracking and communication",
            features: ["Live map", "Driver contact", "Status updates"]
          }
        ]
      },
      merchantFlow: {
        title: "Merchant Dashboard",
        steps: [
          {
            title: "Store Setup",
            description: "Quick onboarding with guided setup",
            features: ["Store profile", "Business hours", "Delivery zones"]
          },
          {
            title: "Inventory",
            description: "Simple product management",
            features: ["Bulk upload", "Stock tracking", "Price updates"]
          },
          {
            title: "Orders",
            description: "Efficient order processing",
            features: ["Real-time notifications", "Order management", "Status updates"]
          },
          {
            title: "Analytics",
            description: "Business insights and reporting",
            features: ["Sales metrics", "Customer trends", "Performance tracking"]
          }
        ]
      }
    },
    solution: {
      customerFeatures: [
        {
          title: "Smart Search",
          description: "AI-powered search with filters for stores, products, and categories"
        },
        {
          title: "Visual Product Catalog",
          description: "High-quality images and detailed product information"
        },
        {
          title: "Real-time Tracking",
          description: "Live delivery tracking with driver communication"
        },
        {
          title: "Personalized Recommendations",
          description: "Curated suggestions based on purchase history and preferences"
        }
      ],
      merchantFeatures: [
        {
          title: "Easy Dashboard",
          description: "Intuitive interface for managing store, products, and orders"
        },
        {
          title: "Order Management",
          description: "Streamlined workflow for accepting, preparing, and dispatching orders"
        },
        {
          title: "Customer Communication",
          description: "Built-in chat and notification system"
        },
        {
          title: "Business Analytics",
          description: "Comprehensive insights into sales, customers, and performance"
        }
      ]
    },
    designSystem: {
      colors: {
        primary: "#7C3AED",
        secondary: "#2563EB",
        accent: "#10B981",
        background: "#0F172A",
        surface: "#1E293B"
      },
      typography: {
        heading: "Inter Bold",
        body: "Inter Regular",
        sizes: ["12px", "14px", "16px", "20px", "24px", "32px", "48px"]
      },
      components: [
        "Product cards with hover states",
        "Store cards with ratings and distance",
        "Order status timeline",
        "Interactive maps",
        "Bottom sheets for mobile",
        "Toast notifications"
      ]
    },
    outcome: {
      result: {
        title: "Impact",
        metrics: [
          { label: "Merchant Signups", value: "200+ stores", change: "in 3 months" },
          { label: "Order Completion", value: "94%", change: "average rate" },
          { label: "User Retention", value: "78%", change: "monthly active" },
          { label: "Avg. Delivery Time", value: "32 mins", change: "from order" }
        ]
      },
      learnings: [
        "Simplified onboarding for merchants increased adoption by 45%",
        "Real-time communication features reduced support tickets by 60%",
        "Visual product browsing increased conversion rate by 35%",
        "Delivery tracking transparency improved customer satisfaction scores"
      ],
      nextSteps: [
        "Subscription model for frequent customers",
        "Merchant loyalty programs",
        "Enhanced analytics dashboard",
        "Integration with popular POS systems"
      ]
    },
    screens: {
      title: "UI Screens",
      description: "Key screens showcasing the customer and merchant experience",
      image: "/src/assets/BrutualHQ.jpg.png" // Will be updated with actual Bazuroo screens
    }
  }
};

export default function CaseStudy() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  
  const study = caseStudies[projectId || 'bazuroo'];

  if (!study) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Case Study Not Found</h1>
          <Button onClick={() => navigate('/projects')}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Back Button */}
      <div className="fixed top-6 left-6 z-50">
        <Button
          onClick={() => navigate('/projects')}
          variant="outline"
          className="bg-slate-900/80 backdrop-blur border-slate-700 hover:bg-slate-800"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Projects
        </Button>
      </div>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={`relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br ${study.hero.gradient} overflow-hidden`}
      >
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-4">
              {study.title}
            </h1>
            <p className="text-2xl text-white/90 mb-6">{study.subtitle}</p>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">{study.tagline}</p>
          </motion.div>

          {/* Meta Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-8 mt-12"
          >
            <div className="flex items-center gap-2 text-white/90">
              <Users className="w-5 h-5" />
              <span>{study.overview.role}</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <Clock className="w-5 h-5" />
              <span>{study.overview.duration}</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <Layers className="w-5 h-5" />
              <span>{study.overview.platform}</span>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Overview Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Overview</h2>
              <div className="space-y-4 text-slate-300">
                <div>
                  <span className="text-purple-400 font-semibold">Role:</span> {study.overview.role}
                </div>
                <div>
                  <span className="text-purple-400 font-semibold">Duration:</span> {study.overview.duration}
                </div>
                <div>
                  <span className="text-purple-400 font-semibold">Team:</span> {study.overview.team}
                </div>
                <div>
                  <span className="text-purple-400 font-semibold">Tools:</span> {study.overview.tools}
                </div>
              </div>
            </div>
            <div>
              <img
                src={study.hero.image}
                alt={study.title}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-slate-950">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold text-white mb-6">{study.problem.title}</h2>
          <p className="text-xl text-slate-300 mb-8">{study.problem.description}</p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {study.problem.points.map((point: string, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-900 p-6 rounded-xl border border-slate-800"
              >
                <p className="text-slate-200">{point}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-2xl border border-purple-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">Goal</h3>
            <p className="text-slate-300 text-lg">{study.problem.goal}</p>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold text-white mb-12">Research & Discovery</h2>
          
          {/* Competitive Analysis */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-4">{study.research.competitive.title}</h3>
            <p className="text-slate-300 mb-6">{study.research.competitive.description}</p>
            <div className="grid md:grid-cols-2 gap-4">
              {study.research.competitive.findings.map((finding: string, index: number) => (
                <div key={index} className="flex items-start gap-3 bg-slate-950 p-4 rounded-lg">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2" />
                  <p className="text-slate-300">{finding}</p>
                </div>
              ))}
            </div>
          </div>

          {/* User Insights */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">{study.research.userInsights.title}</h3>
            <p className="text-slate-300 mb-8">{study.research.userInsights.description}</p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-950 p-6 rounded-xl border border-slate-800">
                <h4 className="text-xl font-bold text-purple-400 mb-4">Customer Insights</h4>
                <ul className="space-y-3">
                  {study.research.userInsights.customers.map((insight: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2" />
                      <span className="text-slate-300">{insight}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-slate-950 p-6 rounded-xl border border-slate-800">
                <h4 className="text-xl font-bold text-blue-400 mb-4">Merchant Insights</h4>
                <ul className="space-y-3">
                  {study.research.userInsights.merchants.map((insight: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2" />
                      <span className="text-slate-300">{insight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-slate-950">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold text-white mb-12">Design Process</h2>
          
          {/* Customer Flow */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-purple-400 mb-8">{study.process.customerFlow.title}</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {study.process.customerFlow.steps.map((step: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-slate-900 p-6 rounded-xl border border-slate-800"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 font-bold">
                      {index + 1}
                    </div>
                    <h4 className="text-xl font-bold text-white">{step.title}</h4>
                  </div>
                  <p className="text-slate-300 mb-4">{step.description}</p>
                  <ul className="space-y-2">
                    {step.features.map((feature: string, fIndex: number) => (
                      <li key={fIndex} className="flex items-center gap-2 text-sm text-slate-400">
                        <div className="w-1 h-1 bg-purple-400 rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Merchant Flow */}
          <div>
            <h3 className="text-2xl font-bold text-blue-400 mb-8">{study.process.merchantFlow.title}</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {study.process.merchantFlow.steps.map((step: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-slate-900 p-6 rounded-xl border border-slate-800"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold">
                      {index + 1}
                    </div>
                    <h4 className="text-xl font-bold text-white">{step.title}</h4>
                  </div>
                  <p className="text-slate-300 mb-4">{step.description}</p>
                  <ul className="space-y-2">
                    {step.features.map((feature: string, fIndex: number) => (
                      <li key={fIndex} className="flex items-center gap-2 text-sm text-slate-400">
                        <div className="w-1 h-1 bg-blue-400 rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold text-white mb-12">Solution & Features</h2>
          
          <div className="space-y-16">
            {/* Customer Features */}
            <div>
              <h3 className="text-2xl font-bold text-purple-400 mb-6">Customer Experience</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {study.solution.customerFeatures.map((feature: any, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-slate-950 p-6 rounded-xl border border-slate-800 hover:border-purple-500/50 transition-colors"
                  >
                    <h4 className="text-xl font-bold text-white mb-3">{feature.title}</h4>
                    <p className="text-slate-300">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Merchant Features */}
            <div>
              <h3 className="text-2xl font-bold text-blue-400 mb-6">Merchant Dashboard</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {study.solution.merchantFeatures.map((feature: any, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-slate-950 p-6 rounded-xl border border-slate-800 hover:border-blue-500/50 transition-colors"
                  >
                    <h4 className="text-xl font-bold text-white mb-3">{feature.title}</h4>
                    <p className="text-slate-300">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UI Screens Section */}
      <section className="py-20 bg-slate-950">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold text-white mb-4">{study.screens.title}</h2>
          <p className="text-slate-300 mb-8">{study.screens.description}</p>
          <div className="rounded-2xl overflow-hidden border border-slate-800">
            <img
              src={study.screens.image}
              alt="Bazuroo UI Screens"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Design System Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold text-white mb-12">Design System</h2>
          
          {/* Colors */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-white mb-6">Color Palette</h3>
            <div className="flex flex-wrap gap-4">
              {Object.entries(study.designSystem.colors).map(([name, color]) => (
                <div key={name} className="flex flex-col items-center">
                  <div
                    className="w-24 h-24 rounded-xl border border-slate-700"
                    style={{ backgroundColor: color as string }}
                  />
                  <p className="text-slate-400 text-sm mt-2 capitalize">{name}</p>
                  <p className="text-slate-500 text-xs">{color as string}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Typography */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-white mb-6">Typography</h3>
            <div className="bg-slate-950 p-6 rounded-xl border border-slate-800">
              <p className="text-slate-300 mb-4">
                <span className="text-purple-400 font-semibold">Heading:</span> {study.designSystem.typography.heading}
              </p>
              <p className="text-slate-300">
                <span className="text-purple-400 font-semibold">Body:</span> {study.designSystem.typography.body}
              </p>
            </div>
          </div>

          {/* Components */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Key Components</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {study.designSystem.components.map((component: string, index: number) => (
                <div
                  key={index}
                  className="bg-slate-950 p-4 rounded-lg border border-slate-800"
                >
                  <p className="text-slate-300">{component}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Outcome Section */}
      <section className="py-20 bg-slate-950">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold text-white mb-12">Impact & Results</h2>
          
          {/* Metrics */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {study.outcome.result.metrics.map((metric: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 p-6 rounded-xl border border-purple-500/20"
              >
                <p className="text-4xl font-bold text-white mb-2">{metric.value}</p>
                <p className="text-purple-400 font-semibold mb-1">{metric.label}</p>
                <p className="text-slate-400 text-sm">{metric.change}</p>
              </motion.div>
            ))}
          </div>

          {/* Learnings */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-white mb-6">Key Learnings</h3>
            <div className="space-y-4">
              {study.outcome.learnings.map((learning: string, index: number) => (
                <div
                  key={index}
                  className="bg-slate-900 p-6 rounded-xl border border-slate-800"
                >
                  <p className="text-slate-300">{learning}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Next Steps */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Next Steps</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {study.outcome.nextSteps.map((step: string, index: number) => (
                <div
                  key={index}
                  className="bg-slate-900 p-4 rounded-xl border border-slate-800 flex items-center gap-3"
                >
                  <div className="w-2 h-2 bg-purple-400 rounded-full" />
                  <p className="text-slate-300">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Want to see more?</h2>
          <p className="text-slate-300 mb-8">Explore other projects or get in touch to discuss your next big idea.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              onClick={() => navigate('/projects')}
              size="lg"
              className="bg-purple-600 hover:bg-purple-700"
            >
              View All Projects
            </Button>
            <Button
              onClick={() => navigate('/')}
              size="lg"
              variant="outline"
              className="border-slate-700 hover:bg-slate-800"
            >
              Contact Me
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
