"use client"

import { motion } from "framer-motion"
import { Lock, Video, Smartphone, Code, Zap, Globe } from "lucide-react"

const features = [
  {
    icon: <Lock className="w-10 h-10 text-purple-500" />,
    title: "Open Source",
    description: "Contribute and customize freely with our open-source codebase.",
  },
  {
    icon: <Video className="w-10 h-10 text-purple-500" />,
    title: "Anime Streaming",
    description: "Stream your favorite anime effortlessly with a sleek interface.",
  },
  {
    icon: <Smartphone className="w-10 h-10 text-purple-500" />,
    title: "Cross-Platform",
    description: "Works seamlessly across devices with Flutter technology.",
  },
  {
    icon: <Code className="w-10 h-10 text-purple-500" />,
    title: "Customizable",
    description: "Tailor the app to your preferences with extensive customization options.",
  },
  {
    icon: <Zap className="w-10 h-10 text-purple-500" />,
    title: "Lightning Fast",
    description: "Enjoy smooth performance and quick loading times.",
  },
  {
    icon: <Globe className="w-10 h-10 text-purple-500" />,
    title: "Global Content",
    description: "Access anime from various sources around the world.",
  },
]

export function Features() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="features" className="py-20 px-4 relative">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black to-transparent pointer-events-none"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gradient">Why ShonenX?</h2>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto">
            Experience anime streaming like never before with our feature-rich application
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card-glow bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-8 transition-all duration-300"
            >
              <div className="mb-6 bg-black/50 p-3 rounded-lg inline-block">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-white/70">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

