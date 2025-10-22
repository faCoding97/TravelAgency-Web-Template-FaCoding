import Card from "@/components/ui/Card";
import MapEmbed from "@/components/widgets/MapEmbed.client";

export default function CTA({ contact }:{ contact: { phone: string; whatsapp?: string; email: string; address: string; mapQuery: string; mapEmbedSrc: string } }) {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <Card>
        <h3 className="font-semibold text-lg">Get in touch</h3>
        <ul className="mt-3 text-sm text-gray-700 space-y-2">
          <li><strong>Phone:</strong> <a href={`tel:${contact.phone.replace(/\s+/g,'')}`} className="underline">{contact.phone}</a></li>
          {contact.whatsapp && <li><strong>WhatsApp:</strong> <a href={`https://wa.me/${contact.whatsapp.replace(/\D/g,'')}`} className="underline">{contact.whatsapp}</a></li>}
          <li><strong>Email:</strong> <a href={`mailto:${contact.email}`} className="underline">{contact.email}</a></li>
          <li><strong>Address:</strong> {contact.address}</li>
        </ul>
      </Card>
      <MapEmbed embedSrc={contact.mapEmbedSrc} query={contact.mapQuery} title="TravelAgency Elixflare on Google Maps" />
    </div>
  );
}
