import { useState } from "react"
import { projects } from "../data/portfolio"
import SectionHeading from "./SectionHeading"

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number]
  index: number
}) {
  const [activeImage, setActiveImage] = useState(0)

  return (
    <article className="group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition duration-300 hover:border-neutral-300 hover:shadow-lg">
      <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
        <img
          src={project.images[activeImage]}
          alt={`${project.title} screenshot ${activeImage + 1}`}
          className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.02]"
          loading={index < 2 ? "eager" : "lazy"}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-neutral-900 opacity-0 shadow-lg transition group-hover:opacity-100 hover:bg-neutral-100"
          >
            Live demo
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        )}
      </div>

      {project.images.length > 1 && (
        <div className="flex gap-2 border-b border-neutral-100 bg-neutral-50/80 px-3 py-3">
          {project.images.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setActiveImage(i)}
              className={`relative h-14 w-20 shrink-0 overflow-hidden rounded-lg ring-2 transition sm:h-16 sm:w-24 ${
                activeImage === i ? "ring-neutral-900" : "ring-transparent opacity-60 hover:opacity-100"
              }`}
              aria-label={`View screenshot ${i + 1}`}
            >
              <img src={src} alt="" className="h-full w-full object-cover object-top" />
            </button>
          ))}
        </div>
      )}

      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <span className="font-mono text-sm font-medium text-neutral-300">
            {String(index + 1).padStart(2, "0")}
          </span>
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 text-xs font-bold uppercase tracking-wider text-neutral-900 transition hover:text-neutral-500"
            >
              Visit →
            </a>
          )}
        </div>

        <h3 className="mt-3 text-xl font-bold text-neutral-900 sm:text-2xl">{project.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-600 sm:text-base">
          {project.description}
        </p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <li
              key={t}
              className="rounded-md border border-neutral-200 bg-neutral-50 px-2.5 py-1 font-mono text-[11px] font-medium text-neutral-600 sm:text-xs"
            >
              {t}
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="section-muted overflow-x-clip py-16 sm:py-24 md:py-28">
      <div className="mx-auto w-full min-w-0 max-w-6xl px-4 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="Work"
          title="Selected projects"
          subtitle="Client-ready front-end builds across software, Web3, e-commerce, and lifestyle brands."
        />

        <div className="grid min-w-0 gap-8 lg:grid-cols-2 lg:gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
