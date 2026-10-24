"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"

/** Fades/slides children in once they enter the viewport. */
export function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("in")
          io.disconnect()
        }
      },
      { threshold: 0.15 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return (
    <div ref={ref} className={`reveal ${className}`} style={{ ["--d" as string]: `${delay}ms` }}>
      {children}
    </div>
  )
}

/** Card whose spotlight gradient follows the pointer. */
export function SpotlightCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  return (
    <div
      ref={ref}
      className={`spotlight ${className}`}
      onPointerMove={(e) => {
        const r = ref.current?.getBoundingClientRect()
        if (!r) return
        ref.current!.style.setProperty("--mx", `${e.clientX - r.left}px`)
        ref.current!.style.setProperty("--my", `${e.clientY - r.top}px`)
      }}
    >
      {children}
    </div>
  )
}

/** Live local time in Kazakhstan (Asia/Almaty). */
export function LocalClock() {
  const [now, setNow] = useState("")
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", timeZone: "Asia/Almaty" })
    const tick = () => setNow(fmt.format(new Date()))
    tick()
    const id = setInterval(tick, 15000)
    return () => clearInterval(id)
  }, [])
  return (
    <span className="inline-flex h-10 items-center gap-2 rounded-full bg-surface-2 px-4 font-mono text-xs text-on-surface-variant">
      <span className="size-2 rounded-full bg-m3-primary" aria-hidden="true" />
      {now || "--:--"} <span className="opacity-60">Almaty</span>
    </span>
  )
}
