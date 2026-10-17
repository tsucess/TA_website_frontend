

export interface NavLink {
  key: number;
  label: string;
  href: string;
}
export interface FooterLink {
  key: number;
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { key: 1, label: "Home", href: "/" },
  { key: 2, label: "About", href: "/about" },
  { key: 3, label: "Mold", href: "/mold" },
  { key: 4, label: "Services", href: "/services" },
  { key: 5, label: "Events", href: "/events" },
  { key: 6, label: "Resources", href: "/resources" },
  { key: 7, label: "Books", href: "/books" },
  { key: 8, label: "Speaking", href: "/speaking" },
  { key: 9, label: "Contact", href: "/contact" },
];
export const footerLinks: FooterLink[] = [
  { key: 1, label: "Terms & Conditions", href: "/" },
  { key: 2, label: "Privacy Policy", href: "/" },
  { key: 3, label: "Cookie Policy", href: "/mold" },
  { key: 4, label: "Press", href: "/services" },
];