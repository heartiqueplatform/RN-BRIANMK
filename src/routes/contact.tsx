import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase";
import { motion } from "framer-motion";
import { Mail, MessageCircle, Linkedin, Github, Send, MapPin, CheckCircle2 } from "lucide-react";
import { Section } from "@/components/section";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  // 1. Birdy gets your "Address Book" from the Cloud
  const { data: info, isLoading } = useQuery({
    queryKey: ["contact_info"],
    queryFn: async () => {
      const { data, error } = await supabase.from("contact_info").select("*").single();
      if (error) throw error;
      return data;
    },
  });

  // 2. The magic function that sends the letter to the Vault
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
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
    } else {
      alert("Oh no! The letter got lost. Try again?");
    }
    setLoading(false);
  }

  if (isLoading || !info) return null;

  return (
    <div className="pt-24">
      <Section
        eyebrow="Contact"
        title={<>Let's talk about <span className="text-gradient">care, code, or both.</span></>}
        description="I respond to most messages within 48 hours. For roles, please attach the JD if you have one."
      >
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-6">
          <motion.form
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
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-primary to-primary-glow text-primary-foreground font-medium shadow-glow disabled:opacity-50"
              disabled={sent || loading}
            >
              {sent ? (<><CheckCircle2 className="h-4 w-4" /> Sent — thank you</>) :
                loading ? ("Sending...") : (<><Send className="h-4 w-4" /> Send message</>)}
            </button>
          </motion.form>

          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid gap-3 h-fit"
          >
            {/* Tappable Links that go to the real pages */}
            <a href={`mailto:${info.email}`} target="_blank" rel="noreferrer" className="glass rounded-2xl p-5 flex items-center gap-3 hover:text-primary transition-colors group">
              <Mail className="h-5 w-5 group-hover:scale-110 transition-transform" />
              <span className="text-sm">{info.email}</span>
            </a>

            <a href={info.whatsapp_url} target="_blank" rel="noreferrer" className="glass rounded-2xl p-5 flex items-center gap-3 hover:text-primary transition-colors group">
              <MessageCircle className="h-5 w-5 group-hover:scale-110 transition-transform" />
              <span className="text-sm">Chat on WhatsApp</span>
            </a>

            <a href={info.linkedin_url} target="_blank" rel="noreferrer" className="glass rounded-2xl p-5 flex items-center gap-3 hover:text-primary transition-colors group">
              <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform" />
              <span className="text-sm">LinkedIn</span>
            </a>

            <a href={info.github_url} target="_blank" rel="noreferrer" className="glass rounded-2xl p-5 flex items-center gap-3 hover:text-primary transition-colors group">
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