export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}
export function clampNavToMinimal(nav: {label: string; href: string}[]) {
  const allowed = new Set(["Home","Tours","Services","All Tours","About","Contact"]);
  const filtered = nav.filter(n => allowed.has(n.label));
  const order = ["Home","Tours","About","Contact"];
  const m = new Map(filtered.map(n=>[n.label,n]));
  const result: {label:string;href:string}[] = [];
  for (const key of order) if (m.has(key)) result.push(m.get(key)!);
  return result.slice(0,4);
}
