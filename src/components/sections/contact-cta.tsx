import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/section";

export function ContactCTA({ data, isLoading }: { data: any; isLoading: boolean }) {

  // If the birdy is still flying, we stay invisible
  if (isLoading || !data) return null;

  return (
    <Section id="contact-cta">
      <div className="relative overflow-hidden rounded-[2.5rem] glass-strong p-8 md:p-16">
        {/* The pretty background colors */}
        <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-aurora)", opacity: 0.4 }} />
        <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full blur-3xl bg-primary/30 -z-10" />

        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-display font-semibold tracking-tight">
            {data.title_main} <span className="text-gradient">{data.title_gradient}</span> together.
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            {data.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-primary to-primary-glow text-primary-foreground font-medium shadow-glow transition-transform hover:scale-105"
            >
              {data.primary_button} <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/recruiter" className="inline-flex items-center gap-2 px-5 py-3 rounded-full glass font-medium hover:bg-white/10 transition-colors">
              {data.secondary_button}
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}