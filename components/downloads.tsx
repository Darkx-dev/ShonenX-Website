"use client";

import { motion } from "framer-motion";
import { Download, Calendar, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function Downloads({ versions }: any) {
  // Default version if no versions are provided
  const latestVersion =
    versions && versions.length > 0
      ? versions[0]
      : {
          number: "1.0.0",
          date: "2025-03-01",
          downloadLink: "#",
        };

  return (
    <section id="downloads" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-gradient">Download ShonenX</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Get the latest version of ShonenX and start streaming your favorite
            anime today.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Platform Download Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-full"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full">
              {/* Android - Currently Available */}
              <Card className="bg-gray-900/60 border border-gray-800 p-6 card-glow h-full">
                <div className="flex flex-col items-center text-center h-full justify-between">
                  <div className="flex flex-col items-center">
                    <div className="mb-4 bg-gray-800/50 rounded-full w-14 h-14 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary"
                      >
                        <path d="M5 10H7C9 10 10 9 10 7V5C10 3 9 2 7 2H5C3 2 2 3 2 5V7C2 9 3 10 5 10Z"></path>
                        <path d="M17 10H19C21 10 22 9 22 7V5C22 3 21 2 19 2H17C15 2 14 3 14 5V7C14 9 15 10 17 10Z"></path>
                        <path d="M17 22H19C21 22 22 21 22 19V17C22 15 21 14 19 14H17C15 14 14 15 14 17V19C14 21 15 22 17 22Z"></path>
                        <path d="M5 22H7C9 22 10 21 10 19V17C10 15 9 14 7 14H5C3 14 2 15 2 17V19C2 21 3 22 5 22Z"></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Android</h3>
                    <p className="text-white/70 mb-4 text-sm">
                      APK installation required
                    </p>
                  </div>
                  <Button
                    className="bg-primary hover:bg-primary/90 text-white rounded-full w-full group"
                    asChild
                  >
                    <a
                      href={latestVersion.android.downloadLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Download className="mr-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
                      Download
                    </a>
                  </Button>
                </div>
              </Card>

              {/* Windows */}
              <Card className="bg-gray-900/60 border border-gray-800 p-6 card-glow h-full">
                <div className="flex flex-col items-center text-center h-full justify-between">
                  <div className="flex flex-col items-center">
                    <div className="mb-4 bg-gray-800/50 rounded-full w-14 h-14 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary"
                      >
                        <rect
                          x="2"
                          y="3"
                          width="20"
                          height="14"
                          rx="2"
                          ry="2"
                        ></rect>
                        <line x1="8" y1="21" x2="16" y2="21"></line>
                        <line x1="12" y1="17" x2="12" y2="21"></line>
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Windows</h3>
                    <p className="text-white/70 mb-4 text-sm">Coming soon</p>
                  </div>
                  <Button
                    className="bg-primary hover:bg-primary/90 text-white rounded-full w-full group"
                    asChild
                  >
                    <a
                      href={latestVersion.windows.downloadLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Download className="mr-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
                      Download
                    </a>
                  </Button>
                </div>
              </Card>

              {/* Linux - Planned for Future */}
              <Card className="bg-gray-900/60 border border-gray-800 p-6 card-glow h-full">
                <div className="flex flex-col items-center text-center h-full justify-between">
                  <div className="flex flex-col items-center">
                    <div className="mb-4 bg-gray-800/50 rounded-full w-14 h-14 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary"
                      >
                        <path d="M16 16v-4a4 4 0 0 0-8 0v4"></path>
                        <path d="M12 16h4"></path>
                        <path d="M9 16H8"></path>
                        <path d="M12 12v4"></path>
                        <rect x="4" y="4" width="16" height="16" rx="2"></rect>
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Linux</h3>
                    <p className="text-white/70 mb-4 text-sm">
                      Planned for future release
                    </p>
                  </div>
                  <Button
                    className="bg-gray-800 text-white/50 rounded-full w-full cursor-not-allowed"
                    disabled
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    In Development
                  </Button>
                </div>
              </Card>

              {/* Join Discord Card */}
              <Card className="bg-gray-900/60 border border-gray-800 p-6 card-glow h-full">
                <div className="flex flex-col items-center text-center h-full justify-between">
                  <div className="flex flex-col items-center">
                    <div className="mb-4 bg-gray-800/50 rounded-full w-14 h-14 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M12 16v-4"></path>
                        <path d="M12 8h.01"></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Stay Updated</h3>
                    <p className="text-white/70 mb-4 text-sm">
                      Join our community for updates
                    </p>
                  </div>
                  <Button
                    className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full w-full group"
                    asChild
                  >
                    <a href="https://discord.gg/zCScP7Y6" target="_blank" rel="noopener noreferrer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="mr-2"
                      >
                        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"></path>
                      </svg>
                      Join Discord
                    </a>
                  </Button>
                </div>
              </Card>
            </div>
          </motion.div>

          {/* Latest Release Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col h-full"
          >
            <div className="relative mb-4 w-full">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-lg blur opacity-25"></div>
              <div className="relative bg-gray-900 border border-gray-800 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span className="text-sm text-white/70">
                    Released {latestVersion.date}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-bold">
                    v{latestVersion.number}
                  </h3>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-white/20 text-white hover:bg-white/10 rounded-full"
                    asChild
                  >
                    <a
                      href="https://github.com/Darkx-dev/ShonenX/releases"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      All releases
                      <ArrowUpRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            <div className="bg-black/50 border border-gray-800 rounded-lg p-6 flex-1">
              <h3 className="text-xl font-semibold mb-4">
                Platform Availability
              </h3>

              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-primary mb-1">Android</h4>
                  <p className="text-white/70 text-sm">
                    ✅ Currently Available
                  </p>
                  <p className="text-white/70 text-sm">
                    Android 6.0+ (Marshmallow) with 2GB RAM minimum
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-primary mb-1">Windows</h4>
                  <p className="text-white/70 text-sm">EXE installer</p>
                  <p className="text-white/70 text-sm">
                    Windows 10/11 (64-bit) with 4GB RAM minimum
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-primary mb-1">Linux</h4>
                  <p className="text-white/70 text-sm">🔮 Planned for Future</p>
                  <p className="text-white/70 text-sm">
                    Ubuntu 18.04+ or equivalent with 4GB RAM minimum
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-primary mb-1">macOS / iOS</h4>
                  <p className="text-white/70 text-sm">
                    ❌ Not Currently Planned
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
