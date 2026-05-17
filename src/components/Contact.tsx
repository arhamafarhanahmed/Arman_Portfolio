import { profile } from "../data/portfolio"
import SectionHeading from "./SectionHeading"

export default function Contact() {
  return (
    <section id="contact" className="overflow-x-clip bg-black py-16 text-white sm:py-20 md:py-28">
      <div className="mx-auto w-full min-w-0 max-w-6xl px-4 sm:px-8 lg:px-12">
        <SectionHeading title="Contact me" dark />

        <div className="grid min-w-0 gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="min-w-0">
            <p className="text-base leading-relaxed text-neutral-400 sm:text-lg md:text-xl lg:text-2xl">
              I am open to professional opportunities, collaborations, and inquiries. Feel free to
              reach out — I will respond promptly.
            </p>
            <div className="mt-10 space-y-4">
              <a
                href={`mailto:${profile.email}`}
                className="block break-all text-lg font-semibold transition hover:text-neutral-300 sm:text-xl md:text-2xl lg:text-3xl"
              >
                {profile.email}
              </a>
              <a
                href={`tel:${profile.phone.replace(/\s/g, "")}`}
                className="block text-base text-neutral-400 transition hover:text-white sm:text-lg md:text-xl lg:text-2xl"
              >
                {profile.phone}
              </a>
              <p className="text-base text-neutral-400 sm:text-lg md:text-xl lg:text-2xl">{profile.location}</p>
            </div>
          </div>

          <form
            className="min-w-0 space-y-5 sm:space-y-6"
            onSubmit={(e) => {
              e.preventDefault()
            }}
          >
            <div>
              <label htmlFor="name" className="mb-2 block text-base font-medium text-neutral-400 sm:text-lg">
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                className="box-border w-full min-w-0 max-w-full rounded-xl border-2 border-neutral-700 bg-neutral-900 px-4 py-3.5 text-base text-white outline-none transition placeholder:text-neutral-600 focus:border-white sm:px-5 sm:py-4 sm:text-lg"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-base font-medium text-neutral-400 sm:text-lg">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                className="box-border w-full min-w-0 max-w-full rounded-xl border-2 border-neutral-700 bg-neutral-900 px-4 py-3.5 text-base text-white outline-none transition placeholder:text-neutral-600 focus:border-white sm:px-5 sm:py-4 sm:text-lg"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block text-base font-medium text-neutral-400 sm:text-lg">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                required
                className="box-border w-full min-w-0 max-w-full resize-y rounded-xl border-2 border-neutral-700 bg-neutral-900 px-4 py-3.5 text-base text-white outline-none transition placeholder:text-neutral-600 focus:border-white sm:px-5 sm:py-4 sm:text-lg"
                placeholder="Your message..."
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-white px-6 py-4 text-base font-bold text-black transition hover:bg-neutral-200 sm:w-auto sm:px-8 sm:py-5 sm:text-lg"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
