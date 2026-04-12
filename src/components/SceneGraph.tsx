import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Stars, Float } from "@react-three/drei";
import { useEffect, useRef, useMemo, useState } from "react";
import * as THREE from "three";

function EarthScene({ active }: { active: boolean }) {
  const group = useRef<THREE.Group>(null);
  const earthRef = useRef<THREE.Mesh>(null);
  
  useFrame((_, delta) => {
    if (earthRef.current) earthRef.current.rotation.y += delta * 0.05;
    if (group.current) {
      const targetScale = active ? 1 : 0.001;
      group.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.05);
      group.current.visible = group.current.scale.x > 0.01;
    }
  });

  return (
    <group ref={group}>
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh ref={earthRef}>
          <sphereGeometry args={[2, 64, 64]} />
          <meshStandardMaterial color="#091428" emissive="#0a2a5e" emissiveIntensity={0.5} wireframe transparent opacity={0.8} />
        </mesh>
        <mesh>
          <sphereGeometry args={[1.9, 32, 32]} />
          <meshBasicMaterial color="#00020a" />
        </mesh>
      </Float>
      <points>
        <sphereGeometry args={[3, 32, 32]} />
        <pointsMaterial size={0.05} color="#00d4ff" transparent opacity={0.4} sizeAttenuation />
      </points>
    </group>
  );
}

function DataSphereScene({ active, isMobile }: { active: boolean, isMobile: boolean }) {
  const group = useRef<THREE.Group>(null);
  const count = isMobile ? 500 : 2000;
  
  const particles = useMemo(() => {
    const temp = new Float32Array(count * 3);
    for(let i=0; i<count; i++) {
      const r = 2 + Math.random() * 2;
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);
      temp[i*3] = r * Math.sin(phi) * Math.cos(theta);
      temp[i*3+1] = r * Math.sin(phi) * Math.sin(theta);
      temp[i*3+2] = r * Math.cos(phi);
    }
    return temp;
  }, [count]);

  const pointsRef = useRef<THREE.Points>(null);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x -= delta * 0.1;
      pointsRef.current.rotation.y += delta * 0.15;
    }
    if (group.current) {
      const targetScale = active ? 1 : 0.001;
      group.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.05);
      group.current.visible = group.current.scale.x > 0.01;
    }
  });

  return (
    <group ref={group}>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={count} array={particles} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial size={0.03} color="#bb86fc" transparent opacity={0.8} sizeAttenuation blending={THREE.AdditiveBlending} />
      </points>
      <mesh>
        <octahedronGeometry args={[1, 1]} />
        <meshStandardMaterial color="#421a8a" emissive="#7c3aed" emissiveIntensity={1} wireframe />
      </mesh>
    </group>
  );
}

function EducationScene({ active }: { active: boolean }) {
  const group = useRef<THREE.Group>(null);
  const lineRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (lineRef.current) {
      lineRef.current.rotation.y += delta * 0.2;
    }
    if (group.current) {
      const targetScale = active ? 1 : 0.001;
      group.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.05);
      group.current.visible = group.current.scale.x > 0.01;
    }
  });

  return (
    <group ref={group} position={[0, 0, 0]}>
      {/* Central energy line */}
      <mesh ref={lineRef}>
        <cylinderGeometry args={[0.05, 0.05, 10, 8]} />
        <meshStandardMaterial color="#38bdf8" emissive="#0ea5e9" emissiveIntensity={2} transparent opacity={0.6} />
      </mesh>
      
      {/* Milestone Nodes */}
      {[-2, 0, 2].map((y, i) => (
        <Float key={i} speed={3} rotationIntensity={2} position={[Math.sin(y)*1.5, y, Math.cos(y)*1.5]}>
          <mesh>
            <icosahedronGeometry args={[0.3, 0]} />
            <meshStandardMaterial color="#818cf8" emissive="#6366f1" emissiveIntensity={1} wireframe />
          </mesh>
          <mesh>
            <sphereGeometry args={[0.15, 16, 16]} />
            <meshBasicMaterial color="#ffffff" />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

function FloatingCardsScene({ active }: { active: boolean }) {
  const group = useRef<THREE.Group>(null);
  
  useFrame((_, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.1;
      const targetScale = active ? 1 : 0.001;
      group.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.05);
      group.current.visible = group.current.scale.x > 0.01;
    }
  });

  const cards = useMemo(() => Array.from({ length: 6 }), []);

  return (
    <group ref={group}>
      {cards.map((_, i) => {
        const angle = (i / cards.length) * Math.PI * 2;
        const radius = 2.5;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        return (
          <Float key={i} speed={2} rotationIntensity={1} floatIntensity={1} position={[x, 0, z]}>
            <mesh rotation={[0, -angle + Math.PI/2, 0]}>
              <boxGeometry args={[1, 1.4, 0.1]} />
              <meshStandardMaterial color="#0b172a" emissive="#1d4ed8" emissiveIntensity={0.2} metalness={0.8} roughness={0.2} />
              <lineSegments>
                <edgesGeometry args={[new THREE.BoxGeometry(1, 1.4, 0.1)]} />
                <lineBasicMaterial color="#3b82f6" />
              </lineSegments>
            </mesh>
          </Float>
        );
      })}
    </group>
  );
}

function SkillsScene({ active }: { active: boolean }) {
  const group = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (group.current) {
      group.current.rotation.x += delta * 0.1;
      group.current.rotation.y += delta * 0.15;
      const targetScale = active ? 1 : 0.001;
      group.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.05);
      group.current.visible = group.current.scale.x > 0.01;
    }
  });

  const skillsCount = 15;
  return (
    <group ref={group}>
      {Array.from({ length: skillsCount }).map((_, i) => {
        const radius = 3;
        const phi = Math.acos(-1 + (2 * i) / skillsCount);
        const theta = Math.sqrt(skillsCount * Math.PI) * phi;
        const x = radius * Math.cos(theta) * Math.sin(phi);
        const y = radius * Math.sin(theta) * Math.sin(phi);
        const z = radius * Math.cos(phi);
        return (
          <mesh key={i} position={[x, y, z]}>
            <octahedronGeometry args={[0.3, 0]} />
            <meshStandardMaterial color="#10b981" emissive="#34d399" emissiveIntensity={0.5} wireframe />
          </mesh>
        );
      })}
      <mesh>
        <sphereGeometry args={[1.5, 16, 16]} />
        <meshStandardMaterial color="#000" emissive="#064e3b" emissiveIntensity={0.8} wireframe />
      </mesh>
    </group>
  );
}

function CertificationsScene({ active }: { active: boolean }) {
  const group = useRef<THREE.Group>(null);
  
  useFrame((_, delta) => {
    if (group.current) {
      group.current.rotation.y -= delta * 0.05;
      const targetScale = active ? 1 : 0.001;
      group.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.05);
      group.current.visible = group.current.scale.x > 0.01;
    }
  });

  return (
    <group ref={group}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Float key={i} speed={1.5} rotationIntensity={0.5} position={[-4 + i*2, Math.sin(i)*1.5, Math.cos(i)*2]}>
          <mesh rotation={[0.2, 0.4, 0]}>
            <boxGeometry args={[1.2, 0.8, 0.1]} />
            <meshStandardMaterial color="#1e1b4b" emissive="#6d28d9" emissiveIntensity={0.4} />
            <lineSegments>
              <edgesGeometry args={[new THREE.BoxGeometry(1.2, 0.8, 0.1)]} />
              <lineBasicMaterial color="#a78bfa" />
            </lineSegments>
          </mesh>
        </Float>
      ))}
    </group>
  );
}

function SignalGridScene({ active }: { active: boolean }) {
  const group = useRef<THREE.Group>(null);
  const gridRef = useRef<THREE.GridHelper>(null);

  useFrame((state) => {
    if (gridRef.current) {
      gridRef.current.position.z = (state.clock.elapsedTime * 0.5) % 1;
    }
    if (group.current) {
      const targetScale = active ? 1 : 0.001;
      group.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.05);
      group.current.visible = group.current.scale.x > 0.01;
    }
  });

  return (
    <group ref={group}>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
        <planeGeometry args={[100, 100]} />
        <meshBasicMaterial color="#000000" />
      </mesh>
      <group position={[0, -1.9, 0]}>
        <gridHelper ref={gridRef} args={[40, 40, "#0ea5e9", "#064e3b"]} />
      </group>
      <Float speed={3} rotationIntensity={2} floatIntensity={2}>
        <mesh position={[0, 1, 0]}>
          <icosahedronGeometry args={[0.8, 0]} />
          <meshStandardMaterial color="#0284c7" emissive="#0284c7" emissiveIntensity={0.8} wireframe />
        </mesh>
      </Float>
    </group>
  );
}

function CameraRig({ activeSection }: { activeSection: string }) {
  const { camera } = useThree();
  const vec = new THREE.Vector3();

  useFrame((state) => {
    const mouseX = (state.mouse.x * window.innerWidth) / 1000;
    const mouseY = (state.mouse.y * window.innerHeight) / 1000;
    
    let targetZ = 6;
    let targetY = 0;
    let targetX = 0;

    switch (activeSection) {
      case "home": targetZ = 6; break;
      case "about": targetZ = 5; targetY = 0.5; break;
      case "education": targetZ = 6; targetX = 2; break;
      case "projects": targetZ = 4; targetY = 2; break;
      case "skills": targetZ = 5; targetY = -1; break;
      case "profiles": targetZ = 8; targetY = 0; break;
      case "certifications": targetZ = 5; targetY = 1; break;
      case "contact": targetZ = 7; targetY = 1; break;
    }

    camera.position.lerp(vec.set(targetX + mouseX * 0.5, targetY + mouseY * 0.5, targetZ), 0.02);
    camera.lookAt(0, 0, 0);
  });

  return null;
}

export function SceneGraph({ activeSection }: { activeSection: string }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 45 }} dpr={[1, 2]} gl={{ antialias: false, powerPreference: "high-performance" }}>
      <color attach="background" args={["#000000"]} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00e5ff" />
      <Stars radius={100} depth={50} count={isMobile ? 1500 : 4000} factor={4} saturation={0} fade speed={1} />
      <fog attach="fog" args={["#000000", 5, 20]} />

      <EarthScene active={activeSection === "home"} />
      <DataSphereScene active={activeSection === "about"} isMobile={isMobile} />
      <EducationScene active={activeSection === "education"} />
      <FloatingCardsScene active={activeSection === "projects"} />
      <SkillsScene active={activeSection === "skills"} />
      <CertificationsScene active={activeSection === "certifications" || activeSection === "profiles"} />
      <SignalGridScene active={activeSection === "contact"} />

      <CameraRig activeSection={activeSection} />
    </Canvas>
  );
}
