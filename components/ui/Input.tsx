import { cn } from "@/lib/utils";
export default function Input({ className='', ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input className={cn("w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand)]", className)} {...props} />;
}
