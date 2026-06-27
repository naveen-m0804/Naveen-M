import React, { useState, useEffect, useCallback, useMemo } from "react";
import {
  FaReact,
  FaPython,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaNodeJs,
  FaDocker,
  FaDatabase,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiMongodb,
  SiCplusplus,
  SiTensorflow,
  SiKubernetes,
  SiFirebase,
  SiFlutter,
} from "react-icons/si";
import { BsCodeSlash, BsTerminalFill, BsBraces } from "react-icons/bs";
import { AiOutlineApi, AiOutlineCloudServer } from "react-icons/ai";

// Tech icon pool
const TECH_ICONS = [
  FaReact, FaPython, FaJava, FaHtml5, FaCss3Alt, FaGitAlt,
  FaNodeJs, FaDocker, FaDatabase, SiJavascript, SiTypescript,
  SiMongodb, SiCplusplus, SiTensorflow, SiKubernetes,
  SiFirebase, SiFlutter, BsCodeSlash, BsTerminalFill,
  BsBraces, AiOutlineApi, AiOutlineCloudServer,
];

// Predefined edge/corner positions — scattered randomly around the periphery
const EDGE_POSITIONS = [
  // Top-left area
  { left: '2%',  top: '4%' },
  { left: '10%', top: '8%' },
  { left: '6%',  top: '18%' },
  { left: '17%', top: '3%' },
  // Top-right area
  { left: '82%', top: '6%' },
  { left: '91%', top: '12%' },
  { left: '87%', top: '19%' },
  { left: '76%', top: '3%' },
  // Bottom-left area
  { left: '3%',  top: '78%' },
  { left: '11%', top: '86%' },
  { left: '7%',  top: '93%' },
  { left: '19%', top: '90%' },
  // Bottom-right area
  { left: '84%', top: '80%' },
  { left: '93%', top: '87%' },
  { left: '78%', top: '94%' },
  { left: '89%', top: '75%' },
  // Left edge (mid)
  { left: '1%',  top: '35%' },
  { left: '3%',  top: '55%' },
  { left: '2%',  top: '68%' },
  // Right edge (mid)
  { left: '95%', top: '38%' },
  { left: '93%', top: '58%' },
  { left: '96%', top: '72%' },
  // Top edge (mid)
  { left: '35%', top: '2%' },
  { left: '55%', top: '4%' },
  { left: '68%', top: '2%' },
  // Bottom edge (mid)
  { left: '38%', top: '95%' },
  { left: '62%', top: '93%' },
];

export default function QuoteScreen({ onComplete }) {
  const [phase, setPhase] = useState("entering"); // entering | visible | exiting | done

  // Generate scattered floating icons with varied sizes and timing
  const floatingIcons = useMemo(() => {
    return TECH_ICONS.map((Icon, i) => ({
      Icon,
      left: EDGE_POSITIONS[i % EDGE_POSITIONS.length].left,
      top: EDGE_POSITIONS[i % EDGE_POSITIONS.length].top,
      size: 20 + ((i * 7 + 3) % 6) * 5,  // 20-45px, pseudo-random
      delay: ((i * 0.7 + 0.2) % 4).toFixed(1),
      duration: 5 + ((i * 3 + 1) % 5) * 1.5,
      rotateDir: i % 3 === 0 ? -1 : 1,
      opacity: 0.15 + ((i * 3) % 5) * 0.04,  // 0.15-0.31
    }));
  }, []);

  const triggerExit = useCallback(() => {
    if (phase === "entering" || phase === "visible") {
      setPhase("exiting");
    }
  }, [phase]);

  useEffect(() => {
    // After entering animation completes (~1s), mark as visible
    const enterTimer = setTimeout(() => {
      setPhase("visible");
    }, 1000);

    // Auto-exit after 4 seconds total
    const autoExitTimer = setTimeout(() => {
      setPhase((prev) => (prev !== "exiting" && prev !== "done" ? "exiting" : prev));
    }, 4000);

    return () => {
      clearTimeout(enterTimer);
      clearTimeout(autoExitTimer);
    };
  }, []);

  // Listen for scroll to trigger early exit
  useEffect(() => {
    const handleScroll = () => triggerExit();
    const handleWheel = () => triggerExit();
    const handleTouch = () => triggerExit();
    const handleKeyDown = (e) => {
      if (e.key === "ArrowDown" || e.key === " " || e.key === "PageDown") {
        triggerExit();
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("wheel", handleWheel, { passive: true });
    window.addEventListener("touchstart", handleTouch, { passive: true });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouch);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [triggerExit]);

  // When exiting animation ends, call onComplete
  useEffect(() => {
    if (phase === "exiting") {
      const exitDone = setTimeout(() => {
        setPhase("done");
        if (onComplete) onComplete();
      }, 900); // matches CSS exit animation duration
      return () => clearTimeout(exitDone);
    }
  }, [phase, onComplete]);

  if (phase === "done") return null;

  return (
    <div
      className={`quote-screen ${phase === "exiting" ? "quote-screen--exiting" : ""}`}
      id="quote-screen"
      onClick={triggerExit}
    >
      {/* Floating tech stack icons */}
      <div className="quote-screen__tech-icons">
        {floatingIcons.map(({ Icon, left, top, size, delay, duration, rotateDir, opacity }, i) => (
          <span
            key={i}
            className="quote-tech-icon"
            style={{
              left,
              top,
              fontSize: `${size}px`,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
              "--rotate-dir": rotateDir,
              opacity,
            }}
          >
            <Icon />
          </span>
        ))}
      </div>

      {/* Ambient background particles */}
      <div className="quote-screen__particles">
        {[...Array(15)].map((_, i) => (
          <span key={i} className="quote-particle" style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${3 + Math.random() * 4}s`,
          }} />
        ))}
      </div>

      {/* Code bracket decorations */}
      <span className="quote-screen__bracket quote-screen__bracket--left">{"{"}</span>
      <span className="quote-screen__bracket quote-screen__bracket--right">{"}"}</span>

      <div className="quote-screen__content">
        <p className="quote-screen__text">
          <span className="quote-word quote-word--1 quote-word--raleway">Every</span>{" "}
          <span className="quote-word quote-word--2 quote-word--yesteryear">Engineer</span>{" "}
          <span className="quote-word quote-word--3 quote-word--raleway">has</span>{" "}
          <span className="quote-word quote-word--4 quote-word--raleway">a</span>{" "}
          <span className="quote-word quote-word--5 quote-word--yesteryear">story.</span>
        </p>
        <p className="quote-screen__text quote-screen__text--second">
          <span className="quote-word quote-word--6 quote-word--raleway">Most</span>{" "}
          <span className="quote-word quote-word--7 quote-word--raleway">never</span>{" "}
          <span className="quote-word quote-word--8 quote-word--yesteryear">push</span>{" "}
          <span className="quote-word quote-word--9 quote-word--raleway">it</span>{" "}
          <span className="quote-word quote-word--10 quote-word--raleway">to</span>{" "}
          <span className="quote-word quote-word--11 quote-code-accent quote-word--raleway">production.</span>
        </p>
        <p className="quote-screen__text quote-screen__text--third">
          <span className="quote-word quote-word--12 quote-highlight">This</span>{" "}
          <span className="quote-word quote-word--13 quote-highlight">is</span>{" "}
          <span className="quote-word quote-word--14 quote-highlight">mine.</span>
        </p>
      </div>

      {/* Cinematic horizontal line */}
      <div className="quote-screen__line quote-screen__line--bottom" />

      {/* Subtle scroll hint */}
      <div className="quote-screen__scroll-hint">
        <span className="scroll-hint-text">scroll or click to continue</span>
        <div className="scroll-hint-arrow" />
      </div>
    </div>
  );
}
