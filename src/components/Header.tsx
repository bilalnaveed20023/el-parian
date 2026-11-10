import { links } from "@/lib/content";
import { Emblem } from "./art";

export default function Header() {
  return (
    <header className="top">
      <a href="#top" className="brand" aria-label="Lonchería El Parian, home">
        <Emblem className="brand-emblem" id="hd" />
        <span className="brand-name">El <b>Parian</b></span>
      </a>
      <nav className="top-nav" aria-label="Sections">
        <a href="#find">Find a truck</a>
        <a href="#carta">Menu</a>
        <a href="#taquiza">Catering</a>
        <a href="#reviews">Reviews</a>
      </nav>
      <a className="btn btn-ink btn-sm" href={links.tel}>Call</a>
    </header>
  );
}
