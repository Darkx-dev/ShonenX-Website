"use client";

import { motion } from "framer-motion";
import { Code, PenTool, Zap, Globe, Shield, Monitor } from "lucide-react";
import { Card } from "@/components/ui/card";

export function Features() {
  const features = [
    {
      icon: <Zap className="h-6 w-6 text-primary" />,
      title: "Lightning Fast",
      description: "Enjoy smooth performance with our optimized streaming engine."
    },
    {
      icon: <Globe className="h-6 w-6 text-primary" />,
      title: "Wide Collection",
      description: "Access thousands of anime titles from various sources in one place."
    },
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "Open Source",
      description: "Transparent and community-driven development you can trust."
    },
    {
      icon: <Monitor className="h-6 w-6 text-primary" />,
      title: "Multi-platform",
      description: "Currently available on Android, Windows and Linux planned for the future."
    },
    {
      icon: <Code className="h-6 w-6 text-primary" />,
      title: "Built with Flutter",
      description: "Modern codebase with a beautiful and responsive UI."
    },
    {
      icon: <PenTool className="h-6 w-6 text-primary" />,
      title: "Customizable",
      description: "Personalize your experience with themes and viewing options."
    }
  ];

  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto max-w-6xl px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-gradient">Powerful Features</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            ShonenX is designed with anime fans in mind, combining powerful features
            with a sleek and intuitive interface.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-gray-900/60 border border-gray-800 p-6 card-glow h-full">
                <div className="flex flex-col h-full">
                  <div className="mb-4 bg-gray-800/50 rounded-full w-12 h-12 flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-white/70">{feature.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}