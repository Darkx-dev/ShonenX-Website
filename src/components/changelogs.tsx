"use client";

import { motion } from "framer-motion";
import { Calendar, Tag } from "lucide-react";
import { Card } from "@/src/components/ui/card";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export function Changelogs({ changelogs = [] }) {
  return (
    <section id="changelogs" className="py-20 relative">
      {/* Subtle Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-white/5 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-white/5 rounded-full blur-3xl opacity-40"></div>
      </div>

      <div className="container mx-auto max-w-5xl px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            Release Notes
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Stay updated with the latest features and improvements in ShonenX
          </p>
        </motion.div>

        {/* Changelog Cards */}
        <div className="space-y-6">
          {changelogs.map((changelog: any, index: number) => (
            <motion.div
              key={changelog.id || index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-zinc-900 border-0 transition-all duration-300 rounded-xl shadow-md overflow-hidden">
                <div className="p-6">
                  {/* Header Section */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-4">
                      <div className="bg-white/10 text-white rounded-full px-4 py-1.5 text-sm font-semibold flex items-center border border-white/20 shadow-sm">
                        <Tag className="h-4 w-4 mr-2 text-gray-300" />
                        v{changelog.version}
                      </div>
                      <div className="flex items-center text-gray-400 text-sm">
                        <Calendar className="h-4 w-4 mr-2 text-gray-300" />
                        {new Date(changelog.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="prose prose-invert max-w-none text-gray-300">
                    {changelog.description && (
                      <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        components={{
                          h3: ({ node, ...props }) => (
                            <h3 className="text-lg font-semibold text-white mt-4 mb-2" {...props} />
                          ),
                          h4: ({ node, ...props }) => (
                            <h4 className="text-md font-medium text-gray-200 mt-3 mb-1" {...props} />
                          ),
                          p: ({ node, ...props }) => (
                            <p className="text-gray-300 mb-4 leading-relaxed" {...props} />
                          ),
                          ul: ({ node, ...props }) => (
                            <ul className="space-y-2 mb-4" {...props} />
                          ),
                          li: ({ node, ...props }) => (
                            <li className="flex items-start">
                              <span className="text-primary mr-2">•</span>
                              <span {...props} />
                            </li>
                          ),
                          a: ({ node, href, ...props }) => (
                            <a
                              href={href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary hover:underline"
                              {...props}
                            />
                          ),
                          code: ({ node, ...props }) => (
                            <code className="bg-gray-800/50 px-1.5 py-0.5 rounded text-gray-200" {...props} />
                          ),
                        }}
                      >
                        {changelog.description}
                      </ReactMarkdown>
                    )}

                    {changelog.changes && changelog.changes.length > 0 && (
                      <div>
                        <h4 className="text-md font-medium text-gray-200 mt-4 mb-2">Changes</h4>
                        <ul className="space-y-2">
                          {changelog.changes.map((change: string, changeIndex: number) => (
                            <li key={changeIndex} className="flex items-start">
                              <span className="text-primary mr-2">•</span>
                              <ReactMarkdown
                                remarkPlugins={[remarkGfm]}
                                components={{
                                  p: ({ node, ...props }) => (
                                    <span className="text-gray-300" {...props} />
                                  ),
                                  a: ({ node, href, ...props }) => (
                                    <a
                                      href={href}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-primary hover:underline"
                                      {...props}
                                    />
                                  ),
                                  code: ({ node, ...props }) => (
                                    <code className="bg-gray-800/50 px-1.5 py-0.5 rounded text-gray-200" {...props} />
                                  ),
                                }}
                              >
                                {change}
                              </ReactMarkdown>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Footer Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/Darkx-dev/ShonenX/releases"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-5 py-2.5 rounded-full bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20 transition-all duration-200 text-sm font-semibold shadow-sm"
          >
            View All Releases on GitHub
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-2"
            >
              <path d="M7 7h10v10"></path>
              <path d="M17 7l-10 10"></path>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}