"use client";

import { useState, useEffect } from "react";
import Reveal from "./Reveal";
import { PORTFOLIO } from "@/lib/data";

function Typewriter({
  phrases,
  speed = 60,
  hold = 1500,
}: {
  phrases: string[];
  speed?: number;
  hold?: number;
}) {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<"type" | "erase">("type");

  useEffect(() => {
    const phrase = phrases[idx % phrases.length];
    let t: ReturnType<typeof setTimeout>;
    if (phase === "type") {
      if (text.length < phrase.length) {
        t = setTimeout(() => setText(phrase.slice(0, text.length + 1)), speed);
      } else {
        t = setTimeout(() => setPhase("erase"), hold);
      }
    } else {
      if (text.length > 0) {
        t = setTimeout(() => setText(phrase.slice(0, text.length - 1)), speed / 2);
      } else {
        setIdx((n) => n + 1);
        setPhase("type");
      }
    }
    return () => clearTimeout(t);
  }, [text, phase, idx, phrases, speed, hold]);

  return (
    <span className="tw">
      {text}
      <span className="tw-caret">▍</span>
    </span>
  );
}

function LiveClock({ tz }: { tz: string }) {
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    setTime(new Date());
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  if (!time) return <span className="mono-tab">--:--:--</span>;

  const fmt = new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    timeZone: tz,
  });

  return <span className="mono-tab">{fmt.format(time)}</span>;
}

export default function Hero() {
  const d = PORTFOLIO;

  return (
    <section className="hero" id="top">
      <div className="hero-grid" />
      <div className="hero-scan" />
      <div className="hero-inner">
        <div className="hero-meta">
          <span className="meta-cell">
            <i className="dot dot-live" />
            <span>session active</span>
          </span>
          <span className="meta-cell">
            <span className="meta-k">user</span>
            <span>bashar</span>
          </span>
          <span className="meta-cell">
            <span className="meta-k">host</span>
            <span>basharvismail.dev</span>
          </span>
          <span className="meta-cell">
            <span className="meta-k">tty</span>
            <span>/dev/portfolio</span>
          </span>
        </div>

        <h1 className="hero-name" aria-label={d.name}>
          <span className="hn-line">
            <span className="hn-prompt">$&nbsp;</span>
            <span className="hn-cmd">whoami</span>
          </span>
          <span className="hn-out">{d.name}</span>
        </h1>

        <div className="hero-role">
          <span className="hn-prompt">&gt;&nbsp;</span>
          <Typewriter phrases={d.taglines} />
        </div>

        <Reveal className="hero-status" delay={400}>
          <div className="status-line">
            <span className="status-k">STATUS</span>
            <span className="status-v">
              <i className="dot dot-ok" />
              {d.status.message}
            </span>
          </div>
          <div className="status-line">
            <span className="status-k">NOW</span>
            <span className="status-v">building {d.status.currentlyBuilding}</span>
          </div>
          <div className="status-line">
            <span className="status-k">LOC</span>
            <span className="status-v">
              {d.location} · <LiveClock tz={d.timezone} /> local
            </span>
          </div>
        </Reveal>

        <Reveal className="hero-keys" delay={600}>
          <a href="#projects" className="key-cta">
            <span className="key-k">↵</span>
            <span>view_projects</span>
          </a>
          <a href={`mailto:${d.email}`} className="key-cta sub">
            <span className="key-k">m</span>
            <span>get_in_touch</span>
          </a>
          <a href={d.resumeUrl} download className="key-cta sub">
            <span className="key-k">r</span>
            <span>download_resume</span>
          </a>
        </Reveal>
      </div>

      <div className="hero-corner tl">
        <div>portfolio.v1</div>
        <div>mern_stack_dev</div>
      </div>
      <div className="hero-corner tr">
        <div>4+ years · Dubai + Kerala</div>
        <div>available_now</div>
      </div>
      <div className="hero-corner bl">
        <div>↓ ↓ ↓</div>
      </div>
      <div className="hero-corner br">
        <div>{d.timezone}</div>
        <div>en_US.UTF-8</div>
      </div>
    </section>
  );
}
