import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Locations from "@/components/Locations";
import Carta from "@/components/Carta";
import Taquiza from "@/components/Taquiza";
import Story from "@/components/Story";
import Reviews from "@/components/Reviews";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import StickyBar from "@/components/StickyBar";
import { locations, site } from "@/lib/content";

const jsonLd = locations.map((l) => ({
  "@context": "https://schema.org",
  "@type": "FoodEstablishment",
  name: l.name,
  parentOrganization: site.full,
  servesCuisine: ["Mexican", "Tacos"],
  telephone: site.tel,
  priceRange: "$",
  address: { "@type": "PostalAddress", streetAddress: l.street, addressLocality: "Detroit", addressRegion: "MI", postalCode: l.zip, addressCountry: "US" },
  geo: { "@type": "GeoCoordinates", latitude: l.lat, longitude: l.lng },
  aggregateRating: { "@type": "AggregateRating", ratingValue: l.rating, reviewCount: l.reviews },
}));

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Locations />
        <Carta />
        <Taquiza />
        <Story />
        <Reviews />
        <Gallery />
      </main>
      <Footer />
      <StickyBar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
