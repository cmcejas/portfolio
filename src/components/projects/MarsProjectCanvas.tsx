import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { Stars } from '@react-three/drei'
import { Suspense, useEffect, useMemo, useRef } from 'react'
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
        <Stars
          radius={95}
          depth={48}
          count={4500}
          factor={2.8}
          saturation={0}
          fade
          speed={0.35}
        />
        <MarsWithSwoosh active={active} />
      </Suspense>
    </Canvas>
  )
}
