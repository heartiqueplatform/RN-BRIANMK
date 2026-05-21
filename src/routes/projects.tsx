import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { Section } from "@/components/section";

export const Route = createFileRoute("/projects")({
  component: ProjectsPage,
});

function ProjectsPage() {
  // The Birdy goes to get the projects
  const { data: projects, isLoading } = useQuery({
    queryKey: ["projects_gallery"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("projects_gallery")
        .select("*")
        .order("sort_order", { ascending: true });
      if (error) throw error;
      return data;
    },
  });

  if (isLoading) return null;

  return (
    <div className="pt-24">
      <Section
        eyebrow="Projects"
        title={<>Building tools for the <span className="text-gradient">next era of care.</span></>}
        description="A small, growing collection of experiments at the intersection of nursing, software, and community."
      >
        <div className="grid md:grid-cols-2 gap-5">
          {projects?.map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group glass rounded-3xl p-6 relative overflow-hidden flex flex-col"
            >
              {/* The Glowy Background */}
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/10 blur-3xl group-hover:bg-primary/20 transition" />

              {/* Project Image - New! */}
              {p.image_url && (
                <div className="mb-6 overflow-hidden rounded-2xl aspect-video bg-muted">
                  <img
                    src={p.image_url}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}

              <div className="flex items-start justify-between">
                <h3 className="text-2xl font-display font-semibold">{p.title}</h3>
                <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-1 rounded-full bg-primary/15 text-primary">
                  {p.status}
                </span>
              </div>

              <p className="mt-3 text-muted-foreground">{p.description}</p>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {p.tech?.map((t: string) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-full bg-foreground/5">{t}</span>
                ))}
              </div>

              <div className="mt-auto pt-6 flex gap-4">
                <a href={p.view_url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium hover:text-primary transition-colors">
                  <ExternalLink className="h-3.5 w-3.5" /> View
                </a>
                <a href={p.github_url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium hover:text-primary transition-colors">
                  <Github className="h-3.5 w-3.5" /> Code
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </Section>
    </div>
  );
}