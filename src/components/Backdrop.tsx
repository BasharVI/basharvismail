"use client";

import { useEffect, useRef } from "react";

export default function Backdrop() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const c = canvasRef.current;
    if (!c) return;
    const ctx = c.getContext("2d");
    if (!ctx) return;

    let cols = 0;
    let drops: number[] = [];
    let raf: number;
    const glyphs = "01ABCDEF<>{}[]/$_;:|*+#=".split("");
    const fontSize = 14;

    const resize = () => {
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      c.width = Math.floor(window.innerWidth * dpr);
      c.height = Math.floor(window.innerHeight * dpr);
      c.style.width = window.innerWidth + "px";
      c.style.height = window.innerHeight + "px";
      ctx.scale(dpr, dpr);
      cols = Math.ceil(window.innerWidth / fontSize);
      drops = new Array(cols).fill(0).map(() => Math.random() * -100);
    };

    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      const style = getComputedStyle(document.documentElement);
      const accent = style.getPropertyValue("--accent1-rgb").trim() || "57,255,122";
      const bg = style.getPropertyValue("--bg-rgb").trim() || "10,14,10";

      ctx.fillStyle = `rgba(${bg}, 0.08)`;
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
      ctx.font = `${fontSize}px ui-monospace, monospace`;

      for (let i = 0; i < drops.length; i++) {
        if (Math.random() < 0.04) {
          const x = i * fontSize;
          const y = drops[i] * fontSize;
          ctx.fillStyle = `rgba(${accent}, 0.55)`;
          ctx.fillText(glyphs[Math.floor(Math.random() * glyphs.length)], x, y);
          ctx.fillStyle = `rgba(${accent}, 0.12)`;
          ctx.fillText(glyphs[Math.floor(Math.random() * glyphs.length)], x, y - fontSize);
        }
        drops[i] += 1;
        if (drops[i] * fontSize > window.innerHeight && Math.random() > 0.985) {
          drops[i] = Math.random() * -40;
        }
      }
      raf = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="bd" aria-hidden="true">
      <div className="bd-grid" />
      <div className="bd-vignette" />
      <canvas ref={canvasRef} className="bd-matrix" />
      <div className="bd-scanlines" />
    </div>
  );
}
