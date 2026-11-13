export interface NavSubItem {
  name: string;
  href: string;
  description?: string;
  badge?: string;
}

export interface NavItem {
  name: string;
  href: string;
  hasDropdown?: boolean;
  dropdownItems?: NavSubItem[];
}

export const MAIN_NAVIGATION: NavItem[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "The Monk Power India",
    href: "/about-us",
    hasDropdown: true,
    dropdownItems: [
      {
        name: "About Us",
        href: "/about-us",
        description: "Corporate genesis, core philosophy, and engineering values.",
      },
      {
        name: "Our Infrastructure",
        href: "/infrastructure",
        description: "Extrusion lines, vacuum calibration, and production tooling.",
      },
      {
        name: "Quality Assurance",
        href: "/quality-assurance",
        description: "Rigorous testing protocols, burst pressure labs, and certifications.",
      },
    ],
  },
  {
    name: "Products",
    href: "/products",
    hasDropdown: true,
    dropdownItems: [
      {
        name: "PVC Suction Hose Pipes",
        href: "/products/suction-hose-pipes",
        description: "Spiral reinforced heavy suction & delivery hoses.",
        badge: "Heavy Duty",
      },
      {
        name: "UPVC Plumbing & Pressure Pipes",
        href: "/products/upvc-plumbing-pipes",
        description: "Lead-free ASTM Schedule 40 & 80 potable water pipes.",
        badge: "Lead Free",
      },
      {
        name: "UPVC Precision Pipe Fittings",
        href: "/products/upvc-fittings",
        description: "Injection-molded elbows, tees, couplers & brass fittings.",
      },
      {
        name: "Electrical PVC Conduit Pipes",
        href: "/products/conduit-pipes",
        description: "Flame-retardant rigid conduits for slab and surface wiring.",
        badge: "Fire Safe",
      },
      {
        name: "Agricultural Rigid PVC Pipes",
        href: "/products/agricultural-pipes",
        description: "Selfit & Ringfit pressure pipes for farm irrigation systems.",
      },
      {
        name: "Borewell Casing Pipes",
        href: "/products/casing-pipes",
        description: "Threaded high collapse-resistant casing & slotted screen pipes.",
      },
      {
        name: "Garden Flexible Hose Pipes",
        href: "/products/garden-hose-pipes",
        description: "Kink-resistant, all-weather multi-layer flexible hoses.",
      },
      {
        name: "Lay Flat Delivery Tubes",
        href: "/products/lay-flat-tubes",
        description: "Roll-flat high-discharge water pumping hoses.",
      },
      {
        name: "Braided & Clear Level Pipes",
        href: "/products/braided-pipes",
        description: "High-pressure fiber-reinforced transparent hoses.",
      },
      {
        name: "Explore All Products",
        href: "/products",
        description: "View comprehensive catalogue, technical sheets & specifications.",
      },
    ],
  },
  {
    name: "Work With Us",
    href: "/work-with-us",
  },
  {
    name: "Media",
    href: "/media",
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "Contact Us",
    href: "/contact-us",
  },
];

export const FOOTER_PRODUCT_LINKS = [
  { name: "PVC Suction Hose", href: "/products/suction-hose-pipes" },
  { name: "UPVC Plumbing Pipes", href: "/products/upvc-plumbing-pipes" },
  { name: "UPVC Pipe Fittings", href: "/products/upvc-fittings" },
  { name: "Electrical Conduits", href: "/products/conduit-pipes" },
  { name: "Agricultural Pipes", href: "/products/agricultural-pipes" },
  { name: "Borewell Casing Pipes", href: "/products/casing-pipes" },
  { name: "Garden Water Hoses", href: "/products/garden-hose-pipes" },
  { name: "Lay Flat Delivery Tubes", href: "/products/lay-flat-tubes" },
  { name: "Braided High Pressure Pipes", href: "/products/braided-pipes" },
];

export const FOOTER_COMPANY_LINKS = [
  { name: "About The Company", href: "/about-us" },
  { name: "Manufacturing Infrastructure", href: "/infrastructure" },
  { name: "Quality Assurance & Testing", href: "/quality-assurance" },
  { name: "Channel Partner Network", href: "/work-with-us" },
  { name: "Corporate Media & Gallery", href: "/media" },
  { name: "Technical Blog & News", href: "/blog" },
  { name: "Contact & Head Office", href: "/contact-us" },
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms & Conditions", href: "/terms-and-conditions" },
];
