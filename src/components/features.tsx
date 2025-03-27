"use client";

import { Code, PenTool, Zap, Globe, Shield, Monitor } from "lucide-react";
import SpotlightCard from "./blocks/Components/SpotlightCard/SpotlightCard";
import ScrollFloat from "./blocks/TextAnimations/ScrollFloat/ScrollFloat";

export function Features() {
  const features = [
    {
      icon: <Zap className="h-6 w-6 " />,
      title: "Lightning Fast",
      description:
        "Enjoy smooth performance with our optimized streaming engine.",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Wide Collection",
      description:
        "Access thousands of anime titles from various sources in one place.",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Open Source",
      description:
        "Transparent and community-driven development you can trust.",
    },
    {
      icon: <Monitor className="h-6 w-6" />,
      title: "Multi-platform",
      description:
        "Currently available on Android, Windows and Linux planned for the future.",
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Built with Flutter",
      description: "Modern codebase with a beautiful and responsive UI.",
    },
    {
      icon: <PenTool className="h-6 w-6" />,
      title: "Customizable",
      description:
        "Personalize your experience with themes and viewing options.",
    },
  ];

  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      {/* <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div> */}

      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-16">
          <ScrollFloat
            textClassName="text-4xl font-bold mb-4"
            animationDuration={1}
            ease="back.inOut(2)"
            scrollStart="center bottom+=50%"
            scrollEnd="bottom bottom-=40%"
            stagger={0.03}
          >
            Powerful Features
          </ScrollFloat>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            ShonenX is designed with anime fans in mind, combining powerful
            features with a sleek and intuitive interface.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <SpotlightCard className="h-full" key={index}>
              <div className="mb-4 border-2 rounded-full w-12 h-12 flex items-center justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-white/70">{feature.description}</p>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
