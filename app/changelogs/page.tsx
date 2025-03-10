import { Changelogs } from "@/components/changelogs";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/footer";
import { getReleasesData } from "@/utils/github";

export default async function ChangelogPage() {
  const data = await getReleasesData();

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <section className="container mx-auto py-12">
        <Changelogs changelogs={data.changelogs} />
      </section>
      <Footer />
    </main>
  );
}