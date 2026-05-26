"use client";

import Reveal from "./Reveal";
import { PORTFOLIO } from "@/lib/data";

export default function Experience() {
  const d = PORTFOLIO;

  return (
    <section id="experience" className="sec sec-xp">
      <div className="sec-hd">
        <Reveal className="sec-hd-inner">
          <span className="sec-idx">[03]</span>
          <span className="sec-name">experience</span>
          <span className="sec-rule" />
          <span className="sec-hint">tail -f ~/.career.log</span>
        </Reveal>
      </div>
      <ol className="xp-list">
        {d.experience.map((x, i) => (
          <Reveal as="li" className="xp" key={`${x.org}-${x.period}`} delay={i * 80}>
            <div className="xp-rail">
              <span className="xp-bullet" />
              <span className="xp-line" />
            </div>
            <div className="xp-body">
              <div className="xp-head">
                <div className="xp-role">{x.role}</div>
                <div className="xp-org">
                  @ {x.org} · {x.location}
                </div>
                <div className="xp-period">{x.period}</div>
              </div>
              <ul className="xp-bullets">
                {x.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
