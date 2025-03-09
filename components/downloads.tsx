"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download, Calendar, Tag, Star } from "lucide-react"

interface Version {
  id: number
  number: string
  date: string
  downloadLink: string
}

interface DownloadsProps {
  versions: Version[]
}

export function Downloads({ versions }: DownloadsProps) {
  const latestVersion = versions[0] // Assuming versions are sorted by date

  return (
    <section id="downloads" className="py-20 px-4 relative">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gradient">Download ShonenX</h2>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto">
            Get the latest version of ShonenX and start streaming your favorite anime today
          </p>
        </motion.div>

        {versions.length > 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {versions.map((version, index) => (
              <motion.div
                key={version.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`card-glow backdrop-blur-sm border rounded-xl p-6 transition-all duration-300 ${
                  version.id === latestVersion.id 
                    ? "bg-gradient-to-br from-purple-900/40 to-cyan-900/40 border-purple-500/30 shadow-lg shadow-purple-500/20" 
                    : "bg-black/40 border-white/10"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Tag className={version.id === latestVersion.id ? "text-cyan-400" : "text-purple-500"} size={18} />
                    <h3 className="text-xl font-bold">Version {version.number}</h3>
                  </div>
                  {version.id === latestVersion.id && (
                    <div className="flex items-center gap-1 bg-purple-500/20 px-2 py-1 rounded-full">
                      <Star size={14} className="text-yellow-400 fill-yellow-400" />
                      <span className="text-xs font-medium text-purple-200">Latest</span>
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-2 mb-6 text-white/70">
                  <Calendar size={16} />
                  <p>Released: {version.date}</p>
                </div>

                <Button 
                  className={`w-full group ${
                    version.id === latestVersion.id
                      ? "bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600"
                      : "bg-purple-500 hover:bg-purple-600"
                  }`} 
                  asChild
                >
                  <a href={version.downloadLink} target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
                    {version.id === latestVersion.id ? "Download Latest" : "Download"}
                  </a>
                </Button>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="text-center text-white/70 text-lg p-10 border border-white/10 rounded-xl bg-black/40 backdrop-blur-sm">
            No versions available yet.
          </div>
        )}
      </div>
    </section>
  )
}
