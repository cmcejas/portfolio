export const site = {
  name: "Carlos Manuel Cejas",
  shortName: "Carlos Manuel Cejas",
  title: "Computer Science Student",
  tagline:
    "BSc/MSc Computer Science at Trinity College Dublin. I build software across web, mobile, robotics, and AI; from path planning for autonomous racing to multimodal health apps.",
  email: "carlosmcejas@gmail.com",
  phone: "+1 (267) 443-3427",
  location: "Greater Philadelphia / Dublin",
  workAuth: "U.S. Citizen with full work authorization in the United States",
  links: {
    github: "https://github.com/cmcejas",
    linkedin: "https://linkedin.com/in/cmcejas",
    site: "https://cmcejas.dev",
  },
  resumePath: "/resume.pdf",
} as const;

export const education = [
  {
    school: "Trinity College Dublin",
    detail: "BSc/MSc Computer Science (Integrated Masters)",
    range: "2025 – 2030",
  },
  {
    school: "Springfield Township High School",
    detail:
      "Relevant: AP Computer Science A, Multi Variable Calculus, Engineering Design",
    range: "2021 – 2025",
  },
] as const;

export type ExperienceEntry = {
  role: string
  org: string
  orgUrl?: string
  range: string
  bullets: readonly string[]
}

export const experience: readonly ExperienceEntry[] = [
  {
    role: "Path Planning Engineer",
    org: "Formula Trinity – Autonomous Racing Team",
    orgUrl: "https://www.formulatrinity.ie/",
    range: "Oct 2025 – Present",
    bullets: [
      "Develop and refine path-planning algorithms in Python for the autonomous race car subsystem.",
      "Analyze and improve ROS-based codebase; test algorithms in Gazebo simulations.",
      "Optimize racing lines for higher speeds and reduced lap distance.",
    ],
  },
  {
    role: "Web Developer",
    org: "Parkt – Startup",
    orgUrl: "https://parkt.app/",
    range: "May 2024 – Sep 2024",
    bullets: [
      "Led development of company website, building new features and optimizing existing systems.",
      "Consulted on operations, branding, and marketing strategies for early-stage growth.",
    ],
  },
]

export type SlideTheme =
  | "mars"
  | "lockup"
  | "dungeon"
  | "pollen"
  | "metricare";

/** Highlighted work — repos, demos, and company links you can update anytime */
export const featuredProjects = [
  {
    name: "Sol-450",
    slideTheme: "mars" satisfies SlideTheme,
    context: "START HACK ST.GALLEN - MARCH 2026",
    description:
      "Full-stack, multi-agent greenhouse simulator for long-duration Mars missions: configure a colony, run AI-managed agriculture, and track crew survival. React 19 and Three.js for 3D colony visualization; FastAPI simulation engine; Strands agents on Amazon Bedrock with an MCP knowledge base; DynamoDB session state.",
    tech: "React, Three.js, FastAPI, AWS Bedrock, DynamoDB, JavaScript, Python",
    links: {
      repo: "https://github.com/mcrowley19/mars-food-simulation",
      live: "https://youtu.be/oY_2HvcdY9s?si=OrbiuFokMof7lJzg",
      liveLabel: "Demo video",
      more: null,
    },
  },
  {
    name: "Lockup",
    slideTheme: "lockup" satisfies SlideTheme,
    context: "Schools · CEO & Cofounder",
    description:
      "Lockup replaces locked phone pouches with software for phone-free class. Teachers run the period from a web dashboard—policy, class sessions, and controls in the browser—while students join with one QR scan on the phone they already carry. Native iOS (Family Controls) and Android lockouts keep focus for the session; session state makes compliance visible without a hallway line. Built for K–12 operations, not ad revenue. I am CEO and cofounder, working across product, mobile, backend, and the school-facing web stack.",
    tech: "Web dashboard (teacher and admin), native iOS and Android (Swift, Kotlin) with Family Controls and device policy APIs, cloud backend, session and school data, APNs/FCM for operational notifications",
    links: {
      repo: null,
      live: "https://lockup-app.com",
      liveLabel: "lockup-app.com",
      more: null,
    },
  },
  {
    name: "AI Dungeon Master",
    slideTheme: "dungeon" satisfies SlideTheme,
    context: "Claude Builder Club @ TCD Hackathon · Dec 2025",
    description:
      "Hackathon winner (Best Team Collaboration, Most Creative Use of Claude). Web-based D&D with AI-driven storytelling, persistent campaigns, and randomized characters. Originally Claude-powered; codebase now uses Google Gemini.",
    tech: "Python, FastAPI, React, Vite, Gemini API",
    links: {
      repo: "https://github.com/Cillian-Cooke/hackathon",
      live: null,
      more: null,
    },
  },
  {
    name: "Pollen Cast",
    slideTheme: "pollen" satisfies SlideTheme,
    context: "Hack Europe · Feb 2026",
    description:
      "Multimodal allergy health-check app (Expo/React Native): eye photo, optional voice, and location for assessment. Node backend with Gemini and optional Google Pollen API; Supabase auth; optional Python (librosa) voice service; safety guardrails and HL7 FHIR–oriented outputs.",
    tech: "React Native (Expo), Node.js, Express, Gemini API, Supabase, Python (librosa)",
    links: {
      repo: "https://github.com/cmcejas/hackeurope",
      live: "https://pollen-cast.vercel.app",
      more: null,
    },
  },
  {
    name: "Metricare",
    slideTheme: "metricare" satisfies SlideTheme,
    context: "Collaboration · Medical dashboard",
    description:
      "Medical patient dashboard unifying history, medications, FDA-based drug interaction checks, and AI-generated summaries (Gemini) — one Metricare UI and API instead of scattered legacy tools.",
    tech: "React, Vite, FastAPI, TypeScript, Python, Gemini API",
    links: {
      repo: "https://github.com/mcrowley19/dashboard",
      live: "https://metricare.vercel.app",
      more: null,
    },
  },
] as const;

/** Explicit so `more` can be a link object when present (inferred const would narrow to `null` only). */
export type ProjectLinks = {
  repo: string | null
  live: string | null
  liveLabel?: string
  more: { label: string; href: string } | null
}

export type FeaturedProject = Omit<
  (typeof featuredProjects)[number],
  'links'
> & { links: ProjectLinks }

export const skills = {
  languages: "Python, TypeScript, JavaScript, Java, HTML/CSS, SQL, Bash",
  frameworks:
    "React, React Native (Expo), Vite, FastAPI, Node.js, Express, Three.js, ROS, librosa",
  tools:
    "Git, Docker, Linux (Ubuntu/Arch), AWS (Bedrock, DynamoDB), Supabase, Vercel, Gazebo, VS Code",
  ai: "Gemini API, Claude API, agent patterns (Strands, MCP / knowledge bases), Google Pollen API, HL7 FHIR R4, SNOMED-CT, OpenFDA (drug search & interactions)",
  spoken: "English (Native), Spanish (Native)",
} as const;

export const activities = [
  {
    label: "Trinity",
    items:
      "Computer Science Society, Formula Trinity, Philosophical Society, Tennis Society",
  },
  {
    label: "High school",
    items:
      "Science Olympiad (Selected), NHS Member, DECA 2nd Place MTDM, Youth & Government Treasurer",
  },
] as const;

/** Music & life outside work — Spotify oEmbed thumbnails (stable CDN URLs). */
export const favoriteTracks = [
  {
    title: "Triton",
    artists: "Chucho Valdés, Su Quinteto",
    genres: "Latin jazz, jazz",
    href: "https://open.spotify.com/track/0Eo24viwNLA3gPFTNPiNGR",
    coverUrl:
      "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e0245348b8861cfa39d4da63bb2",
  },
  {
    title: "Gil",
    artists: "Milo j, Trueno",
    genres: "Latin hip-hop, trap",
    href: "https://open.spotify.com/track/5jgmQkVypORb3enASCxjYs",
    coverUrl:
      "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02d56059181de93d90817e8b0b",
  },
  {
    title: "Anybody",
    artists: "Burna Boy",
    genres: "Afrobeats, Afro-fusion",
    href: "https://open.spotify.com/track/7iCSfoLBuenTKZoWIgqY9Q",
    coverUrl:
      "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02a9c13c1a5538f87146ac8ca5",
  },
] as const;

export const favoriteAlbum = {
  title: "EL ÚLTIMO BAILE",
  artist: "Trueno",
  href: "https://open.spotify.com/album/3EWJoKrG9XnCjvAPzkQZ88",
  coverUrl:
    "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e020188bbcf0757bafdc3342ff9",
} as const;

export const personalBeyond = {
  book: {
    title: "The Stranger",
    author: "Albert Camus",
    coverPath: "/art/the-stranger.jpg",
  },
  sports: {
    footballClub: "F.C. Barcelona",
    /** Shown before the club name, e.g. “Football (soccer) — …” */
    footballLabel: "Football (soccer)",
    footballImagePath: "/art/camp-nou.jpg",
    /** Opens when the Camp Nou photo is clicked. */
    footballImageLink:
      "https://commons.wikimedia.org/wiki/File:2014._Camp_Nou._M%C3%A9s_que_un_club._Barcelona_B40.jpg",
    formula1: "Carlos Sainz",
    formula1ImagePath:
      "https://hips.hearstapps.com/hmg-prod/images/race-winner-carlos-sainz-of-spain-and-ferrari-celebrates-in-news-photo-1730068246.jpg?crop=0.668xw:1.00xh;0.226xw,0&resize=1200:*",
    /** Opens when the Carlos Sainz photo is clicked. */
    formula1ImageLink:
      "https://hips.hearstapps.com/hmg-prod/images/race-winner-carlos-sainz-of-spain-and-ferrari-celebrates-in-news-photo-1730068246.jpg?crop=0.668xw:1.00xh;0.226xw,0&resize=1200:*",
  },
  /** Shown above the favorite paintings grid */
  artVisitNote: "I got to see both of these in person at The Met.",
} as const;

export type FavoritePainting = {
  displayTitle: string;
  catalogTitle: string;
  artist: string;
  year: string;
  medium: string;
  href: string;
  /** Empty string → UI shows a text placeholder instead of an image. */
  imageUrl: string;
  linkLabel: string;
};

/**
 * Favorite paintings — Met Open Access image for Cézanne; Lam uses a photo
 * supplied by Carlos (`/public/art/umbral.png`).
 */
export const favoritePaintings: readonly FavoritePainting[] = [
  {
    displayTitle: "The Artist's Uncle, as a Monk",
    catalogTitle:
      "Antoine Dominique Sauveur Aubert (born 1817), the Artist's Uncle, as a Monk",
    artist: "Paul Cézanne",
    year: "1866",
    medium: "Oil on canvas",
    href: "https://www.metmuseum.org/art/collection/search/435869",
    imageUrl: "https://images.metmuseum.org/CRDImages/ep/original/DT1977.jpg",
    linkLabel: "The Met",
  },
  {
    displayTitle: "Umbral",
    catalogTitle: "Umbral",
    artist: "Wifredo Lam",
    year: "1950",
    medium: "Oil on canvas",
    href: "https://www.artsy.net/artwork/wifredo-lam-umbral",
    imageUrl: "/art/umbral.png",
    linkLabel: "Artsy",
  },
];
