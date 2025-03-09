import { Changelogs } from "@/components/changelogs"
import { Downloads } from "@/components/downloads"
import { Features } from "@/components/features"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/Hero"
import { Navbar } from "@/components/Navbar"
import { Octokit } from "@octokit/rest"

async function getReleasesData() {
  try {
    // Initialize Octokit with your GitHub token
    const octokit = new Octokit({
      auth: process.env.GITHUB_TOKEN,
    })

    // Fetch releases from GitHub repository
    const releases = await octokit.repos.listReleases({
      owner: "Darkx-dev",
      repo: "ShonenX",
      per_page: 6 // Limit to most recent 5 releases
    })

    // Transform GitHub releases data to your app's format
    const versions = releases.data.map(release => ({
      id: release.id,
      number: release.tag_name.replace('v', ''), // remove 'v' prefix if present
      date: new Date(release.published_at || release.created_at).toISOString().split('T')[0],
      downloadLink: release.assets.find(asset => asset.name.endsWith('.apk'))?.browser_download_url || release.html_url,
    }))

    // Extract changelog information from release body
    const changelogs = releases.data.map(release => ({
      id: release.id,
      version: release.tag_name.replace('v', ''),
      date: new Date(release.published_at || release.created_at).toISOString().split('T')[0],
      description: release.body || `Release ${release.tag_name}`,
    }))

    return { versions, changelogs }
  } catch (error) {
    console.error("Error fetching releases from GitHub API:", error)
    // Use local fallback data
    return {
      versions: [
        {
          id: 1,
          number: "1.0.0",
          date: "2025-03-01",
          downloadLink: "https://github.com/Darkx-dev/ShonenX/releases/download/v1.0.0/shonenx.apk",
        },
      ],
      changelogs: [
        {
          id: 1,
          version: "1.0.0",
          date: "2025-03-01",
          description: "Initial release with basic streaming functionality.",
        },
      ],
    }
  }
}

export default async function Home() {
  const data = await getReleasesData()

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <div className="fixed inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none"></div>
      <div className="fixed inset-0 bg-gradient-radial from-purple-900/20 via-transparent to-transparent pointer-events-none"></div>
      <Navbar />
      <Hero />
      <Features />
      <Downloads versions={data.versions} />
      <Changelogs changelogs={data.changelogs} />
      <Footer />
    </main>
  )
}