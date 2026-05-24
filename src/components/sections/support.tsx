import { motion } from "framer-motion";
import { Coffee, Stethoscope, Rocket, Lightbulb, Heart } from "lucide-react";
import { Section } from "@/components/section";

const iconMap = { Coffee, Stethoscope, Rocket, Lightbulb, Heart };

export function Support({ tiers, goal, isLoading }: { tiers: any[] | undefined, goal: any, isLoading: boolean }) {

  if (isLoading || !goal) return null;

  // Baby-math: Calculate how full the tank is
  const pct = Math.round((goal.current_amount / goal.target_amount) * 100);

  return (
    <Section
      id="support"
      eyebrow="Support the journey"
      title={<>Back a Kenyan nurse <span className="text-gradient">building the future.</span></>}
      description="If something here moved you — a story, a project, a vision  a small contribution helps fund tools, certifications, and the early days of Mentrae."
    >
      <div className="grid lg:grid-cols-[1.5fr_1fr] gap-6">
        <div className="grid sm:grid-cols-2 gap-3">
          {tiers?.map((t, i) => {
            const Icon = iconMap[t.icon_name as keyof typeof iconMap] || Heart;
            return (
              <motion.button
                key={t.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="text-left glass rounded-2xl p-5 hover:shadow-elegant hover:-translate-y-0.5 transition-all"
              >
                <div className="flex items-start justify-between">
                  <div className="h-10 w-10 rounded-xl bg-primary/15 text-primary grid place-items-center">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-mono text-muted-foreground">{t.amount}</span>
                </div>
                <h3 className="mt-3 font-display font-semibold">{t.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{t.note}</p>
              </motion.button>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-strong rounded-3xl p-6 flex flex-col"
        >
          <span className="text-xs text-muted-foreground">Active goal</span>
          <h3 className="mt-1 text-xl font-display font-semibold">{goal.title}</h3>
          <div className="mt-6 flex items-baseline gap-2">
            <span className="text-3xl font-display font-semibold">
              {goal.currency} {goal.current_amount.toLocaleString()}
            </span>
            <span className="text-sm text-muted-foreground">/ {goal.target_amount.toLocaleString()}</span>
          </div>

          <div className="mt-3 h-2 rounded-full bg-foreground/5 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${pct}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="h-full rounded-full bg-gradient-to-r from-primary to-primary-glow"
            />
          </div>
          <p className="mt-3 text-sm text-muted-foreground">{pct}% funded · M-Pesa & card support coming soon.</p>

          <button className="mt-auto pt-6">
            <span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-primary to-primary-glow text-primary-foreground font-medium text-sm shadow-glow">
              Notify me when live
            </span>
          </button>
        </motion.div>
      </div>
    </Section>
  );
}