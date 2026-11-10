import { asset, carta, drinks, meatsEn } from "@/lib/content";
import Reveal from "./Reveal";

export default function Carta() {
  return (
    <section className="carta" id="carta">
      <div className="wrap">
        <Reveal>
          <p className="hand kicker kicker-yellow">La carta</p>
          <h2 className="display h2">Read it off the truck.</h2>
          <p className="lede">The sign on the truck, in plain type. Prices are as printed on it.</p>
        </Reveal>
        <ul className="cards">
          {carta.map((c, i) => (
            <li key={c.id} className={`card ${c.color}`}>
              <Reveal delay={(i % 3) * 60}>
                <div className="card-in">
                  <div className="card-top">
                    <h3 className="display">{c.title}</h3>
                    <p className="price display">
                      {c.price}
                      {c.unit ? <small>{c.unit}</small> : null}
                    </p>
                  </div>
                  <p className="card-line">{c.line}</p>
                  {c.chips ? (
                    <ul className="chips" aria-label="Meats">
                      {c.chips.map((m, k) => (
                        <li key={m} title={meatsEn[k]}>
                          {m}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
        <div className="carta-foot">
          <img src={asset("/img/truck.webp")} alt="The El Parian truck with its menu painted on the side" width={1400} height={1050} loading="lazy" />
          <div>
            <p className="label">Bebidas</p>
            <p className="drinks">{drinks.join(" · ")}</p>
            <p className="carta-note">
              Salsas come on the side, and a couple of them are hot. Ask the cashier about anything that can be cooked to order.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
