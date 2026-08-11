export type EducationItem = {
  degree: string;
  institution: string;
  location: string;
  year: string;
  status: string;
  highlights: string[];
};

export const educationHeading = {
  eyebrow: "Education",
  title: "Learning path",
  description:
    "Formal education and notable learning milestones. Entries are placeholders — update them with your degree, school, and dates.",
};

export const education: EducationItem[] = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "NORTH EASTERN MINDANAO STATE UNIVERSITY",
    location: "Lianga, surigao del sure",
    year: "2023 — 2026",
    status: "4th year student",
    highlights: [
      "Placeholder — add relevant coursework, thesis, or honors here.",
      "Relevant coursework: Data Structures, Web Development, Machine Learning.",
    ],
  },
  {
    degree: "Self-Directed Learning",
    institution: "Online Courses & Community",
    location: "Remote",
    year: "Ongoing",
    status: "In progress",
    highlights: [
      "Deep dives into React, Next.js, and modern CSS.",
      "Mobile development with Flutter and on-device ML with TensorFlow Lite.",
    ],
  },
];
