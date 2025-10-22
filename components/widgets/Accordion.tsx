export default function Accordion({ items }: { items: { title: string; content: string }[] }) {
  return (
    <div className="divide-y rounded-lg border bg-white">
      {items.map((it, i) => (
        <details key={i} className="p-4 group">
          <summary className="cursor-pointer text-sm font-medium text-gray-800">{it.title}</summary>
          <div className="pt-2 text-sm text-gray-600">{it.content}</div>
        </details>
      ))}
    </div>
  );
}
