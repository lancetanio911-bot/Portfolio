export type ExperienceItem = {
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
};

export const experienceHeading = {
  eyebrow: "Experience",
  title: "Where I've worked",
  description:
    "A look at my professional journey. Entries are placeholders — replace them with real roles, companies, and dates.",
};

export const experience: ExperienceItem[] = [
  {
    role: "Frontend Developer",
    company: "Company / Organization",
    location: "Remote",
    period: "2025 — Present",
    type: "Full-time",
    description:
      "Placeholder entry. Describe the team, product, and your day-to-day impact here.",
    responsibilities: [
      "Build and maintain responsive, accessible user interfaces.",
      "Collaborate with designers and backend developers to ship features end-to-end.",
      "Improve performance and Core Web Vitals across key pages.",
    ],
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
  },
  {
    role: "Junior Developer / Intern",
    company: "Company / Organization",
    location: "Remote",
    period: "2024 — 2025",
    type: "Internship",
    description:
      "Placeholder entry. Highlight projects, tools, and what you learned during this role.",
    responsibilities: [
      "Implemented UI components and fixed cross-browser issues.",
      "Wrote clean, reusable code following team conventions.",
      "Participated in code reviews and agile ceremonies.",
    ],
    technologies: ["JavaScript", "React", "Git", "Figma"],
  },
];
