"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Download, ArrowRight } from "lucide-react";
import { TypewriterEffect } from "./ui/typewriter-effect";
import { useEffect, useState } from "react";

// Seeded random number generator
const seededRandom = (seed: number) => {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

const generateParticles = (count: number, seed: number) => {
  const particles = [];
  for (let i = 0; i < count; i++) {
    particles.push({
      top: `${seededRandom(seed + i) * 100}%`,
      left: `${seededRandom(seed + i + 1) * 100}%`,
      width: "100px",
      height: "100px",
      opacity: seededRandom(seed + i + 2) * 0.6 + 0.1,
      duration: `${seededRandom(seed + i + 3) * 10 + 10}s`,
      delay: `${seededRandom(seed + i + 4) * 5}s`,
    });
  }
  return particles;
};

export function Hero({
  latestRelease,
  totalDownloads,
}: {
  latestRelease: any;
  totalDownloads: number;
}) {
  const words = [
    { text: "ShonenX" },
    { text: "—" },
    { text: "Anime" },
    { text: "Streaming" },
    { text: "Reimagined", className: "text-primary" },
  ];

  const desktopScreenshot = "/screenshots/desktop/home.jpg";
  const mobileScreenshot = "/screenshots/mobile/home.jpg";
  const streamScreenshot = "/screenshots/mobile/stream.jpg";

  const [isClient, setIsClient] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const particles = generateParticles(25, 42); // Fixed seed

  useEffect(() => {
    setIsClient(true);
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const downloadLink = isClient && isMobile
    ? latestRelease.android.downloadLink
    : latestRelease.windows.downloadLink;

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-gray-950 to-black py-16 md:py-24">
      {/* Animated background elements */}
      <div className="absolute top-1/4 right-1/3 w-[700px] h-[700px] bg-primary/20 rounded-full blur-[150px] opacity-40 animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-1/3 left-1/4 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[120px] opacity-30 animate-pulse pointer-events-none"></div>

      {/* Animated particles */}
      {isClient && (
        <div className="absolute inset-0 z-0 opacity-30">
          {particles.map((particle, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white/80"
              style={{
                top: particle.top,
                left: particle.left,
                width: particle.width,
                height: particle.height,
                opacity: particle.opacity,
                animation: `float ${particle.duration} ease-in-out infinite`,
                animationDelay: particle.delay,
              }}
            ></div>
          ))}
        </div>
      )}

      <div className="container mx-auto max-w-6xl px-4 relative z-10 mt-12">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 text-center md:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4 px-4 py-1.5 bg-primary/10 rounded-full border border-primary/20"
            >
              <span className="text-primary text-sm font-medium">
                {(isClient ? totalDownloads : 10000)?.toLocaleString() || "10,000+"}{" "}
                Downloads Worldwide
              </span>
            </motion.div>

            <div className="mb-6">
              <TypewriterEffect
                words={words}
                className="text-4xl md:text-6xl font-bold"
              />
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg md:text-xl text-white/80 mb-8 max-w-xl"
            >
              <span className="text-primary font-semibold">Open-source</span>{" "}
              and built with{" "}
              <span className="text-primary font-semibold">Flutter</span>.
              Experience seamless anime streaming on both mobile and desktop
              with a sleek, modern interface designed for true fans.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center md:justify-start gap-4"
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-6 rounded-full group relative overflow-hidden"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></span>
                <span className="relative flex items-center">
                  <Download className="mr-2 h-5 w-5 transition-transform group-hover:translate-y-1" />
                  <a
                    href={downloadLink || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium"
                  >
                    Download Now
                  </a>
                </span>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/20 text-white hover:bg-white/10 px-8 py-6 rounded-full group"
              >
                <span className="relative flex items-center">
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </span>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-8 flex items-center justify-center md:justify-start gap-6"
            >
              <div className="flex items-center text-white/70">
                <span className="text-sm">
                  Latest Release: v{(isClient ? latestRelease?.number : "1.0.0") || "1.0.0"}
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* App Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="flex-1 relative"
          >
            <div className="relative flex justify-center items-center">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 rounded-full blur-3xl opacity-50 animate-pulse"></div>

              <motion.div
                initial={{ x: 40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="hidden md:block relative z-10 w-full max-w-md"
              >
                <div className="bg-gray-900/90 rounded-lg shadow-2xl overflow-hidden border border-gray-800/50 backdrop-blur-sm">
                  <div className="bg-black/90 h-8 flex items-center px-3">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <div className="relative">
                    <Image
                      src={`https://github.com/Darkx-dev/ShonenX/raw/dev${desktopScreenshot}`}
                      alt="ShonenX Desktop App"
                      width={800}
                      height={450}
                      className="w-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="md:absolute md:-right-12 md:bottom-0 md:transform md:translate-y-8 z-20 w-48 md:w-56"
              >
                <div className="bg-black rounded-3xl overflow-hidden border-4 border-gray-800 shadow-2xl">
                  <div className="relative pt-6 pb-2 px-1.5 rounded-t-2xl">
                    <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-800 rounded-full"></div>
                    <Image
                      src={`https://github.com/Darkx-dev/ShonenX/raw/dev${mobileScreenshot}`}
                      alt="ShonenX Mobile App"
                      width={300}
                      height={600}
                      className="rounded-lg"
                    />
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.5 }}
                className="absolute -bottom-16 -left-8 w-24 h-24 bg-black/80 rounded-lg shadow-lg border border-gray-700/50 overflow-hidden hidden md:block z-30 backdrop-blur-sm hover:scale-110 transition-transform duration-300"
              >
                <Image
                  src={`https://github.com/Darkx-dev/ShonenX/raw/dev${streamScreenshot}`}
                  alt="Feature highlight"
                  width={96}
                  height={96}
                  className="object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-15px) translateX(5px);
          }
          50% {
            transform: translateY(-25px) translateX(-5px);
          }
          75% {
            transform: translateY(-15px) translateX(5px);
          }
          100% {
            transform: translateY(0) translateX(0);
          }
        }
      `}</style>
    </section>
  );
}