export default function Badge({ children }: { children: React.ReactNode }) {
  return <span className="inline-flex items-center rounded-md bg-[var(--accent)]/10 text-[var(--accent)] px-2.5 py-0.5 text-xs font-medium">{children}</span>;
}
