import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

type Item = {
  id: string;
  title: string;
  city: string;
  country: string;
  durationDays: number;
  season?: "Summer"|"Autumn"|"Winter"|"Spring";
  priceZAR: number;
  highlights: string[];
  description: string;
  image: string;
};

export default function PortfolioOrMenu({ items, ctaHref }: { items: Item[]; ctaHref?: string }) {
  return (
    <div>
      <div className="grid md:grid-cols-3 gap-5">
        {items.map((it) => (
          <Card key={it.id} className="card-hover">
            <img src={it.image} alt={it.title} className="w-full h-40 object-contain rounded-lg border mb-3 bg-gray-50" />
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">{it.title}</h3>
              <Badge>{it.season || "Any season"}</Badge>
            </div>
            <p className="text-xs text-gray-600 mt-1">{it.city}, {it.country} • {it.durationDays} {it.durationDays>1? 'days':'day'}</p>
            <p className="text-sm text-gray-700 mt-2">{it.description}</p>
            <ul className="mt-3 text-sm text-gray-600 list-disc list-inside">
              {it.highlights.slice(0,3).map((h, i) => <li key={i}>{h}</li>)}
            </ul>
            <div className="mt-4 flex items-center justify-between">
              <span className="font-semibold">ZAR {it.priceZAR.toLocaleString()}</span>
              <Button variant="outline">Enquire</Button>
            </div>
          </Card>
        ))}
      </div>
      {ctaHref && (
        <div className="mt-6 flex justify-center">
          <Button href={ctaHref}>Browse all tours</Button>
        </div>
      )}
    </div>
  );
}
