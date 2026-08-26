"use client";

import { Canvas } from "@react-three/fiber";
import { Sparkles } from "@react-three/drei";
import { Suspense } from "react";

export default function ParticleField() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 50 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      className="!absolute inset-0"
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.4} />
        <Sparkles
          count={140}
          scale={[10, 6, 6]}
          size={2.4}
          speed={0.25}
          opacity={0.6}
          color="#00E5FF"
        />
        <Sparkles
          count={80}
          scale={[9, 5, 5]}
          size={1.6}
          speed={0.15}
          opacity={0.4}
          color="#7B61FF"
        />
      </Suspense>
    </Canvas>
  );
}
