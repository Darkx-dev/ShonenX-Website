"use client";

import { motion } from "framer-motion";
import { Calendar, Tag } from "lucide-react";
import { Card } from "@/components/ui/card";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

function parseMarkdown(text: string) {
  if (!text) return '<p>No content available.</p>';

  let html = text
    .replace(/^### (.+)$/gm, '<h3 class="text-lg font-semibold text-white mb-2">$1</h3>')
    .replace(/^#### (.+)$/gm, '<h4 class="text-md font-medium text-gray-200 mb-1">$1</h4>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/`(.+?)`/g, '<code class="bg-gray-800 px-1 rounded">$1</code>')
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" class="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">$1</a>')
    .replace(/^- (.+)$/gm, '<li class="ml-4 flex items-start"><span class="text-blue-400 mr-2">•</span><span>$1</span></li>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/\n/g, '<br>');

  return `<div>${html}</div>`;
}

export function Changelogs({ changelogs = [] }: any) {
  return (
    <section id="changelogs" className="py-24 relative overflow-hidden">
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto max-w-5xl px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
            Release Notes
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Discover the latest features and improvements in our journey
          </p>
        </motion.div>

        <div className="space-y-8">
          {changelogs.map((changelog: any, index: number) => (
            <motion.div
              key={changelog.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-gray-900/40 border border-gray-800/50 p-6 hover:border-gray-700/50 transition-colors duration-200">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-500/10 text-blue-400 rounded-full px-4 py-1.5 text-sm font-medium flex items-center ring-1 ring-blue-500/20">
                      <Tag className="h-4 w-4 mr-2" />
                      v{changelog.version}
                    </div>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Calendar className="h-4 w-4 mr-2" />
                      {new Date(changelog.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {/* Render description */}
                  {/* {changelog.description && (
                    <div className="text-gray-300 prose prose-invert max-w-none leading-relaxed">
                      <div dangerouslySetInnerHTML={{ __html: parseMarkdown(changelog.description) }} />
                    </div>
                  )} */}
                  
                  {/* Optionally render changes as a separate list */}
                  {changelog.changes && changelog.changes.length > 0 && (
                    <div>
                      <h4 className="text-md font-medium text-gray-200 mb-2">Changes</h4>
                      <ul className="text-gray-300 prose prose-invert max-w-none leading-relaxed">
                        {changelog.changes.map((change: any, changeIndex: number) => (
                          <li key={changeIndex} className="ml-4 flex items-start">
                            <span className="text-blue-400 mr-2">•</span>
                            <span className="prose prose-invert">
                              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                {change}
                              </ReactMarkdown>
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
        
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
            className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 transition-colors duration-200 text-sm font-medium"
          >
            View all releases on GitHub
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
              <path d="M7 7h10v10"></path>
              <path d="M17 7l-10 10"></path>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}