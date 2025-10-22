import site from "@/data/site.json";
import Container from "@/components/ui/Container";
import PortfolioOrMenu from "@/components/sections/PortfolioOrMenu";

export const metadata = {
  title: "All Tours",
  alternates: { canonical: "/tours" },
};

// ⬇️ اضافه
type Season = "Summer" | "Spring" | "Autumn" | "Winter";
const SEASONS: readonly Season[] = [
  "Summer",
  "Spring",
  "Autumn",
  "Winter",
] as const;
const isSeason = (s: unknown): s is Season => SEASONS.includes(s as Season);

// اگر لازم داری بعضی مقادیرِ رایج مپ شوند:
const SEASON_ALIASES: Record<string, Season> = {
  summer: "Summer",
  spring: "Spring",
  autumn: "Autumn",
  fall: "Autumn",
  winter: "Winter",
};

function normalizeSeason(raw: unknown): Season | undefined {
  if (isSeason(raw)) return raw;
  if (typeof raw === "string") {
    const key = raw.trim().toLowerCase();
    return SEASON_ALIASES[key];
  }
  return undefined;
}

export default function ToursPage() {
  // ⬇️ نرمالایز قبل از پاس دادن به کامپوننت
  const items = site.tours.map((t) => ({
    ...t,
    season: normalizeSeason(t.season),
  }));

  return (
    <div className="section">
      <Container>
        <h1 className="text-3xl md:text-4xl font-semibold mb-2">All Tours</h1>
        <p className="text-gray-600 mb-8">
          Calm pacing, small groups, and honest pricing. All amounts are rounded
          ZAR and include main park fees.
        </p>
        <PortfolioOrMenu items={items} />
      </Container>
    </div>
  );
}
