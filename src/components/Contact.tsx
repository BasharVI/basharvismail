"use client";

import { useState, useRef, useEffect } from "react";
import Reveal from "./Reveal";
import { PORTFOLIO } from "@/lib/data";

type LogLine = { t: "in" | "out"; v: string };

export default function Contact() {
  const d = PORTFOLIO;
  const [cmd, setCmd] = useState("");
  const [log, setLog] = useState<LogLine[]>([
    { t: "out", v: "welcome. type `help` for commands." },
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const logRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (logRef.current) {
      logRef.current.scrollTop = logRef.current.scrollHeight;
    }
  }, [log]);

  const run = (raw: string) => {
    const c = raw.trim().toLowerCase();
    const push = (lines: string[]) =>
      setLog((L) => [
        ...L,
        { t: "in", v: raw },
        ...lines.map((v) => ({ t: "out" as const, v })),
      ]);
    if (!c) return;
    switch (c) {
      case "help":
        push([
          "available commands:",
          "  about     → who I am",
          "  email     → my address",
          "  phone     → my number",
          "  resume    → download CV",
          "  social    → links",
          "  skills    → tech stack",
          "  clear     → wipe the buffer",
        ]);
        break;
      case "about":
        push([
          `${d.name} · ${d.role}`,
          `${d.location} · 4+ years exp · 1 year Dubai UAE`,
          "MERN stack · Next.js · NestJS · Docker",
        ]);
        break;
      case "email":
        push([`→ ${d.email}`]);
        break;
      case "phone":
        push([`→ ${d.phone}`]);
        break;
      case "resume": {
        push(["fetching resume…", `→ /resume/Bashar_Ismail_Resume.pdf`]);
        const a = document.createElement("a");
        a.href = d.resumeUrl;
        a.download = "Bashar_Ismail_Resume.pdf";
        a.click();
        break;
      }
      case "social":
        push([
          `github:    github.com/${d.github}`,
          `linkedin:  linkedin.com/in/${d.linkedin}`,
          `email:     ${d.email}`,
        ]);
        break;
      case "skills":
        push([
          "frontend:  React.js · Next.js · TypeScript · Tailwind",
          "backend:   Node.js · NestJS · Express.js · MongoDB",
          "devops:    Docker · CI/CD · GitHub Actions · Stripe",
        ]);
        break;
      case "clear":
        setLog([]);
        break;
      case "ls":
      case "ls -la":
        push(["about.md  experience.log  projects/  contact.sh  resume.pdf"]);
        break;
      case "sudo rm -rf /":
      case "rm -rf /":
        push(["nice try."]);
        break;
      default:
        push([`-bash: ${c}: command not found. try \`help\`.`]);
    }
    setCmd("");
  };

  return (
    <section id="contact" className="sec sec-contact">
      <div className="sec-hd">
        <Reveal className="sec-hd-inner">
          <span className="sec-idx">[05]</span>
          <span className="sec-name">contact</span>
          <span className="sec-rule" />
          <span className="sec-hint">{"// you've reached the end"}</span>
        </Reveal>
      </div>
      <div className="ct-wrap">
        <div className="ct-term" onClick={() => inputRef.current?.focus()}>
          <div className="ct-bar">
            <span className="tl tl-r" />
            <span className="tl tl-y" />
            <span className="tl tl-g" />
            <span className="ct-title">bashar@portfolio — ~/contact</span>
          </div>
          <div ref={logRef} className="ct-log">
            {log.map((l, i) => (
              <div key={i} className={`ct-line ct-${l.t}`}>
                {l.t === "in" ? (
                  <>
                    <span className="ct-p">›</span> {l.v}
                  </>
                ) : (
                  l.v
                )}
              </div>
            ))}
          </div>
          <form
            className="ct-input"
            onSubmit={(e) => {
              e.preventDefault();
              run(cmd);
            }}
          >
            <span className="ct-p">›</span>
            <input
              ref={inputRef}
              value={cmd}
              onChange={(e) => setCmd(e.target.value)}
              spellCheck={false}
              autoCapitalize="off"
              autoCorrect="off"
              placeholder="type `help` …"
            />
            <span className="ct-caret">▍</span>
          </form>
        </div>
        <Reveal className="ct-side" delay={120}>
          <div className="ct-tile">
            <div className="ct-tile-k">email</div>
            <a href={`mailto:${d.email}`} className="ct-tile-v">
              {d.email}
            </a>
          </div>
          <div className="ct-tile">
            <div className="ct-tile-k">github</div>
            <a
              href={`https://github.com/${d.github}`}
              className="ct-tile-v"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/{d.github}
            </a>
          </div>
          <div className="ct-tile">
            <div className="ct-tile-k">linkedin</div>
            <a
              href={`https://linkedin.com/in/${d.linkedin}`}
              className="ct-tile-v"
              target="_blank"
              rel="noopener noreferrer"
            >
              /in/{d.linkedin}
            </a>
          </div>
          <div className="ct-tile">
            <div className="ct-tile-k">resume</div>
            <a href={d.resumeUrl} download className="ct-tile-v">
              download PDF ↓
            </a>
          </div>
        </Reveal>
      </div>
      <footer className="ft-foot-line">
        <span>{"// hand-crafted portfolio · no trackers · open to work."}</span>
        <span>
          © {new Date().getFullYear()} {d.name} — built with precision.
        </span>
      </footer>
    </section>
  );
}
