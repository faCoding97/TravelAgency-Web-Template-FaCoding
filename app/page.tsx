import site from "@/data/site.json";
import Container from "@/components/ui/Container";
import Hero from "@/components/sections/Hero";
import ValueProps from "@/components/sections/ValueProps";
import Features from "@/components/sections/Features";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import PortfolioOrMenu from "@/components/sections/PortfolioOrMenu";

export default function HomePage() {
  return (
    <>
      <Hero />
      <section id="why-us" aria-labelledby="why-us-heading" className="section anchor-section">
        <Container>
          <h2 id="why-us-heading" className="text-2xl md:text-3xl font-semibold mb-6">Why Choose Us</h2>
          <ValueProps valueProps={site.valueProps.slice(0,3)} />
        </Container>
      </section>
      <section id="tours" aria-labelledby="tours-heading" className="section anchor-section bg-gray-50">
        <Container>
          <h2 id="tours-heading" className="text-2xl md:text-3xl font-semibold mb-6">Featured Tours</h2>
          <PortfolioOrMenu items={site.tours.slice(0,6)} ctaHref={site.routes.toursRoot} />
        </Container>
      </section>
      <section aria-labelledby="features-heading" className="section anchor-section">
        <Container>
          <h2 id="features-heading" className="text-2xl md:text-3xl font-semibold mb-6">Trip Features</h2>
          <Features features={site.features.slice(0,3)} />
        </Container>
      </section>
      <section aria-labelledby="testimonials-heading" className="section anchor-section bg-gray-50">
        <Container>
          <h2 id="testimonials-heading" className="text-2xl md:text-3xl font-semibold mb-6">What Travelers Say</h2>
          <Testimonials testimonials={site.testimonials.slice(0,3)} />
        </Container>
      </section>
      <section id="faq" aria-labelledby="faq-heading" className="section anchor-section">
        <Container>
          <h2 id="faq-heading" className="text-2xl md:text-3xl font-semibold mb-6">FAQ</h2>
          <FAQ items={site.faq.slice(0,6)} />
        </Container>
      </section>
      <section id="contact" aria-labelledby="contact-heading" className="section anchor-section bg-gray-50">
        <Container>
          <h2 id="contact-heading" className="text-2xl md:text-3xl font-semibold mb-6">Contact</h2>
          <CTA contact={site.contact} />
        </Container>
      </section>
    </>
  );
}
