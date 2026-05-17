import { profile } from "../data/portfolio"

const techStack = ["MongoDB", "Express", "React", "Node.js", "MySQL", "Python"]

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
          </div>

          <div className="flex min-w-0 justify-center pb-12 lg:justify-end lg:pb-0">
            <div className="relative w-full max-w-[min(100%,20rem)] pr-4 pb-6 sm:max-w-md sm:pr-5 sm:pb-8 md:max-w-lg">
              <div
                className="absolute inset-0 translate-x-2 translate-y-2 rounded-3xl bg-neutral-900 sm:translate-x-3 sm:translate-y-3"
                aria-hidden
              />
              <div className="relative overflow-hidden rounded-3xl border-4 border-white bg-neutral-200 shadow-2xl">
                <img
                  src="/Arman.jpeg"
                  alt={profile.fullName}
                  className="aspect-[4/5] w-full object-cover object-top"
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
