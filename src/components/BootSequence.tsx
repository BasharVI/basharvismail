"use client";

import { useState, useEffect } from "react";

const BOOT_LINES = [
  { t: 0,    v: "BIOS v4.1.0 — iambashar.dev — POST", k: "i" },
  { t: 160,  v: "  mem: 16GiB ok · disk: 512GB ok · net: 100Mb up", k: "i" },
  { t: 340,  v: "[ OK ] mounting /portfolio", k: "ok" },
  { t: 500,  v: "[ OK ] resolving brand tokens", k: "ok" },
  { t: 660,  v: "[ OK ] hydrating projects (3 case studies)", k: "ok" },
  { t: 820,  v: "[ OK ] loading experience (4+ years · 1yr UAE)", k: "ok" },
  { t: 980,  v: "[ OK ] indexing skills: react · node · mongodb", k: "ok" },
  { t: 1140, v: "[ OK ] subscribing to status feed", k: "ok" },
  { t: 1300, v: "[ OK ] cursor: engaged · stack: MERN", k: "ok" },
  { t: 1460, v: "[ OK ] warm-up complete · all systems nominal", k: "ok" },
  { t: 1620, v: "ready in 1.62s · welcome.", k: "rdy" },
];

const TOTAL_DURATION = 5000;

export default function BootSequence({ onDone }: { onDone: () => void }) {
  const [lines, setLines] = useState<typeof BOOT_LINES>([]);

  useEffect(() => {
    const timers = BOOT_LINES.map((L) =>
      setTimeout(() => setLines((arr) => [...arr, L]), L.t)
    );
    const exitT = setTimeout(onDone, TOTAL_DURATION);
    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(exitT);
    };
  }, [onDone]);

  return (
    <div className="boot">
      <div className="boot-inner">
        <div className="boot-hd">
          <span className="dot dot-live" />
          <span>iambashar.dev — boot</span>
        </div>
        <pre className="boot-log">
          {lines.map((l, i) => (
            <div key={i} className={`boot-l boot-${l.k}`}>{l.v}</div>
          ))}
        </pre>
      </div>
      <div className="boot-noise" aria-hidden="true" />
    </div>
  );
}
