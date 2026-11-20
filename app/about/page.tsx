import type { Metadata } from "next";
import Link from "next/link";
import BrandLogo from "../components/BrandLogo";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn how Sleek Engineering helps ambitious businesses build better digital products from Zimbabwe.",
};

const principles = [
  ["Clarity over complexity", "We make the hard things understandable, from the first conversation to the final handover."],
  ["Progress over perfection", "We work in focused steps, learning quickly and creating value early."],
  ["Trust by default", "We communicate honestly, build securely, and treat your business like it is our own."],
];

export default function AboutPage() {
  return (
    <main>
      <PageHeader current="About us" title={<>Good work starts with<br /><em>good questions.</em></>} />
      <section className="page-intro section-frame">
        <div className="section-kicker">01 / Our story</div>
        <div>
          <p className="page-lead">Sleek Engineering is a Zimbabwean software company helping growing teams turn ambitious ideas into useful, resilient digital products.</p>
          <p className="page-copy">We bring product thinking, design, engineering, and cybersecurity together under one roof. That means fewer handoffs, clearer decisions, and technology that stays aligned with the people it is meant to serve.</p>
        </div>
      </section>
      <section className="principles section-frame">
        <div className="section-kicker">02 / What guides us</div>
        <div className="principle-list">
          {principles.map(([title, description], index) => (
            <article className="principle-row" key={title}>
              <span>0{index + 1}</span><div><h2>{title}</h2><p>{description}</p></div>
            </article>
          ))}
        </div>
      </section>
      <section className="page-cta section-frame">
        <p className="section-kicker">Ready when you are</p>
        <h2>Let&apos;s make your next move <em>count.</em></h2>
        <a className="button button-dark" href="/contact">Start a conversation <ArrowUpRight /></a>
      </section>
      <SiteFooter />
    </main>
  );
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
