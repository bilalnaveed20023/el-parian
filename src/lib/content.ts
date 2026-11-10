// Everything on the site comes from here. See PLACEHOLDERS.md for what is verified and what is assumed.

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
export const asset = (p: string) => `${base}${p}`;

export const site = {
  name: "El Parian",
  full: "Lonchería El Parian",
  tz: "America/Detroit",
  phone: "(313) 676-0260",
  tel: "+13136760260",
  phone2: "(313) 460-6907",
  tel2: "+13134606907",
};

export type Loc = {
  id: string;
  n: number;
  name: string;
  street: string;
  city: string;
  zip: string;
  rating: number;
  reviews: number;
  lat: number;
  lng: number;
  hours: string;
  byDay: { open: number; close: number }[]; // Sunday first
  blurb: string;
};

const all = (open: number, close: number) => Array.from({ length: 7 }, () => ({ open, close }));

export const locations: Loc[] = [
  {
    id: "vernor-w",
    n: 1,
    name: "El Parian 1",
    street: "8163 W Vernor Hwy",
    city: "Detroit, MI",
    zip: "48209",
    rating: 4.7,
    reviews: 134,
    lat: 42.3103068,
    lng: -83.1293872,
    hours: "Sun – Thu 10:30 AM – 10:30 PM · Fri & Sat until 11 PM",
    byDay: [
      { open: 10.5, close: 22.5 },
      { open: 10.5, close: 22.5 },
      { open: 10.5, close: 22.5 },
      { open: 10.5, close: 22.5 },
      { open: 10.5, close: 22.5 },
      { open: 10.5, close: 23 },
      { open: 10.5, close: 23 },
    ],
    blurb: "Far west Vernor. Open late: until 10:30 most nights, 11 on weekends.",
  },
  {
    id: "springwells",
    n: 2,
    name: "El Parian 2",
    street: "1120 Springwells St",
    city: "Detroit, MI",
    zip: "48209",
    rating: 4.4,
    reviews: 71,
    lat: 42.302155,
    lng: -83.1198231,
    hours: "Every day 12 – 10 PM",
    byDay: all(12, 22),
    blurb: "On Springwells St, open noon to ten every day.",
  },
  {
    id: "vernor-e",
    n: 3,
    name: "El Parian 3",
    street: "4711 Vernor Hwy",
    city: "Detroit, MI",
    zip: "48209",
    rating: 4.7,
    reviews: 334,
    lat: 42.3187667,
    lng: -83.0985145,
    hours: "Every day 9:40 AM – 9:30 PM",
    byDay: all(9.67, 21.5),
    blurb: "The most reviewed of the three. Google puts it in the Liberty Pharmacy lot. Reviewers mention picnic tables under an awning.",
  },
];

export const q = (l: Loc) => encodeURIComponent(`${l.street}, ${l.city} ${l.zip}`);
export const links = {
  tel: `tel:${site.tel}`,
  tel2: `tel:${site.tel2}`,
  directions: (l: Loc) => `https://www.google.com/maps/dir/?api=1&destination=${q(l)}`,
  embed: (l: Loc) => `https://www.google.com/maps?q=${q(l)}&output=embed`,
};
export const totalReviews = locations.reduce((s, l) => s + l.reviews, 0);

export const marquee = ["Somos los reyes del taco", "Échate unos tacos", "Pastor", "Asada", "Birria", "Lengua", "Cabeza", "Tripa", "Quesabirria"];

// ---- the menu, read off the truck's sign + customer photos ----
export const meats = ["Asada", "Pastor", "Chorizo", "Cabeza", "Lengua", "Tripa", "Pollo", "Birria", "Fajitas", "Campechanos"];
export const meatsEn = ["Steak", "Marinated pork", "Mexican sausage", "Beef head", "Beef tongue", "Beef tripe", "Chicken", "Marinated beef", "Fajitas", "Mixed meat"];

export type Card = { id: string; title: string; es: string; price: string; unit?: string; line: string; chips?: string[]; color: "pink" | "teal" | "yellow" | "orange" };
export const carta: Card[] = [
  { id: "tacos", title: "Tacos", es: "Tacos", price: "$3", unit: "each", line: "On corn tortillas with onions and cilantro. Pick any of the meats.", chips: meats, color: "orange" },
  { id: "quesadillas", title: "Quesadillas", es: "Quesadillas", price: "$3.50", unit: "and up", line: "Cheese pulled and griddled with the same list of meats. The Quesabirria “Xtreme” is the messy one.", color: "yellow" },
  { id: "tortas", title: "Tortas", es: "Tortas", price: "$10", line: "Hawaiana, tampiqueña, cubana, or any meat on the list.", color: "teal" },
  { id: "burritos", title: "Burritos", es: "Burritos", price: "$10", line: "Flour tortilla, your meat. Shrimp burritos too.", color: "pink" },
  { id: "burgers", title: "Hamburguesas & hot dogs", es: "Hamburguesas", price: "$10", line: "Chicken, beef or Hawaiian burgers. Hot dogs are on the sign, too.", color: "orange" },
  { id: "tostadas", title: "Seafood tostadas", es: "Tostadas", price: "$4 – $5", line: "Ceviche $4, shrimp $5. Shrimp cocktail comes in cups and is big enough for two, per one reviewer.", color: "teal" },
];
export const drinks = ["Aguas frescas $3", "Jarritos", "Refrescos"];

export const taquiza = [
  { n: "Birria", es: "Marinated beef" },
  { n: "Arroz y frijoles", es: "Rice and beans" },
  { n: "Birria de chivo", es: "Marinated goat meat" },
];

export type Shot = { src: string; alt: string; cls?: string };
export const gallery: Shot[] = [
  { src: "/img/quesabirria.webp", alt: "A quesabirria folded over melted cheese and meat", cls: "tall" },
  { src: "/img/plates.webp", alt: "Two plates of tacos with radishes and lime", cls: "wide" },
  { src: "/img/tacos-top.webp", alt: "Tacos topped with cilantro, onion, radish and a lime", cls: "sq" },
  { src: "/img/burrito.webp", alt: "A burrito cut in half over chips", cls: "sq" },
  { src: "/img/combo.webp", alt: "Rice and tacos in a foam clamshell", cls: "tall" },
  { src: "/img/basket.webp", alt: "Crisp tacos in a checkered basket with grilled jalapeños", cls: "wide" },
  { src: "/img/shrimp-burrito.webp", alt: "A shrimp burrito wrapped in foil", cls: "wide" },
  { src: "/img/elote.webp", alt: "A cup of street corn", cls: "tall" },
];

// ---- reviews: Google (El Parian 3 listing), public. First name + initial, trimmed (…) ----
export const reviews = [
  { who: "Jeff S.", where: "Ohio", when: "a year ago", text: "We have been to most of the trucks in the last few years. Now we are always looking for these guys. Fresh, authentic and super nice. Best in SW Detroit hands down.", color: "pink" },
  { who: "Taylor B.", where: "", when: "2 years ago", text: "The birria tacos were well seasoned, juicy and topped with generous amounts of cheese. My husband and I have been touring the Detroit area for the best birria tacos and this has landed in the top spots.", color: "teal" },
  { who: "Ramon A.", where: "", when: "a year ago", text: "Al 100 los tacos, quesabirrias, lo que se antoje. Excelente calidad y sabor, 100/10. Excelente servicio y trato.", color: "yellow" },
  { who: "Joe H.", where: "", when: "4 years ago", text: "The Quesabirria Xtreme is a huge, delicious quesadilla that is a mess to eat but definitely worth the extra napkins.", color: "orange" },
  { who: "Shannon M.", where: "", when: "6 years ago", text: "We had steak and pastor tacos last night. I can honestly say these are the very best tacos I’ve ever had in my entire lifetime. The prices are very reasonable.", color: "teal" },
  { who: "Rachel B.", where: "", when: "11 months ago", text: "My favourite taco truck for years. The staff is the best and the food is always delicious. They are always patient with me because my Spanish is not good.", color: "pink" },
  { who: "Milton M.", where: "", when: "5 years ago", text: "The Cóctel de camarones must have a pound of shrimp, very filling for two. Worth every dollar. Add extra spice for even more delight.", color: "orange" },
  { who: "Edwina S.", where: "", when: "2 years ago", text: "This truck is busy for a reason. The staff are so good. There are a couple of picnic tables with a well secured awning next to the truck. Also, the best quesadilla around.", color: "yellow" },
];
