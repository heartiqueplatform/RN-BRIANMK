import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase";
import { motion } from "framer-motion";
import { Section } from "@/components/section";
import { ArrowRight, Clock } from "lucide-react";

export const Route = createFileRoute("/blog")({
  component: BlogPage,
});

function BlogPage() {
  // The Birdy goes to get the stories
  const { data: posts, isLoading } = useQuery({
    queryKey: ["blog_posts"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("blog_posts")
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
        eyebrow="Writing"
        title={<>Stories from the <span className="text-gradient">ward and the workbench.</span></>}
        description="Reflections on nursing life, healthcare innovation, mental health, and the future of Kenyan medicine."
      >
        <div className="grid gap-3">
          {posts?.map((p, i) => (
            <motion.a
              key={p.id}
              href={`/blog/${p.slug}`} // This points to the individual story link
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group glass rounded-3xl p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-6 hover:shadow-elegant transition-all"
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 text-xs">
                  <span className="font-mono text-primary uppercase tracking-wider">{p.category}</span>
                  <span className="text-muted-foreground inline-flex items-center gap-1">
                    <Clock className="h-3 w-3" /> {p.read_time}
                  </span>
                  <span className="text-muted-foreground">{p.post_date}</span>
                </div>
                <h3 className="mt-3 text-xl md:text-2xl font-display font-semibold leading-snug group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
                <p className="mt-2 text-muted-foreground">{p.excerpt}</p>
              </div>
              <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:translate-x-1 group-hover:text-primary transition-all" />
            </motion.a>
          ))}
        </div>
      </Section>
    </div>
  );
}