"use client";

import { useState, useEffect } from "react";

const SECTIONS = [
  { id: "top",        label: "00 / hero" },
  { id: "about",      label: "01 / about" },
  { id: "skills",     label: "02 / stack" },
  { id: "experience", label: "03 / experience" },
  { id: "projects",   label: "04 / projects" },
  { id: "contact",    label: "05 / contact" },
];

export default function SideNav() {
  const [active, setActive] = useState("top");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const p = h.scrollTop / (h.scrollHeight - h.clientHeight);
      setProgress(Math.max(0, Math.min(1, isNaN(p) ? 0 : p)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <aside className="nav">
      <div className="nav-brand">
        <span className="nav-logo">B/</span>
        <span className="nav-name">bashar</span>
      </div>
      <ul className="nav-list">
        {SECTIONS.map((s) => (
          <li key={s.id} className={active === s.id ? "is-active" : ""}>
            <a href={`#${s.id}`} data-cursor>
              <i className="nav-tick" />
              <span>{s.label}</span>
            </a>
          </li>
        ))}
      </ul>
      <div className="nav-foot">
        <div className="nav-prog">
          <i style={{ height: `${progress * 100}%` }} />
        </div>
        <div className="nav-prog-pct">{Math.round(progress * 100)}%</div>
      </div>
    </aside>
  );
}
