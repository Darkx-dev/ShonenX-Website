"use client"

import { motion } from "framer-motion"
import { Clock, FileText } from "lucide-react"

interface Changelog {
  id: number
  version: string
  date: string
  description: string
}

interface ChangelogsProps {
  changelogs: Changelog[]
}

export function Changelogs({ changelogs }: ChangelogsProps) {
  return (
    <section id="changelogs" className="py-20 px-4 relative">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black to-transparent pointer-events-none"></div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gradient">Changelogs</h2>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto">
            Stay up to date with the latest improvements and features
          </p>
        </motion.div>

        {changelogs.length > 0 ? (
          <div className="space-y-6 relative">
            <div className="absolute left-[27px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-500 via-purple-500/50 to-transparent"></div>

            {changelogs.map((changelog, index) => (
              <motion.div
                key={changelog.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-6"
              >
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center border-2 border-purple-500">
                    <FileText className="text-purple-500" />
                  </div>
                </div>

                <div className="card-glow flex-1 bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 transition-all duration-300">
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-3">
                    <h3 className="text-xl font-bold">Version {changelog.version}</h3>
                    <div className="flex items-center gap-2 text-white/70">
                      <Clock size={16} />
                      <span>{changelog.date}</span>
                    </div>
                  </div>
                  {/* <p className="text-white/70">{changelog.description}</p> */}
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center text-white/70 text-lg p-10 border border-white/10 rounded-xl bg-black/40 backdrop-blur-sm">
            No changelogs available yet.
          </div>
        )}
      </div>
    </section>
  )
}

