import { Q as reactExports, I as jsxRuntimeExports } from "./server-D6PlxVzG.js";
import { i as hasReducedMotionListener, j as initPrefersReducedMotion, p as prefersReducedMotion, m as motion, g as cn } from "./router-KkAtt7BH.js";
function useReducedMotion() {
  !hasReducedMotionListener.current && initPrefersReducedMotion();
  const [shouldReduceMotion] = reactExports.useState(prefersReducedMotion.current);
  return shouldReduceMotion;
}
function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className
}) {
  const reduce = useReducedMotion();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id, className: cn("relative mx-auto max-w-6xl px-5 py-20 md:py-28", className), children: [
    (eyebrow || title || description) && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: reduce ? void 0 : { opacity: 0, y: 20 },
        whileInView: reduce ? void 0 : { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-80px" },
        transition: { duration: 0.6 },
        className: "max-w-2xl mb-12",
        children: [
          eyebrow && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full glass text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-primary animate-pulse" }),
            eyebrow
          ] }),
          title && /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-3xl md:text-5xl font-semibold tracking-tight", children: title }),
          description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground text-base md:text-lg", children: description })
        ]
      }
    ),
    children
  ] });
}
export {
  Section as S
};
