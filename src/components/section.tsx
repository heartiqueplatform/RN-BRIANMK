import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
}: {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  description?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <section id={id} className={cn("relative mx-auto max-w-6xl px-5 py-20 md:py-28", className)}>
      {(eyebrow || title || description) && (
        <motion.div
          initial={reduce ? undefined : { opacity: 0, y: 20 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-12"
        >
          {eyebrow && (
            <span className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full glass text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              {eyebrow}
            </span>
          )}
          {title && (
            <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight">{title}</h2>
          )}
          {description && (
            <p className="mt-4 text-muted-foreground text-base md:text-lg">{description}</p>
          )}
        </motion.div>
      )}
      {children}
    </section>
  );
}
