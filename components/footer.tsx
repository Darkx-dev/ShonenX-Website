"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative py-16 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-black/80 z-0"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"></div>

      <div className="container mx-auto max-w-6xl px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Brand Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold mb-4 text-gradient">ShonenX</h3>
            <p className="text-white/70 mb-4">
              Open-source anime streaming app built with Flutter. Available on
              Android, Windows, macOS, and Linux.
            </p>
            <div className="flex space-x-4 invert">
              {/* GitHub */}
              <a
                href="https://github.com/Darkx-dev/ShonenX"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-primary transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="30"
                  height="30"
                  viewBox="0 0 64 64"
                >
                  <path d="M32,10c12.15,0,22,9.85,22,22c0,9.768-6.369,18.045-15.179,20.916c0.002-0.008,0.006-0.021,0.006-0.021	s-1.485-0.696-1.453-1.938c0.035-1.367,0-4.556,0-5.727c0-2.01-1.272-3.434-1.272-3.434s9.977,0.112,9.977-10.533	c0-4.107-2.147-6.245-2.147-6.245s1.128-4.385-0.39-6.245c-1.701-0.184-4.749,1.626-6.05,2.472c0,0-2.062-0.846-5.492-0.846	c-3.43,0-5.492,0.846-5.492,0.846c-1.301-0.846-4.348-2.656-6.05-2.472c-1.518,1.86-0.39,6.245-0.39,6.245s-2.147,2.137-2.147,6.245	c0,10.645,9.977,10.533,9.977,10.533s-1.005,1.136-1.225,2.806c-0.696,0.236-1.721,0.528-2.549,0.528	c-2.165,0-3.812-2.105-4.416-3.078c-0.595-0.96-1.815-1.766-2.953-1.766c-0.749,0-1.115,0.375-1.115,0.803s1.05,0.727,1.743,1.521	c1.461,1.674,1.435,5.438,6.641,5.438c0.565,0,1.719-0.139,2.588-0.256c-0.005,1.185-0.007,2.436,0.012,3.167	c0.031,1.242-1.453,1.938-1.453,1.938s0.004,0.012,0.006,0.021C16.369,50.045,10,41.768,10,32C10,19.85,19.85,10,32,10z"></path>
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-8"
          >
            {/* Navigation */}
            <div>
              <h4 className="text-sm font-semibold uppercase mb-4 text-white/80">
                Navigation
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#features"
                    className="text-white/60 hover:text-primary transition-colors"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="#downloads"
                    className="text-white/60 hover:text-primary transition-colors"
                  >
                    Downloads
                  </Link>
                </li>
                <li>
                  <Link
                    href="changelogs"
                    className="text-white/60 hover:text-primary transition-colors"
                  >
                    Release Notes
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-sm font-semibold uppercase mb-4 text-white/80">
                Resources
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="https://github.com/Darkx-dev/ShonenX"
                    className="text-white/60 hover:text-primary transition-colors"
                  >
                    GitHub Repo
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://docs.flutter.dev"
                    className="text-white/60 hover:text-primary transition-colors"
                  >
                    Flutter Docs
                  </Link>
                </li>
                <li>
                  <Link
                    href="#faq"
                    className="text-white/60 hover:text-primary transition-colors"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-sm font-semibold uppercase mb-4 text-white/80">
                Legal
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#terms"
                    className="text-white/60 hover:text-primary transition-colors"
                  >
                    Terms of Use
                  </Link>
                </li>
                <li>
                  <Link
                    href="#privacy"
                    className="text-white/60 hover:text-primary transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#cookies"
                    className="text-white/60 hover:text-primary transition-colors"
                  >
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 text-center text-white/50 text-sm">
          © {new Date().getFullYear()} ShonenX. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
