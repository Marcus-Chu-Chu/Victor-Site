"use client";

import { useEffect, useRef } from "react";

const SPACING = 30;
const RADIUS = 190;

/**
 * The hero's instrument field: a ruled lattice of tick marks with a slow
 * drifting lens. Pointer takes the lens over when it is on the canvas.
 * Static single frame under reduced motion.
 */
export function HeroLattice({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");

    let width = 0;
    let height = 0;
    let raf = 0;
    let visible = true;
    let t = 0;

    // lens position + pointer target
    const lens = { x: 0, y: 0 };
    const pointer = { x: 0, y: 0, active: false };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      lens.x = width * 0.62;
      lens.y = height * 0.42;
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      if (width === 0 || height === 0) return;

      // ruled ground
      ctx.lineWidth = 1;
      ctx.strokeStyle = "oklch(0.55 0.225 262 / 0.1)";
      for (let y = SPACING * 2; y < height; y += SPACING * 2) {
        ctx.beginPath();
        ctx.moveTo(0, Math.round(y) + 0.5);
        ctx.lineTo(width, Math.round(y) + 0.5);
        ctx.stroke();
      }
      ctx.strokeStyle = "oklch(0.55 0.225 262 / 0.07)";
      for (let x = SPACING * 3; x < width; x += SPACING * 3) {
        ctx.beginPath();
        ctx.moveTo(Math.round(x) + 0.5, 0);
        ctx.lineTo(Math.round(x) + 0.5, height);
        ctx.stroke();
      }

      const cols = Math.ceil(width / SPACING) + 1;
      const rows = Math.ceil(height / SPACING) + 1;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * SPACING;
          const y = j * SPACING;
          const dx = x - lens.x;
          const dy = y - lens.y;
          const dist = Math.hypot(dx, dy);
          const f = Math.max(0, 1 - dist / RADIUS);
          const ease = f * f * (3 - 2 * f); // smoothstep

          const size = 3.4 + ease * 6.4;
          const alpha = 0.32 + ease * 0.6;
          const push = ease * 8;
          const nx = dist > 0.001 ? x + (dx / dist) * push : x;
          const ny = dist > 0.001 ? y + (dy / dist) * push : y;

          ctx.strokeStyle =
            ease > 0.58
              ? `oklch(0.7 0.17 72 / ${alpha})`
              : `oklch(0.5 0.21 262 / ${alpha})`;
          ctx.lineWidth = ease > 0.4 ? 1.6 : 1.1;
          ctx.beginPath();
          ctx.moveTo(nx - size / 2, ny);
          ctx.lineTo(nx + size / 2, ny);
          ctx.moveTo(nx, ny - size / 2);
          ctx.lineTo(nx, ny + size / 2);
          ctx.stroke();
        }
      }

      // lens — the measuring instrument
      ctx.strokeStyle = "oklch(0.55 0.225 262 / 0.34)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(lens.x, lens.y, RADIUS * 0.52, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([2, 6]);
      ctx.strokeStyle = "oklch(0.55 0.225 262 / 0.22)";
      ctx.beginPath();
      ctx.arc(lens.x, lens.y, RADIUS * 0.8, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);

      // crosshair at the point of measurement
      const arm = 11;
      const gap = 4;
      ctx.strokeStyle = "oklch(0.7 0.17 72 / 0.9)";
      ctx.lineWidth = 1.6;
      ctx.beginPath();
      ctx.moveTo(lens.x - arm, lens.y);
      ctx.lineTo(lens.x - gap, lens.y);
      ctx.moveTo(lens.x + gap, lens.y);
      ctx.lineTo(lens.x + arm, lens.y);
      ctx.moveTo(lens.x, lens.y - arm);
      ctx.lineTo(lens.x, lens.y - gap);
      ctx.moveTo(lens.x, lens.y + gap);
      ctx.lineTo(lens.x, lens.y + arm);
      ctx.stroke();
    };

    const tick = () => {
      t += 0.0042;
      const driftX = width * (0.5 + 0.26 * Math.cos(t * 0.9));
      const driftY = height * (0.46 + 0.3 * Math.sin(t * 1.31));
      const targetX = pointer.active ? pointer.x : driftX;
      const targetY = pointer.active ? pointer.y : driftY;
      lens.x += (targetX - lens.x) * 0.055;
      lens.y += (targetY - lens.y) * 0.055;
      draw();
      raf = requestAnimationFrame(tick);
    };

    const start = () => {
      if (raf || reduced.matches) return;
      raf = requestAnimationFrame(tick);
    };
    const stop = () => {
      if (!raf) return;
      cancelAnimationFrame(raf);
      raf = 0;
    };

    const onPointerMove = (e: PointerEvent) => {
      if (e.pointerType === "touch") return;
      const rect = canvas.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
      pointer.active =
        pointer.x >= 0 &&
        pointer.y >= 0 &&
        pointer.x <= rect.width &&
        pointer.y <= rect.height;
    };
    const onPointerLeave = () => {
      pointer.active = false;
    };

    const ro = new ResizeObserver(() => {
      resize();
      draw();
    });
    ro.observe(canvas);

    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible) start();
        else stop();
      },
      { threshold: 0 },
    );
    io.observe(canvas);

    const onVisibility = () => {
      if (document.hidden) stop();
      else if (visible) start();
    };

    resize();
    draw();
    if (!reduced.matches) start();

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    canvas.addEventListener("pointerleave", onPointerLeave);
    document.addEventListener("visibilitychange", onVisibility);

    const onReduced = () => {
      if (reduced.matches) {
        stop();
        draw();
      } else start();
    };
    reduced.addEventListener("change", onReduced);

    return () => {
      stop();
      ro.disconnect();
      io.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      canvas.removeEventListener("pointerleave", onPointerLeave);
      document.removeEventListener("visibilitychange", onVisibility);
      reduced.removeEventListener("change", onReduced);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className={`block size-full ${className}`}
    />
  );
}
