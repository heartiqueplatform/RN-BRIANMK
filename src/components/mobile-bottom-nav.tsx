import { Link, useLocation } from "@tanstack/react-router";
import { Home, Briefcase, FolderKanban, Heart, User } from "lucide-react";
import { cn } from "@/lib/utils";

const items = [
  { to: "/", label: "Home", Icon: Home },
  { to: "/journey", label: "Journey", Icon: Briefcase },
  { to: "/projects", label: "Work", Icon: FolderKanban },
  { to: "/recruiter", label: "Hire", Icon: User },
  { to: "/contact", label: "Reach", Icon: Heart },
];

export function MobileBottomNav() {
  const loc = useLocation();
  return (
    <nav className="md:hidden fixed bottom-3 left-1/2 -translate-x-1/2 z-50 w-[min(100%-1rem,32rem)]">
      <div className="bg-background/95 backdrop-blur-md rounded-full px-2 py-1.5 flex items-center justify-between shadow-2xl border border-white/10">
        {items.map(({ to, label, Icon }) => {
          const active = loc.pathname === to;
          return (
            <Link
              key={to}
              to={to}
              className={cn(
                "flex-1 flex flex-col items-center gap-0.5 py-1.5 rounded-full transition-all",
                active ? "text-primary" : "text-muted-foreground"
              )}
            >
              <Icon className={cn("h-4 w-4 transition-transform", active && "scale-110")} />
              <span className="text-[10px] font-medium">{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
