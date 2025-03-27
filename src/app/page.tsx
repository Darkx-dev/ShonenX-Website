"use client";
import { Downloads } from "@/src/components/downloads";
import { Features } from "@/src/components/features";
import { Footer } from "@/src/components/footer";
import { Hero } from "@/src/components/Hero";
import { Navbar } from "@/src/components/Navbar";
import { getReleasesData } from "@/src/utils/github";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState<{ versions: any[]; totalAppDownloads: number }>({ versions: [], totalAppDownloads: 0 });
  const latestRelease = data.versions.length > 0 ? data.versions[0] : null;

  useEffect(() => {
    fetchData();
  }, []); // Added dependency array to prevent infinite loop

  const fetchData = async () => {
    const data = await getReleasesData();
    setData(data);
  };

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <div className="fixed inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none"></div>
      <div className="fixed inset-0 bg-gradient-radial from-purple-900/20 via-transparent to-transparent pointer-events-none"></div>

      <Navbar />
      <Hero
        latestRelease={latestRelease}
        totalDownloads={data.totalAppDownloads}
      />
      <Features />
      <Downloads versions={data.versions} />
      <Footer />
    </main>
  );
}
