import site from "@/data/site.json";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import QrCode from "@/components/widgets/QrCode.client";
import Reveal from "@/components/widgets/Reveal.client";

export default function Hero() {
  return (
    <div className="section" style={{height: site.layout.heroHeight}}>
      <Container>
        <div className="grid md:grid-cols-2 gap-8 items-center h-full">
          <Reveal>
            <div>
              {site.hero.eyebrow && <p className="text-sm text-[var(--brand)] font-semibold">{site.hero.eyebrow}</p>}
              <h1 className="text-3xl md:text-5xl font-semibold leading-tight mt-2">{site.hero.title}</h1>
              {site.hero.description && <p className="mt-3 text-gray-700 max-w-prose">{site.hero.description}</p>}
              <div className="mt-6 flex flex-wrap items-center gap-3">
                {site.hero.primaryCta && <Button href={site.hero.primaryCta.href}>{site.hero.primaryCta.label}</Button>}
                {site.hero.secondaryCta && <Button href={site.hero.secondaryCta.href} variant="outline">{site.hero.secondaryCta.label}</Button>}
                <div className="ml-auto md:ml-0">
                  <QrCode url={site.routes.toursRoot} label="Open /tours" />
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className="relative h-64 md:h-full">
              <img src={site.hero.image || "/og-image.png"} alt="Scenic Eastern Cape coastline" className="w-full h-full object-contain md:object-cover rounded-xl border shadow-soft" />
            </div>
          </Reveal>
        </div>
      </Container>
    </div>
  );
}
