import { Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, PhoneCall } from "lucide-react";
import { Section } from "@/components/section";
import { motion } from "framer-motion";

export function ContactCTA({ data, isLoading }: { data: any; isLoading: boolean }) {

  // --- FEEDBACK LOGIC ---
  const triggerFeedback = () => {
    // Play the cute tap sound
    const audio = new Audio("/tap.mp3");
    audio.volume = 0.4;
    audio.play().catch(() => { });

    // Trigger phone vibration
    if ("vibrate" in navigator) {
      navigator.vibrate(10);
    }
  };

  if (isLoading || !data) return null;

  return (
    <Section id="contact-cta">
      <div className="relative overflow-hidden rounded-[2.5rem] glass-strong p-8 md:p-16 border border-primary/20">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-aurora)", opacity: 0.4 }} />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -top-20 -right-20 h-72 w-72 rounded-full blur-3xl bg-primary/30 -z-10"
        />

        <div className="max-w-2xl">
          {/* HR WOW: Small badge */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-wider mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Direct Line to Innovation
          </motion.div>

          <h2 className="text-3xl md:text-5xl font-display font-semibold tracking-tight">
            Ready to hire a <span className="text-gradient">Registered Nurse</span>?
          </h2>

          <p className="mt-4 text-muted-foreground md:text-lg">
            Explore my clinical background, skills, and experience to see how I can contribute to safe, high-quality patient care in your facility.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            {/* Primary Button with Shimmer & Feedback */}
            <Link
              to="/contact"
              onClick={triggerFeedback}
              className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-primary to-primary-glow text-primary-foreground font-semibold shadow-glow transition-all hover:scale-105 active:scale-95 overflow-hidden"
            >
              {/* Shimmer Effect */}
              <motion.div
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
              />
              <PhoneCall className="h-4 w-4 group-hover:rotate-12 transition-transform" />
              <span className="relative z-10">Contact for Hiring</span>
              <ArrowRight className="h-4 w-4 relative z-10 group-hover:translate-x-1 transition-transform" />
            </Link>

            {/* Secondary Button with Feedback */}
            <Link
              to="/recruiter"
              onClick={triggerFeedback}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full glass font-medium hover:bg-white/10 transition-all active:scale-95 border border-white/5"
            >
              <Sparkles className="h-4 w-4 text-primary" />
              View Full Nursing Profile
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}