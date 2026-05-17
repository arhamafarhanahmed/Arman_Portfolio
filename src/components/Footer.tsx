import { profile } from "../data/portfolio"

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-neutral-800 bg-neutral-950 px-4 py-10 sm:py-12">
      <div className="mx-auto flex w-full max-w-6xl min-w-0 flex-col items-center gap-8 sm:flex-row sm:justify-between sm:px-8 lg:px-12">
        <div className="text-center sm:text-left">
          <p className="text-lg font-bold text-white">{profile.fullName}</p>
          <p className="mt-1 text-sm text-neutral-500">{profile.title}</p>
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-neutral-400 transition hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <p className="mx-auto mt-8 max-w-6xl border-t border-neutral-800 pt-8 text-center text-xs text-neutral-600 sm:px-8 lg:px-12">
        © {year} {profile.fullName}. All rights reserved.
      </p>
    </footer>
  )
}
