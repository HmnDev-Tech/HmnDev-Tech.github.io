export type Social = { label: string; handle: string; href: string; bg: string; fg: string }

export const socials: Social[] = [
  { label: "GitHub", handle: "HmnDev-Tech", href: "https://github.com/HmnDev-Tech", bg: "#f0f1f6", fg: "#070916" },
  { label: "Telegram", handle: "hmndevtech", href: "https://t.me/hmndevtech", bg: "#1a76ab", fg: "#ffffff" },
  { label: "Reddit", handle: "u/HamonTech_official", href: "https://www.reddit.com/u/HamonTech_official", bg: "#c43a00", fg: "#ffffff" },
  { label: "X / Twitter", handle: "hamon73507", href: "https://x.com/hamon73507", bg: "#1c2033", fg: "#f0f1f6" },
]

export type Project = {
  repo: string // GitHub repo name, used to join live stats
  name: string
  blurb: string
  href: string
  tags: string[]
  featured?: boolean
}

// Only public repositories belong here.
export const projects: Project[] = [
  {
    repo: "shevery",
    name: "Shevery",
    blurb:
      "Modernized Shizuku fork for Android 17 (SDK 37): Jetpack Compose manager, Comput AI shell planner, Device Owner & Dhizuku provider, Stealth APK generator and ADB modules.",
    href: "/shevery/",
    tags: ["Android", "Kotlin", "Shizuku", "Material 3 Expressive"],
    featured: true,
  },
  {
    repo: "BLE-Droid",
    name: "BLE-Droid",
    blurb: "Advanced Bluetooth Low Energy app built with Material 3 Expressive and Jetpack Compose.",
    href: "https://github.com/HmnDev-Tech/BLE-Droid",
    tags: ["Android", "Compose", "BLE"],
  },
  {
    repo: "ShizuConfigs",
    name: "ShizuConfigs",
    blurb: "Official Shevery module that can monitor and create configs.",
    href: "https://github.com/HmnDev-Tech/ShizuConfigs",
    tags: ["Shevery", "Module"],
  },
]

export const forks: { repo: string; name: string; note: string }[] = [
  { repo: "BPatch", name: "BPatch", note: "Modernized Android rooting app with Jetpack Compose." },
  { repo: "Overcast-Next", name: "Overcast-Next", note: "Weather is also Essential." },
  { repo: "essentials", name: "essentials", note: "Essential tools and mods for Android nerds." },
]

export const stack = [
  { group: "Mobile", items: ["Kotlin", "Jetpack Compose", "Material 3 Expressive", "Android SDK 37"] },
  { group: "System", items: ["Shizuku / Binder IPC", "ADB", "Device Owner", "Dhizuku"] },
  { group: "Web & tooling", items: ["TypeScript", "Next.js", "Tailwind CSS", "GitHub Actions"] },
]
