"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Download, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import Aurora from "@/src/blocks/Backgrounds/Aurora/Aurora";
import Link from "next/link";

export function Hero({
  latestRelease,
  totalDownloads,
}: {
  latestRelease: any;
  totalDownloads: number;
}) {
  const [isClient, setIsClient] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  // const desktopScreenshot = "/screenshots/desktop/home.jpg";
  // const mobileScreenshot = "/screenshots/mobile/home.jpg";
  // const streamScreenshot = "/screenshots/mobile/stream.jpg";

  useEffect(() => {
    setIsClient(true);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const downloadLink =
    isClient && isMobile
      ? latestRelease?.android?.downloadLink
      : latestRelease?.windows?.downloadLink;

  return (
    <section className="relative min-h-screen bg-black flex flex-col items-center justify-center py-16 md:py-24 overflow-hidden">
      {/* Background Gradient */}
      {/* <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-900 to-black z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_center,rgba(255,255,255,0.1)_0%,transparent_60%)]"></div>
      </div> */}
      <Aurora
        colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
        blend={1}
        amplitude={0.5}
        speed={0.5}
      />

      <div className="container mx-auto max-w-6xl px-6 relative z-10 flex flex-col items-center text-center space-y-12">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 bg-white/10 border border-white/20 rounded-full shadow-lg"
          >
            <span className="text-white/80 text-sm font-semibold">
              {isClient ? totalDownloads?.toLocaleString() : "10,000+"}{" "}
              Downloads
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl font-extrabold text-white leading-tight"
          >
            ShonenX
            <span className="block text-3xl md:text-4xl font-semibold text-primary mt-2">
              Your Anime Streaming Hub
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg md:text-xl text-white/70 max-w-2xl"
          >
            Discover a seamless, open-source anime streaming experience built
            with Flutter. Available on desktop and mobile with a sleek, modern
            interface.
          </motion.p>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <Button
            size="lg"
            className="relative overflow-hidden bg-gradient-to-r from-primary to-accent text-white px-10 py-6 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 group"
          >
            <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative flex items-center">
              <Download className="mr-2 h-6 w-6 group-hover:-translate-y-0.5 transition-transform" />
              <a
                href={downloadLink || "#"}
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Now
              </a>
            </span>
          </Button>
          <Link
            href={"#features"}
            className="bg-transparent border-2 border-white/30 text-white px-10 py-6 rounded-full font-semibold text-lg hover:bg-white/10 hover:border-white/40 transition-all duration-300 group"
          >
            <span className="flex items-center">
              Explore Features
              <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </motion.div>

        {/* Version Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="text-white/60 text-sm mt-8"
        >
          Latest Release: v
          {(isClient ? latestRelease?.number : "1.0.0") || "1.0.0"}
        </motion.div>
      </div>
    </section>
  );
}
