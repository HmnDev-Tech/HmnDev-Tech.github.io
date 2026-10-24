import Image from "next/image"
import { LocalClock, Reveal, SpotlightCard } from "@/components/interactive"
import { forks, projects, socials, stack } from "@/lib/profile"
import { getGitHubData, relativeDate } from "@/lib/github"

function ArrowUpRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </svg>
  )
}

function StarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  )
}

function GitForkIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="18" r="3" />
      <circle cx="6" cy="6" r="3" />
      <circle cx="18" cy="6" r="3" />
      <path d="M18 9v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9" />
      <path d="M12 12v3" />
    </svg>
  )
}

export default async function Home() {
  const gh = await getGitHubData()
  const repoMap = new Map(gh.repos.map((r) => [r.name, r]))
  const totalStars = gh.repos.reduce((acc, r) => acc + (r.stars || 0), 0)

  return (
    <>
      <header className="sticky top-0 z-50 px-4 pt-4">
        <div className="mx-auto flex h-14 max-w-6xl items-center gap-3 rounded-full border border-outline-variant/60 bg-surface/80 px-4 backdrop-blur-md">
          <a href="#top" className="text-lg font-extrabold tracking-tight text-yellow-400">
            hamondev
          </a>
          <nav aria-label="Sections" className="ml-auto hidden items-center gap-1 sm:flex">
            {["about", "projects", "forks", "stack", "contact"].map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className="inline-flex h-9 items-center rounded-full px-3 text-sm font-medium capitalize text-on-surface-variant transition-colors hover:bg-surface-2 hover:text-on-surface"
              >
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
        <section className="relative mx-auto max-w-6xl px-4 pb-16 pt-12 sm:px-6 lg:pt-20">
          <div className="pointer-events-none absolute -left-32 top-0 -z-10 size-[32rem] rounded-full bg-yellow-500/10 blur-3xl" aria-hidden="true" />
          <div className="grid items-center gap-10 lg:grid-cols-[1.3fr_0.9fr]">
            <div>
              <div className="mb-6 flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-2 rounded-full border border-outline-variant/40 bg-surface-2 px-3.5 py-1.5 text-xs font-medium text-on-surface">
                  <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                  Building Android system tools
                </span>
                <span className="rounded-full bg-surface-2 px-3 py-1 text-xs text-on-surface-variant">
                  Kazakhstan
                </span>
              </div>

              <h1 className="text-[clamp(3.5rem,11vw,7.5rem)] font-black leading-[0.92] tracking-tighter text-yellow-400">
                hamondev
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-on-surface-variant">
                I like to code, just code… Android engineer focusing on system-level privilege frameworks,
                Shizuku/Binder IPC architecture, and modern Jetpack Compose UIs with Material 3 Expressive.
              </p>

              {/* Quick metrics bar */}
              <div className="mt-8 grid grid-cols-3 max-w-md gap-3 rounded-2xl border border-outline-variant/40 bg-surface-1 p-3">
                <div className="rounded-xl bg-surface-2 p-2.5 text-center">
                  <div className="text-xl font-bold text-yellow-400">{totalStars.toLocaleString()}</div>
                  <div className="text-[11px] font-medium text-on-surface-variant uppercase tracking-wider">GitHub Stars</div>
                </div>
                <div className="rounded-xl bg-surface-2 p-2.5 text-center">
                  <div className="text-xl font-bold text-on-surface">{gh.followers}</div>
                  <div className="text-[11px] font-medium text-on-surface-variant uppercase tracking-wider">Followers</div>
                </div>
                <div className="rounded-xl bg-surface-2 p-2.5 text-center">
                  <div className="text-xl font-bold text-on-surface">{gh.publicRepos}</div>
                  <div className="text-[11px] font-medium text-on-surface-variant uppercase tracking-wider">Public Repos</div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="/shevery/"
                  className="inline-flex h-12 items-center gap-2 rounded-2xl bg-yellow-400 px-6 font-bold text-neutral-950 transition-all duration-200 hover:bg-yellow-300 hover:shadow-lg hover:shadow-yellow-400/20 active:scale-[0.98]"
                >
                  Explore Shevery <ArrowUpRight />
                </a>
                <a
                  href="https://github.com/HmnDev-Tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center gap-2 rounded-2xl border border-outline-variant/60 bg-surface-2 px-5 text-sm font-semibold text-on-surface transition-all duration-200 hover:bg-surface-3 active:scale-[0.98]"
                >
                  GitHub <ArrowUpRight />
                </a>
                <a
                  href="https://t.me/hmndevtech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center gap-2 rounded-2xl bg-[#1a76ab] px-5 text-sm font-semibold text-white transition-all duration-200 hover:brightness-110 active:scale-[0.98]"
                >
                  Telegram <ArrowUpRight />
                </a>
                <a
                  href="https://www.reddit.com/u/HamonTech_official"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center gap-2 rounded-2xl bg-[#c43a00] px-5 text-sm font-semibold text-white transition-all duration-200 hover:brightness-110 active:scale-[0.98]"
                >
                  Reddit <ArrowUpRight />
                </a>
              </div>
            </div>

            {/* Avatar container */}
            <div className="relative mx-auto flex flex-col items-center justify-center">
              <div className="relative size-64 sm:size-72 lg:size-80 rounded-3xl p-2 border border-outline-variant/50 bg-gradient-to-b from-surface-3 to-surface-1 shadow-2xl">
                <div className="relative size-full overflow-hidden rounded-[20px] bg-surface-2">
                  <Image
                    src={gh.avatar}
                    alt="hamondev profile avatar"
                    width={320}
                    height={320}
                    priority
                    className="size-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 rounded-full border border-outline-variant/60 bg-surface-3 px-3 py-1 font-mono text-xs font-semibold text-yellow-400 shadow-md">
                  @HmnDev-Tech
                </div>
              </div>

              {gh.latestCommit && (
                <div className="mt-6 w-full max-w-sm rounded-xl border border-outline-variant/40 bg-surface-2/80 p-3 text-xs backdrop-blur-sm">
                  <div className="flex items-center justify-between text-on-surface-variant">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-m3-primary">Latest Commit · Shevery</span>
                    <span>{relativeDate(gh.latestCommit.date)}</span>
                  </div>
                  <p className="mt-1 font-mono text-on-surface truncate">{gh.latestCommit.message}</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Technical Highlights / Engineering Focus */}
        <section id="about" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <Reveal>
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-yellow-400">
              <span>01</span>
              <span className="h-px w-8 bg-yellow-400/50" />
              <span>Engineering profile &amp; architecture</span>
            </div>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl text-on-surface">
              Core Technical Focus
            </h2>
          </Reveal>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Android 17 & SDK 37",
                desc: "Targeting modern AOSP platforms, handling strict background restrictions, edge-to-edge cutouts, and privacy changes.",
                tag: "Platform",
              },
              {
                title: "Shizuku & Binder IPC",
                desc: "Inter-process communication with system_server via root/ADB tokens and privileged service interfaces.",
                tag: "System",
              },
              {
                title: "Device Owner & DPM",
                desc: "Enterprise management APIs, lock-task mode, and Dhizuku v1/v2 IPC bridges for non-root control.",
                tag: "Privilege",
              },
              {
                title: "Material 3 Expressive",
                desc: "Rich animations, spring physics, dynamic shapes, and adaptive layouts built in Jetpack Compose.",
                tag: "UI / Motion",
              },
            ].map((card, i) => (
              <Reveal key={card.title} delay={i * 70}>
                <div className="flex h-full flex-col justify-between rounded-2xl border border-outline-variant/40 bg-surface-1 p-5 transition-colors hover:border-yellow-400/40 hover:bg-surface-2">
                  <div>
                    <span className="rounded-md bg-surface-3 px-2 py-0.5 font-mono text-[10px] text-yellow-400 font-semibold">
                      {card.tag}
                    </span>
                    <h3 className="mt-3 text-lg font-bold text-on-surface">{card.title}</h3>
                    <p className="mt-2 text-sm text-on-surface-variant leading-relaxed">{card.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <Reveal>
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-yellow-400">
              <span>02</span>
              <span className="h-px w-8 bg-yellow-400/50" />
              <span>Flagship software</span>
            </div>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl text-on-surface">
              Featured Projects
            </h2>
          </Reveal>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {projects.map((p, i) => {
              const live = repoMap.get(p.repo)
              return (
                <Reveal key={p.name} delay={i * 80} className={p.featured ? "lg:col-span-2" : ""}>
                  <SpotlightCard className="h-full rounded-2xl border border-outline-variant/50 bg-surface-1 transition-all duration-300 hover:border-yellow-400/50 hover:bg-surface-2">
                    <a
                      href={p.href}
                      {...(p.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="group flex h-full flex-col justify-between p-6 sm:p-8"
                    >
                      <div>
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <div className="flex items-center gap-2">
                              <h3 className={`font-bold tracking-tight text-on-surface group-hover:text-yellow-400 transition-colors ${p.featured ? "text-3xl sm:text-4xl" : "text-2xl"}`}>
                                {p.name}
                              </h3>
                              {p.featured && (
                                <span className="rounded-full bg-yellow-400/10 border border-yellow-400/30 px-2.5 py-0.5 text-xs font-semibold text-yellow-400">
                                  Primary
                                </span>
                              )}
                            </div>
                            {live && (
                              <div className="mt-2 flex items-center gap-3 text-xs text-on-surface-variant font-mono">
                                <span className="flex items-center gap-1 text-yellow-400">
                                  <StarIcon /> {live.stars.toLocaleString()}
                                </span>
                                <span className="flex items-center gap-1">
                                  <GitForkIcon /> {live.forks}
                                </span>
                                {live.language && <span>• {live.language}</span>}
                              </div>
                            )}
                          </div>
                          <span className="rounded-full bg-surface-3 p-2 text-on-surface-variant transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-yellow-400">
                            <ArrowUpRight />
                          </span>
                        </div>

                        <p className="mt-4 text-sm sm:text-base leading-relaxed text-on-surface-variant">
                          {p.blurb}
                        </p>
                      </div>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {p.tags.map((t) => (
                          <span key={t} className="rounded-lg bg-surface-3 px-2.5 py-1 font-mono text-xs text-on-surface-variant">
                            {t}
                          </span>
                        ))}
                      </div>
                    </a>
                  </SpotlightCard>
                </Reveal>
              )
            })}
          </div>
        </section>

        {/* Forks & Contributions */}
        <section id="forks" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <Reveal>
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-yellow-400">
              <span>03</span>
              <span className="h-px w-8 bg-yellow-400/50" />
              <span>Ecosystem &amp; forks</span>
            </div>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl text-on-surface">
              Contributions &amp; Custom Builds
            </h2>
          </Reveal>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {forks.map((f, i) => {
              const live = repoMap.get(f.repo)
              return (
                <Reveal key={f.repo} delay={i * 70}>
                  <div className="flex h-full flex-col justify-between rounded-2xl border border-outline-variant/40 bg-surface-1 p-5 transition-colors hover:bg-surface-2">
                    <div>
                      <div className="flex items-center justify-between">
                        <h3 className="font-bold text-on-surface">{f.name}</h3>
                        <a
                          href={`https://github.com/HmnDev-Tech/${f.repo}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-on-surface-variant hover:text-yellow-400 transition-colors"
                        >
                          <ArrowUpRight />
                        </a>
                      </div>
                      <p className="mt-2 text-sm text-on-surface-variant">{f.note}</p>
                    </div>
                    {live?.parent && (
                      <div className="mt-4 pt-3 border-t border-outline-variant/30 text-xs text-on-surface-variant font-mono truncate">
                        Forked from <span className="text-yellow-400/90">{live.parent}</span>
                      </div>
                    )}
                  </div>
                </Reveal>
              )
            })}
          </div>
        </section>

        {/* Stack */}
        <section id="stack" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <Reveal>
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-yellow-400">
              <span>04</span>
              <span className="h-px w-8 bg-yellow-400/50" />
              <span>Technologies</span>
            </div>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl text-on-surface">
              Technology Stack
            </h2>
          </Reveal>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {stack.map((group, i) => (
              <Reveal key={group.group} delay={i * 80}>
                <div className="h-full rounded-2xl border border-outline-variant/40 bg-surface-1 p-6">
                  <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-yellow-400">
                    {group.group}
                  </h3>
                  <ul className="mt-4 space-y-2">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm font-medium text-on-surface">
                        <span className="size-1.5 rounded-full bg-yellow-400/70" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mx-auto max-w-6xl px-4 pb-24 pt-16 sm:px-6">
          <Reveal>
            <div className="rounded-3xl border border-outline-variant/60 bg-gradient-to-br from-surface-2 to-surface-1 p-8 sm:p-12">
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-yellow-400">
                <span>05</span>
                <span className="h-px w-8 bg-yellow-400/50" />
                <span>Get in touch</span>
              </div>
              <h2 className="mt-3 text-3xl sm:text-5xl font-black tracking-tight text-on-surface">
                Let&apos;s build together
              </h2>
              <p className="mt-4 max-w-xl text-on-surface-variant text-base sm:text-lg">
                Have ideas, issues, or want to collaborate on Android and Shizuku tooling? Reach out directly via Telegram or Reddit.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-xl border border-outline-variant/40 bg-surface-2 p-4 transition-all hover:border-yellow-400/50 hover:bg-surface-3"
                  >
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wider text-on-surface-variant">
                        {s.label}
                      </div>
                      <div className="mt-1 font-mono text-sm font-bold text-on-surface">
                        {s.handle}
                      </div>
                    </div>
                    <span className="text-on-surface-variant">
                      <ArrowUpRight />
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="border-t border-outline-variant/40 py-8 text-center text-xs text-on-surface-variant font-mono">
        © {new Date().getFullYear()} hamondev · HmnDev-Tech · All rights reserved
      </footer>
    </>
  )
}
