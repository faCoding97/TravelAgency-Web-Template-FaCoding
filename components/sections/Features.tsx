import Card from "@/components/ui/Card";

export default function Features({ features }: { features: { title: string; description: string }[] }) {
  return (
    <div className="grid md:grid-cols-3 gap-5">
      {features.map((f, i) => (
        <Card key={i} className="card-hover">
          <h3 className="font-semibold">{f.title}</h3>
          <p className="text-gray-600 mt-1 text-sm">{f.description}</p>
        </Card>
      ))}
    </div>
  );
}
