"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Download, ArrowRight, Smartphone, Monitor } from "lucide-react";
import { TypewriterEffect } from "./ui/typewriter-effect";

export function Hero() {
  const words = [
    { text: "ShonenX" },
    { text: "-" },
    { text: "Anime" },
    { text: "Streaming" },
    { text: "Reimagined", className: "text-primary" },
  ];

  // Desktop Screenshots
  const desktopScreenshots = [
    "/screenshots/desktop/home.jpg",
    "/screenshots/desktop/anilist.jpg",
    "/screenshots/desktop/details.jpg",
    "/screenshots/desktop/search.jpg",
    "/screenshots/desktop/stream.jpg",
  ];

  // Mobile Screenshots
  const mobileScreenshots = [
    "/screenshots/mobile/home.jpg",
    "/screenshots/mobile/anilist.jpg",
    "/screenshots/mobile/details.jpg",
    "/screenshots/mobile/search.jpg",
    "/screenshots/mobile/stream.jpg",
  ];

  return (
    <section className="pb-16 pt-32 md-pt-32 md-pb-24 px-4 min-h-screen flex items-center relative overflow-hidden bg-gray-950">
      {/* Background gradient */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] opacity-40 pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-1/3 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[100px] opacity-30 pointer-events-none"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 text-center md:text-left"
          >
            <div className="mb-6">
              <TypewriterEffect
                words={words}
                className="text-4xl md:text-5xl font-bold"
              />
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg text-white/80 mb-8"
            >
              Open-source, built with Flutter, and designed for anime
              enthusiasts everywhere. Available on mobile and desktop.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center md:justify-start gap-4"
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-8 rounded-full group"
              >
                <Download className="mr-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
                Download Now
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/20 text-white hover:bg-white/10 rounded-full group"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-6 flex items-center justify-center md:justify-start gap-6"
            >
              {/* <div className="flex items-center text-white/60">
                <Smartphone className="h-5 w-5 mr-2" />
                <span>Android</span>
              </div> */}
              {/* <div className="flex items-center text-white/60">
                <Monitor className="h-5 w-5 mr-2" />
                <span>Windows</span>
              </div> */}
            </motion.div>
          </motion.div>

          {/* App Showcase with Real Screenshots */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="flex-1 relative"
          >
            <div className="relative flex justify-center items-center">
              {/* Desktop App */}
              <motion.div
                initial={{ x: 40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="hidden md:block relative z-10 w-full max-w-md"
              >
                <div className="bg-gray-900 rounded-lg shadow-2xl overflow-hidden border border-gray-800">
                  <div className="bg-black/80 h-7 flex items-center px-3">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <Image
                    src={`https://github.com/Darkx-dev/ShonenX/blob/dev/${desktopScreenshots[0]}?raw=true`}
                    alt="ShonenX Desktop App"
                    width={800}
                    height={450}
                    className="w-full"
                  />
                </div>
              </motion.div>

              {/* Mobile App */}
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
                      src={`https://github.com/Darkx-dev/ShonenX/blob/dev/${mobileScreenshots[0]}?raw=true`}
                      alt="ShonenX Mobile App"
                      width={300}
                      height={600}
                      className="rounded-lg"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Feature Screenshot Highlights (Desktop only) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.5 }}
                className="absolute -bottom-16 -left-8 w-24 h-24 bg-black/80 rounded-lg shadow-lg border border-gray-700 overflow-hidden hidden md:block z-30"
              >
                <Image
                  src={`https://github.com/Darkx-dev/ShonenX/blob/dev/${mobileScreenshots[4]}?raw=true`}
                  alt="Feature highlight"
                  width={96}
                  height={96}
                  className="object-cover"
                />
              </motion.div>
            </div>

            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 rounded-full blur-3xl opacity-50 z-0"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
