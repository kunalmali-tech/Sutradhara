"use client";

import { useEffect, useRef } from "react";

interface Props {
  src: string;
  className?: string;
}

export default function VideoBackground({ src, className }: Props) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.muted = true;
    v.play().catch(() => {});
  }, []);

  return (
    <video
      ref={ref}
      src={src}
      autoPlay
      muted
      loop
      playsInline
      className={className}
      style={{ pointerEvents: "none" }}
    />
  );
}
