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
      title={<>A nurse <span className="text-gradient">with a builder's mind.</span></>}
      description="I trained in Kenya's busiest wards and fell in love with the moments medicine forgets to measure  eye contact, a steady voice, a hand held a second longer. I'm building Mentrae and exploring digital health because the future of African healthcare deserves both clinical excellence and product imagination."
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