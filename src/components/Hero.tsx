import { profile } from "../data/portfolio"

const techStack = ["MongoDB", "Express", "React", "Node.js", "MySQL", "TypeScript"]

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-x-clip border-b border-neutral-200/80 bg-[#fafafa]"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_50%,transparent_100%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-neutral-300/25 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto flex w-full min-w-0 max-w-7xl flex-col justify-center px-4 pb-20 pt-24 sm:min-h-[calc(100dvh-5rem)] sm:px-8 sm:pt-28 lg:min-h-[calc(100dvh-6rem)] lg:px-12 lg:pb-24 lg:pt-32">
        <div className="grid min-w-0 items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          <div className="min-w-0">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.25em] text-neutral-500">
              Portfolio · {new Date().getFullYear()}
            </p>

            <p className="mt-6 text-lg font-medium text-neutral-600 sm:text-xl">
              Hi, I&apos;m{" "}
              <span className="text-neutral-900">{profile.fullName}</span>
            </p>

            <h1 className="mt-3 max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-tight text-neutral-900 sm:text-5xl md:text-6xl lg:text-7xl">
              {profile.title}
              <span className="mt-2 block text-2xl font-semibold text-neutral-500 sm:text-3xl md:text-4xl">
                {profile.subtitle}
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-neutral-600 sm:text-lg">
              I design and build scalable web applications — from REST APIs and databases to
              responsive, production-ready interfaces.
            </p>

            <ul className="mt-8 flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <li
                  key={tech}
                  className="rounded-md border border-neutral-200 bg-white px-3 py-1.5 font-mono text-xs font-medium text-neutral-700 shadow-sm sm:text-sm"
                >
                  {tech}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href="#portfolio" className="btn-primary w-full sm:w-auto">
                View selected work
              </a>
              <a href="#contact" className="btn-secondary w-full sm:w-auto">
                Contact me
              </a>
            </div>
          </div>

          <div className="flex min-w-0 justify-center lg:justify-end">
            <div className="relative w-full max-w-sm">
              <div
                className="absolute -inset-1 rounded-[1.75rem] bg-gradient-to-br from-neutral-900 via-neutral-700 to-neutral-400 opacity-90"
                aria-hidden
              />
              <div className="relative overflow-hidden rounded-[1.65rem] border border-white/20 bg-neutral-200 shadow-2xl">
                <img
                  src="/Arman.jpeg"
                  alt={profile.fullName}
                  className="aspect-[4/5] w-full object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-5 left-4 right-4 rounded-xl border border-neutral-200/80 bg-white/95 px-5 py-4 shadow-xl backdrop-blur-md sm:left-6 sm:right-6">
                <p className="text-xs font-medium uppercase tracking-wider text-neutral-500">
                  Focus areas
                </p>
                <p className="mt-1 text-sm font-bold text-neutral-900 sm:text-base">
                  MERN Stack · MySQL · REST APIs · UI Engineering
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
