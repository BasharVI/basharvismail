"use client";

import type { CSSProperties } from "react";
import Reveal from "./Reveal";
import { PORTFOLIO } from "@/lib/data";

export default function Skills() {
  const d = PORTFOLIO;
  const groups = Object.entries(d.skills);

  return (
    <section id="skills" className="sec sec-skills">
      <div className="sec-hd">
        <Reveal className="sec-hd-inner">
          <span className="sec-idx">[02]</span>
          <span className="sec-name">stack</span>
          <span className="sec-rule" />
          <span className="sec-hint">-- 4+ yrs, opinionated</span>
        </Reveal>
      </div>
      <div className="skills-grid">
        {groups.map(([g, items], gi) => (
          <Reveal className="skill-group" key={g} delay={gi * 80}>
            <div className="sg-title">
              <span className="sg-bracket">{"{"}</span>
              <span className="sg-name">{g}</span>
              <span className="sg-bracket">{"}"}</span>
            </div>
            <ul className="sg-list">
              {items.map((s) => (
                <li key={s.name} className="sk">
                  <span className="sk-name">{s.name}</span>
                  <span className="sk-bar">
                    <i
                      className="sk-fill"
                      style={{ "--w": `${s.level}%` } as CSSProperties & { "--w": string }}
                    />
                  </span>
                  <span className="sk-pct">{s.level}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
