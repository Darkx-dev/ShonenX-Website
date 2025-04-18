import { Octokit } from "@octokit/rest";
import { readCache, writeCache, isCacheValid } from "./cache";

export async function getReleasesData() {
  // Try to read from cache first
  const cachedData = await readCache();
  if (cachedData && isCacheValid(cachedData.lastUpdated)) {
    console.log("Serving from cache");
    return cachedData;
  }

  try {
    const octokit = new Octokit({
      // auth: process.env.GITHUB_TOKEN,
    });

    const releases = await octokit.repos.listReleases({
      owner: "Darkx-dev",
      repo: "ShonenX",
      per_page: 12,
    });

    const versions = releases.data.map((release) => {
      const androidAsset = release.assets.find((asset) =>
        asset.name.endsWith(".apk")
      );
      const windowsAsset = release.assets.find((asset) =>
        asset.name.endsWith(".exe")
      );

      return {
        id: release.id,
        number: release.tag_name.replace("v", ""),
        date: new Date(release.published_at || release.created_at)
          .toISOString()
          .split("T")[0],
        android: {
          downloadLink: androidAsset?.browser_download_url || null,
          downloadCount: androidAsset?.download_count || 0,
        },
        windows: {
          downloadLink: windowsAsset?.browser_download_url || null,
          downloadCount: windowsAsset?.download_count || 0,
        },
        totalDownloads: release.assets.reduce(
          (total, asset) => total + asset.download_count,
          0
        ),
        githubUrl: release.html_url,
      };
    });

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

      // Remove emojis from changes using regex
      const changesNoEmoji = cleanBody
        ? cleanBody
            .split("\n")
            .map((line) => 
              line
                .replace(/^[-*]\s+/, "")
                .replace(/[\u{1F300}-\u{1F9FF}]|[\u{1F600}-\u{1F64F}]|[\u{1F680}-\u{1F6FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]|[\u{1F900}-\u{1F9FF}]|[\u{1F1E0}-\u{1F1FF}]/gu, '')
                .trim()
            )
            .filter((line) => line)
        : [`Release ${release.tag_name}`];

      const changelog = {
        id: release.id,
        version: release.tag_name.replace("v", ""),
        date: new Date(release.published_at || release.created_at)
          .toISOString()
          .split("T")[0],
        description: cleanBody,
        changes: changesNoEmoji,
        images,
      };
      return changelog;
    });

    const totalAppDownloads = releases.data.reduce((total, release) => {
      return total + release.assets.reduce((assetTotal, asset) => assetTotal + asset.download_count, 0);
    }, 0);

    const data = { 
      versions, 
      changelogs, 
      totalAppDownloads,
      lastUpdated: Date.now()
    };

    // Write to cache
    await writeCache(data);
    console.log("Updated cache with fresh data");
    
    return data;
  } catch (error) {
    console.error("Error fetching releases:", error);
    
    // If fetch fails, try to serve stale cache as fallback
    const staleCache = await readCache();
    if (staleCache) {
      console.log("Serving stale cache after fetch error");
      return staleCache;
    }
    
    // If no cache exists, return empty data
    return { versions: [], changelogs: [], totalAppDownloads: 0, lastUpdated: 0 };
  }
}
