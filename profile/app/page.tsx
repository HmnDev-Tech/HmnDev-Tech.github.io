import Image from "next/image"
import { LocalClock, Reveal, SpotlightCard } from "@/components/interactive"
import { JavaIcon, JavaScriptIcon, KotlinIcon, PythonIcon, TypeScriptIcon } from "@/components/lang-icons"
import { projects, socials, stack } from "@/lib/profile"

const RING = "HMNDEV-TECH · ANDROID · KOTLIN · COMPOSE · "
const COOKIE_PATH =
  "M 200.00 20.00 C 216.53 20.00, 230.31 56.73, 249.59 63.74 C 268.88 70.76, 303.04 51.49, 315.70 62.11 C 328.37 72.74, 315.31 109.73, 325.57 127.50 C 335.83 145.27, 374.39 152.46, 377.27 168.74 C 380.14 185.02, 346.36 204.97, 342.80 225.18 C 339.23 245.39, 364.15 275.68, 355.88 290.00 C 347.62 304.32, 308.92 297.89, 293.20 311.08 C 277.48 324.27, 277.10 363.49, 261.56 369.14 C 246.03 374.80, 220.52 345.00, 200.00 345.00 C 179.48 345.00, 153.97 374.80, 138.44 369.14 C 122.90 363.49, 122.52 324.27, 106.80 311.08 C 91.08 297.89, 52.38 304.32, 44.12 290.00 C 35.85 275.68, 60.77 245.39, 57.20 225.18 C 53.64 204.97, 19.86 185.02, 22.73 168.74 C 25.61 152.46, 64.17 145.27, 74.43 127.50 C 84.69 109.73, 71.63 72.74, 84.30 62.11 C 96.96 51.49, 131.12 70.76, 150.41 63.74 C 169.69 56.73, 183.47 20.00, 200.00 20.00 Z"

function ArrowUpRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </svg>
  )
}

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-50 px-4 pt-4">
        <div className="relative mx-auto flex h-14 max-w-6xl items-center gap-3 overflow-hidden rounded-full border border-outline-variant/60 bg-surface/80 px-4 pl-6 backdrop-blur-md">
          {/* M3 Expressive spinning cookie in header background */}
          <div className="pointer-events-none absolute -left-6 -top-6 -z-10 size-28 opacity-15" aria-hidden="true">
            <svg viewBox="0 0 400 400" className="size-full animate-[ring-spin_35s_linear_infinite] fill-yellow-400">
              <path d={COOKIE_PATH} />
            </svg>
          </div>

          <a href="#top" className="text-lg font-extrabold tracking-tight text-yellow-400">
            hamondev
          </a>
          <nav aria-label="Sections" className="ml-auto hidden items-center gap-1 sm:flex">
            {["about", "me", "projects", "stack", "contact"].map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className="inline-flex h-10 items-center rounded-full px-4 text-sm font-medium capitalize text-on-surface-variant transition-colors hover:bg-surface-2 hover:text-on-surface"
              >
                {id === "me" ? "about me" : id}
              </a>
            ))}
          </nav>
          <div className="ml-auto sm:ml-2">
            <LocalClock />
          </div>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 pb-16 pt-16 sm:px-6 lg:grid-cols-[1.4fr_1fr] lg:pt-24 overflow-hidden">
          {/* M3 Expressive spinning cookie shape in hero background */}
          <div className="pointer-events-none absolute -top-12 -right-16 -z-10 size-[32rem] opacity-10 sm:size-[40rem]" aria-hidden="true">
            <svg viewBox="0 0 400 400" className="size-full animate-[ring-spin_45s_linear_infinite] fill-yellow-400">
              <path d={COOKIE_PATH} />
            </svg>
          </div>
          <div className="pointer-events-none absolute -left-32 top-0 -z-10 size-[28rem] rounded-full bg-primary-container/40 blur-3xl" aria-hidden="true" />

          <div>
            <p className="mb-6 inline-flex rounded-full bg-surface-2 px-4 py-2 text-sm text-on-surface-variant">
              HmnDev-Tech · Kazakhstan
            </p>
            <h1 className="text-[clamp(3.5rem,13vw,9rem)] font-extrabold leading-[0.9] tracking-tighter text-yellow-400">
              hamon
              <br />
              dev
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-on-surface-variant">
              I like to code, just code…
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/shevery/"
                className="inline-flex h-12 items-center gap-2 rounded-[20px] bg-primary-container px-6 font-medium text-on-primary-container transition-[border-radius,transform] duration-300 ease-spring hover:rounded-xl active:scale-[0.97]"
              >
                Open Shevery <ArrowUpRight />
              </a>
            </div>
          </div>

          <div className="relative mx-auto aspect-square w-full max-w-sm" aria-hidden="true">
            <svg viewBox="0 0 200 200" className="ring-text absolute inset-0 size-full animate-[ring-spin_28s_linear_infinite] fill-on-surface-variant font-mono text-[9px] tracking-[0.18em]">
              <defs>
                <path id="ring" d="M100,100 m-88,0 a88,88 0 1,1 176,0 a88,88 0 1,1 -176,0" />
              </defs>
              <text>
                <textPath href="#ring" textLength="548">{RING}</textPath>
              </text>
            </svg>
            <div className="blob floaty absolute inset-[16%] overflow-hidden rounded-full animate-[blob-morph_9s_ease-in-out_infinite] bg-gradient-to-br from-primary-container to-tertiary-container p-2 flex items-center justify-center">
              <Image
                src="https://avatars.githubusercontent.com/u/256042304?v=4"
                alt="hamondev avatar"
                width={200}
                height={200}
                priority
                className="size-full object-cover rounded-full"
              />
            </div>
          </div>
        </section>

        {/* Marquee */}
        <div className="overflow-hidden border-y border-outline-variant/50 py-6" aria-hidden="true">
          <div className="marquee-track flex w-max animate-[marquee_30s_linear_infinite] gap-10 whitespace-nowrap text-4xl font-extrabold tracking-tight text-on-surface/20 sm:text-5xl">
            {[...stack, ...stack, ...stack, ...stack].map((s, i) => (
              <span key={i} className="flex items-center gap-10">
                {s} <span className="text-m3-primary/60">✦</span>
              </span>
            ))}
          </div>
        </div>

        {/* 01 / about (Focus, Design) */}
        <section id="about" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-24">
          <Reveal>
            <p className="font-mono text-sm text-m3-primary">01 / about</p>
            <h2 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
              Code first. Polish second. Coffee optional(But not now).
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {[
              ["Focus", "Android, Shizuku-based tooling, Jetpack Compose UIs"],
              ["Design", "Material 3 Expressive: springy shapes, bold type, real motion"],
            ].map(([k, v], i) => (
              <Reveal key={k} delay={i * 90}>
                <div className="h-full rounded-2xl bg-surface-2 p-7 transition-[border-radius,background-color] duration-300 ease-spring hover:rounded-sm hover:bg-surface-3 border border-outline-variant/30">
                  <p className="font-mono text-xs uppercase tracking-widest text-yellow-400 font-semibold">{k}</p>
                  <p className="mt-3 text-lg font-medium leading-relaxed">{v}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* 02 / about me (Country, City, Languages, Programming Stack with SVGs) */}
        <section id="me" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <Reveal>
            <p className="font-mono text-sm text-yellow-400">02 / about me</p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
              Developer Profile &amp; Location
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <Reveal delay={0}>
              <div className="h-full rounded-2xl bg-surface-2 p-6 border border-outline-variant/40 transition-[border-radius,background-color] duration-300 ease-spring hover:rounded-sm hover:bg-surface-3">
                <p className="font-mono text-xs uppercase tracking-widest text-on-surface-variant">Country</p>
                <div className="mt-3 flex items-center gap-3">
                  <span className="text-2xl">🇰🇿</span>
                  <span className="text-xl font-bold text-on-surface">Kazakhstan</span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div className="h-full rounded-2xl bg-surface-2 p-6 border border-outline-variant/40 transition-[border-radius,background-color] duration-300 ease-spring hover:rounded-sm hover:bg-surface-3">
                <p className="font-mono text-xs uppercase tracking-widest text-on-surface-variant">City</p>
                <div className="mt-3 flex items-center gap-3">
                  <span className="text-2xl">🏔️</span>
                  <span className="text-xl font-bold text-on-surface">Almaty</span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div className="h-full rounded-2xl bg-surface-2 p-6 border border-outline-variant/40 transition-[border-radius,background-color] duration-300 ease-spring hover:rounded-sm hover:bg-surface-3">
                <p className="font-mono text-xs uppercase tracking-widest text-on-surface-variant">Languages</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {["English", "Qazaqsha", "Русский"].map((lang) => (
                    <span key={lang} className="rounded-full bg-surface-3 px-3 py-1 font-medium text-xs text-on-surface">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Programming Languages Stack with SVGs */}
          <Reveal delay={240} className="mt-4">
            <div className="rounded-2xl bg-surface-2 p-6 border border-outline-variant/40">
              <p className="font-mono text-xs uppercase tracking-widest text-yellow-400 font-semibold">Programming Stack</p>
              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-5">
                {[
                  { name: "Kotlin", Icon: KotlinIcon },
                  { name: "TypeScript", Icon: TypeScriptIcon },
                  { name: "JavaScript", Icon: JavaScriptIcon },
                  { name: "Python", Icon: PythonIcon },
                  { name: "Java", Icon: JavaIcon },
                ].map(({ name, Icon }) => (
                  <div
                    key={name}
                    className="flex items-center gap-3 rounded-xl bg-surface-3 p-3.5 transition-[border-radius,background-color] duration-300 ease-spring hover:rounded-sm hover:bg-surface-4"
                  >
                    <Icon className="size-7 shrink-0" />
                    <span className="font-bold text-sm text-on-surface">{name}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        {/* 03 / projects (Only public repositories) */}
        <section id="projects" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-24">
          <Reveal>
            <p className="font-mono text-sm text-m3-primary">03 / projects</p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">Things I build</h2>
          </Reveal>
          <ul className="mt-10 grid gap-4 md:grid-cols-3">
            {projects.map((p, i) => (
              <li key={p.name} className={p.featured ? "md:col-span-2 md:row-span-2" : ""}>
                <Reveal delay={(i % 3) * 80} className="h-full">
                  <SpotlightCard className="h-full rounded-2xl bg-surface-2 border border-outline-variant/40 transition-[border-radius,background-color] duration-300 ease-spring hover:rounded-sm hover:bg-surface-3">
                    <a
                      href={p.href}
                      {...(p.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="group flex h-full min-h-48 flex-col justify-between gap-8 p-6 sm:p-8"
                    >
                      <div>
                        <div className="flex items-start justify-between gap-4">
                          <h3 className={`font-bold tracking-tight text-on-surface group-hover:text-yellow-400 transition-colors ${p.featured ? "text-4xl sm:text-5xl" : "text-2xl"}`}>
                            {p.name}
                          </h3>
                          <span className="mt-1 text-on-surface-variant transition-transform duration-300 ease-spring group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                            <ArrowUpRight />
                          </span>
                        </div>
                        <p className="mt-4 max-w-xl text-on-surface-variant leading-relaxed">{p.blurb}</p>
                      </div>
                      <ul className="flex flex-wrap gap-2">
                        {p.tags.map((t) => (
                          <li key={t} className="rounded-full bg-surface-4 px-3 py-1 font-mono text-xs text-on-surface-variant">
                            {t}
                          </li>
                        ))}
                      </ul>
                    </a>
                  </SpotlightCard>
                </Reveal>
              </li>
            ))}
          </ul>
        </section>

        {/* 04 / stack */}
        <section id="stack" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-24">
          <Reveal>
            <p className="font-mono text-sm text-m3-primary">04 / stack</p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">Tools of the trade</h2>
            <ul className="mt-10 flex flex-wrap gap-3">
              {stack.map((s, i) => (
                <li
                  key={s}
                  className={`rounded-full px-5 py-3 text-lg font-semibold transition-[border-radius,transform] duration-300 ease-spring hover:rounded-xl active:scale-[0.97] ${i % 3 === 0 ? "bg-primary-container text-on-primary-container" : i % 3 === 1 ? "bg-tertiary-container text-on-tertiary-container" : "bg-surface-3"}`}
                >
                  {s}
                </li>
              ))}
            </ul>
          </Reveal>
        </section>

        {/* 05 / contact */}
        <section id="contact" className="mx-auto max-w-6xl px-4 pb-24 pt-20 sm:px-6">
          <Reveal>
            <div className="rounded-[48px] bg-primary-container p-8 sm:p-14">
              <p className="font-mono text-sm text-on-primary-container/70">05 / contact</p>
              <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-on-primary-container sm:text-6xl">Say hi.</h2>
              <div className="mt-8 flex flex-wrap gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ backgroundColor: s.bg, color: s.fg }}
                    className="inline-flex h-12 items-center gap-2 rounded-full px-6 font-semibold transition-[border-radius,transform] duration-300 ease-spring hover:rounded-xl active:scale-[0.97]"
                  >
                    {s.label} <ArrowUpRight />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </section>
      </main>
    </>
  )
}
