import { asset, links, locations, marquee, site, totalReviews } from "@/lib/content";
import { Star, Trompo } from "./art";

export default function Hero() {
  return (
    <>
      <section className="hero" id="top">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <p className="hand hero-kicker">Southwest Detroit · {locations.length} trucks</p>
            <h1 className="display hero-h1">
              <span>Échate</span>
              <span>unos</span>
              <span className="pink">tacos.</span>
            </h1>
            <p className="hero-sub">
              Pastor off the trompo, asada, lengua, cabeza, birria that melts the cheese. Three Vernor Highway and Springwells trucks, open late, cash and a smile.
            </p>
            <div className="hero-cta">
              <a className="btn btn-ink" href={links.tel}>Call {site.phone}</a>
              <a className="btn btn-cream" href="#find">Find the nearest truck</a>
            </div>
            <p className="hero-proof">
              <Star className="hp-star" />
              <b>{totalReviews}</b> Google reviews across the three trucks
            </p>
          </div>
          <div className="hero-art" aria-hidden="true">
            <Trompo className="trompo" />
            <div className="hero-photo">
              <img src={asset("/img/cup-tacos.webp")} alt="" width={1200} height={1600} fetchPriority="high" />
            </div>
            <div className="burst">
              <span>Tacos</span>
              <b className="display">$3</b>
            </div>
          </div>
        </div>
      </section>
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[0, 1].map((k) => (
            <ul key={k}>
              {marquee.map((m) => (
                <li key={m}>
                  {m}
                  <Star className="mq-star" />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </>
  );
}
