import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, MeshDistortMaterial, MeshTransmissionMaterial, Environment, Stars } from "@react-three/drei";
import { useRef, useMemo, useEffect, useState } from "react";
import * as THREE from "three";

function useMousePosition() {
  const mouse = useRef({ x: 0, y: 0 });
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);
  return mouse;
}

function CameraRig() {
  const { camera } = useThree();
  const mouse = useMousePosition();

  useFrame(() => {
    camera.position.x += (mouse.current.x * 0.5 - camera.position.x) * 0.02;
    camera.position.y += (mouse.current.y * 0.3 + 1 - camera.position.y) * 0.02;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

function GlassSphere({ position, scale = 1 }: { position: [number, number, number]; scale?: number }) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
      ref.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={1.5}>
      <mesh ref={ref} position={position} scale={scale}>
        <icosahedronGeometry args={[1, 1]} />
        <MeshTransmissionMaterial
          backside
          samples={6}
          thickness={0.3}
          chromaticAberration={0.06}
          anisotropy={0.2}
          distortion={0.3}
          distortionScale={0.4}
          temporalDistortion={0.2}
          color="#4488ff"
          roughness={0.1}
        />
      </mesh>
    </Float>
  );
}

function NeonCube({ position, color, scale = 0.6 }: { position: [number, number, number]; color: string; scale?: number }) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.2;
      ref.current.rotation.z = state.clock.elapsedTime * 0.15;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={2}>
      <mesh ref={ref} position={position} scale={scale}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.5}
          metalness={0.8}
          roughness={0.15}
          wireframe
        />
      </mesh>
    </Float>
  );
}

function GlowRing({ position, color, scale = 1 }: { position: [number, number, number]; color: string; scale?: number }) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = Math.PI / 2 + Math.sin(state.clock.elapsedTime * 0.4) * 0.3;
      ref.current.rotation.z = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={1}>
      <mesh ref={ref} position={position} scale={scale}>
        <torusGeometry args={[1, 0.05, 16, 64]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={1.5}
          toneMapped={false}
        />
      </mesh>
    </Float>
  );
}

function BlobSphere({ position }: { position: [number, number, number] }) {
  return (
    <Float speed={1.2} rotationIntensity={0.4} floatIntensity={1.8}>
      <mesh position={position} scale={0.8}>
        <sphereGeometry args={[1, 32, 32]} />
        <MeshDistortMaterial
          color="#8b5cf6"
          emissive="#6d28d9"
          emissiveIntensity={0.4}
          roughness={0.2}
          metalness={0.8}
          distort={0.35}
          speed={1.5}
        />
      </mesh>
    </Float>
  );
}

function Particles({ count = 200 }: { count?: number }) {
  const points = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 30;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 30;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 30;
    }
    return pos;
  }, [count]);

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y = state.clock.elapsedTime * 0.02;
      points.current.rotation.x = state.clock.elapsedTime * 0.01;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color="#4dafff"
        transparent
        opacity={0.7}
        sizeAttenuation
      />
    </points>
  );
}

function Scene() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  return (
    <>
      <color attach="background" args={["#020210"]} />
      <fog attach="fog" args={["#020210", 5, 25]} />

      <ambientLight intensity={0.15} />
      <pointLight position={[5, 5, 5]} intensity={1} color="#4dafff" />
      <pointLight position={[-5, 3, -5]} intensity={0.8} color="#a855f7" />
      <pointLight position={[0, -3, 5]} intensity={0.6} color="#06b6d4" />
      <spotLight
        position={[0, 10, 0]}
        angle={0.3}
        penumbra={1}
        intensity={0.5}
        color="#4dafff"
      />

      <CameraRig />

      <GlassSphere position={[0, 0, 0]} scale={1.3} />
      <NeonCube position={[-3.5, 1.5, -2]} color="#a855f7" scale={0.5} />
      <NeonCube position={[3.5, -1, -3]} color="#06b6d4" scale={0.4} />
      <GlowRing position={[0, 0, 0]} color="#4dafff" scale={2.2} />
      <GlowRing position={[2.5, 2, -2]} color="#a855f7" scale={0.8} />

      {!isMobile && (
        <>
          <BlobSphere position={[-4, -2, -4]} />
          <NeonCube position={[4.5, 2.5, -5]} color="#4dafff" scale={0.3} />
          <GlowRing position={[-3, 3, -3]} color="#06b6d4" scale={0.6} />
        </>
      )}

      <Particles count={isMobile ? 80 : 250} />
      <Stars radius={50} depth={50} count={isMobile ? 500 : 2000} factor={4} saturation={0} fade speed={1} />

      <Environment preset="night" />
    </>
  );
}

export default function HeroCanvas() {
  return (
    <div className="fixed inset-0 z-[-1]">
      <Canvas
        camera={{ position: [0, 1, 6], fov: 55 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: false }}
        performance={{ min: 0.5 }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
