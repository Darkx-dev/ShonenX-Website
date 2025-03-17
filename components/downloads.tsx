"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  ArrowUpRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import ScrollFloat from "./blocks/TextAnimations/ScrollFloat/ScrollFloat";
import { PlatformCard } from "./PlatformCard";

export function Downloads({ versions }: any) {
  const [downloading, setDownloading] = useState<string | null>(null);

  const latestVersion =
    versions && versions.length > 0
      ? versions[0]
      : {
          number: "1.0.0",
          date: "2025-03-01",
          android: { downloadLink: "#" },
          windows: { downloadLink: "#" },
        };

  const handleDownload = (platform: string, url: string) => {
    setDownloading(platform);
    setTimeout(() => {
      window.open(url, "_blank");
      setDownloading(null);
    }, 1000);
  };

  const platforms = [
    {
      id: "android",
      name: "Android",
      icon: (
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
      ),
      description: "APK File",
      downloadLink: latestVersion.android?.downloadLink,
      status: "available",
      requirements: "Android 6.0+ • 2GB RAM",
    },
    {
      id: "windows",
      name: "Windows",
      icon: (
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
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      ),
      description: "EXE Installer",
      downloadLink: latestVersion.windows?.downloadLink,
      status: "available",
      requirements: "Windows 10/11 • 2GB RAM",
    },
    {
      id: "linux",
      name: "Linux",
      icon: (
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
      ),
      description: "Coming Soon",
      downloadLink: "#",
      status: "planned",
      requirements: "Ubuntu 18.04+ • 2GB RAM",
    },
    {
      id: "discord",
      name: "Discord",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-primary"
        >
          <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"></path>
        </svg>
      ),
      description: "Join Community",
      downloadLink: "https://discord.gg/zCScP7Y6",
      status: "available",
      requirements: "Get updates & support",
    },
  ];

  return (
    <section
      id="downloads"
      className="py-20"
    >
      <div className="container mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <ScrollFloat
            textClassName="text-5xl font-bold mb-4"
            animationDuration={1}
            ease="back.inOut(2)"
            scrollStart="center bottom+=50%"
            scrollEnd="bottom bottom-=40%"
            stagger={0.03}
          >
            Download ShonenX
          </ScrollFloat>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xl text-white/70 max-w-2xl mx-auto"
          >
            Stream your favorite anime with our latest version{" "}
            {latestVersion.number}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4"
          >
            <Badge
              variant="outline"
              className="bg-gray-800 border-gray-700 text-white/80"
            >
              <Calendar className="w-4 h-4 mr-2" />
              Released {latestVersion.date}
            </Badge>
          </motion.div>
        </div>

        {/* Platform Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {platforms.map((platform, index) => (
            <PlatformCard
              key={index}
              name={platform.name}
              icon={platform.icon}
              description={platform.description}
              requirements={platform.requirements}
              status={platform.status as 'available' | 'coming_soon'}
              isDownloading={downloading === platform.id}
              onDownload={() =>
                handleDownload(platform.id, platform.downloadLink)
              }
            />
          ))}
        </div>

        {/* Footer Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            size="lg"
            className="border-gray-700 text-white/80 hover:bg-gray-800/50 hover:border-gray-600 rounded-lg"
            asChild
          >
            <a
              href="https://github.com/Darkx-dev/ShonenX/releases"
              target="_blank"
              rel="noopener noreferrer"
            >
              View All Releases
              <ArrowUpRight className="ml-2 w-5 h-5" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
