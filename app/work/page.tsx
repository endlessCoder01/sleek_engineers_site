import type { Metadata } from "next";
import Link from "next/link";
import BrandLogo from "../components/BrandLogo";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected digital product work and capabilities from Sleek Engineering.",
};

const projects = [
  ["01", "Digital foundations", "A flexible web platform for a growing business ready to look as capable as it is.", "Web · Strategy · Development"],
  ["02", "Mobile, made useful", "A focused mobile experience that puts a service in customers' hands, wherever they are.", "Mobile · UX · React Native"],
  ["03", "Safer systems", "A security-first review that gave a team a clearer view of risk and a practical plan to reduce it.", "Cybersecurity · Backend"],
];

export default function WorkPage() {
  return <main><PageHeader current="Selected work" title={<>Ideas are easy.<br /><em>Momentum is built.</em></>} /><section className="work-page section-frame"><p className="page-lead">A selection of the problems we solve and the kinds of outcomes we help teams create.</p><div className="project-list">{projects.map(([number, title, description, tags]) => <article className="project-row" key={number}><span className="card-number">{number}</span><div><h2>{title}</h2><p>{description}</p><span className="service-tags">{tags}</span></div><ArrowUpRight /></article>)}</div></section><section className="page-cta section-frame"><p className="section-kicker">Your project could be next</p><h2>Let&apos;s build something<br /><em>worth talking about.</em></h2><a className="button button-dark" href="/contact">Start a project <ArrowUpRight /></a></section><SiteFooter /></main>;
}
function PageHeader({ current, title }: { current: string; title: React.ReactNode }) {
  return <header className="page-header section-frame"><SiteNav /><p className="eyebrow"><span className="eyebrow-dot" />{current}</p><h1>{title}</h1></header>;
}
function SiteNav() {
  return <nav className="nav-shell page-nav" aria-label="Main navigation"><Link className="brand" href="/" aria-label="Sleek Engineering home"><BrandLogo /></Link><div className="nav-links"><a href="/about">About</a><a href="/services">Services</a><a href="/work">Work</a><a href="/contact">Contact</a></div><a className="nav-cta" href="/contact">Start a project <ArrowUpRight /></a></nav>;
}
function SiteFooter() {
  return <footer className="footer section-frame"><div className="footer-brand"><Link className="brand" href="/" aria-label="Sleek Engineering home"><BrandLogo /></Link><p>Digital products with<br />purpose, from Zimbabwe.</p></div><div className="footer-meta"><a href="mailto:info@sleekengineering.co.zw">info@sleekengineering.co.zw</a><span>Harare, Zimbabwe · Available worldwide</span><span>© 2026 Sleek Engineering</span></div></footer>;
}
function ArrowUpRight() {
  return <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 13 13 3M5 3h8v8" /></svg>;
}
