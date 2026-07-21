import { useEffect, useRef, useState } from "react";

// Recreates the reference-video hero animation:
//   1. A thin white line traces an arc over each letter of "portfolio."
//      in reading order, one letter at a time.
//   2. A rectangular spiral is drawn onto the laptop screen.
// Loops continuously. Uses the image's natural coordinate space (1920x844
// with xMidYMid slice) so the overlay stays aligned to the artwork
// wherever the hero is cropped.

// Approximate horizontal center for each of the 10 characters of
// "portfolio." within the source hero artwork.
const LETTER_CENTERS_X = [180, 320, 455, 600, 745, 890, 1030, 1170, 1310, 1470];
const LETTER_WIDTH = 105;
const LETTER_TOP_Y = 245; // arc apex y
const LETTER_BASE_Y = 385; // baseline for arc ends

const buildLetterArc = (cx: number) => {
  const x0 = cx - LETTER_WIDTH / 2;
  const x1 = cx + LETTER_WIDTH / 2;
  return `M ${x0} ${LETTER_BASE_Y} Q ${cx} ${LETTER_TOP_Y - 40} ${x1} ${LETTER_BASE_Y}`;
};

const buildSpiral = () => {
  const cx = 1245;
  const cy = 625;
  let w = 210;
  let h = 118;
  const step = 18;
  const x = cx - w / 2;
  const y = cy - h / 2;
  let d = `M ${x} ${y}`;
  for (let i = 0; i < 4 && w > step * 2 && h > step * 2; i++) {
    d += ` h ${w} v ${h} h ${-w} v ${-(h - step)}`;
    w -= step * 2;
    h -= step * 2;
    d += ` h ${w}`;
  }
  return d;
};
const SPIRAL_D = buildSpiral();

const CYCLE = 7; // seconds per loop
const START_DELAY = 1.0; // seconds into cycle before drawing begins
const LETTER_DRAW = 0.35;
const LETTER_STAGGER = 0.3;
const SPIRAL_DRAW = 1.1;

const kf = (name: string, s: number, e: number, len: number) => {
  const p0 = ((s / CYCLE) * 100).toFixed(2);
  const p1 = ((e / CYCLE) * 100).toFixed(2);
  return `@keyframes ${name} {
    0%,${p0}% { stroke-dashoffset: ${len}px; }
    ${p1}%,100% { stroke-dashoffset: 0px; }
  }`;
};

const PortfolioTraceOverlay = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [reduced, setReduced] = useState(false);
  const [css, setCss] = useState("");

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (reduced) return;
    const svg = svgRef.current;
    if (!svg) return;
    const letters = Array.from(svg.querySelectorAll<SVGPathElement>("path.tp-letter"));
    const spiral = svg.querySelector<SVGPathElement>("path.tp-spiral");
    if (!letters.length || !spiral) return;

    const letterLens = letters.map((el) => {
      const L = el.getTotalLength();
      el.style.strokeDasharray = `${L}px`;
      el.style.strokeDashoffset = `${L}px`;
      return L;
    });
    const spiralLen = spiral.getTotalLength();
    spiral.style.strokeDasharray = `${spiralLen}px`;
    spiral.style.strokeDashoffset = `${spiralLen}px`;

    const chunks: string[] = [];
    letters.forEach((_, i) => {
      const s = START_DELAY + i * LETTER_STAGGER;
      chunks.push(kf(`tpL${i}`, s, s + LETTER_DRAW, letterLens[i]));
    });
    const spS = START_DELAY + letters.length * LETTER_STAGGER + 0.15;
    chunks.push(kf("tpSp", spS, spS + SPIRAL_DRAW, spiralLen));
    setCss(chunks.join("\n"));

    // Initial page-load pause before the first cycle begins.
    const t = window.setTimeout(() => {
      letters.forEach((el, i) => {
        el.style.animation = `tpL${i} ${CYCLE}s linear infinite`;
      });
      spiral.style.animation = `tpSp ${CYCLE}s linear infinite`;
    }, 1000);

    return () => {
      clearTimeout(t);
      letters.forEach((el) => (el.style.animation = ""));
      spiral.style.animation = "";
    };
  }, [reduced]);

  if (reduced) return null;

  return (
    <svg
      ref={svgRef}
      className="pointer-events-none absolute inset-0 w-full h-full"
      viewBox="0 0 1920 844"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      aria-hidden="true"
    >
      {css && <style>{css}</style>}
      {LETTER_CENTERS_X.map((cx, i) => (
        <path
          key={i}
          className="tp-letter"
          d={buildLetterArc(cx)}
          stroke="#ffffff"
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeOpacity={0.85}
        />
      ))}
      <path
        className="tp-spiral"
        d={SPIRAL_D}
        stroke="#8fd8ec"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default PortfolioTraceOverlay;
