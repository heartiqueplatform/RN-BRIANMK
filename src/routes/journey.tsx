import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query"; // Import the Birdy
import { supabase } from "@/integrations/supabase"; // Import the Cloud connector
import { motion } from "framer-motion";
import { Section } from "@/components/section";
import { Award, ExternalLink, Hospital } from "lucide-react";

export const Route = createFileRoute("/journey")({
  component: JourneyPage,
});

function JourneyPage() {
  // 1. Fetch the Path of Footsteps
  const { data: journey, isLoading: loadJ } = useQuery({
    queryKey: ["journey_path"],
    queryFn: async () => {
      const { data, error } = await supabase.from("journey_path").select("*").order("sort_order", { ascending: true });
      if (error) throw error;
      return data;
    },
  });

  // 2. Fetch the Sticker Album
  const { data: certs, isLoading: loadC } = useQuery({
    queryKey: ["certifications"],
    queryFn: async () => {
      const { data, error } = await supabase.from("certifications").select("*").order("sort_order", { ascending: true });
      if (error) throw error;
      return data;
    },
  });

  // 3. Fetch the Thought Jar
  const { data: thoughts, isLoading: loadT } = useQuery({
    queryKey: ["reflections"],
    queryFn: async () => {
      const { data, error } = await supabase.from("reflections").select("*").order("sort_order", { ascending: true });
      if (error) throw error;
      return data;
    },
  });

  if (loadJ || loadC || loadT) return null;

  return (
    <div className="pt-24">
      <Section
        eyebrow="The Journey"
        title={<>Hospitals, hands, <span className="text-gradient">and human moments.</span></>}
        description="Each rotation reshaped my understanding of care. Here is the path so far."
      >
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent" />
          <div className="grid gap-10">
            {journey?.map((j, i) => (
              <motion.article
                key={j.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative md:grid md:grid-cols-2 md:gap-12 ${i % 2 === 0 ? "" : "md:[&>*]:col-start-2"}`}
              >
                <span className="absolute left-2.5 md:left-1/2 md:-translate-x-1/2 top-4 h-3 w-3 rounded-full bg-primary shadow-glow" />
                <div className="pl-10 md:pl-0 md:px-8">
                  <div className="glass rounded-3xl p-6">
                    <div className="flex items-center gap-2 text-xs font-mono text-primary">
                      <Hospital className="h-3.5 w-3.5" />
                      {j.period}
                    </div>
                    <h3 className="mt-2 text-xl font-display font-semibold">{j.hospital}</h3>
                    <p className="text-sm text-muted-foreground">{j.department} · {j.role}</p>
                    <ul className="mt-4 grid gap-1.5 text-sm">
                      {j.responsibilities?.map((r: string) => (
                        <li key={r} className="flex gap-2">
                          <span className="text-primary mt-1">→</span> {r}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-4 text-sm italic text-muted-foreground">"{j.lesson}"</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Certifications"
        title={<>Credentials that keep <span className="text-gradient">growing.</span></>}
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {certs?.map((c, i) => (
            <motion.a
              key={c.id}
              href={c.url}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="glass rounded-2xl p-5 hover:shadow-elegant hover:-translate-y-0.5 transition-all block"
            >
              <Award className="h-5 w-5 text-primary" />
              <h4 className="mt-3 font-medium leading-snug">{c.title}</h4>
              <div className="mt-1 text-sm text-muted-foreground">{c.org}</div>
              <div className="mt-3 flex items-center justify-between text-xs">
                <span className="font-mono text-muted-foreground">{c.date}</span>
                <ExternalLink className="h-3.5 w-3.5 opacity-60" />
              </div>
            </motion.a>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Healthcare Reflections"
        title={<>Lessons from the <span className="text-gradient">quiet hours.</span></>}
        description="Privacy-conscious, professional reflections — no patient-identifiable information."
      >
        <div className="grid md:grid-cols-3 gap-4">
          {thoughts?.map((r, i) => (
            <motion.article
              key={r.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="glass rounded-3xl p-6"
            >
              <span className="text-xs font-mono text-primary">{r.tag}</span>
              <h4 className="mt-2 font-display text-lg font-semibold leading-snug">{r.title}</h4>
              <p className="mt-2 text-sm text-muted-foreground">{r.excerpt}</p>
              <p className="mt-4 text-xs text-muted-foreground">{r.date}</p>
            </motion.article>
          ))}
        </div>
      </Section>
    </div>
  );
}