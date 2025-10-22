import { cn } from "@/lib/utils";
import Link from "next/link";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: string; variant?: "brand" | "outline" };
export default function Button({ href, variant="brand", className, children, ...rest }: Props) {
  const base = cn(
    "inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-medium transition card-hover",
    variant === "brand" ? "bg-[var(--brand)] text-white hover:brightness-110" : "border border-gray-300 hover:bg-gray-50",
    className || ""
  );
  if (href) return <Link href={href} className={base}>{children}</Link>;
  return <button className={base} {...rest}>{children}</button>;
}
