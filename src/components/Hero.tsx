import { profile } from "../data/portfolio"

const techStack = ["MongoDB", "Express", "React", "Node.js", "MySQL", "Python"]

function SocialLink({
  href,
  label,
  children,
}: {
  href: string
  label: string
  children: import("react").ReactNode
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      aria-label={label}
      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-700 shadow-sm transition hover:border-neutral-900 hover:text-black hover:shadow-md sm:h-14 sm:w-14"
    >
      {children}
    </a>
  )
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-x-clip bg-gradient-to-br from-neutral-50 via-white to-neutral-100"
    >
      <div
        className="pointer-events-none absolute -right-16 top-16 h-56 w-56 rounded-full bg-neutral-200/40 blur-3xl sm:-right-32 sm:top-20 sm:h-80 sm:w-80 lg:h-[420px] lg:w-[420px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-12 bottom-0 h-48 w-48 rounded-full bg-neutral-300/30 blur-3xl sm:-left-20 sm:h-80 sm:w-80"
        aria-hidden
      />

      <div className="relative mx-auto flex w-full min-w-0 max-w-7xl flex-col justify-center px-4 pb-16 pt-24 sm:min-h-[calc(100dvh-5rem)] sm:px-8 sm:pt-28 lg:min-h-[calc(100dvh-6rem)] lg:px-12 lg:pb-20 lg:pt-32">
        <div className="grid min-w-0 items-center gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          <div className="min-w-0">
            <span className="inline-flex max-w-full flex-wrap items-center gap-x-2 gap-y-1 rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-xs font-semibold text-neutral-700 shadow-sm sm:gap-2 sm:px-4 sm:py-2 sm:text-sm md:text-base">
              <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
              <span className="break-words">Open to opportunities · {profile.location}</span>
            </span>

            <p className="mt-6 text-lg font-medium text-neutral-600 sm:mt-8 sm:text-xl md:text-2xl">
              Hi, I&apos;m
            </p>

            <h1 className="mt-2 break-words bg-gradient-to-r from-neutral-900 to-neutral-600 bg-clip-text text-4xl font-extrabold leading-[1.1] tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
              {profile.fullName}
            </h1>

            <p className="mt-3 text-xl font-bold text-neutral-900 sm:mt-4 sm:text-2xl md:text-3xl lg:text-4xl">
              {profile.title}
            </p>

            <p className="mt-3 max-w-xl text-base leading-relaxed text-neutral-600 sm:text-lg md:text-xl">
              {profile.subtitle}. Skilled in Python, Java, C, C#, and building scalable full-stack
              applications.
            </p>

            <ul className="mt-6 flex flex-wrap gap-2 sm:mt-8 sm:gap-3">
              {techStack.map((tech) => (
                <li
                  key={tech}
                  className="rounded-lg bg-neutral-900 px-3 py-1.5 text-xs font-medium text-white sm:px-4 sm:py-2.5 sm:text-sm md:text-base"
                >
                  {tech}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex w-full flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
              <a
                href="#contact"
                className="inline-flex w-full items-center justify-center rounded-xl bg-neutral-900 px-6 py-3.5 text-base font-bold text-white shadow-lg transition hover:bg-neutral-800 hover:shadow-xl sm:w-auto sm:px-8 sm:py-4 sm:text-lg"
              >
                Get in touch
              </a>
              <a
                href="#portfolio"
                className="inline-flex w-full items-center justify-center rounded-xl border-2 border-neutral-900 bg-transparent px-6 py-3.5 text-base font-bold text-neutral-900 transition hover:bg-neutral-900 hover:text-white sm:w-auto sm:px-8 sm:py-4 sm:text-lg"
              >
                View projects
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3 sm:mt-10 sm:gap-4">
              <SocialLink href={`mailto:${profile.email}`} label="Email">
                <svg
                  className="h-5 w-5 sm:h-6 sm:w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </SocialLink>
              <SocialLink href={profile.github} label="GitHub">
                <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.395-.135-.345-.72-1.395-1.23-1.68-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A8.996 8.996 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </SocialLink>
              <SocialLink href={profile.linkedin} label="LinkedIn">
                <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.127 0 2.061 2.061 0 01-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </SocialLink>
            </div>
          </div>

          <div className="flex min-w-0 justify-center pb-12 lg:justify-end lg:pb-0">
            <div className="relative w-full max-w-[min(100%,20rem)] pr-4 pb-6 sm:max-w-md sm:pr-5 sm:pb-8 md:max-w-lg">
              <div
                className="absolute inset-0 translate-x-2 translate-y-2 rounded-3xl bg-neutral-900 sm:translate-x-3 sm:translate-y-3"
                aria-hidden
              />
              <div className="relative overflow-hidden rounded-3xl border-4 border-white bg-neutral-200 shadow-2xl">
                <img
                  src="/profile.png"
                  alt={profile.fullName}
                  className="aspect-[4/5] w-full object-cover object-top"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop&crop=face"
                  }}
                />
              </div>
              <div className="absolute -bottom-4 left-3 right-3 rounded-2xl border border-neutral-200 bg-white/95 px-4 py-3 text-center shadow-lg backdrop-blur sm:left-6 sm:right-6 sm:px-5 sm:py-4">
                <p className="text-xs font-medium text-neutral-500 sm:text-sm">Specializing in</p>
                <p className="mt-0.5 text-base font-bold text-neutral-900 sm:text-lg md:text-xl">
                  MERN · MySQL · REST APIs
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
