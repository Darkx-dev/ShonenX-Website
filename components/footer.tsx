"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Github, Twitter, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-white/10 relative">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black to-transparent pointer-events-none"></div>

      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          <div className="mb-8 md:mb-0">
            <Link href="/" className="text-2xl font-bold text-gradient mb-4 inline-block">
              ShonenX
            </Link>
            <p className="text-white/70 max-w-md">
              An open-source anime streaming app built with Flutter, designed for anime enthusiasts everywhere.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-12 gap-y-4 text-center md:text-left">
            <div>
              <h3 className="text-lg font-semibold mb-4">Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#features" className="text-white/70 hover:text-white transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#downloads" className="text-white/70 hover:text-white transition-colors">
                    Download
                  </Link>
                </li>
                <li>
                  <Link href="#changelogs" className="text-white/70 hover:text-white transition-colors">
                    Changelogs
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="https://github.com/Darkx-dev/ShonenX"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-white transition-colors flex items-center justify-center md:justify-start gap-2"
                  >
                    <Github size={16} />
                    <span>GitHub</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-white/70 hover:text-white transition-colors flex items-center justify-center md:justify-start gap-2"
                  >
                    <Twitter size={16} />
                    <span>Twitter</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-white/70 hover:text-white transition-colors flex items-center justify-center md:justify-start gap-2"
                  >
                    <Mail size={16} />
                    <span>Contact</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 pt-6 border-t border-white/10 text-center text-white/50 text-sm"
        >
          <p>© {new Date().getFullYear()} ShonenX. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}

