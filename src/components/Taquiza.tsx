"use client";

import { useState } from "react";
import { links, site, taquiza } from "@/lib/content";
import Reveal from "./Reveal";

export default function Taquiza() {
  const [guests, setGuests] = useState(25);
  const [each, setEach] = useState(4);
  const tacos = guests * each;
  const est = tacos * 3;

  return (
    <section className="taquiza" id="taquiza">
      <div className="wrap taq-grid">
        <Reveal className="taq-copy">
          <p className="hand kicker kicker-cream">Taquiza para tus fiestas</p>
          <h2 className="display h2">A taco truck at your party.</h2>
          <p>
            El Parian caters. Their flyer lists birria, arroz y frijoles and birria de chivo, and the trucks do the rest. Graduations, birthdays, job sites, the lot next to the
            bar. Call and say how many are coming.
          </p>
          <ul className="taq-list">
            {taquiza.map((t) => (
              <li key={t.n}>
                <b className="display">{t.n}</b>
                <span>{t.es}</span>
              </li>
            ))}
          </ul>
          <div className="taq-cta">
            <a className="btn btn-ink" href={links.tel2}>Call {site.phone2}</a>
            <a className="btn btn-line" href={links.tel}>or {site.phone}</a>
          </div>
        </Reveal>

        <Reveal className="calc" delay={80}>
          <p className="calc-title display">How many tacos?</p>
          <label className="slider">
            <span>
              Guests <b className="display">{guests}</b>
            </span>
            <input type="range" min={5} max={200} step={5} value={guests} onChange={(e) => setGuests(+e.target.value)} />
          </label>
          <label className="slider">
            <span>
              Tacos each <b className="display">{each}</b>
            </span>
            <input type="range" min={2} max={8} step={1} value={each} onChange={(e) => setEach(+e.target.value)} />
          </label>
          <div className="calc-out" aria-live="polite">
            <p>
              <b className="display">{tacos}</b> tacos
            </p>
            <p className="calc-est">
              About <b>${est.toLocaleString()}</b> at the $3 walk-up price
            </p>
          </div>
          <p className="calc-note">Just a planning number. Catering prices come from the owners, by phone.</p>
        </Reveal>
      </div>
    </section>
  );
}
