import { motion } from "framer-motion";
import { Section } from "@/components/section";

export function FutureVision({ items, isLoading }: { items: any[] | undefined, isLoading: boolean }) {

  if (isLoading) return null;

  return (
    <Section
      id="vision"
      eyebrow="Future Vision"
      title={<>The future of <span className="text-gradient">nursing in Kenya.</span></>}
      description="A healthcare system where nurses are well-supported, well-equipped, and empowered to deliver safe, effective, and patient-centered care across all clinical settings."
    >
      <div className="relative pl-6 md:pl-0">
        {/* The timeline line */}
        <div className="absolute left-2 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent" />

        <div className="grid gap-8">
          {items?.map((b, i) => (
            <motion.div
              key={b.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              // This part handles the "Left, Right, Left" zig-zag on big screens
              className={`md:grid md:grid-cols-2 md:gap-12 items-center ${i % 2 ? "md:[&>*:first-child]:col-start-2" : ""}`}
            >
              <div className="relative md:px-8">
                {/* The glowing dot on the line */}
                <span className="absolute -left-5 md:left-auto md:right-full md:mr-[-9px] top-2 h-3 w-3 rounded-full bg-primary shadow-glow" />
                <span className="text-xs font-mono text-primary">{b.year}</span>
                <h3 className="mt-1 text-xl font-display font-semibold">{b.title}</h3>
                <p className="mt-2 text-muted-foreground">{b.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}