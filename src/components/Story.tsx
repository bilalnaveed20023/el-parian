import Reveal from "./Reveal";

export default function Story() {
  return (
    <section className="story" id="story">
      <div className="wrap story-grid">
        <Reveal className="story-head">
          <p className="hand kicker">La historia</p>
          <h2 className="display h2">From a family food truck to three corners.</h2>
        </Reveal>
        <Reveal className="story-body" delay={80}>
          <p>
            Nancy Lopez started working in restaurants at fourteen, at her relatives’ Los Altos Restaurant on Vernor Highway. Her parents bought a food truck, and her
            father ran it on weekends. During the recession she and her husband, Ramón “Wicho” Díaz, helped out on it, and within a year they had quit their day jobs.
          </p>
          <p>
            The name came from her mother, after El Parián, the plaza in Guadalajara. The trucks have been feeding Southwest Detroit ever since.
          </p>
          <p className="story-src">From local press (Model D, Hour Detroit). Details may have changed since.</p>
        </Reveal>
      </div>
    </section>
  );
}
