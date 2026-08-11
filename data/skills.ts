import { type ComponentType } from "react";
import {
  Code2,
  Smartphone,
  BrainCircuit,
  Wrench,
  Braces,
  LayoutTemplate,
  MonitorSmartphone,
  Palette,
  GitBranch,
  SquareTerminal,
  FlaskConical,
  Rocket,
  ScanSearch,
} from "lucide-react";
import {
  FigmaIcon,
  GithubIcon,
} from "@/components/icons/BrandIcons";

export type Skill = {
  name: string;
  icon: ComponentType<{ className?: string }>;
};

export type SkillCategory = {
  id: string;
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    description: "Building responsive, accessible interfaces.",
    icon: Code2,
    skills: [
      { name: "HTML", icon: Braces },
      { name: "CSS", icon: LayoutTemplate },
      { name: "JavaScript", icon: Code2 },
      { name: "TypeScript", icon: Braces },
      { name: "React", icon: MonitorSmartphone },
      { name: "Next.js", icon: Rocket },
      { name: "Tailwind CSS", icon: Palette },
    ],
  },
  {
    id: "mobile",
    title: "Mobile",
    description: "Cross-platform apps with native feel.",
    icon: Smartphone,
    skills: [
      { name: "Flutter", icon: Smartphone },
      { name: "Dart", icon: Braces },
    ],
  },
  {
    id: "ai",
    title: "AI / Machine Learning",
    description: "On-device and web ML integrations.",
    icon: BrainCircuit,
    skills: [
      { name: "YOLO", icon: ScanSearch },
      { name: "TFLite", icon: BrainCircuit },
      { name: "Roboflow", icon: FlaskConical },
      { name: "Computer Vision", icon: ScanSearch },
    ],
  },
  {
    id: "tools",
    title: "Tools",
    description: "The everyday workflow.",
    icon: Wrench,
    skills: [
      { name: "Git", icon: GitBranch },
      { name: "GitHub", icon: GithubIcon },
      { name: "Figma", icon: FigmaIcon },
      { name: "VS Code", icon: SquareTerminal },
      { name: "Postman", icon: FlaskConical },
    ],
  },
];

export const interestTags = [
  "Frontend Development",
  "Modern Web Apps",
  "Mobile Development",
  "UI / UX",
  "Machine Learning Integrations",
  "Clean Code",
];
