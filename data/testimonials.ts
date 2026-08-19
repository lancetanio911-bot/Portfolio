export type TestimonialItem = {
  name: string;
  role: string;
  company: string;
  quote: string;
  initials: string;
};

export const testimonialsHeading = {
  eyebrow: "Testimonials",
  title: "What people say",
  description:
    "Feedback from colleagues, collaborators, and peers I've worked with.",
};

export const testimonials: TestimonialItem[] = [
  {
    name: "Maria Santos",
    role: "UI/UX Designer",
    company: "Freelance",
    quote:
      "Lance has a rare eye for detail. He takes design mockups and turns them into pixel-perfect, responsive interfaces that feel even better than the original designs. His communication and turnaround time are excellent.",
    initials: "MS",
  },
  {
    name: "Juan dela Cruz",
    role: "Backend Developer",
    company: "Tech Startup",
    quote:
      "Working with Lance was seamless. He integrates APIs cleanly, writes maintainable frontend code, and proactively suggests improvements to the user experience. A reliable teammate on any project.",
    initials: "JD",
  },
  {
    name: "Prof. Ana Reyes",
    role: "Professor",
    company: "NEMSU",
    quote:
      "Lance consistently demonstrates strong problem-solving skills and a genuine curiosity for learning. His capstone project on traffic sign detection showed impressive technical depth and initiative.",
    initials: "AR",
  },
];
