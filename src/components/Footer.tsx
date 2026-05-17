import { profile } from "../data/portfolio"

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-neutral-800 bg-black px-4 py-8 text-center sm:py-10">
      <p className="text-sm text-neutral-500 sm:text-base md:text-lg">
        © {year} {profile.fullName}. MERN Stack Developer.
      </p>
    </footer>
  )
}
