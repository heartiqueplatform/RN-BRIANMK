import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { Download, MessageCircle, ArrowRight, FolderKanban } from "lucide-react";
import portrait from "@/assets/jxb-portrait.jpg";

export function Hero({ data, isLoading }: { data: any; isLoading: boolean }) {
  // 1. Better Check: Ensure the data actually has content (like a headline)
  // If data is just {}, the text won't show but the image will.
  if (isLoading || !data || !data.headline_top) {
    return <div className="h-screen" />;
  }

  return (
    // 2. Add a KEY based on the data.
    // This forces the entire section to refresh when the data is loaded.
    <section key={data.full_name} className="relative pt-32 md:pt-40 pb-16 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 -z-10 grid-pattern opacity-40" />

      <div className="mx-auto max-w-6xl px-5 grid md:grid-cols-[1.2fr_1fr] gap-10 md:gap-16 items-center">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-full glass"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            {data.status_text} · {data.location}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-5 text-4xl sm:text-5xl md:text-7xl font-semibold leading-[1.05] tracking-tight"
          >
            <span className="block">{data.headline_top}</span>
            <span className="block text-gradient">{data.headline_bottom}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl"
          >
            {data.bio}
          </motion.p>

          {/* ... rest of your code ... */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href={data.cv_url || "#"}
              className="group inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-primary to-primary-glow text-primary-foreground font-medium shadow-glow transition-transform hover:scale-[1.02]"
            >
              <Download className="h-4 w-4" /> Download CV
            </a>
            <Link to="/contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-full glass-strong font-medium hover:text-primary transition-colors">
              <MessageCircle className="h-4 w-4" /> Contact Me
            </Link>
          </motion.div>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted-foreground">
            {data.roles?.map((role: string) => (
              <span key={role} className="inline-flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-primary" />
                {role}
              </span>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative mx-auto w-full max-w-lg"
        >
          <div className="relative rounded-xl overflow-hidden glass-strong p-0 shadow-elegant">
            <img
              src={data.portrait_url || portrait} // Uses cloud image, or falls back to local file
              alt={`Portrait of ${data.full_name}`}
              className="rounded-xl aspect-square object-cover w-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}