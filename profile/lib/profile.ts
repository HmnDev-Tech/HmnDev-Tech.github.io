export type Social = { label: string; href: string; bg: string; fg: string }

// Telegram and Reddit are added once the handles are confirmed.
export const socials: Social[] = [
  { label: "GitHub", href: "https://github.com/HmnDev-Tech", bg: "#f0f1f6", fg: "#070916" },
  { label: "X / Twitter", href: "https://x.com/hamon73507", bg: "#1c2033", fg: "#f0f1f6" },
]

export type Project = {
  name: string
  blurb: string
  href: string
  tags: string[]
  featured?: boolean
}

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
    tags: ["Android", "Compose"],
  },
  {
    name: "Nightzuku-Reforked",
    blurb: "Shizuku fork with Material 3 Expressive and Android SDK 37 updates.",
    href: "https://github.com/HmnDev-Tech/Nightzuku-Reforked",
    tags: ["Shizuku", "SDK 37"],
  },
  {
    name: "ShizuConfigs",
    blurb: "Official Shevery module that can monitor and create configs.",
    href: "https://github.com/HmnDev-Tech/ShizuConfigs",
    tags: ["Shevery", "Modules"],
  },
  {
    name: "BatteryChecker",
    blurb: "Battery monitoring utility.",
    href: "https://github.com/HmnDev-Tech/BatteryChecker",
    tags: ["Android"],
  },
  {
    name: "Gemini Chat Client Revived",
    blurb: "Continuation of the old Gemini Chat Client project by hamondev.",
    href: "https://github.com/HmnDev-Tech/Gemini-chat-client-revived",
    tags: ["Gemini", "Chat"],
  },
]

export const stack = ["Android", "Kotlin", "Jetpack Compose", "Material 3 Expressive", "Shizuku", "TypeScript", "Next.js"]
