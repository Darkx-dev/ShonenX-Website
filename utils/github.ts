import { Octokit } from "@octokit/rest";

let cachedReleasesData: any = null;
let lastFetched: any = null;
const CACHE_DURATION = 60 * 60 * 1000; // 1 hour in milliseconds

export async function getReleasesData() {
  const now = Date.now();
  if (cachedReleasesData && lastFetched && now - lastFetched < CACHE_DURATION) {
    console.log("Returning cached releases data");
    return cachedReleasesData;
  }

  try {
    const octokit = new Octokit({
      auth: process.env.GITHUB_TOKEN,
    });

    const releases = await octokit.repos.listReleases({
      owner: "Darkx-dev",
      repo: "ShonenX",
      per_page: 12,
    });

    console.log("Raw releases data:", releases.data);

    const versions = releases.data.map((release) => ({
      id: release.id,
      number: release.tag_name.replace("v", ""),
      date: new Date(release.published_at || release.created_at)
        .toISOString()
        .split("T")[0],
      downloadLink:
        release.assets.find((asset) => asset.name.endsWith(".apk"))
          ?.browser_download_url || release.html_url,
    }));

    const changelogs = releases.data.map((release) => {
      const imageRegex = /!\[.*?\]\((.*?)\)/g;
      const images: any = [];

      const cleanBody =
        (release.body || "")
          .split("\n")
          .map((line) => {
            const imageMatch = line.match(imageRegex);

            if (imageMatch) {
              imageMatch.forEach((img) => {
                const url = img.match(/\((.*?)\)/)?.[1];
                if (url) images.push(url);
              });
              return null;
            }

            if (line.startsWith("|") || line.startsWith("---")) {
              return null;
            }

            return line.trim();
          })
          .filter((line) => line !== null)
          .join("\n") || `Release ${release.tag_name}`;

      const changesList = cleanBody
        ? cleanBody
            .split("\n")
            .map((line) => line.replace(/^[-*]\s+/, "").trim())
            .filter((line) => line)
        : [`Release ${release.tag_name}`];

      const changelog = {
        id: release.id,
        version: release.tag_name.replace("v", ""),
        date: new Date(release.published_at || release.created_at)
          .toISOString()
          .split("T")[0],
        description: cleanBody,
        changes: changesList,
        images,
      };

      console.log("Formatted changelog:", changelog);
      return changelog;
    });

    cachedReleasesData = { versions, changelogs };
    lastFetched = now;
    console.log("Fetched and cached releases data");
    return cachedReleasesData;
  } catch (error) {
    console.error("Error fetching releases:", error);
    return { versions: [], changelogs: [] };
  }
}
