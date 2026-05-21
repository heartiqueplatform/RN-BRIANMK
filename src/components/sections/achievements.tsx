import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Activity, HeartPulse, Rocket, Award, Users, Microscope } from "lucide-react";
import { Section } from "@/components/section";

// 1. This is a map of the pictures (icons)
const iconMap = { Activity, HeartPulse, Rocket, Award, Users, Microscope };

function Counter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const dur = 1400;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      setN(Math.floor((1 - Math.pow(1 - p, 3)) * value));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);
  return <span ref={ref}>{n.toLocaleString()}{value >= 1000 ? "+" : ""}</span>;
}

// 2. We tell the component to wait for "items" and "isLoading"
export function Achievements({ items, isLoading }: { items: any[] | undefined, isLoading: boolean }) {

  // If the cloud is still flying down, show nothing or a "Loading" message
  if (isLoading) return null;

  return (
    <Section
      id="achievements"
      eyebrow="By the numbers"
      title={<>A practice <span className="text-gradient">measured in care.</span></>}
    >
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {/* 3. We look at each item from the cloud! */}
        {items?.map((a, i) => {
          // Find the right picture based on the name from the cloud
          const Icon = iconMap[a.icon as keyof typeof iconMap] || Activity;

          return (
            <motion.div
              key={a.id} // Use the ID from the cloud
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="glass rounded-3xl p-6 relative overflow-hidden group"
            >
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-primary/10 blur-2xl group-hover:bg-primary/20 transition" />
              <Icon className="h-6 w-6 text-primary" />
              <div className="mt-4 text-3xl md:text-4xl font-display font-semibold">
                <Counter value={a.value} />
              </div>
              <div className="mt-1 text-sm text-muted-foreground">{a.label}</div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}