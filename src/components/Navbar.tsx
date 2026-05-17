import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { profile } from "../data/portfolio"

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#portfolio" },
]

const mobileLinks = [...links, { label: "Contact", href: "#contact" }]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }
    if (open) window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [open])

  const close = () => setOpen(false)

  const mobileMenu =
    open &&
    createPortal(
      <div
        id="mobile-nav"
        className="fixed inset-0 z-[200] md:hidden"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <button
          type="button"
          className="absolute inset-0 bg-black/40"
          aria-label="Close menu"
          onClick={close}
        />
        <nav className="relative flex h-full flex-col bg-white px-4 pt-[5.25rem] pb-10 sm:px-6 sm:pt-24">
          <ul className="space-y-1">
            {mobileLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-2xl px-4 py-4 text-2xl font-bold text-neutral-900 transition hover:bg-neutral-50 active:bg-neutral-100"
                  onClick={close}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="mt-8 flex w-full justify-center rounded-xl bg-neutral-900 py-4 text-lg font-bold text-white transition hover:bg-neutral-800"
            onClick={close}
          >
            Hire me
          </a>
        </nav>
      </div>,
      document.body,
    )

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[210] transition-all duration-300 ${
          scrolled
            ? "border-b border-neutral-200/80 bg-white/95 shadow-md backdrop-blur-lg"
            : "bg-white/80 backdrop-blur-sm"
        }`}
      >
        <nav className="mx-auto flex w-full min-w-0 max-w-7xl items-center justify-between gap-3 px-4 py-3.5 sm:gap-4 sm:px-8 sm:py-4 lg:px-12">
          <a
            href="#home"
            className="flex min-w-0 shrink items-center gap-2 sm:gap-3"
            onClick={close}
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-neutral-900 text-base font-bold text-white sm:h-11 sm:w-11 sm:text-lg">
              {profile.name.charAt(0)}
            </span>
            <span className="truncate text-base font-bold text-neutral-900 sm:text-lg md:text-xl">
              {profile.name}
            </span>
          </a>

          <ul className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-base font-semibold text-neutral-600 transition hover:text-neutral-900"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="hidden rounded-xl bg-neutral-900 px-6 py-2.5 text-sm font-bold text-white transition hover:bg-neutral-800 md:inline-flex"
          >
            Hire me
          </a>

          <button
            type="button"
            className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-neutral-200 bg-white md:hidden"
            onClick={() => setOpen((prev) => !prev)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <span
              className={`absolute block h-0.5 w-5 bg-neutral-900 transition ${open ? "rotate-45" : "-translate-y-1.5"}`}
            />
            <span className={`absolute block h-0.5 w-5 bg-neutral-900 transition ${open ? "opacity-0" : ""}`} />
            <span
              className={`absolute block h-0.5 w-5 bg-neutral-900 transition ${open ? "-rotate-45" : "translate-y-1.5"}`}
            />
          </button>
        </nav>
      </header>

      {mobileMenu}
    </>
  )
}
