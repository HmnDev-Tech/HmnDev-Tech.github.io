import { LocalClock, Reveal, SpotlightCard } from "@/components/interactive"
import { projects, socials, stack } from "@/lib/profile"

const RING = "HMNDEV-TECH · ANDROID · KOTLIN · COMPOSE · "

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
        <div className="mx-auto flex h-14 max-w-6xl items-center gap-3 rounded-full border border-outline-variant/60 bg-surface/80 px-3 pl-6 backdrop-blur-md">
          <a href="#top" className="text-lg font-extrabold tracking-tight">
            hamondev<span className="text-m3-primary">.</span>
          </a>
          <nav aria-label="Sections" className="ml-auto hidden items-center gap-1 sm:flex">
            {["about", "projects", "stack", "contact"].map((id) => (
              <a key={id} href={`#${id}`} className="inline-flex h-10 items-center rounded-full px-4 text-sm font-medium capitalize text-on-surface-variant transition-colors hover:bg-surface-2 hover:text-on-surface">
                {id}
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
        <section className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 pb-16 pt-16 sm:px-6 lg:grid-cols-[1.4fr_1fr] lg:pt-24">
          <div className="pointer-events-none absolute -left-32 top-0 -z-10 size-[28rem] rounded-full bg-primary-container/40 blur-3xl" aria-hidden="true" />
          <div>
            <p className="mb-6 inline-flex rounded-full bg-surface-2 px-4 py-2 text-sm text-on-surface-variant">
              HmnDev-Tech · Kazakhstan
            </p>
            <h1 className="text-[clamp(3.5rem,13vw,9rem)] font-extrabold leading-[0.9] tracking-tighter">
              hamon
              <br />
              dev<span className="text-m3-primary">.</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-on-surface-variant">
              I like to code, just code… Android apps, Shizuku tooling and Material 3 Expressive interfaces.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="/shevery/" className="inline-flex h-12 items-center gap-2 rounded-[20px] bg-primary-container px-6 font-medium text-on-primary-container transition-[border-radius,transform] duration-300 ease-spring hover:rounded-xl active:scale-[0.97]">
                Open Shevery <ArrowUpRight />
              </a>
              {socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" style={{ backgroundColor: s.bg, color: s.fg }} className="inline-flex h-12 items-center gap-2 rounded-full px-5 text-sm font-semibold transition-[border-radius,transform] duration-300 ease-spring hover:rounded-xl active:scale-[0.97]">
                  {s.label} <ArrowUpRight />
                </a>
              ))}
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
            <div className="blob floaty absolute inset-[16%] grid animate-[blob-morph_9s_ease-in-out_infinite] place-items-center bg-gradient-to-br from-primary-container to-tertiary-container">
              <span className="text-6xl font-extrabold tracking-tighter text-on-primary-container">HD</span>
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

        {/* About */}
        <section id="about" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
          <Reveal>
            <p className="font-mono text-sm text-m3-primary">01 / about</p>
            <h2 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
              Code first. Polish second. Coffee optional.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {[
              ["Focus", "Android, Shizuku-based tooling, Jetpack Compose UIs"],
              ["Design", "Material 3 Expressive: springy shapes, bold type, real motion"],
              ["Based in", "Kazakhstan (UTC+5)"],
            ].map(([k, v], i) => (
              <Reveal key={k} delay={i * 90}>
                <div className="h-full rounded-xl bg-surface-2 p-6">
                  <p className="font-mono text-xs uppercase tracking-widest text-on-surface-variant">{k}</p>
                  <p className="mt-3 text-lg font-medium">{v}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
          <Reveal>
            <p className="font-mono text-sm text-m3-primary">02 / projects</p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">Things I build</h2>
          </Reveal>
          <ul className="mt-10 grid gap-3 md:grid-cols-3">
            {projects.map((p, i) => (
              <li key={p.name} className={p.featured ? "md:col-span-2 md:row-span-2" : ""}>
                <Reveal delay={(i % 3) * 80} className="h-full">
                  <SpotlightCard className="h-full rounded-xl bg-surface-2 transition-[border-radius,background-color] duration-300 ease-spring hover:rounded-sm hover:bg-surface-3">
                    <a href={p.href} {...(p.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="group flex h-full min-h-48 flex-col justify-between gap-8 p-6 sm:p-8">
                      <div>
                        <div className="flex items-start justify-between gap-4">
                          <h3 className={`font-bold tracking-tight ${p.featured ? "text-4xl sm:text-5xl" : "text-2xl"}`}>{p.name}</h3>
                          <span className="mt-1 text-on-surface-variant transition-transform duration-300 ease-spring group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                            <ArrowUpRight />
                          </span>
                        </div>
                        <p className="mt-4 max-w-xl text-on-surface-variant">{p.blurb}</p>
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

        {/* Stack */}
        <section id="stack" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
          <Reveal>
            <p className="font-mono text-sm text-m3-primary">03 / stack</p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">Tools of the trade</h2>
            <ul className="mt-10 flex flex-wrap gap-3">
              {stack.map((s, i) => (
                <li key={s} className={`rounded-full px-5 py-3 text-lg font-semibold ${i % 3 === 0 ? "bg-primary-container text-on-primary-container" : i % 3 === 1 ? "bg-tertiary-container text-on-tertiary-container" : "bg-surface-3"}`}>
                  {s}
                </li>
              ))}
            </ul>
          </Reveal>
        </section>

        {/* Contact */}
        <section id="contact" className="mx-auto max-w-6xl px-4 pb-24 pt-20 sm:px-6">
          <Reveal>
            <div className="rounded-[48px] bg-primary-container p-8 sm:p-14">
              <p className="font-mono text-sm text-on-primary-container/70">04 / contact</p>
              <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-on-primary-container sm:text-6xl">Say hi.</h2>
              <div className="mt-8 flex flex-wrap gap-3">
                {socials.map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" style={{ backgroundColor: s.bg, color: s.fg }} className="inline-flex h-12 items-center gap-2 rounded-full px-6 font-semibold transition-[border-radius,transform] duration-300 ease-spring hover:rounded-xl active:scale-[0.97]">
                    {s.label} <ArrowUpRight />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="border-t border-outline-variant/50 py-8 text-center text-sm text-on-surface-variant">
        © {new Date().getFullYear()} hamondev · HmnDev-Tech
      </footer>
    </>
  )
}
