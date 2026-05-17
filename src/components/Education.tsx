import { education } from "../data/portfolio"
import SectionHeading from "./SectionHeading"

const typeStyles: Record<
  (typeof education)[number]["type"],
  { badge: string; accent: string }
> = {
  Professional: {
    badge: "bg-neutral-900 text-white",
    accent: "from-neutral-900/5 to-transparent",
  },
  Degree: {
    badge: "bg-white text-neutral-900 ring-1 ring-neutral-200",
    accent: "from-neutral-100 to-transparent",
  },
  Certificate: {
    badge: "bg-neutral-100 text-neutral-700",
    accent: "from-neutral-50 to-transparent",
  },
}

export default function Education() {
  return (
    <section id="education" className="section-muted overflow-x-clip py-16 sm:py-24 md:py-28">
      <div className="mx-auto w-full min-w-0 max-w-6xl px-4 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="Background"
          title="Education"
          subtitle="Formal studies and hands-on training across business administration and information technology."
        />

        <div className="grid min-w-0 gap-4 sm:gap-5">
          {education.map((item, index) => {
            const styles = typeStyles[item.type]
            return (
              <article
                key={`${item.institution}-${item.period}`}
                className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition duration-300 hover:border-neutral-300 hover:shadow-md sm:p-8"
              >
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-r ${styles.accent}`}
                  aria-hidden
                />
                <div className="relative flex min-w-0 flex-col gap-5 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
                  <div className="flex min-w-0 gap-4 sm:gap-6">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-neutral-900 font-mono text-sm font-bold text-white sm:h-12 sm:w-12">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="min-w-0">
                      <span
                        className={`inline-flex rounded-md px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest sm:text-xs ${styles.badge}`}
                      >
                        {item.type}
                      </span>
                      <h3 className="mt-3 text-lg font-bold text-neutral-900 sm:text-xl">
                        {item.degree}
                      </h3>
                      <p className="mt-1 text-base font-medium text-neutral-600">
                        {item.institution}
                      </p>
                    </div>
                  </div>
                  <time
                    dateTime={item.period.replace(/\s/g, "")}
                    className="shrink-0 self-start rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-2 font-mono text-sm font-semibold tabular-nums text-neutral-700 sm:self-center"
                  >
                    {item.period}
                  </time>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
