/**
 * Mirrors mcrowley19/dashboard `frontend/src/components/landing/LandingScene.tsx`:
 * gray-50 scene, RoomEnvironment PMREM, ground plane, directional lights,
 * and the default red/white capsule ShaderMaterial (used when the GLB is absent).
 */
import { Canvas, useFrame } from '@react-three/fiber'
import { Suspense, useEffect, useMemo, useRef } from 'react'
import * as THREE from 'three'
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js'

const GRAY_50 = 0xf9fafb

const DURATION = 0.72
const EASE_OUT_CUBIC = (t: number) => 1 - (1 - t) ** 3
const EASE_OUT_BACK = (t: number) => {
  const c1 = 1.2
  const c3 = c1 + 1
  return 1 + c3 * (t - 1) ** 3 + c1 * (t - 1) ** 2
}

const START_Y = 1.5
const END_Y = 0
const END_X = 0.95
const ROT_Z = 0.18
const ROT_X = -0.22
const SPIN_SPEED = 0.45

const VERTEX_SHADER = `
  varying vec3 vPosition;
  varying vec3 vNormal;
  varying vec3 vWorldPosition;
  varying vec3 vWorldNormal;
  void main() {
    vPosition = position;
    vNormal = normalize(normalMatrix * normal);
    vec4 worldPos = modelMatrix * vec4(position, 1.0);
    vWorldPosition = worldPos.xyz;
    vWorldNormal = normalize((modelMatrix * vec4(normal, 0.0)).xyz);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

const FRAGMENT_SHADER = `
  uniform float uOpacity;
  uniform vec3 uLightDir;
  uniform vec3 uLight2Dir;
  uniform float uAmbient;
  uniform float uDiffuse;
  uniform float uSpecular;
  uniform float uShininess;
  uniform float uEnvIntensity;
  uniform float uFresnelPower;
  uniform vec3 uRimColor;
  varying vec3 vPosition;
  varying vec3 vNormal;
  varying vec3 vWorldPosition;
  varying vec3 vWorldNormal;

  void main() {
    vec3 red = vec3(0.937, 0.267, 0.267);
    vec3 white = vec3(1.0, 1.0, 1.0);
    vec3 baseCol = vPosition.y >= 0.0 ? red : white;

    vec3 N = normalize(vWorldNormal);
    vec3 V = normalize(cameraPosition - vWorldPosition);

    float NdotL = max(0.0, dot(N, normalize(uLightDir)));
    float NdotL2 = max(0.0, dot(N, normalize(uLight2Dir)));
    float diffuse = uAmbient + uDiffuse * (NdotL + 0.4 * NdotL2);
    vec3 lit = baseCol * diffuse;

    vec3 H = normalize(normalize(uLightDir) + V);
    float NdotH = max(0.0, dot(N, H));
    float spec = pow(NdotH, uShininess);
    lit += vec3(1.0, 1.0, 1.0) * uSpecular * spec;

    float NdotV = max(0.0, dot(N, V));
    float fresnel = pow(1.0 - NdotV, uFresnelPower);
    vec3 reflectDir = reflect(-V, N);
    float y = reflectDir.y;
    vec3 envCol = vec3(0.52 + 0.22 * y, 0.55 + 0.22 * y, 0.62 + 0.18 * y);
    lit = mix(lit, lit + envCol * uEnvIntensity, fresnel);
    lit = mix(lit, uRimColor, fresnel * 0.25);

    gl_FragColor = vec4(lit, uOpacity);
  }
`

function LandingPillGroup({
  slideActive,
  spin,
}: {
  slideActive: boolean
  spin: boolean
}) {
  const groupRef = useRef<THREE.Group>(null)
  const matRef = useRef<THREE.ShaderMaterial>(null)
  const animStartRef = useRef<number | null>(null)

  const uniforms = useMemo(
    () => ({
      uOpacity: { value: 1 },
      uLightDir: { value: new THREE.Vector3(0.35, 0.6, 0.7).normalize() },
      uLight2Dir: { value: new THREE.Vector3(-0.4, 0.3, 0.5).normalize() },
      uAmbient: { value: 0.28 },
      uDiffuse: { value: 0.52 },
      uSpecular: { value: 0.35 },
      uShininess: { value: 48.0 },
      uEnvIntensity: { value: 0.42 },
      uFresnelPower: { value: 2.6 },
      uRimColor: { value: new THREE.Vector3(0.92, 0.92, 0.96) },
    }),
    [],
  )

  useEffect(() => {
    if (slideActive) animStartRef.current = performance.now() / 1000
  }, [slideActive])

  useFrame(() => {
    const g = groupRef.current
    const mat = matRef.current
    if (!slideActive || !g) return

    if (animStartRef.current === null) {
      animStartRef.current = performance.now() / 1000
    }

    if (!spin) {
      g.position.set(END_X, END_Y, 0)
      g.scale.setScalar(1)
      g.rotation.set(ROT_X, 0.7, ROT_Z, 'YXZ')
      if (mat) mat.uniforms.uOpacity.value = 1
      return
    }

    const elapsed = performance.now() / 1000 - animStartRef.current
    const t = Math.min(1, elapsed / DURATION)
    g.position.set(END_X, START_Y + (END_Y - START_Y) * EASE_OUT_BACK(t), 0)
    g.scale.setScalar(0.96 + 0.04 * EASE_OUT_CUBIC(t))
    const fade = EASE_OUT_CUBIC(t)
    if (mat) mat.uniforms.uOpacity.value = fade
    g.rotation.set(
      ROT_X,
      elapsed * SPIN_SPEED * Math.min(1, fade * 2),
      ROT_Z,
      'YXZ',
    )
  })

  return (
    <>
      <ambientLight intensity={0.26} color="#ffffff" />
      <directionalLight
        castShadow
        position={[4, 5, 6]}
        intensity={1.05}
        color="#ffffff"
        shadow-mapSize={[2048, 2048]}
        shadow-camera-near={0.5}
        shadow-camera-far={25}
        shadow-camera-left={-6}
        shadow-camera-right={6}
        shadow-camera-top={6}
        shadow-camera-bottom={-6}
        shadow-bias={-0.0001}
        shadow-normalBias={0.02}
      />
      <directionalLight
        position={[-4, 2, 3]}
        intensity={0.48}
        color="#e8ecf4"
      />
      <directionalLight
        position={[0, 3, -5]}
        intensity={0.38}
        color="#ffffff"
      />

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.2, 0]} receiveShadow>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#f0f1f3" roughness={0.9} metalness={0} />
      </mesh>

      <group ref={groupRef} position={[END_X, START_Y, 0]} rotation-order="YXZ">
        <mesh castShadow receiveShadow scale={0.975}>
          <capsuleGeometry args={[0.5, 1.2, 24, 48]} />
          <shaderMaterial
            ref={matRef}
            transparent
            uniforms={uniforms}
            vertexShader={VERTEX_SHADER}
            fragmentShader={FRAGMENT_SHADER}
          />
        </mesh>
      </group>
    </>
  )
}

type Props = {
  slideActive: boolean
  spin: boolean
  className?: string
}

export function MetricarePillCanvas({ slideActive, spin, className }: Props) {
  return (
    <Canvas
      className={className}
      camera={{ position: [0, 0, 4.8], fov: 38, near: 0.1, far: 100 }}
      gl={{
        antialias: true,
        alpha: false,
        powerPreference: 'high-performance',
      }}
      dpr={[1, 2]}
      frameloop={slideActive ? 'always' : 'never'}
      onCreated={({ gl, scene }) => {
        scene.background = new THREE.Color(GRAY_50)
        scene.fog = new THREE.Fog(GRAY_50, 8, 22)
        gl.shadowMap.enabled = true
        gl.shadowMap.type = THREE.PCFSoftShadowMap
        gl.toneMapping = THREE.ACESFilmicToneMapping
        gl.toneMappingExposure = 1.0
        gl.outputColorSpace = THREE.SRGBColorSpace

        const roomEnv = new RoomEnvironment()
        const pmrem = new THREE.PMREMGenerator(gl)
        const { texture } = pmrem.fromScene(roomEnv)
        scene.environment = texture
        roomEnv.dispose()
        pmrem.dispose()
      }}
    >
      <Suspense fallback={null}>
        <LandingPillGroup slideActive={slideActive} spin={spin} />
      </Suspense>
    </Canvas>
  )
}
