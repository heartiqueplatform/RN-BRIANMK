import { motion } from "framer-motion";
import { Heart, Sparkles, Users, Lightbulb } from "lucide-react";
import { Section } from "@/components/section";

const iconMap = { Heart, Sparkles, Users, Lightbulb };

export function About({ items, isLoading }: { items: any[] | undefined, isLoading: boolean }) {

  if (isLoading) return null;

  return (
    <Section
      id="about"
      eyebrow="About me"
      title={<>Registered Nurse <span className="text-gradient">focused on patient care.</span></>}
      description="I trained across diverse clinical settings in Kenya, gaining hands-on experience in medical, surgical, paediatric, psychiatric, and critical care nursing. I value the small but powerful aspects of care clear communication, compassion, and presence at the bedside. My focus is delivering safe, respectful, and patient-centered nursing care while continuously growing in clinical practice."
    >
      <div className="grid sm:grid-cols-2 gap-2">
        {items?.map((item, i) => {
          const Icon = iconMap[item.icon_name as keyof typeof iconMap] || Heart;

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass rounded-3xl p-6 hover:shadow-elegant transition-shadow group"
            >
              <div className="h-11 w-11 rounded-2xl bg-primary/15 text-primary grid place-items-center mb-4 group-hover:scale-110 transition-transform">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.body}</p>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}