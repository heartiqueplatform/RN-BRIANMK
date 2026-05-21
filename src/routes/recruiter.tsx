import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Download, Mail, MapPin, Linkedin, Github, Printer, CheckCircle2 } from "lucide-react";
import { Section } from "@/components/section";
import { site, skills, certifications, achievements } from "@/data/site";

export const Route = createFileRoute("/recruiter")({
  component: RecruiterPage,
  head: () => ({
    meta: [
      { title: "Recruiter Mode · JxB" },
      { name: "description", content: "A concise, printable summary for recruiters and hiring teams." },
      { property: "og:title", content: "Recruiter Mode · JxB" },
      { property: "og:url", content: "/recruiter" },
    ],
    links: [{ rel: "canonical", href: "/recruiter" }],
  }),
});

function RecruiterPage() {
  return (
    <div className="pt-24">
      <Section eyebrow="Recruiter Mode" title={<>The 60-second <span className="text-gradient">overview.</span></>}>
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-6">
          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-strong rounded-3xl p-6 h-fit"
          >
            <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-primary-glow grid place-items-center font-display text-2xl font-bold text-primary-foreground">J</div>
            <h2 className="mt-4 text-2xl font-display font-semibold">{site.fullName}</h2>
            <p className="text-sm text-muted-foreground">{site.tagline}</p>
            <div className="mt-4 grid gap-2 text-sm">
              <span className="inline-flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" /> {site.location}
              </span>
              <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 hover:text-primary">
                <Mail className="h-4 w-4" /> {site.email}
              </a>
              <a href={site.socials.linkedin} className="inline-flex items-center gap-2 hover:text-primary">
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
              <a href={site.socials.github} className="inline-flex items-center gap-2 hover:text-primary">
                <Github className="h-4 w-4" /> GitHub
              </a>
            </div>
            <div className="mt-6 flex flex-col gap-2">
              <a href="#" className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-primary to-primary-glow text-primary-foreground font-medium text-sm shadow-glow">
                <Download className="h-4 w-4" /> Download CV
              </a>
              <button onClick={() => window.print()} className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full glass font-medium text-sm">
                <Printer className="h-4 w-4" /> Printable resume
              </button>
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full font-medium text-sm text-muted-foreground hover:text-foreground">
                Quick contact →
              </Link>
            </div>
          </motion.aside>

          <div className="grid gap-4">
            <div className="glass rounded-3xl p-6">
              <h3 className="font-display text-lg font-semibold">Snapshot</h3>
              <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                {achievements.slice(0, 3).map((a) => (
                  <div key={a.label} className="rounded-2xl bg-foreground/5 p-3">
                    <div className="text-xl md:text-2xl font-display font-semibold">{a.value.toLocaleString()}+</div>
                    <div className="text-xs text-muted-foreground">{a.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass rounded-3xl p-6">
              <h3 className="font-display text-lg font-semibold">Top skills</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {skills.slice(0, 8).map((s) => (
                  <span key={s.name} className="inline-flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-full bg-primary/10 text-foreground">
                    <CheckCircle2 className="h-3.5 w-3.5 text-primary" /> {s.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass rounded-3xl p-6">
              <h3 className="font-display text-lg font-semibold">Recent certifications</h3>
              <ul className="mt-3 grid gap-2 text-sm">
                {certifications.slice(0, 4).map((c) => (
                  <li key={c.title} className="flex items-start justify-between gap-3">
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
