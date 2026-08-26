"use client";

import { useRef, useState, ReactNode, MouseEvent } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

type Props = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "ghost";
  className?: string;
  as?: "a" | "button";
};

export default function MagneticButton({
  children,
  href,
  onClick,
  variant = "primary",
  className,
  as,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    setPos({ x: relX * 0.35, y: relY * 0.35 });
  }

  function handleMouseLeave() {
    setPos({ x: 0, y: 0 });
  }

  const Tag = as === "button" ? "button" : "a";

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 150, damping: 12, mass: 0.4 }}
      className="inline-block"
    >
      <Tag
        href={Tag === "a" ? href : undefined}
        onClick={onClick}
        className={clsx(
          "group relative inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-medium tracking-wide transition-colors duration-300",
          variant === "primary" &&
            "bg-gradient-to-r from-primary to-secondary text-[#050816] shadow-glow hover:shadow-glow-secondary",
          variant === "ghost" &&
            "glass text-white hover:border-primary/60",
          className
        )}
      >
        {children}
      </Tag>
    </motion.div>
  );
}
