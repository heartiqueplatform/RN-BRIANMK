export const site = {
  name: "JxB",
  fullName: "JxB",
  tagline: "Kenyan Nurse · Healthcare Innovator · Digital Health Enthusiast",
  location: "Nairobi, Kenya",
  email: "hello@jxb.health",
  phone: "+254 700 000 000",
  socials: {
    linkedin: "https://linkedin.com/in/jxb",
    github: "https://github.com/jxb",
    whatsapp: "https://wa.me/254700000000",
  },
};

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

export const journey = [
  {
    hospital: "Kenyatta National Hospital",
    department: "Emergency & Casualty",
    role: "Student Nurse Rotation",
    period: "2024",
    responsibilities: ["Triage assistance", "Vitals monitoring", "Acute care support"],
    lesson: "Calm under pressure is itself a clinical skill.",
  },
  {
    hospital: "Aga Khan University Hospital",
    department: "Medical-Surgical Ward",
    role: "Clinical Placement",
    period: "2024",
    responsibilities: ["Post-op care", "Medication administration", "Patient education"],
    lesson: "Recovery happens in the smallest, quietest moments.",
  },
  {
    hospital: "Mbagathi County Hospital",
    department: "Maternity & Newborn",
    role: "Clinical Rotation",
    period: "2023",
    responsibilities: ["Antenatal care", "Newborn assessment", "Family counselling"],
    lesson: "Dignity is the first medicine.",
  },
  {
    hospital: "Coptic Hospital",
    department: "Outpatient & Community Health",
    role: "Community Health Attachment",
    period: "2023",
    responsibilities: ["Health screenings", "Vaccination drives", "Patient education"],
    lesson: "Prevention is the most underrated intervention.",
  },
];

export const certifications = [
  { title: "Basic Life Support (BLS)", org: "Kenya Red Cross", date: "2024", url: "#" },
  { title: "Advanced Cardiac Life Support", org: "AHA", date: "2024", url: "#" },
  { title: "Infection Prevention & Control", org: "MOH Kenya", date: "2023", url: "#" },
  { title: "Digital Health Foundations", org: "Coursera · Stanford", date: "2024", url: "#" },
  { title: "Patient Safety Essentials", org: "WHO Academy", date: "2024", url: "#" },
  { title: "Mental Health First Aid", org: "MHFA Kenya", date: "2023", url: "#" },
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

export const supportTiers = [
  { icon: "Coffee", title: "Buy Coffee", amount: "KES 200", note: "Fuel a late-night study session." },
  { icon: "Stethoscope", title: "Support Clinical Growth", amount: "KES 1,000", note: "Books, scrubs, equipment." },
  { icon: "Rocket", title: "Support Mentree", amount: "KES 2,500", note: "Help us connect more nurses." },
  { icon: "Lightbulb", title: "Support Innovation", amount: "KES 5,000", note: "Back early healthcare experiments." },
  { icon: "Heart", title: "Appreciation Token", amount: "Any amount", note: "Just because. Thank you." },
];

export const supportGoal = {
  title: "Mentree v1 Launch",
  current: 42000,
  target: 120000,
  currency: "KES",
};
