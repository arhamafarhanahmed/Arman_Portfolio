export default function SectionHeading({
  title,
  dark = false,
}: {
  title: string
  dark?: boolean
}) {
  return (
    <div className="mb-10 flex min-w-0 items-center gap-3 sm:mb-16 sm:gap-4">
      <h2
        className={`shrink-0 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl ${
          dark ? "text-white" : "text-black"
        }`}
      >
        {title}
      </h2>
      <span className={`hidden h-px min-w-4 flex-1 sm:block ${dark ? "bg-neutral-700" : "bg-neutral-200"}`} />
    </div>
  )
}
