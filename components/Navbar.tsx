"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import Magnet from "@/src/blocks/Animations/Magnet/Magnet";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-xl flex flex-nowrap items-end">
            <img
              src="https://github.com/Darkx-dev/ShonenX/raw/main/assets/icons/app_icon-modified-2.png"
              alt="ShonenX"
              width={40}
            />
            <p style={{ marginLeft: "-10px", marginBottom: "2px" }}>honenX</p>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-white/80 hover:text-white transition-colors"
            >
              <Magnet padding={100} disabled={false} magnetStrength={10}>
                Home
              </Magnet>
            </Link>
            <Link
              href="/#features"
              className="text-white/80 hover:text-white transition-colors"
            >
              <Magnet padding={100} disabled={false} magnetStrength={10}>
                Features
              </Magnet>
            </Link>
            <Link
              href="/#downloads"
              className="text-white/80 hover:text-white transition-colors"
            >
              <Magnet padding={100} disabled={false} magnetStrength={10}>
                Downloads
              </Magnet>
            </Link>
            <Link
              href="changelogs"
              className="text-white/80 hover:text-white transition-colors"
            >
              <Magnet padding={100} disabled={false} magnetStrength={10}>
                Changelogs
              </Magnet>
            </Link>
            <Link
              href="https://github.com/Darkx-dev/ShonenX"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-white/80 hover:text-white transition-colors"
            >
              <Github size={18} />
              <span>GitHub</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 md:hidden border-t border-white/10 bg-black/95 backdrop-blur-xl shadow-xl"
            >
              <div className="container mx-auto px-4 py-6 flex flex-col gap-6">
                <Link
                  href="/"
                  className="flex items-center gap-2 text-lg font-medium text-white/80 hover:text-white transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/#features"
                  className="flex items-center gap-2 text-lg font-medium text-white/80 hover:text-white transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Features
                </Link>
                <Link
                  href="/#downloads"
                  className="flex items-center gap-2 text-lg font-medium text-white/80 hover:text-white transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Download
                </Link>
                <Link
                  href="changelogs"
                  className="flex items-center gap-2 text-lg font-medium text-white/80 hover:text-white transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Changelogs
                </Link>
                <Link
                  href="https://github.com/Darkx-dev/ShonenX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-lg font-medium text-white/80 hover:text-white transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Github size={20} />
                  <span>GitHub</span>
                </Link>
                <Button
                  className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white w-full py-6 text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
