import site from "@/data/site.json";
import Container from "@/components/ui/Container";
import PortfolioOrMenu from "@/components/sections/PortfolioOrMenu";

export const metadata = {
  title: "All Tours",
  alternates: { canonical: "/tours" }
};

export default function ToursPage() {
  return (
    <div className="section">
      <Container>
        <h1 className="text-3xl md:text-4xl font-semibold mb-2">All Tours</h1>
        <p className="text-gray-600 mb-8">Calm pacing, small groups, and honest pricing. All amounts are rounded ZAR and include main park fees.</p>
        <PortfolioOrMenu items={site.tours} />
      </Container>
    </div>
  );
}
