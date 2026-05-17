import { skills } from "../data/portfolio"
import SectionHeading from "./SectionHeading"

export default function Skills() {
  return (
    <section id="skills" className="overflow-x-clip bg-[#f5f5f5] py-16 sm:py-20 md:py-28">
      <div className="mx-auto w-full min-w-0 max-w-6xl px-4 sm:px-8 lg:px-12">
        <SectionHeading title="Skills" />

        <div className="grid min-w-0 gap-4 sm:grid-cols-2 sm:gap-6 md:gap-8">
          {skills.map((group) => (
            <div
              key={group.category}
              className="min-w-0 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:shadow-md sm:p-8 md:p-10"
            >
              <h3 className="text-xl font-bold text-black sm:text-2xl md:text-3xl">{group.category}</h3>
              <ul className="mt-4 flex flex-wrap gap-2 sm:mt-6 sm:gap-3">
                {group.items.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full bg-neutral-100 px-4 py-2 text-sm font-medium text-neutral-700 sm:px-5 sm:py-2.5 sm:text-base md:text-lg"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
