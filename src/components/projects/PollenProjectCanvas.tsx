import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Suspense, useEffect, useMemo, useRef, useState } from 'react'
import type { RefObject } from 'react'
import * as THREE from 'three'

const POLLEN_COUNT = 960
const PLANE = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0)
const RAY_HIT = new THREE.Vector3()
const CURSOR_LOCAL = new THREE.Vector3()

/** Deterministic pseudo-random in [0, 1) from particle index — stable across re-renders. */
function stable01(i: number, salt: number): number {
  const x = Math.sin(i * 12.9898 + salt * 78.233) * 43758.5453123
  return x - Math.floor(x)
}

function softPollenTexture() {
  const size = 64
  const canvas = document.createElement('canvas')
  canvas.width = canvas.height = size
  const ctx = canvas.getContext('2d')!
  const cx = size / 2
  const g = ctx.createRadialGradient(cx, cx, 0, cx, cx, cx)
  g.addColorStop(0, 'rgba(255, 248, 230, 1)')
  g.addColorStop(0.22, 'rgba(255, 214, 140, 0.7)')
  g.addColorStop(0.5, 'rgba(245, 166, 35, 0.35)')
  g.addColorStop(1, 'rgba(245, 166, 35, 0)')
  ctx.fillStyle = g
  ctx.fillRect(0, 0, size, size)
  const tex = new THREE.CanvasTexture(canvas)
  tex.colorSpace = THREE.SRGBColorSpace
  return tex
}

type PollenFieldProps = {
  active: boolean
  simulating: boolean
  pressedRef: RefObject<boolean>
}

function PollenField({ active, simulating, pressedRef }: PollenFieldProps) {
  const pointsRef = useRef<THREE.Points>(null)
  const raycaster = useMemo(() => new THREE.Raycaster(), [])
  const { camera } = useThree()

  const { geometry, phases, drift } = useMemo(() => {
    const geometry = new THREE.BufferGeometry()
    const pos = new Float32Array(POLLEN_COUNT * 3)
    const phases = new Float32Array(POLLEN_COUNT * 3)
    const drift = new Float32Array(POLLEN_COUNT * 3)
    for (let i = 0; i < POLLEN_COUNT; i++) {
      const i3 = i * 3
      pos[i3] = (stable01(i, 1) - 0.35) * 16
      pos[i3 + 1] = (stable01(i, 2) - 0.5) * 11
      pos[i3 + 2] = (stable01(i, 3) - 0.5) * 6
      phases[i3] = stable01(i, 4) * Math.PI * 2
      phases[i3 + 1] = stable01(i, 5) * Math.PI * 2
      phases[i3 + 2] = stable01(i, 6) * Math.PI * 2
      drift[i3] = 0.35 + stable01(i, 7) * 0.85
      drift[i3 + 1] = 0.25 + stable01(i, 8) * 0.75
      drift[i3 + 2] = 0.2 + stable01(i, 9) * 0.6
    }
    geometry.setAttribute('position', new THREE.BufferAttribute(pos, 3))
    return { geometry, phases, drift }
  }, [])

  const texture = useMemo(() => softPollenTexture(), [])
  useEffect(() => {
    return () => {
      texture.dispose()
      geometry.dispose()
    }
  }, [texture, geometry])

  useFrame((state, delta) => {
    const pts = pointsRef.current
    if (!pts) return
    const attr = pts.geometry.attributes.position
    const pos = attr.array as Float32Array
    const t = state.clock.elapsedTime
    const wrapX = 8.5
    const wrapY = 6.2

    // Repulsion from pointer (world z=0 plane → local space of rotating points)
    let repelRadius = 2.15
    let repelStrength = 5.2
    if (pressedRef.current) {
      repelRadius *= 1.35
      repelStrength *= 1.75
    }

    raycaster.setFromCamera(state.pointer, camera)
    const hitWorld = raycaster.ray.intersectPlane(PLANE, RAY_HIT)
    let hasCursor = false
    if (hitWorld) {
      CURSOR_LOCAL.copy(RAY_HIT)
      pts.worldToLocal(CURSOR_LOCAL)
      hasCursor = true
    }

    for (let i = 0; i < POLLEN_COUNT; i++) {
      const i3 = i * 3
      const ph = phases[i3]
      const ph1 = phases[i3 + 1]
      const ph2 = phases[i3 + 2]
      const d0 = drift[i3]
      const d1 = drift[i3 + 1]
      const d2 = drift[i3 + 2]

      if (hasCursor) {
        const dx = pos[i3] - CURSOR_LOCAL.x
        const dy = pos[i3 + 1] - CURSOR_LOCAL.y
        const dz = pos[i3 + 2] - CURSOR_LOCAL.z
        const distSq = dx * dx + dy * dy + dz * dz
        const r2 = repelRadius * repelRadius
        if (distSq < r2 && distSq > 1e-8) {
          const dist = Math.sqrt(distSq)
          const falloff = (1 - dist / repelRadius) ** 1.6
          const push = (repelStrength * falloff * delta) / dist
          pos[i3] += dx * push
          pos[i3 + 1] += dy * push
          pos[i3 + 2] += dz * push
        }
      }

      if (active) {
        pos[i3] +=
          Math.sin(t * 0.22 * d0 + ph) * delta * 0.14 +
          Math.cos(t * 0.09 + ph1 * 0.5) * delta * 0.05
        pos[i3 + 1] +=
          delta * 0.045 +
          Math.sin(t * 0.16 * d1 + ph1) * delta * 0.09
        pos[i3 + 2] += Math.sin(t * 0.28 * d2 + ph2) * delta * 0.07
      }
      if (simulating) {
        if (pos[i3 + 1] > wrapY) pos[i3 + 1] = -wrapY
        if (pos[i3 + 1] < -wrapY) pos[i3 + 1] = wrapY
        if (pos[i3] > wrapX) pos[i3] = -wrapX
        if (pos[i3] < -wrapX) pos[i3] = wrapX
        if (pos[i3 + 2] > 3.2) pos[i3 + 2] = -3.2
        if (pos[i3 + 2] < -3.2) pos[i3 + 2] = 3.2
      }
    }
    attr.needsUpdate = true
    if (active) pts.rotation.y = t * 0.018
  })

  return (
    <points ref={pointsRef} geometry={geometry} frustumCulled={false}>
      <pointsMaterial
        map={texture}
        transparent
        opacity={0.72}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        size={0.055}
        sizeAttenuation
        color="#f0b24d"
      />
    </points>
  )
}

type Props = {
  active: boolean
  className?: string
}

export function PollenProjectCanvas({ active, className }: Props) {
  const pressedRef = useRef(false)
  const [hoverCanvas, setHoverCanvas] = useState(false)

  return (
    <Canvas
      className={className}
      camera={{ position: [0.35, 0.15, 5.4], fov: 42 }}
      gl={{
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance',
      }}
      dpr={[1, 2]}
      frameloop={active || hoverCanvas ? 'always' : 'never'}
      onCreated={({ gl, scene }) => {
        scene.background = null
        gl.setClearColor(0x000000, 0)
      }}
      onPointerEnter={() => setHoverCanvas(true)}
      onPointerLeave={() => {
        setHoverCanvas(false)
        pressedRef.current = false
      }}
      onPointerDown={() => {
        pressedRef.current = true
      }}
      onPointerUp={() => {
        pressedRef.current = false
      }}
      onPointerCancel={() => {
        pressedRef.current = false
      }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.35} color="#3a3028" />
        <pointLight
          position={[4, 2, 5]}
          intensity={1.1}
          color="#ffcc66"
          distance={20}
        />
        <pointLight
          position={[-3, -1, 4]}
          intensity={0.45}
          color="#f5a623"
          distance={16}
        />
        <PollenField
          active={active}
          simulating={active || hoverCanvas}
          pressedRef={pressedRef}
        />
      </Suspense>
    </Canvas>
  )
}
