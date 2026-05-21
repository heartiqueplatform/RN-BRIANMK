import { motion } from "framer-motion";
import { Section } from "@/components/section";

export function Skills({ items, isLoading }: { items: any[] | undefined, isLoading: boolean }) {

  if (isLoading) return null;

  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title={<>Clinical depth. <span className="text-gradient">Modern range.</span></>}
      description="From bedside to backend — a working toolkit shaped by hospital floors and product thinking."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {/* We look at each tool the birdy brought back! */}
        {items?.map((s, i) => (
          <motion.div
            key={s.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.04 }}
            className="glass rounded-2xl p-5"
          >
            <div className="flex items-center justify-between">
              <span className="font-medium">{s.name}</span>
              <span className="text-[10px] uppercase tracking-wider text-muted-foreground">{s.category}</span>
            </div>

            {/* The progress bar */}
            <div className="mt-3 h-1.5 rounded-full bg-foreground/5 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${s.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 + i * 0.04, ease: "easeOut" }}
                className="h-full rounded-full bg-gradient-to-r from-primary to-primary-glow"
              />
            </div>
            <div className="mt-2 text-xs text-muted-foreground">{s.level}%</div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}