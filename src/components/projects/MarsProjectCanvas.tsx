import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { Suspense, useEffect, useMemo, useRef, useState } from 'react'
import * as THREE from 'three'

/** Same asset path as mcrowley19/mars-food-simulation `frontend/public/mars-texture.jpg` */
export const MARS_TEXTURE_URL =
  'https://raw.githubusercontent.com/mcrowley19/mars-food-simulation/main/frontend/public/mars-texture.jpg'

/**
 * Landing intro motion mirrors Sol-450’s `Mars.jsx`: sphere whooshes from
 * camera-right / depth with eased scale and roll, then spins slowly.
 */
function MarsWithSwoosh({ active }: { active: boolean }) {
  const loaded = useLoader(THREE.TextureLoader, MARS_TEXTURE_URL)
  const tex = useMemo(() => {
    const t = loaded.clone()
    t.colorSpace = THREE.SRGBColorSpace
    t.needsUpdate = true
    return t
  }, [loaded])

  const container = useRef<THREE.Group>(null)
  const spin = useRef<THREE.Group>(null)
  const intro = useRef(0)

  useEffect(() => {
    if (active) intro.current = 0
  }, [active])

  useFrame((_, delta) => {
    if (spin.current) spin.current.rotation.y += delta * 0.06
    if (!container.current || !active) return

    intro.current = THREE.MathUtils.damp(intro.current, 1, 2.2, delta)
    const introEased = 1 - Math.pow(1 - intro.current, 3)

    const introX = THREE.MathUtils.lerp(2.8, 0, introEased)
    const introZ = THREE.MathUtils.lerp(-3.2, 0, introEased)
    const introScale = THREE.MathUtils.lerp(0.52, 1, introEased)

    container.current.position.x = introX
    container.current.position.z = introZ
    container.current.rotation.z = THREE.MathUtils.lerp(-0.28, 0, introEased)
    container.current.scale.setScalar(introScale)
  })

  return (
    <group ref={container}>
      <group ref={spin}>
        <mesh>
          <sphereGeometry args={[1, 64, 64]} />
          <meshStandardMaterial
            map={tex}
            roughness={0.88}
            metalness={0.06}
          />
        </mesh>
      </group>
    </group>
  )
}

function buildStarPositions(n: number): Float32Array {
  const arr = new Float32Array(n * 3)
  for (let i = 0; i < n; i++) {
    const radius = 75 + Math.random() * 55
    const u = Math.random()
    const v = Math.random()
    const theta = 2 * Math.PI * u
    const phi = Math.acos(2 * v - 1)
    arr[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
    arr[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
    arr[i * 3 + 2] = radius * Math.cos(phi)
  }
  return arr
}

/** Lightweight substitute for @react-three/drei Stars (drops the drei dependency). */
function MarsStarfield() {
  const ref = useRef<THREE.Points>(null)
  const [positions] = useState(() => buildStarPositions(4000))

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.052
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#ccd6e8"
        size={0.038}
        sizeAttenuation
        transparent
        opacity={0.88}
        depthWrite={false}
      />
    </points>
  )
}

type Props = {
  active: boolean
  className?: string
}

export function MarsProjectCanvas({ active, className }: Props) {
  return (
    <Canvas
      className={className}
      camera={{ position: [0, 0.12, 3.35], fov: 42 }}
      gl={{
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance',
      }}
      dpr={[1, 2]}
      frameloop={active ? 'always' : 'never'}
      onCreated={({ gl, scene }) => {
        scene.background = null
        gl.setClearColor(0x000000, 0)
      }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.4} color="#5c2838" />
        <directionalLight position={[3, 1.2, 4]} intensity={2.4} color="#ffaa88" />
        <MarsStarfield />
        <MarsWithSwoosh active={active} />
      </Suspense>
    </Canvas>
  )
}
