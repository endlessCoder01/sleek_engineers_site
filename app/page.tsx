import ProjectFit from "./components/ProjectFit";

const services = [
  {
    number: "01",
    title: "Web platforms",
    description:
      "Fast, conversion-focused websites and products that make your business easier to find, trust, and use.",
    tags: ["Next.js", "React", "Laravel"],
  },
  {
    number: "02",
    title: "Mobile experiences",
    description:
      "Mobile apps that feel native, work reliably, and help your customers stay connected to your business.",
    tags: ["React Native", "iOS", "Android"],
  },
  {
    number: "03",
    title: "Secure by design",
    description:
      "Practical cybersecurity and resilient engineering that protects your data, customers, and reputation.",
    tags: ["Audits", "Hardening", "Monitoring"],
  },
];

const approach = [
  ["01", "Listen closely", "We start with your goals, users, and the realities of your market."],
  ["02", "Build clearly", "You get focused milestones, transparent communication, and no black boxes."],
  ["03", "Grow confidently", "We ship a strong foundation that is ready to evolve with your business."],
];

function ArrowUpRight() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <path d="M3 13 13 3M5 3h8v8" />
    </svg>
  );
}

function Spark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m12 2 1.7 7.3L21 11l-7.3 1.7L12 20l-1.7-7.3L3 11l7.3-1.7L12 2Z" />
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      <nav className="nav-shell" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Sleek Engineering home">
          <span className="brand-mark">SE</span>
          <span className="brand-name">
            Sleek
            <br />
            Engineering
          </span>
        </a>
        <div className="nav-links">
          <a href="/services">Services</a>
          <a href="/about">Approach</a>
          <a href="/contact">Contact</a>
        </div>
        <a className="nav-cta" href="/contact">
          Start a project <ArrowUpRight />
        </a>
      </nav>

      <section className="hero section-frame" id="top">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="eyebrow-dot" />
            Digital products from Zimbabwe
          </p>
          <h1>
            Build bold.
            <br />
            <em>Move smart.</em>
          </h1>
          <p className="hero-lede">
            We help ambitious businesses turn good ideas into fast, secure
            digital products people love to use.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#contact">
              Tell us what you&apos;re building <ArrowUpRight />
            </a>
            <a className="text-link" href="/services">
              Explore our work <span>↓</span>
            </a>
          </div>
        </div>
        <div className="hero-art" aria-label="Abstract illustration of connected digital systems">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="hero-core">
            <span>SE</span>
            <small>BUILD<br />BETTER</small>
          </div>
          <span className="art-label label-one">WEB</span>
          <span className="art-label label-two">MOBILE</span>
          <span className="art-label label-three">SECURE</span>
          <span className="art-cross cross-one">+</span>
          <span className="art-cross cross-two">+</span>
        </div>
      </section>

      <section className="marquee-band" aria-label="Our capabilities">
        <div className="marquee-content">
          <span>Product thinking</span><i>✦</i><span>Clean engineering</span><i>✦</i>
          <span>Human-centred design</span><i>✦</i><span>Secure foundations</span><i>✦</i>
        </div>
      </section>

      <section className="intro section-frame">
        <div className="section-kicker">01 / What we do</div>
        <div className="intro-content">
          <h2>Technology should make progress feel <span>possible.</span></h2>
          <p>
            Whether you&apos;re a growing SME or an established team ready for
            what&apos;s next, we bring strategy, design, and engineering together
            to make the complex feel simple.
          </p>
        </div>
      </section>

      <section className="services section-frame" id="services">
        <div className="section-heading">
          <div>
            <div className="section-kicker">02 / Our services</div>
            <h2>Built for the <span>next move.</span></h2>
          </div>
          <p>From first sketch to lasting support, we partner with you at every stage.</p>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <span className="card-number">{service.number}</span>
              <div className="card-icon"><Spark /></div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="tag-list">
                {service.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
              <a href="/services" className="card-link" aria-label={`Learn more about ${service.title}`}>
                Learn more <ArrowUpRight />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="statement section-frame">
        <div className="statement-mark">“</div>
        <blockquote>
          The best technology doesn&apos;t just work.
          <br />
          <span>It creates momentum.</span>
        </blockquote>
        <p>— The Sleek Engineering principle</p>
      </section>

      <section className="approach section-frame" id="approach">
        <div className="section-kicker">03 / How we work</div>
        <div className="approach-grid">
          <h2>A better process makes <span>better products.</span></h2>
          <div className="approach-list">
            {approach.map(([number, title, description]) => (
              <div className="approach-row" key={number}>
                <span className="row-number">{number}</span>
                <div><h3>{title}</h3><p>{description}</p></div>
                <ArrowUpRight />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="stack section-frame" aria-labelledby="stack-title">
        <div className="stack-copy">
          <div className="section-kicker">04 / Our toolkit</div>
          <h2>Serious tools.<br /><span>Human results.</span></h2>
          <p>We choose technology for the job, not the trend. Our stack keeps products fast, flexible, and ready for what&apos;s next.</p>
        </div>
        <div className="stack-list" id="stack-title">
          <div><strong>Frontend</strong><span>React · Next.js · React Native</span></div>
          <div><strong>Backend</strong><span>Python · Node.js · Laravel</span></div>
          <div><strong>Security</strong><span>Audits · Risk reviews · Hardening</span></div>
        </div>
      </section>

      <section className="contact section-frame" id="contact">
        <div className="contact-heading">
          <div className="section-kicker">05 / Let&apos;s talk</div>
          <h2>Have a challenge?<br /><em>Let&apos;s make it real.</em></h2>
          <p>Tell us what you&apos;re working on, or share feedback about your experience with Sleek Engineering.</p>
        </div>
        <form className="feedback-form" action="mailto:hello@sleekengineers.co.zw" method="post" encType="text/plain">
          <label htmlFor="name">Your name</label>
          <input id="name" name="name" type="text" placeholder="Jane Doe" required />
          <label htmlFor="email">Email address</label>
          <input id="email" name="email" type="email" placeholder="jane@company.com" required />
          <label htmlFor="message">How can we help?</label>
          <textarea id="message" name="message" rows={4} placeholder="A new website, mobile app, security review..." required />
          <button className="button button-light" type="submit">Send your note <ArrowUpRight /></button>
          <p className="form-note">Your email app will open with your message addressed to hello@sleekengineers.co.zw.</p>
        </form>
      </section>

      <ProjectFit />

      <footer className="footer section-frame">
        <div className="footer-brand">
          <span className="brand-mark">SE</span>
          <p>Digital products with<br />purpose, from Zimbabwe.</p>
        </div>
        <div className="footer-meta">
          <a href="mailto:hello@sleekengineers.co.zw">hello@sleekengineers.co.zw</a>
          <span>Harare, Zimbabwe · Available worldwide</span>
          <span>© 2026 Sleek Engineering</span>
        </div>
      </footer>
    </main>
  );
}
