import { links, locations, site } from "@/lib/content";
import { Emblem } from "./art";

export default function Footer() {
  return (
    <footer className="foot">
      <div className="wrap foot-grid">
        <div className="foot-brand">
          <Emblem className="foot-emblem" id="ft" />
          <p className="hand">Somos los reyes del taco.</p>
        </div>
        <div className="foot-cols">
          {locations.map((l) => (
            <div key={l.id}>
              <p className="label">{l.name}</p>
              <p>
                {l.street}
                <br />
                {l.city} {l.zip}
              </p>
            </div>
          ))}
          <div>
            <p className="label">Call</p>
            <p>
              <a href={links.tel}>{site.phone}</a>
              <br />
              <a href={links.tel2}>{site.phone2}</a>
            </p>
          </div>
        </div>
        <p className="foot-fine">© {new Date().getFullYear()} Lonchería El Parian · Southwest Detroit</p>
      </div>
    </footer>
  );
}
