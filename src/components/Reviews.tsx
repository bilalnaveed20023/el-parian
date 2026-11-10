import { locations, reviews, totalReviews } from "@/lib/content";
import Reveal from "./Reveal";
import { Star } from "./art";

export default function Reviews() {
  return (
    <section className="reviews" id="reviews">
      <div className="wrap">
        <Reveal className="rev-head">
          <div>
            <p className="hand kicker kicker-yellow">Lo que dicen</p>
            <h2 className="display h2">{totalReviews} reviews, three trucks.</h2>
          </div>
          <ul className="rates">
            {locations.map((l, k) => (
              <li key={l.id} className={`c${k}`}>
                <span className="display">{l.n}</span>
                <b>
                  {l.rating}
                  <Star className="rs" />
                </b>
                <i>{l.reviews}</i>
              </li>
            ))}
          </ul>
        </Reveal>
        <ul className="wall">
          {reviews.map((r, i) => (
            <li key={r.who} className={`note ${r.color}`}>
              <Reveal delay={(i % 4) * 60}>
                <blockquote>
                  <p>“{r.text}”</p>
                  <footer>
                    <b>{r.who}</b> {r.where ? `· ${r.where} ` : ""}· {r.when}
                  </footer>
                </blockquote>
              </Reveal>
            </li>
          ))}
        </ul>
        <p className="rev-foot">Public Google reviews of the Vernor Hwy truck, first names only.</p>
      </div>
    </section>
  );
}
