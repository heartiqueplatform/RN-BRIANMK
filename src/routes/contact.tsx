import { createFileRoute } from "@tanstack/react-router";
import { useState, useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MessageCircle, Linkedin, Github, Send, MapPin, CheckCircle2, Heart, Sparkles } from "lucide-react";
import { Section } from "@/components/section";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  // --- FEEDBACK LOGIC (Sound + Vibration) ---
  const triggerFeedback = () => {
    // 1. Play Sound
    const audio = new Audio("/tap.mp3");
    audio.volume = 0.5;
    audio.play().catch(() => { }); // Catch prevents errors if browser blocks auto-play

    // 2. Vibrate Phone (Haptic Feedback)
    // 10ms is a light "taptic" feel
    if ("vibrate" in navigator) {
      navigator.vibrate(10);
    }
  };

  const { data: info, isLoading } = useQuery({
    queryKey: ["contact_info"],
    queryFn: async () => {
      const { data, error } = await supabase.from("contact_info").select("*").single();
      if (error) throw error;
      return data;
    },
  });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    triggerFeedback(); // Play feedback on tap
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const messageData = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    const { error } = await supabase.from("contact_messages").insert([messageData]);

    if (!error) {
      setSent(true);
      formRef.current?.reset();
    } else {
      alert("Oh no! The letter got lost. Try again?");
    }
    setLoading(false);
  }

  if (isLoading || !info) return null;

  return (
    <div className="pt-24 relative">
      {/* --- CUTE OVERLAY --- */}
      <AnimatePresence>
        {sent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/60 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              className="glass-strong max-w-sm w-full p-8 rounded-[2.5rem] text-center shadow-2xl border-primary/20 relative overflow-hidden"
            >
              {/* Floating Sparkles Background Decoration */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute -top-12 -right-12 text-primary/20"
              >
                <Sparkles size={120} />
              </motion.div>

              <div className="relative z-10">
                <motion.div
                  initial={{ bounce: 0.5, type: "spring", scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <Heart className="text-primary fill-primary h-10 w-10 animate-pulse" />
                </motion.div>

                <h3 className="text-2xl font-bold mb-2">Yay! It's sent!</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Your message is flying safely to my inbox. I'm so excited to read it and will get back to you shortly! ✨
                </p>

                <button
                  onClick={() => {
                    triggerFeedback();
                    setSent(false);
                  }}
                  className="w-full py-4 px-6 rounded-2xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-all active:scale-95 shadow-lg shadow-primary/25"
                >
                  Close with a smile
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Section
        eyebrow="Contact"
        title={<>Let's talk about <span className="text-gradient">care, code, or both.</span></>}
        description="I respond to most messages within 48 hours. For roles, please attach the JD if you have one."
      >
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-6">
          <motion.form
            ref={formRef}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="glass-strong rounded-3xl p-6 grid gap-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Your name" name="name" required />
              <Field label="Email" name="email" type="email" required />
            </div>
            <Field label="Subject" name="subject" />
            <label className="grid gap-1.5 text-sm">
              <span className="font-medium">Message</span>
              <textarea
                name="message"
                rows={6}
                required
                className="rounded-2xl bg-background/40 border border-border/60 px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all"
              />
            </label>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-primary to-primary-glow text-primary-foreground font-medium shadow-glow disabled:opacity-50 transition-transform active:scale-95"
              disabled={loading}
            >
              {loading ? ("Sending...") : (<><Send className="h-4 w-4" /> Send message</>)}
            </button>
          </motion.form>

          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid gap-3 h-fit"
          >
            {/* Added onClick={triggerFeedback} to all social links */}
            <a
              href={`mailto:${info.email}`}
              onClick={triggerFeedback}
              target="_blank"
              rel="noreferrer"
              className="glass rounded-2xl p-5 flex items-center gap-3 hover:text-primary transition-colors group"
            >
              <Mail className="h-5 w-5 group-hover:scale-110 transition-transform" />
              <span className="text-sm">{info.email}</span>
            </a>

            <a
              href={info.whatsapp_url}
              onClick={triggerFeedback}
              target="_blank"
              rel="noreferrer"
              className="glass rounded-2xl p-5 flex items-center gap-3 hover:text-primary transition-colors group"
            >
              <MessageCircle className="h-5 w-5 group-hover:scale-110 transition-transform" />
              <span className="text-sm">Chat on WhatsApp</span>
            </a>

            <a
              href={info.linkedin_url}
              onClick={triggerFeedback}
              target="_blank"
              rel="noreferrer"
              className="glass rounded-2xl p-5 flex items-center gap-3 hover:text-primary transition-colors group"
            >
              <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform" />
              <span className="text-sm">LinkedIn</span>
            </a>

            <a
              href={info.github_url}
              onClick={triggerFeedback}
              target="_blank"
              rel="noreferrer"
              className="glass rounded-2xl p-5 flex items-center gap-3 hover:text-primary transition-colors group"
            >
              <Github className="h-5 w-5 group-hover:scale-110 transition-transform" />
              <span className="text-sm">GitHub</span>
            </a>

            <div className="glass rounded-2xl p-5 flex items-center gap-3">
              <MapPin className="h-5 w-5 text-primary" />
              <span className="text-sm">{info.location}</span>
            </div>
          </motion.aside>
        </div>
      </Section>
    </div>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <label className="grid gap-1.5 text-sm">
      <span className="font-medium">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        className="rounded-2xl bg-background/40 border border-border/60 px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all"
      />
    </label>
  );
}