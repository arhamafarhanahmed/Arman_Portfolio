import { projects } from "../data/portfolio"
import SectionHeading from "./SectionHeading"

export default function Portfolio() {
  return (
    <section id="portfolio" className="overflow-x-clip bg-white py-16 sm:py-20 md:py-28">
      <div className="mx-auto w-full min-w-0 max-w-6xl px-4 sm:px-8 lg:px-12">
        <SectionHeading title="Portfolio" />

        <div className="grid min-w-0 gap-4 sm:gap-6 md:grid-cols-2 md:gap-8">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group min-w-0 rounded-2xl border-2 border-neutral-200 bg-neutral-50 p-6 transition hover:border-black hover:shadow-lg sm:p-8 md:p-10"
            >
              <span className="text-5xl font-bold text-neutral-200 transition group-hover:text-neutral-300 sm:text-6xl">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 break-words text-xl font-bold text-black sm:mt-4 sm:text-2xl md:text-3xl">{project.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-neutral-600 sm:mt-4 sm:text-lg md:text-xl">
                {project.description}
              </p>
              <ul className="mt-6 flex flex-wrap gap-3">
                {project.tech.map((t) => (
                  <li
                    key={t}
                    className="rounded-full bg-white px-4 py-1.5 text-sm font-semibold uppercase tracking-wide text-neutral-600 ring-1 ring-neutral-200 sm:text-base"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
