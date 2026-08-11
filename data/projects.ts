export type ProjectCategory = "web" | "mobile" | "ai";

export type ProjectLink = {
  label: string;
  href: string;
};

export type ProjectImage = {
  gradient: string;
  accent: string;
  initials: string;
};

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  categoryLabel: string;
  shortDescription: string;
  overview: string;
  problem: string;
  solution: string;
  features: string[];
  technologies: string[];
  challenges: string[];
  process: string[];
  results: string[];
  screenshots: string[];
  image: ProjectImage;
  github: string;
  demo: string;
  featured: boolean;
  year: string;
};

export const projectCategories: { value: "all" | ProjectCategory; label: string }[] = [
  { value: "all", label: "All" },
  { value: "web", label: "Web" },
  { value: "mobile", label: "Mobile" },
  { value: "ai", label: "AI" },
];

export const projects: Project[] = [
  {
    slug: "traffic-sign-detection",
    title: "Traffic Sign Detection",
    category: "ai",
    categoryLabel: "AI / Mobile",
    shortDescription:
      "A mobile traffic sign detection application using Flutter, YOLOv8, Roboflow, and TensorFlow Lite.",
    overview:
      "A mobile application that detects and classifies traffic signs in real time using a custom-trained computer vision model. The app runs entirely on-device, making it fast, private, and usable without an internet connection.",
    problem:
      "Traffic signs are easy for drivers and pedestrians to miss, especially in unfamiliar areas or poor visibility. General-purpose object detection models are large and slow to run on mobile devices, and cloud-based approaches introduce latency and privacy concerns.",
    solution:
      "I trained a custom YOLOv8 model on a curated traffic-sign dataset using Roboflow, then converted and optimized it to TensorFlow Lite for on-device inference. A Flutter frontend captures or loads an image and runs the model to detect signs, classify them, and show a confidence score in a clean mobile interface.",
    features: [
      "Image-based detection from camera capture or gallery",
      "Traffic sign classification across multiple sign types",
      "AI-powered detection running on-device with TensorFlow Lite",
      "Confidence score displayed for every detection",
      "Mobile-friendly interface built with Flutter",
      "Works offline without a network connection",
    ],
    technologies: [
      "Flutter",
      "Dart",
      "YOLOv8",
      "TFLite",
      "Roboflow",
      "Computer Vision",
    ],
    challenges: [
      "Converting the trained model to a size that loads quickly on mobile without losing accuracy.",
      "Annotating and balancing the dataset so rare sign classes remain well represented.",
      "Tuning the confidence threshold to reduce false positives on cluttered backgrounds.",
      "Keeping inference smooth on mid-range Android devices.",
    ],
    process: [
      "Curated and annotated a traffic-sign dataset in Roboflow.",
      "Trained a YOLOv8 model and iterated on mAP with different architectures.",
      "Exported and quantized the model to TensorFlow Lite.",
      "Built the Flutter app and wired the TFLite interpreter to the camera and gallery flows.",
      "Optimized pre-processing and post-processing for low latency.",
      "Tested on multiple devices and tuned thresholds and UI feedback.",
    ],
    results: [
      "Real-time on-device sign detection with no network dependency.",
      "A clean, intuitive mobile UI that surfaces detections with confidence scores.",
      "A portable pipeline (Roboflow → YOLOv8 → TFLite) that is easy to retrain on new sign types.",
    ],
    screenshots: [
      "App home screen with capture and gallery actions",
      "Detection result overlay with bounding box and confidence score",
      "Classification list of supported sign types",
    ],
    image: {
      gradient: "from-violet-600 via-indigo-600 to-blue-600",
      accent: "#8b5cf6",
      initials: "TS",
    },
    github: "https://github.com/lancetanio/traffic-sign-detection",
    demo: "",
    featured: true,
    year: "2025",
  },
  {
    slug: "dev-portfolio",
    title: "Developer Portfolio",
    category: "web",
    categoryLabel: "Web",
    shortDescription:
      "A premium dark-first portfolio website built with Next.js, Tailwind CSS, and GSAP scroll animations.",
    overview:
      "A fast, accessible developer portfolio designed around strong typography, smooth GSAP-driven motion, and a consistent dark-first design system with a light mode.",
    problem:
      "Developer portfolios are often static or template-like. I wanted a site that is genuinely performant, accessible, and easy to maintain, while still feeling premium and distinctive.",
    solution:
      "Built with the Next.js App Router and Tailwind CSS, using GSAP + ScrollTrigger for tasteful scroll animations that respect prefers-reduced-motion. Content lives in typed data files so projects, skills, and experience can be updated without touching components.",
    features: [
      "Dark-first theme with a persisted light/dark toggle",
      "GSAP scroll, reveal, and stagger animations",
      "Reduced-motion support for accessibility",
      "Filterable project showcase with detail pages",
      "Fully responsive, semantic, and keyboard-accessible",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "GSAP", "shadcn/ui"],
    challenges: [
      "Coordinating ScrollTrigger animations with React lifecycles and avoiding hydration mismatches.",
      "Ensuring every animation respects prefers-reduced-motion.",
      "Keeping the bundle lean by limiting client components and animated DOM nodes.",
    ],
    process: [
      "Designed a dark-first design system with reusable tokens.",
      "Implemented the landing page sections and animation primitives.",
      "Added dynamic project pages with per-project metadata.",
      "Polished responsive behavior and accessibility across breakpoints.",
    ],
    results: [
      "A production-ready portfolio with excellent Lighthouse performance.",
      "A reusable animation component library for future pages.",
      "Clean separation of content and presentation for easy updates.",
    ],
    screenshots: ["Hero section", "Projects grid", "Project detail page"],
    image: {
      gradient: "from-sky-500 via-indigo-500 to-violet-600",
      accent: "#6366f1",
      initials: "DP",
    },
    github: "https://github.com/lancetanio/dev-portfolio",
    demo: "https://lance-tanio-portfolio.vercel.app",
    featured: false,
    year: "2025",
  },
  {
    slug: "flutter-weather-app",
    title: "WeatherNow",
    category: "mobile",
    categoryLabel: "Mobile",
    shortDescription:
      "A cross-platform weather app in Flutter with location-based forecasts, hourly trends, and a clean adaptive UI.",
    overview:
      "A Flutter weather application that delivers current conditions and forecasts for the user's location with a polished, adaptive interface that feels native on both Android and iOS.",
    problem:
      "Weather apps are often cluttered or inconsistent across platforms. I wanted a lightweight app that shows the essentials at a glance, with a design that adapts cleanly to different screen sizes.",
    solution:
      "Built with Flutter and Dart, the app fetches weather data from a public API, detects location, and renders hourly and daily forecasts with expressive icons and smooth transitions. The UI adapts between phone and tablet layouts.",
    features: [
      "Location-based current weather",
      "Hourly and 7-day forecasts",
      "Adaptive phone and tablet layouts",
      "Refresh and error states with graceful fallbacks",
      "Clean, minimal, accessible design",
    ],
    technologies: ["Flutter", "Dart", "REST API", "Geolocation"],
    challenges: [
      "Managing a smooth state flow between location, loading, and error states.",
      "Designing one adaptive layout that looks great on phones and tablets.",
      "Optimizing API usage and caching responses for offline resilience.",
    ],
    process: [
      "Set up the Flutter project structure and design tokens.",
      "Integrated the weather API and location services.",
      "Built reusable forecast widgets and the adaptive layout.",
      "Added loading, empty, and error states.",
      "Tested across device sizes and refined spacing and typography.",
    ],
    results: [
      "A cross-platform weather app with a consistent premium feel.",
      "Fast, location-aware forecasts with minimal API overhead.",
      "A reusable Flutter widget architecture for future projects.",
    ],
    screenshots: ["Current conditions screen", "Hourly forecast", "Tablet layout"],
    image: {
      gradient: "from-cyan-500 via-sky-500 to-blue-600",
      accent: "#06b6d4",
      initials: "WN",
    },
    github: "https://github.com/lancetanio/weathernow",
    demo: "",
    featured: false,
    year: "2024",
  },
  {
    slug: "taskflow-dashboard",
    title: "TaskFlow Dashboard",
    category: "web",
    categoryLabel: "Web",
    shortDescription:
      "A responsive task management dashboard with drag-and-drop boards, filters, and keyboard-first interactions.",
    overview:
      "A front-end-only task management dashboard that demonstrates a clean information hierarchy, fast interactions, and keyboard-first accessibility across a multi-column board and list views.",
    problem:
      "Many dashboards are dense and hard to scan, and their interactions rely on mouse-only gestures. I wanted a focused task dashboard that is pleasant to use and fully usable from the keyboard.",
    solution:
      "Built with React and TypeScript on a Tailwind design system, TaskFlow provides drag-and-drop columns, rich filtering, and clear visual states. All interactions have keyboard alternatives and visible focus indicators.",
    features: [
      "Drag-and-drop task board with multiple columns",
      "Filtering by status, label, and priority",
      "Keyboard-first navigation and reordering",
      "Empty, loading, and error states",
      "Responsive layout from mobile to desktop",
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Zustand"],
    challenges: [
      "Making drag-and-drop reliable on touch devices.",
      "Keeping board state consistent across filters and reordering.",
      "Designing a dense UI that remains scannable and accessible.",
    ],
    process: [
      "Defined the data model and board state with Zustand.",
      "Built the board and task components with Tailwind.",
      "Implemented drag-and-drop with touch support.",
      "Added filters and keyboard-first interactions.",
      "Tested responsiveness and accessibility.",
    ],
    results: [
      "A smooth, responsive dashboard that feels fast and modern.",
      "Fully usable without a mouse.",
      "A clean component pattern reusable across future admin UIs.",
    ],
    screenshots: ["Board view", "Filtered list view", "Mobile board"],
    image: {
      gradient: "from-amber-500 via-orange-500 to-rose-500",
      accent: "#f59e0b",
      initials: "TF",
    },
    github: "https://github.com/lancetanio/taskflow-dashboard",
    demo: "",
    featured: false,
    year: "2024",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getRelatedProjects(project: Project, count = 3): Project[] {
  return projects
    .filter((item) => item.slug !== project.slug)
    .filter((item) => item.category === project.category)
    .concat(projects.filter((item) => item.slug !== project.slug && item.category !== project.category))
    .slice(0, count);
}
