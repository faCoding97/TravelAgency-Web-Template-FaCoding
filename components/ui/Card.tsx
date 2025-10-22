import { cn } from "@/lib/utils";
export default function Card({ className="", children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn("rounded-xl border bg-white p-5 shadow-soft", className)}>{children}</div>;
}
