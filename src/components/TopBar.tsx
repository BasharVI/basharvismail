"use client";

import { useState } from "react";
import { PORTFOLIO } from "@/lib/data";

export default function TopBar() {
  const [open, setOpen] = useState(false);
  const d = PORTFOLIO;

  const close = () => setOpen(false);

  return (
    <>
      <header className="topbar">
        <div className="tb-left">
          <span className="tb-logo">B/</span>
          <span className="tb-name">iambashar.dev</span>
        </div>
        <div className="tb-right">
          <a href="#projects" data-cursor className="tb-link">projects</a>
          <a href="#experience" data-cursor className="tb-link">experience</a>
          <a href="#contact" data-cursor className="tb-link">contact</a>
          <a href={d.resumeUrl} download className="tb-dl tb-link" data-cursor>
            resume.pdf ↓
          </a>
          <button
            className={`tb-burger${open ? " is-open" : ""}`}
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {open && (
        <nav className="tb-mobile-menu" onClick={close}>
          <a href="#about">about</a>
          <a href="#skills">stack</a>
          <a href="#experience">experience</a>
          <a href="#projects">projects</a>
          <a href="#contact">contact</a>
          <a href={d.resumeUrl} download className="tb-mobile-dl">
            download resume ↓
          </a>
        </nav>
      )}
    </>
  );
}
