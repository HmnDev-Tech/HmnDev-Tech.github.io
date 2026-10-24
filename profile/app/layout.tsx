import type { Metadata, Viewport } from "next"
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google"
import "./globals.css"

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jetbrains",
})

export const metadata: Metadata = {
  title: "hamondev — Android developer · HmnDev-Tech",
  description:
    "hamondev (HmnDev-Tech): Android developer from Kazakhstan building Shevery, BLE-Droid, and other Material 3 Expressive apps.",
}

export const viewport: Viewport = {
  themeColor: "#070916",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${jakarta.variable} ${jetbrainsMono.variable} bg-background`}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
