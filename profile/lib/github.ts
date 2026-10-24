// Build-time GitHub data. Runs during `next build` (static export), so numbers refresh on every deploy.
// Fallbacks keep the build green when the API is rate-limited or offline.

const USER = "HmnDev-Tech"

export type Repo = {
  name: string
  fork: boolean
  language: string | null
  stars: number
  forks: number
  pushedAt: string
  parent?: string
}

export type GitHubData = {
  avatar: string
  followers: number
  publicRepos: number
  createdAt: string
  repos: Repo[]
  latestCommit: { message: string; date: string; url: string } | null
}

const FALLBACK: GitHubData = {
  avatar: "https://avatars.githubusercontent.com/u/256042304?v=4",
  followers: 89,
  publicRepos: 9,
  createdAt: "2026-01-20T06:47:53Z",
  repos: [
    { name: "shevery", fork: false, language: "Kotlin", stars: 1476, forks: 48, pushedAt: "2026-10-24T01:15:48Z" },
    { name: "BLE-Droid", fork: false, language: "Kotlin", stars: 12, forks: 1, pushedAt: "2026-10-07T17:51:44Z" },
    { name: "ShizuConfigs", fork: false, language: "JavaScript", stars: 41, forks: 4, pushedAt: "2026-07-04T02:49:06Z" },
    { name: "BPatch", fork: true, language: "Kotlin", stars: 11, forks: 0, pushedAt: "2026-06-06T12:55:10Z", parent: "bmax121/APatch" },
    { name: "Overcast-Next", fork: true, language: "Kotlin", stars: 0, forks: 0, pushedAt: "2026-10-17T08:43:18Z", parent: "sameerasw/Overcast" },
    { name: "essentials", fork: true, language: "Kotlin", stars: 1, forks: 0, pushedAt: "2026-09-19T15:29:52Z", parent: "sameerasw/essentials" },
  ],
  latestCommit: null,
}

const PARENTS: Record<string, string> = {
  BPatch: "bmax121/APatch",
  "Overcast-Next": "sameerasw/Overcast",
  essentials: "sameerasw/essentials",
}

async function gh<T>(path: string): Promise<T> {
  const headers: Record<string, string> = { Accept: "application/vnd.github+json" }
  if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`
  const res = await fetch(`https://api.github.com${path}`, { headers, cache: "force-cache" })
  if (!res.ok) throw new Error(`${path}: ${res.status}`)
  return res.json() as Promise<T>
}

type ApiUser = { avatar_url: string; followers: number; public_repos: number; created_at: string }
type ApiRepo = { name: string; fork: boolean; language: string | null; stargazers_count: number; forks_count: number; pushed_at: string }
type ApiCommit = { sha: string; html_url: string; commit: { message: string; author: { date: string } } }

export async function getGitHubData(): Promise<GitHubData> {
  try {
    const [user, repos] = await Promise.all([
      gh<ApiUser>(`/users/${USER}`),
      gh<ApiRepo[]>(`/users/${USER}/repos?per_page=100`),
    ])
    let latestCommit: GitHubData["latestCommit"] = null
    try {
      const [c] = await gh<ApiCommit[]>(`/repos/${USER}/shevery/commits?per_page=1`)
      if (c) latestCommit = { message: c.commit.message.split("\n")[0], date: c.commit.author.date, url: c.html_url }
    } catch {
      /* optional */
    }
    return {
      avatar: user.avatar_url,
      followers: user.followers,
      publicRepos: user.public_repos,
      createdAt: user.created_at,
      repos: repos.map((r) => ({
        name: r.name,
        fork: r.fork,
        language: r.language,
        stars: r.stargazers_count,
        forks: r.forks_count,
        pushedAt: r.pushed_at,
        parent: PARENTS[r.name],
      })),
      latestCommit,
    }
  } catch (e) {
    console.warn("[github] using fallback data:", (e as Error).message)
    return FALLBACK
  }
}

export function relativeDate(iso: string, now = new Date()): string {
  const days = Math.max(0, Math.round((now.getTime() - new Date(iso).getTime()) / 86_400_000))
  if (days === 0) return "today"
  if (days === 1) return "yesterday"
  if (days < 30) return `${days} days ago`
  const months = Math.round(days / 30)
  return months === 1 ? "a month ago" : `${months} months ago`
}
