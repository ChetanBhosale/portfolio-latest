export function SectionHeading({
  number,
  children,
  id,
}: {
  number: string
  children: React.ReactNode
  id?: string
}) {
  return (
    <div id={id} className="flex items-center gap-3 py-6 scroll-mt-24">
      <span className="font-mono text-sm font-semibold text-ember">
        {number}
      </span>
      <h2 className="font-mono text-base font-bold uppercase tracking-widest">
        {children}
      </h2>
      <span className="h-px flex-1 bg-border" />
    </div>
  )
}
