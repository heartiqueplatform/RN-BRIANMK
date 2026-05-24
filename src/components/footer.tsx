import { Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase";
import { Github, Linkedin, MessageCircle, Mail } from "lucide-react";

export function Footer() {
  // 1. Birdy gets your name/logo info
  const { data: profile } = useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      const { data } = await supabase.from("profile").select("full_name, location").single();
      return data;
    },
  });

  // 2. Birdy gets your "Address Book" (Links)
  const { data: info } = useQuery({
    queryKey: ["contact_info"],
    queryFn: async () => {
      const { data } = await supabase.from("contact_info").select("*").single();
      return data;
    },
  });

  // If the cloud data isn't here yet, we show a simple version
  const name = profile?.full_name || "JxB";
  const location = profile?.location || "Nairobi, KE";

  return (
    <footer className="mt-32 border-t border-border/60 pb-24 md:pb-12">
      <div className="mx-auto max-w-6xl px-5 pt-12 grid gap-10 md:grid-cols-3">

        {/* Left Side: Brand */}
        <div>
          <div className="flex items-center gap-2">
            <span className="h-8 w-8 rounded-full bg-gradient-to-br from-primary to-primary-glow grid place-items-center font-display text-sm font-bold text-primary-foreground">
              {name.charAt(0)}
            </span>
            <span className="font-display font-semibold">{name}</span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground max-w-xs">
            Compassionate and dedicated to delivering safe, patient-centered care while growing and making a meaningful impact in healthcare.
          </p>
        </div>

        {/* Middle: Links */}
        <div className="text-sm">
          <p className="font-medium mb-3">Explore</p>
          <ul className="grid gap-2 text-muted-foreground">
            <li><Link to="/journey" className="hover:text-primary transition-colors">Nursing Journey</Link></li>
            <li><Link to="/projects" className="hover:text-primary transition-colors">Projects</Link></li>
            <li><Link to="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition-colors">Get in touch</Link></li>
          </ul>
        </div>

        {/* Right Side: Social Connect */}
        <div className="text-sm">
          <p className="font-medium mb-3">Connect</p>
          <div className="flex gap-2">
            {info && [
              { href: info.linkedin_url, Icon: Linkedin, label: "LinkedIn" },
              { href: info.github_url, Icon: Github, label: "GitHub" },
              { href: info.whatsapp_url, Icon: MessageCircle, label: "WhatsApp" },
              { href: `mailto:${info.email}`, Icon: Mail, label: "Email" },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="h-10 w-10 rounded-full glass grid place-items-center hover:text-primary transition-all hover:scale-110"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
          <p className="mt-6 text-xs text-muted-foreground">
            © {new Date().getFullYear()} {name}. Made with care in {location}.
          </p>
        </div>
      </div>
    </footer>
  );
}