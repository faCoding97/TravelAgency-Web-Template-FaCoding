import Card from "@/components/ui/Card";

export default function ValueProps({ valueProps }: { valueProps: { title: string; description: string; icon?: string }[] }) {
  return (
    <div className="grid md:grid-cols-3 gap-5">
      {valueProps.map((vp, i) => (
        <Card key={i} className="card-hover">
          <h3 className="font-semibold">{vp.title}</h3>
          <p className="text-gray-600 mt-1 text-sm">{vp.description}</p>
        </Card>
      ))}
    </div>
  );
}
