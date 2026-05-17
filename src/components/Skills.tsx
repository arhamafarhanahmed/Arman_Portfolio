import type { ReactNode } from "react"
import { coreStack, skills, type SkillGroup } from "../data/portfolio"
import SectionHeading from "./SectionHeading"

const categoryMeta: Record<string, { accent: string; icon: ReactNode }> = {
  "MERN Stack": {
    accent: "skill-card--mern",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h12v12H6zM9 9h6v6H9zM12 3v3M12 18v3M3 12h3M18 12h3" />
      </svg>
    ),
  },
  Languages: {
    accent: "skill-card--lang",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  Databases: {
    accent: "skill-card--db",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2 3.6 3 8 3s8-1 8-3V7M4 7c0 2 3.6 3 8 3s8-1 8-3M4 7c0-2 3.6-3 8-3s8 1 8 3" />
      </svg>
    ),
  },
  "Tools & Workflow": {
    accent: "skill-card--tools",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
}

const totalSkills = skills.reduce((sum, group) => sum + group.items.length, 0)

function SkillCard({
  group,
  index,
  featured = false,
}: {
  group: SkillGroup
  index: number
  featured?: boolean
}) {
  const meta = categoryMeta[group.category]

  const card = (
    <article
      className={`skill-card group ${meta?.accent ?? ""} ${featured ? "skill-card--featured" : ""}`}
    >
      <span className="skill-card-grid" aria-hidden />
      {featured && <span className="skill-watermark" aria-hidden>MERN</span>}

      <div className={`relative ${featured ? "lg:flex lg:items-center lg:justify-between lg:gap-10" : ""}`}>
        <div className={`flex items-start justify-between gap-4 ${featured ? "lg:flex-1" : ""}`}>
          <div className="flex items-start gap-4">
            <span className="skill-card-icon flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/10 text-white shadow-inner transition duration-300 group-hover:scale-105 group-hover:border-white/20 group-hover:bg-white/15">
              {meta?.icon}
            </span>
            <div className="min-w-0 pt-0.5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-white/40">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {featured && (
                  <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-emerald-300">
                    Primary stack
                  </span>
                )}
                <span className="h-1 w-1 rounded-full bg-white/30" aria-hidden />
                <span className="text-[10px] font-medium uppercase tracking-wider text-white/50">
                  {group.items.length} skills
                </span>
              </div>
              <h3 className="mt-2 text-lg font-bold text-white sm:text-xl">{group.category}</h3>
              <p className="mt-1.5 max-w-md text-sm leading-relaxed text-neutral-400 group-hover:text-neutral-300">
                {group.description}
              </p>
            </div>
          </div>

          <span
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/40 transition duration-300 group-hover:-translate-y-1 group-hover:border-white/25 group-hover:bg-white/10 group-hover:text-white"
            aria-hidden
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H9M17 7v8" />
            </svg>
          </span>
        </div>

        <ul
          className={`relative flex flex-wrap gap-2 border-white/10 pt-6 ${featured ? "mt-6 border-t lg:mt-0 lg:max-w-md lg:flex-1 lg:border-t-0 lg:border-l lg:pl-8 lg:pt-0" : "mt-6 border-t"}`}
        >
          {group.items.map((skill, skillIndex) => (
            <li
              key={skill}
              className="skill-pill rounded-lg px-3 py-2 text-sm font-medium text-white"
              style={{ transitionDelay: `${skillIndex * 35}ms` }}
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </article>
  )

  if (featured) {
    return <div className="skill-card-shell skill-card-shell--featured sm:col-span-2">{card}</div>
  }

  return card
}

export default function Skills() {
  const [featured, ...rest] = skills

  return (
    <section
      id="skills"
      className="skills-section relative overflow-x-clip border-y border-neutral-200/80 bg-neutral-50 py-16 sm:py-24 md:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_70%_at_50%_50%,#000_20%,transparent_85%)]"
        aria-hidden
      />

      <div className="relative mx-auto w-full min-w-0 max-w-6xl px-4 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="Capabilities"
          title="Technical expertise"
          subtitle="Production-focused stack for APIs, databases, and polished user interfaces."
        />

        <div className="skills-stats mb-8 grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-200 shadow-sm sm:mb-10">
          <div className="bg-white px-4 py-5 text-center sm:px-6 sm:py-6">
            <p className="text-2xl font-bold text-neutral-900 sm:text-3xl">{totalSkills}+</p>
            <p className="mt-1 text-xs font-medium uppercase tracking-wider text-neutral-500">
              Technologies
            </p>
          </div>
          <div className="bg-white px-4 py-5 text-center sm:px-6 sm:py-6">
            <p className="text-2xl font-bold text-neutral-900 sm:text-3xl">{skills.length}</p>
            <p className="mt-1 text-xs font-medium uppercase tracking-wider text-neutral-500">
              Categories
            </p>
          </div>
          <div className="bg-white px-4 py-5 text-center sm:px-6 sm:py-6">
            <p className="text-2xl font-bold text-neutral-900 sm:text-3xl">MERN</p>
            <p className="mt-1 text-xs font-medium uppercase tracking-wider text-neutral-500">
              Core focus
            </p>
          </div>
        </div>

        <div className="skills-core-strip mb-8 rounded-2xl border border-neutral-800 bg-neutral-800 p-5 shadow-lg sm:mb-10 sm:p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.25em] text-neutral-500 sm:text-xs">
                Daily driver stack
              </p>
              <p className="mt-1 text-sm text-neutral-400">
                Tools I reach for on most production builds
              </p>
            </div>
            <ul className="flex flex-wrap gap-2">
              {coreStack.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 font-mono text-xs font-medium text-white transition hover:border-white/25 hover:bg-white/10 sm:text-sm"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid min-w-0 gap-6 sm:grid-cols-2 lg:gap-7">
          <SkillCard group={featured} index={0} featured />
          {rest.map((group, i) => (
            <SkillCard key={group.category} group={group} index={i + 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
