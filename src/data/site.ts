
export const navItems = [
  { to: "/", label: "Home" },
  { to: "/journey", label: "Journey" },
  { to: "/projects", label: "Projects" },
  { to: "/blog", label: "Blog" },
  { to: "/recruiter", label: "Recruiter" },
  { to: "/contact", label: "Contact" },
] as const;

export const skills = [
  { name: "Emergency Care", level: 92, category: "Clinical" },
  { name: "Patient Communication", level: 96, category: "Human" },
  { name: "Leadership", level: 88, category: "Human" },
  { name: "Clinical Documentation", level: 90, category: "Clinical" },
  { name: "Clinical Procedures", level: 89, category: "Clinical" },
  { name: "Healthcare Technology", level: 85, category: "Innovation" },
  { name: "Team Collaboration", level: 94, category: "Human" },
  { name: "Patient Advocacy", level: 93, category: "Human" },
  { name: "Digital Health", level: 87, category: "Innovation" },
  { name: "Innovation Thinking", level: 91, category: "Innovation" },
];

export const achievements = [
  { label: "Clinical Hours", value: 2400, icon: "Activity" },
  { label: "Patients Assisted", value: 1200, icon: "HeartPulse" },
  { label: "Projects Built", value: 6, icon: "Rocket" },
  { label: "Certifications", value: 9, icon: "Award" },
  { label: "Leadership Roles", value: 4, icon: "Users" },
  { label: "Research Interests", value: 3, icon: "Microscope" },
];




export const projects = [
  {
    title: "Mentree",
    description: "A peer-mentorship platform connecting student nurses with senior practitioners across Kenya.",
    tech: ["React", "Supabase", "TypeScript", "Tailwind"],
    status: "In Build",
    href: "#",
  },
  {
    title: "PulseNote",
    description: "Mobile-first clinical reflection journal helping nurses process emotionally heavy shifts.",
    tech: ["PWA", "Next.js", "Edge Functions"],
    status: "Concept",
    href: "#",
  },
  {
    title: "JamboCare",
    description: "QR-coded patient discharge summaries in Swahili & English for low-bandwidth clinics.",
    tech: ["React Native", "Offline-first"],
    status: "Research",
    href: "#",
  },
];

export const reflections = [
  {
    title: "The night the corridor went quiet",
    excerpt: "An ICU shift that taught me presence is sometimes the only intervention.",
    tag: "Emotional Growth",
    date: "Mar 2025",
  },
  {
    title: "Listening louder than speaking",
    excerpt: "How a patient's silence rewrote my approach to bedside communication.",
    tag: "Communication",
    date: "Feb 2025",
  },
  {
    title: "When technology meets tenderness",
    excerpt: "Notes from integrating digital tools into a 40-year-old hospital workflow.",
    tag: "Innovation",
    date: "Jan 2025",
  },
];

export const posts = [
  {
    slug: "future-of-kenyan-healthcare",
    title: "The Future of Kenyan Healthcare is Digital, Distributed, and Deeply Human",
    excerpt: "Why the next decade of Kenyan healthcare will be built at the intersection of nursing and software.",
    category: "Healthcare Innovation",
    readTime: "6 min",
    date: "May 2026",
  },
  {
    slug: "student-nurse-survival",
    title: "What I Wish I Knew in My First Clinical Rotation",
    excerpt: "Twelve practical, emotional, and unglamorous lessons from year one.",
    category: "Student Nurse Journey",
    readTime: "4 min",
    date: "Apr 2026",
  },
  {
    slug: "mental-health-in-nursing",
    title: "We Need to Talk About Nurse Mental Health",
    excerpt: "Burnout isn't a personal failure. It's a system signal.",
    category: "Mental Health",
    readTime: "5 min",
    date: "Mar 2026",
  },
];



export const supportGoal = {
  title: "Mentree v1 Launch",
  current: 42000,
  target: 120000,
  currency: "KES",
};
