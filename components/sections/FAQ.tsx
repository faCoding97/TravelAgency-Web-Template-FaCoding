import Accordion from "@/components/widgets/Accordion";

export default function FAQ({ items }:{ items: { q: string; a: string }[] }) {
  return <Accordion items={items.map(i=>({ title: i.q, content: i.a }))} />;
}
