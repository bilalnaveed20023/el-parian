"use client";

import { useRef, useState } from "react";
import { links, locations, site } from "@/lib/content";
import OpenStatus from "./OpenStatus";
import Reveal from "./Reveal";
import { Star } from "./art";

export default function Locations() {
  const [i, setI] = useState(2);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const l = locations[i];

  const onKey = (e: React.KeyboardEvent) => {
    const n = locations.length;
    let next = i;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") next = (i + 1) % n;
    else if (e.key === "ArrowLeft" || e.key === "ArrowUp") next = (i - 1 + n) % n;
    else return;
    e.preventDefault();
    setI(next);
    refs.current[next]?.focus();
  };

  return (
    <section className="find" id="find">
      <div className="wrap">
        <Reveal>
          <p className="hand kicker">¿Dónde andamos?</p>
          <h2 className="display h2">Three trucks. Pick a corner.</h2>
        </Reveal>

        <Reveal className="picker-wrap" delay={60}>
          <div className="picker" role="tablist" aria-label="Truck locations" onKeyDown={onKey}>
            {locations.map((x, k) => (
              <button
                key={x.id}
                ref={(el) => {
                  refs.current[k] = el;
                }}
                role="tab"
                id={`loc-${x.id}`}
                aria-selected={k === i}
                aria-controls="loc-panel"
                tabIndex={k === i ? 0 : -1}
                className={`pick c${k}${k === i ? " on" : ""}`}
                onClick={() => setI(k)}
              >
                <span className="num display">{x.n}</span>
                <span className="pick-text">
                  <b>{x.street.replace(/^\d+\s/, "")}</b>
                  <i>{x.reviews} reviews</i>
                </span>
              </button>
            ))}
          </div>

          <div className="loc-panel" role="tabpanel" id="loc-panel" aria-labelledby={`loc-${l.id}`}>
            <div className={`loc-card c${i}`}>
              <p className="loc-name display">{l.name}</p>
              <address>
                {l.street}
                <br />
                {l.city} {l.zip}
              </address>
              <p className="loc-rate">
                <Star className="lr-star" />
                <b>{l.rating}</b> · {l.reviews} Google reviews
              </p>
              <p className="loc-hours">{l.hours}</p>
              <OpenStatus byDay={l.byDay} className="loc-status" />
              <p className="loc-blurb">{l.blurb}</p>
              <div className="loc-cta">
                <a className="btn btn-ink" href={links.tel}>Call {site.phone}</a>
                <a className="btn btn-line-ink" href={links.directions(l)} target="_blank" rel="noopener noreferrer">Directions</a>
              </div>
            </div>
            <div className="loc-map">
              <iframe key={l.id} title={`Map: ${l.name}, ${l.street}`} src={links.embed(l)} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
            </div>
          </div>
          <p className="loc-note">Trucks can move or change hours. Call before a long drive.</p>
        </Reveal>
      </div>
    </section>
  );
}
