import { highlights, profile } from "../data/portfolio"
import SectionHeading from "./SectionHeading"

export default function About() {
  return (
    <section id="about" className="section-light overflow-x-clip bg-white py-16 sm:py-24 md:py-28">
      <div className="mx-auto w-full min-w-0 max-w-6xl px-4 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="Profile"
          title="About me"
          subtitle="Building reliable full-stack products with clean architecture and attention to detail."
        />

        <div className="grid min-w-0 gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div className="min-w-0 space-y-8">
            <p className="whitespace-pre-line text-base leading-relaxed text-neutral-600 sm:text-lg">
              {profile.about}
            </p>

            <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-200 sm:grid-cols-4">
              {highlights.map((item) => (
                <div key={item.label} className="bg-white px-4 py-5 sm:px-5 sm:py-6">
                  <dt className="text-xs font-medium uppercase tracking-wider text-neutral-400">
                    {item.label}
                  </dt>
                  <dd className="mt-1 text-xl font-bold text-neutral-900 sm:text-2xl">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2 text-sm font-medium text-neutral-700">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden />
                Available for hire
              </span>
              <span className="rounded-full border border-neutral-200 px-4 py-2 text-sm font-medium text-neutral-600">
                {profile.location}
              </span>
            </div>
          </div>

          <aside className="h-fit rounded-2xl border border-neutral-200 bg-neutral-50 p-6 sm:p-8">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-neutral-400">
              Get in touch
            </p>
            <ul className="mt-6 space-y-6">
              <li>
                <p className="text-xs font-semibold uppercase tracking-wide text-neutral-400">
                  Email
                </p>
                <a
                  href={`mailto:${profile.email}`}
                  className="mt-1.5 block break-all text-base font-semibold text-neutral-900 transition hover:text-neutral-600"
                >
                  {profile.email}
                </a>
              </li>
              <li>
                <p className="text-xs font-semibold uppercase tracking-wide text-neutral-400">
                  Phone
                </p>
                <a
                  href={`tel:${profile.phone.replace(/\s/g, "")}`}
                  className="mt-1.5 block text-base font-semibold text-neutral-900 transition hover:text-neutral-600"
                >
                  {profile.phone}
                </a>
              </li>
            </ul>
            <a
              href="#contact"
              className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-neutral-900 px-5 py-3.5 text-sm font-bold text-white transition hover:bg-neutral-800"
            >
              Send a message
            </a>
          </aside>
        </div>
      </div>
    </section>
  )
}
