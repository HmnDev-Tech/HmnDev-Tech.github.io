export type Social = { label: string; href: string; bg: string; fg: string }

export const socials: Social[] = [
  { label: "GitHub", href: "https://github.com/HmnDev-Tech", bg: "#f0f1f6", fg: "#070916" },
  { label: "Telegram", href: "https://t.me/hmndevtech", bg: "#1a76ab", fg: "#ffffff" },
  { label: "Reddit", href: "https://www.reddit.com/u/HamonTech_official", bg: "#c43a00", fg: "#ffffff" },
  { label: "X / Twitter", href: "https://x.com/hamon73507", bg: "#1c2033", fg: "#f0f1f6" },
]

export type Project = {
  name: string
  blurb: string
  href: string
  tags: string[]
  featured?: boolean
}

// Only verified public repositories
export const projects: Project[] = [
  {
    name: "Shevery",
    blurb:
      "Modernized Shizuku fork for Android 17 with a Jetpack Compose manager, Comput AI shell planner, Device Owner support and ADB modules.",
    href: "/shevery/",
    tags: ["Android", "Kotlin", "Material 3 Expressive"],
    featured: true,
  },
  {
    name: "BLE-Droid",
    blurb: "Advanced BLE app built with Material 3 Expressive and Jetpack Compose.",
    href: "https://github.com/HmnDev-Tech/BLE-Droid",
    tags: ["Android", "Compose", "BLE"],
  },
  {
    name: "ShizuConfigs",
    blurb: "Official Shevery module that can monitor and create configs.",
    href: "https://github.com/HmnDev-Tech/ShizuConfigs",
    tags: ["Shevery", "Modules"],
  },
  {
    name: "BPatch",
    blurb: "The modernized Android rooting app with Jetpack Compose, APatch Fork.",
    href: "https://github.com/HmnDev-Tech/BPatch",
    tags: ["Root", "APatch", "Compose"],
  },
  {
    name: "Overcast-Next",
    blurb: "Weather is also Essential — sleek weather app.",
    href: "https://github.com/HmnDev-Tech/Overcast-Next",
    tags: ["Weather", "Kotlin", "Compose"],
  },
  {
    name: "essentials",
    blurb: "Essential tools and mods for Android nerds.",
    href: "https://github.com/HmnDev-Tech/essentials",
    tags: ["Android", "Mods", "Tools"],
  },
]

export const stack = [
  "Kotlin",
  "Java",
  "TypeScript",
  "JavaScript",
  "Python",
  "Android",
  "Jetpack Compose",
  "Material 3 Expressive",
  "Shizuku",
  "Next.js",
]
