import { Downloads } from "@/components/downloads";
import { Features } from "@/components/features";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { getReleasesData } from "@/utils/github";

export default async function Home() {
  const data = await getReleasesData();
  const latestRelease = data.changelogs[0];

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <div className="fixed inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none"></div>
      <div className="fixed inset-0 bg-gradient-radial from-purple-900/20 via-transparent to-transparent pointer-events-none"></div>

      <Navbar />
      <Hero />
      <Features />
      <Downloads versions={data.versions} />
      <Footer />
    </main>
  );
}