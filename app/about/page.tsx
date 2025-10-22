import Container from "@/components/ui/Container";
import site from "@/data/site.json";

export const metadata = {
  title: "About",
  alternates: { canonical: "/about" }
};

export default function AboutPage() {
  return (
    <div className="section">
      <Container>
        <h1 className="text-3xl md:text-4xl font-semibold mb-4">About TravelAgency Elixflare</h1>
        <p className="text-gray-700 max-w-3xl">
          We are a small, Gqeberha-based travel company focused on simple, scenic day trips and short breaks across
          the Eastern Cape and Garden Route. Our itineraries are intentionally uncluttered so you can enjoy the places you visit.
        </p>
      </Container>
    </div>
  );
}
