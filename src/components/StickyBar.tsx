import { links, site } from "@/lib/content";

export default function StickyBar() {
  return (
    <div className="sticky-bar">
      <a className="btn btn-orange" href={links.tel}>Call {site.phone}</a>
      <a className="btn btn-line" href="#find">Find a truck</a>
    </div>
  );
}
