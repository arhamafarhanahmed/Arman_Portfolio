import { profile, education } from "../data/portfolio"
import SectionHeading from "./SectionHeading"

export default function About() {
  return (
    <section id="about" className="overflow-x-clip bg-white py-16 sm:py-20 md:py-28">
      <div className="mx-auto w-full min-w-0 max-w-6xl px-4 sm:px-8 lg:px-12">
        <SectionHeading title="About me" />

        <div className="grid min-w-0 gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="min-w-0">
            <p className="whitespace-pre-line text-base leading-relaxed text-neutral-600 sm:text-lg md:text-xl md:leading-relaxed">
              {profile.about}
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <span className="rounded-full border-2 border-neutral-200 px-4 py-2 text-sm font-medium text-neutral-600 sm:px-5 sm:py-2.5 sm:text-base md:text-lg">
                {profile.location}
              </span>
              <span className="rounded-full border-2 border-neutral-200 px-4 py-2 text-sm font-medium text-neutral-600 sm:px-5 sm:py-2.5 sm:text-base md:text-lg">
                Available for opportunities
              </span>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-base font-bold uppercase tracking-widest text-neutral-400 sm:text-lg">
                Education
              </h3>
              {education.map((item) => (
                <div key={item.degree} className="mt-6 border-l-4 border-black pl-4 sm:pl-6">
                  <p className="break-words text-lg font-bold text-black sm:text-xl md:text-2xl">{item.degree}</p>
                  <p className="mt-2 break-words text-base text-neutral-600 sm:text-lg md:text-xl">{item.institution}</p>
                  <p className="mt-1 text-sm text-neutral-400 sm:text-base md:text-lg">{item.year}</p>
                </div>
              ))}
            </div>

            <div className="min-w-0 rounded-2xl bg-neutral-50 p-6 sm:p-8">
              <h3 className="text-base font-bold uppercase tracking-widest text-neutral-400 sm:text-lg">
                Contact
              </h3>
              <ul className="mt-5 space-y-3 text-base text-neutral-700 sm:text-lg md:text-xl">
                <li>
                  <a href={`mailto:${profile.email}`} className="break-all font-medium transition hover:text-black">
                    {profile.email}
                  </a>
                </li>
                <li className="font-medium">{profile.phone}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
