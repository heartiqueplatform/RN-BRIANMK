import { Link, useLocation } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Menu, X, Sun, Moon, Monitor,
  ChevronRight, Home, Activity, Layers, Sparkles, Send
} from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase";
import { navItems } from "@/data/site";
import { useTheme } from "./theme-provider";
import { cn } from "@/lib/utils";

const getIcon = (label: string) => {
  const l = label.toLowerCase();
  if (l.includes("home")) return Home;
  if (l.includes("journey") || l.includes("about")) return Activity;
  if (l.includes("work") || l.includes("project")) return Layers;
  if (l.includes("hire") || l.includes("recruit")) return Sparkles;
  if (l.includes("contact") || l.includes("reach")) return Send;
  return ChevronRight;
};

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { resolved, theme, setTheme } = useTheme();
  const loc = useLocation();

  const { data: profile } = useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      const { data } = await supabase.from("profile").select("full_name, portrait_url").single();
      return data;
    },
  });

  const cycle = () => setTheme(theme === "light" ? "dark" : theme === "dark" ? "system" : "light");
  const Icon = theme === "system" ? Monitor : resolved === "dark" ? Moon : Sun;
  const displayName = profile?.full_name || "JxB";

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-1/2 -translate-x-1/2 z-[60] w-[min(100%-1.25rem,72rem)]"
    >
      {/* MAIN BAR - Light/Dark Adaptive */}
      <div className="bg-background/80 dark:bg-card/80 backdrop-blur-xl rounded-full px-4 py-2.5 flex items-center justify-between shadow-lg dark:shadow-2xl border border-border/50">

        <Link to="/" className="flex items-center gap-2 group" onClick={() => setOpen(false)}>
          <span className="relative h-9 w-9 rounded-full overflow-hidden bg-primary/10 dark:bg-primary/20 border-2 border-primary/30 grid place-items-center">
            {profile?.portrait_url ? (
              <img src={profile.portrait_url} alt={displayName} className="h-full w-full object-cover" />
            ) : (
              <span className="font-bold text-primary text-xs">{displayName.charAt(0)}</span>
            )}
            <span className="absolute inset-0 animate-pulse-glow bg-primary/20 -z-10 blur-sm" />
          </span>
          <div className="flex flex-col">
            <span className="font-display font-bold text-sm tracking-tight leading-none text-foreground">
              {displayName}
            </span>
            <span className="text-[10px] text-primary font-bold uppercase tracking-tighter">
              Health Builder
            </span>
          </div>
        </Link>

        {/* Desktop Nav - Light/Dark Adaptive */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((n) => {
            const active = loc.pathname === n.to;
            return (
              <Link
                key={n.to}
                to={n.to}
                className={cn(
                  "px-4 py-2 rounded-full text-sm transition-all duration-300",
                  active
                    ? "bg-primary text-primary-foreground font-semibold shadow-md"
                    : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                )}
              >
                {n.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          {/* Theme Toggle - Light/Dark Adaptive */}
          <button
            onClick={cycle}
            className="h-9 w-9 grid place-items-center rounded-full bg-accent/50 hover:bg-accent transition-colors border border-border"
          >
            <Icon className="h-4 w-4 text-foreground" />
          </button>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden h-9 w-9 grid place-items-center rounded-full bg-primary text-primary-foreground shadow-lg active:scale-90 transition-transform"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU - Light/Dark Adaptive */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="md:hidden absolute top-16 left-0 right-0 bg-background/95 dark:bg-card/95 backdrop-blur-2xl rounded-[2.5rem] p-4 border border-border shadow-2xl z-[-1] overflow-hidden"
          >
            <div className="grid gap-2">
              {navItems.map((n, i) => {
                const ItemIcon = getIcon(n.label);
                const active = loc.pathname === n.to;

                return (
                  <motion.div
                    key={n.to}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      to={n.to}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "flex items-center justify-between p-4 rounded-2xl group transition-all",
                        active
                          ? "bg-primary/10 border border-primary/20 text-primary"
                          : "hover:bg-accent border border-transparent"
                      )}
                    >
                      <div className="flex items-center gap-4">
                        <div className={cn(
                          "h-10 w-10 rounded-xl grid place-items-center transition-colors",
                          active ? "bg-primary text-primary-foreground" : "bg-accent text-muted-foreground group-hover:text-foreground"
                        )}>
                          <ItemIcon className="h-5 w-5" />
                        </div>
                        <span className={cn(
                          "font-display font-semibold text-base",
                          active ? "text-foreground" : "text-muted-foreground"
                        )}>
                          {n.label}
                        </span>
                      </div>
                      <ChevronRight className={cn(
                        "h-4 w-4 transition-transform",
                        active ? "text-primary opacity-100" : "text-muted-foreground/30 opacity-0 group-hover:opacity-100 group-hover:translate-x-1"
                      )} />
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom Menu Decor */}
            <div className="mt-6 pt-6 border-t border-border flex flex-col items-center gap-1">
              <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/50 font-bold italic">
                Nursing Innovation
              </p>
              <div className="h-1 w-8 bg-primary/20 rounded-full" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}