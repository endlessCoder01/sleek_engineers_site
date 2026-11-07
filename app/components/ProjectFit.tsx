"use client";

import { useState } from "react";

const paths = {
  launch: {
    label: "Launch something new",
    title: "Turn the idea into a first version people can use.",
    description:
      "Start with a focused digital product, clear user journeys, and a technical foundation that can grow.",
    services: "Product strategy · UX design · Web or mobile build",
    action: "Plan a launch",
  },
  grow: {
    label: "Grow what we have",
    title: "Make the product faster, clearer, and more valuable.",
    description:
      "We help teams remove friction, improve conversion, and build the features that create real momentum.",
    services: "Product audit · Frontend · Backend systems",
    action: "Find the next move",
  },
  protect: {
    label: "Protect our business",
    title: "Know what is exposed, then make it stronger.",
    description:
      "Get a practical view of risk and a prioritized plan to protect your systems, data, and customers.",
    services: "Security review · Hardening · Monitoring",
    action: "Start a security review",
  },
};

type Path = keyof typeof paths;

export default function ProjectFit() {
  const [selected, setSelected] = useState<Path>("launch");
  const result = paths[selected];

  return (
    <section className="signal section-frame" id="signal">
      <div className="signal-intro">
        <div className="section-kicker">06 / Find your next move</div>
        <h2>Not sure where<br /><span>to start?</span></h2>
        <p>Tell us what is on your mind. We&apos;ll point you in the right direction.</p>
      </div>
      <div className="signal-panel">
        <div className="signal-options" role="tablist" aria-label="Choose your business goal">
          {(Object.keys(paths) as Path[]).map((path, index) => (
            <button
              className={selected === path ? "signal-option is-active" : "signal-option"}
              key={path}
              onClick={() => setSelected(path)}
              role="tab"
              aria-selected={selected === path}
              type="button"
            >
              <span>0{index + 1}</span>{paths[path].label}
            </button>
          ))}
        </div>
        <div className="signal-result" role="tabpanel">
          <span className="signal-label">Your starting point</span>
          <h3>{result.title}</h3>
          <p>{result.description}</p>
          <div className="signal-services">{result.services}</div>
          <a className="button button-dark" href="/contact">{result.action} <ArrowUpRight /></a>
        </div>
      </div>
    </section>
  );
}

function ArrowUpRight() {
  return <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 13 13 3M5 3h8v8" /></svg>;
}
