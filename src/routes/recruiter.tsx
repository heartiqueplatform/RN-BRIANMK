import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase";
import { motion } from "framer-motion";
import { Download, Mail, MapPin, Linkedin, Github, Printer, CheckCircle2 } from "lucide-react";
import { Section } from "@/components/section";

export const Route = createFileRoute("/recruiter")({
  component: RecruiterPage,
});

function RecruiterPage() {
  // 1. Get Profile Info
  const { data: profile } = useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      const { data } = await supabase.from("profile").select("*").single();
      return data;
    },
  });

  // 2. Get Contact Links
  const { data: contact } = useQuery({
    queryKey: ["contact_info"],
    queryFn: async () => {
      const { data } = await supabase.from("contact_info").select("*").single();
      return data;
    },
  });

  // 3. Get Skills (Top 8)
  const { data: skills } = useQuery({
    queryKey: ["skills"],
    queryFn: async () => {
      const { data } = await supabase.from("skills").select("*").order("level", { ascending: false }).limit(8);
      return data;
    },
  });

  // 4. Get Certifications (Top 4)
  const { data: certs } = useQuery({
    queryKey: ["certifications"],
    queryFn: async () => {
      const { data } = await supabase.from("certifications").select("*").order("date", { ascending: false }).limit(4);
      return data;
    },
  });

  // 5. Get Achievements (Top 3)
  const { data: stats } = useQuery({
    queryKey: ["achievements"],
    queryFn: async () => {
      const { data } = await supabase.from("achievements").select("*").limit(3);
      return data;
    },
  });

  // Wait for the important info
  if (!profile || !contact) return null;

  return (
    <div className="pt-24">
      <Section eyebrow="Recruiter Mode" title={<>The 60-second <span className="text-gradient">overview.</span></>}>
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-6">

          {/* LEFT SIDE: Identity Card */}
          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-strong rounded-3xl p-6 h-fit"
          >
            {profile.portrait_url ? (
              <img src={profile.portrait_url} className="h-16 w-16 rounded-full object-cover border-2 border-primary/20" alt={profile.full_name} />
            ) : (
              <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-primary-glow grid place-items-center font-display text-2xl font-bold text-primary-foreground">
                {profile.full_name.charAt(0)}
              </div>
            )}

            <h2 className="mt-4 text-2xl font-display font-semibold">{profile.full_name}</h2>
            <p className="text-sm text-muted-foreground">{profile.tagline}</p>

            <div className="mt-4 grid gap-2 text-sm">
              <span className="inline-flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" /> {profile.location}
              </span>
              <a href={`mailto:${contact.email}`} className="inline-flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="h-4 w-4" /> {contact.email}
              </a>
              <a href={contact.linkedin_url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-primary transition-colors">
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
              <a href={contact.github_url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-primary transition-colors">
                <Github className="h-4 w-4" /> GitHub
              </a>
            </div>

            <div className="mt-6 flex flex-col gap-2">
              <a href={profile.cv_url || "#"} className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-primary to-primary-glow text-primary-foreground font-medium text-sm shadow-glow hover:scale-[1.02] transition-transform">
                <Download className="h-4 w-4" /> Download CV
              </a>
              <button onClick={() => window.print()} className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full glass font-medium text-sm hover:bg-white/10 transition-colors">
                <Printer className="h-4 w-4" /> Printable resume
              </button>
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full font-medium text-sm text-muted-foreground hover:text-foreground">
                Quick contact →
              </Link>
            </div>
          </motion.aside>

          {/* RIGHT SIDE: The Highlights */}
          <div className="grid gap-4">

            {/* 1. Numbers Snapshot */}
            <div className="glass rounded-3xl p-6">
              <h3 className="font-display text-lg font-semibold">Snapshot</h3>
              <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                {stats?.map((a) => (
                  <div key={a.id} className="rounded-2xl bg-foreground/5 p-3">
                    <div className="text-xl md:text-2xl font-display font-semibold">{a.value.toLocaleString()}+</div>
                    <div className="text-xs text-muted-foreground">{a.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* 2. Top Skills */}
            <div className="glass rounded-3xl p-6">
              <h3 className="font-display text-lg font-semibold">Top skills</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {skills?.map((s) => (
                  <span key={s.id} className="inline-flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-full bg-primary/10 text-foreground">
                    <CheckCircle2 className="h-3.5 w-3.5 text-primary" /> {s.name}
                  </span>
                ))}
              </div>
            </div>

            {/* 3. Education / Certs */}
            <div className="glass rounded-3xl p-6">
              <h3 className="font-display text-lg font-semibold">Recent certifications</h3>
              <ul className="mt-3 grid gap-2 text-sm">
                {certs?.map((c) => (
                  <li key={c.id} className="flex items-start justify-between gap-3">
                    <span><strong className="font-medium">{c.title}</strong> · <span className="text-muted-foreground">{c.org}</span></span>
                    <span className="font-mono text-xs text-muted-foreground">{c.date}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </Section>
    </div>
  );
}