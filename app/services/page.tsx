import type { Metadata } from "next";
import Link from "next/link";
import BrandLogo from "../components/BrandLogo";
import WebsitePricing from "../components/WebsitePricing";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Sleek Engineering's US$80 website launch package with a one-year domain and the first month of hosting. Hosting is US$15/month.",
};

const services = [
  ["01", "Web development", "Websites and platforms built to load quickly, communicate clearly, and grow with your business.", "React · Next.js · Laravel"],
  ["02", "Mobile development", "Reliable iOS and Android experiences that make your service easier to access wherever your customers are.", "React Native · Product design"],
  ["03", "Backend systems", "The dependable infrastructure behind great products: APIs, integrations, data, and internal tools.", "Python · Node.js · Laravel"],
  ["04", "Cybersecurity", "Practical security reviews and hardening that reduce risk without slowing your team down.", "Audits · Risk · Monitoring"],
];

export default function ServicesPage() {
  return <main><PageHeader current="Services" title={<>The right tools for<br /><em>your next chapter.</em></>} /><section className="services-page section-frame"><p className="page-lead">We design and build the digital foundations that help ambitious businesses move with confidence.</p><div className="service-page-grid">{services.map(([number, title, description, tags]) => <article className="service-page-card" key={number}><span className="card-number">{number}</span><h2>{title}</h2><p>{description}</p><span className="service-tags">{tags}</span></article>)}</div></section><WebsitePricing /><section className="page-cta section-frame"><p className="section-kicker">Not sure what you need?</p><h2>Bring us the problem.<br /><em>We&apos;ll find the path.</em></h2><a className="button button-dark" href="/contact">Talk to an engineer <ArrowUpRight /></a></section><SiteFooter /></main>;
}

function PageHeader({ current, title }: { current: string; title: React.ReactNode }) {
  return <header className="page-header section-frame"><SiteNav /><p className="eyebrow"><span className="eyebrow-dot" />{current}</p><h1>{title}</h1></header>;
}
function SiteNav() {
  return <nav className="nav-shell page-nav" aria-label="Main navigation"><Link className="brand" href="/" aria-label="Sleek Engineering home"><BrandLogo /></Link><div className="nav-links"><a href="/about">About</a><a href="/services">Services</a><a href="#pricing">Pricing</a><a href="/work">Work</a><a href="/contact">Contact</a></div><a className="nav-cta" href="/contact">Start a project <ArrowUpRight /></a></nav>;
}
function SiteFooter() {
  return <footer className="footer section-frame"><div className="footer-brand"><Link className="brand" href="/" aria-label="Sleek Engineering home"><BrandLogo /></Link><p>Digital products with<br />purpose, from Zimbabwe.</p></div><div className="footer-meta"><a href="mailto:info@sleekengineering.co.zw">info@sleekengineering.co.zw</a><span>Harare, Zimbabwe · Available worldwide</span><span>© 2026 Sleek Engineering</span></div></footer>;
}
function ArrowUpRight() {
  return <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 13 13 3M5 3h8v8" /></svg>;
}
