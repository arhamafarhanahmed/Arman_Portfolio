export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  dark = false,
}: {
  eyebrow?: string
  title: string
  subtitle?: string
  dark?: boolean
}) {
  const muted = dark ? "text-neutral-500" : "text-neutral-500"
  const titleColor = dark ? "text-white" : "text-neutral-900"
  const subtitleColor = dark ? "text-neutral-400" : "text-neutral-600"
  const lineColor = dark ? "bg-neutral-800" : "bg-neutral-200"

  return (
    <header className="mb-10 sm:mb-14">
      {eyebrow && (
        <p className={`mb-3 font-mono text-xs font-medium uppercase tracking-[0.2em] ${muted}`}>
          {eyebrow}
        </p>
      )}
      <div className="flex min-w-0 flex-col gap-4 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
        <div className="min-w-0">
          <h2
            className={`text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-tight ${titleColor}`}
          >
            {title}
          </h2>
          {subtitle && (
            <p className={`mt-3 max-w-xl text-base leading-relaxed sm:text-lg ${subtitleColor}`}>
              {subtitle}
            </p>
          )}
        </div>
        <span className={`hidden h-px w-24 shrink-0 sm:block lg:w-32 ${lineColor}`} aria-hidden />
      </div>
    </header>
  )
}
