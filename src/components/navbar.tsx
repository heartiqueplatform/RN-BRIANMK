import { Link, useLocation } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X, Sun, Moon, Monitor } from "lucide-react";
import { useQuery } from "@tanstack/react-query"; // Import the Birdy
import { supabase } from "@/integrations/supabase"; // Import the Cloud
import { navItems } from "@/data/site";
import { useTheme } from "./theme-provider";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { resolved, theme, setTheme } = useTheme();
  const loc = useLocation();

  // 1. Birdy flies to the 'profile' table to get your avatar and name
  const { data: profile } = useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      const { data } = await supabase.from("profile").select("full_name, portrait_url").single();
      return data;
    },
  });

  const cycle = () =>
    setTheme(theme === "light" ? "dark" : theme === "dark" ? "system" : "light");
  const Icon = theme === "system" ? Monitor : resolved === "dark" ? Moon : Sun;

  // Use the cloud name or fallback to "JxB"
  const displayName = profile?.full_name || "JxB";

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-3 left-1/2 -translate-x-1/2 z-50 w-[min(100%-1.25rem,72rem)]"
    >
      <div className="glass-strong rounded-full px-4 sm:px-6 py-2.5 flex items-center justify-between shadow-elegant">
        <Link to="/" className="flex items-center gap-2 group">
          {/* THE AVATAR CIRCLE */}
          <span className="relative h-9 w-9 rounded-full overflow-hidden bg-gradient-to-br from-primary to-primary-glow grid place-items-center font-display text-sm font-bold text-primary-foreground border-2 border-white/10">
            {profile?.portrait_url ? (
              // If there's a picture in the cloud, show it!
              <img
                src={profile.portrait_url}
                alt={displayName}
                className="h-full w-full object-cover"
              />
            ) : (
              // If no picture, show the first letter
              displayName.charAt(0)
            )}
            {/* The glowing pulse behind the head */}
            <span className="absolute inset-0 rounded-full animate-pulse-glow bg-primary/30 -z-10 blur-md" />
          </span>
          <span className="font-display font-semibold tracking-tight">{displayName}</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((n) => {
            const active = loc.pathname === n.to;
            return (
              <Link
                key={n.to}
                to={n.to}
                className={cn(
                  "px-3 py-1.5 rounded-full text-sm transition-colors",
                  active
                    ? "bg-primary/15 text-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground hover:bg-foreground/5"
                )}
              >
                {n.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-1">
          <button
            onClick={cycle}
            aria-label="Toggle theme"
            className="h-9 w-9 grid place-items-center rounded-full hover:bg-foreground/5 transition-colors"
          >
            <Icon className="h-4 w-4" />
          </button>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            className="md:hidden h-9 w-9 grid place-items-center rounded-full hover:bg-foreground/5"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass-strong rounded-3xl mt-2 p-3 grid gap-1 border border-white/10"
        >
          {navItems.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              onClick={() => setOpen(false)}
              className="px-4 py-3 rounded-2xl text-sm hover:bg-foreground/5 transition-colors"
            >
              {n.label}
            </Link>
          ))}
        </motion.div>
      )}
    </motion.header>
  );
}