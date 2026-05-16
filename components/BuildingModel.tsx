"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense, useRef, useState } from "react";

function Model() {
  const { scene } = useGLTF("/contadores.glb");

  return (
    <primitive
      object={scene}
      scale={2.12}
      position={[0, -0.0, 0]}
    />
  );
}

function AnimatedModel() {
  const groupRef = useRef<any>(null);
  const [isDragging, setIsDragging] = useState(false);

  useFrame(({ clock }) => {
    if (!groupRef.current || isDragging) return;

    groupRef.current.rotation.y = Math.sin(clock.elapsedTime * 0.6) * 0.35;
  });

  return (
    <>
      <group ref={groupRef}>
        <Model />
      </group>

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        onStart={() => setIsDragging(true)}
        onEnd={() => setTimeout(() => setIsDragging(false), 800)}
      />
    </>
  );
}

export default function BuildingModel() {
  return (
    <div className="relative h-[390px] w-full overflow-hidden rounded-[24px] bg-gradient-to-br from-slate-950 via-slate-900 to-[#101114]">
      <Canvas camera={{ position: [2, 1.35, 3.4], fov: 43 }}>
        <ambientLight intensity={1.25} />
        <directionalLight position={[8, 6, 4]} intensity={2.1} />
        <directionalLight position={[-4, 3, -3]} intensity={0.75} />

        <Suspense fallback={null}>
          <AnimatedModel />
          <Environment preset="city" />
        </Suspense>
      </Canvas>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.32)_100%)]" />

      <div className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-800">
        Modelo 3D institucional
      </div>

      <div className="absolute bottom-5 left-5 right-5 rounded-[22px] bg-black/50 p-4 text-white backdrop-blur-md">
        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/70">
          Colegio de Contadores La Paz
        </p>

        
      </div>
    </div>
  );
}

useGLTF.preload("/contadores.glb");