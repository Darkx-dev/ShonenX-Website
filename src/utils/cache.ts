import fs from 'fs/promises';
import path from 'path';

const CACHE_FILE = path.join(process.cwd(), 'cache', 'github-releases.json');
const CACHE_DURATION = 60 * 60 * 1000; // 1 hour in milliseconds

export interface CacheData {
  versions: any[];
  changelogs: any[];
  totalAppDownloads: number;
  lastUpdated: number;
}

export async function readCache(): Promise<CacheData | null> {
  try {
    const data = await fs.readFile(CACHE_FILE, 'utf-8');
    return JSON.parse(data);
  } catch {
    return null;
  }
}

export async function writeCache(data: CacheData): Promise<void> {
  try {
    await fs.mkdir(path.dirname(CACHE_FILE), { recursive: true });
    await fs.writeFile(CACHE_FILE, JSON.stringify(data));
  } catch (error) {
    console.error('Error writing cache:', error);
  }
}

export function isCacheValid(lastUpdated: number): boolean {
  return Date.now() - lastUpdated < CACHE_DURATION;
}