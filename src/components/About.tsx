"use client";

import Reveal from "./Reveal";
import { PORTFOLIO } from "@/lib/data";

export default function About() {
  const d = PORTFOLIO;

  return (
    <section id="about" className="sec sec-about">
      <div className="sec-hd">
        <Reveal className="sec-hd-inner">
          <span className="sec-idx">[01]</span>
          <span className="sec-name">about</span>
          <span className="sec-rule" />
          <span className="sec-hint">cat ~/about.md</span>
        </Reveal>
      </div>
      <div className="about-grid">
        <Reveal className="about-prose">
          {d.about.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </Reveal>
        <Reveal className="about-side" delay={120}>
          <div className="card-lite">
            <div className="cl-row">
              <span>name</span>
              <b>bashar_v_ismail</b>
            </div>
            <div className="cl-row">
              <span>role</span>
              <b>full_stack_developer</b>
            </div>
            <div className="cl-row">
              <span>loc</span>
              <b>{d.location}</b>
            </div>
            <div className="cl-row">
              <span>experience</span>
              <b>4+ years</b>
            </div>
            <div className="cl-row">
              <span>uae_exp</span>
              <b>1 yr · Dubai</b>
            </div>
            <div className="cl-row">
              <span>stack</span>
              <b>MERN + Next.js + Docker</b>
            </div>
            <div className="cl-row">
              <span>availability</span>
              <b>immediate</b>
            </div>
          </div>
          <div className="card-lite muted">
            <div className="cl-title">{"// education"}</div>
            <ul className="cl-list">
              <li>{d.education.degree}</li>
              <li>{d.education.institution}</li>
              <li>{d.education.period}</li>
            </ul>
          </div>
          <div className="card-lite muted">
            <div className="cl-title">{"// certifications"}</div>
            <ul className="cl-list">
              {d.certifications.map((cert, i) => (
                <li key={i}>
                  {cert.title} · {cert.year}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
