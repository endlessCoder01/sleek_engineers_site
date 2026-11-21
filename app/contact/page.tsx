import Link from "next/link";
import BrandLogo from "../components/BrandLogo";
import { createPageMetadata } from "../lib/site";

export const metadata = createPageMetadata({
  title: "Contact",
  description: "Contact Sleek Engineering in Harare, Zimbabwe for website development, mobile apps, or cybersecurity. Email info@sleekengineering.co.zw.",
  path: "/contact",
});

export default function ContactPage() {
  return <main><PageHeader current="Contact" title={<>Let&apos;s make<br /><em>something useful.</em></>} /><section className="contact-page section-frame"><div><p className="page-lead">Tell us what you&apos;re building, what is getting in the way, or what you want to improve. We&apos;ll get back to you by email.</p><div className="contact-details"><span>Based in</span><strong>Harare, Zimbabwe<br />Working worldwide</strong><span>Email us</span><a href="mailto:info@sleekengineering.co.zw">info@sleekengineering.co.zw</a></div></div><form className="feedback-form contact-form" action="mailto:info@sleekengineering.co.zw" method="post" encType="text/plain"><label htmlFor="contact-name">Your name</label><input id="contact-name" name="name" type="text" placeholder="Jane Doe" required /><label htmlFor="contact-email">Email address</label><input id="contact-email" name="email" type="email" placeholder="jane@company.com" required /><label htmlFor="contact-message">Tell us a little more</label><textarea id="contact-message" name="message" rows={6} placeholder="What are you hoping to build?" required /><button className="button button-dark" type="submit">Send your note <ArrowUpRight /></button><p className="form-note">Your email app will open with your message addressed to us.</p></form></section><SiteFooter /></main>;
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
