import Card from "@/components/ui/Card";
export default function Testimonials({ testimonials }:{ testimonials: { quote: string; name: string; role?: string }[] }) {
  return (
    <div className="grid md:grid-cols-3 gap-5">
      {testimonials.map((t, i) => (
        <Card key={i}>
          <blockquote className="text-gray-800">“{t.quote}”</blockquote>
          <p className="mt-3 text-sm text-gray-600">— {t.name}{t.role?`, ${t.role}`:''}</p>
        </Card>
      ))}
    </div>
  );
}
