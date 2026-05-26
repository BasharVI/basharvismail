"use client";

import Reveal from "./Reveal";
import { PORTFOLIO } from "@/lib/data";

export default function Projects() {
  const d = PORTFOLIO;

  return (
    <section id="projects" className="sec sec-featured">
      <div className="sec-hd">
        <Reveal className="sec-hd-inner">
          <span className="sec-idx">[04]</span>
          <span className="sec-name">projects</span>
          <span className="sec-rule" />
          <span className="sec-hint">{"// case studies · shipped & live"}</span>
        </Reveal>
      </div>
      <div className="ft-list">
        {d.featured.map((p, i) => (
          <Reveal as="article" key={p.id} className="ft" delay={i * 120}>
            <div className="ft-rail">
              <span className="ft-yr">{p.year}</span>
              <span className="ft-id">/{p.id}</span>
            </div>
            <div className="ft-main">
              <div className="ft-head">
                <h3 className="ft-title">{p.title}</h3>
                <div className="ft-sub">{p.sub}</div>
              </div>
              <p className="ft-desc">{p.desc}</p>
              <div className="ft-stats">
                {p.stats.map((s) => (
                  <div key={s.label} className="ft-stat">
                    <div className="ft-stat-v">{s.value}</div>
                    <div className="ft-stat-l">{s.label}</div>
                  </div>
                ))}
              </div>
              <div className="ft-foot">
                <div className="ft-tech">
                  {p.tech.map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="ft-role">{p.role}</div>
              </div>
              <div className="ft-scan" aria-hidden="true" />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
