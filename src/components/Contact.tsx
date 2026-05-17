import { profile } from "../data/portfolio"
import SectionHeading from "./SectionHeading"

export default function Contact() {
  return (
    <section id="contact" className="section-dark overflow-x-clip py-16 sm:py-24 md:py-28">
      <div className="mx-auto w-full min-w-0 max-w-6xl px-4 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="Contact"
          title="Let's work together"
          subtitle="Open to full-time roles, freelance projects, and technical collaborations."
          dark
        />

        <div className="grid min-w-0 gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="min-w-0 space-y-8">
            <div className="space-y-5">
              <a
                href={`mailto:${profile.email}`}
                className="group block"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                  Email
                </p>
                <p className="mt-1 break-all text-lg font-semibold text-white transition group-hover:text-neutral-300 sm:text-xl">
                  {profile.email}
                </p>
              </a>
              <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="group block">
                <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                  Phone
                </p>
                <p className="mt-1 text-lg font-semibold text-white transition group-hover:text-neutral-300 sm:text-xl">
                  {profile.phone}
                </p>
              </a>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                  Location
                </p>
                <p className="mt-1 text-lg text-neutral-300">{profile.location}</p>
              </div>
            </div>

            <p className="max-w-md text-sm leading-relaxed text-neutral-500">
              I typically respond within 24 hours. For project inquiries, include your timeline and
              stack preferences.
            </p>
          </div>

          <form
            className="min-w-0 space-y-5 rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6 sm:p-8"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="space-y-2">
              <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                className="w-full rounded-lg border border-neutral-700 bg-neutral-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-neutral-600 focus:border-neutral-500"
                placeholder="Your name"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                className="w-full rounded-lg border border-neutral-700 bg-neutral-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-neutral-600 focus:border-neutral-500"
                placeholder="you@email.com"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                required
                className="w-full resize-y rounded-lg border border-neutral-700 bg-neutral-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-neutral-600 focus:border-neutral-500"
                placeholder="Tell me about your project..."
              />
            </div>
            <button type="submit" className="btn-primary mt-2 w-full sm:w-auto">
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
