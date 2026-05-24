import { Q as reactExports, I as jsxRuntimeExports } from "./server-D6PlxVzG.js";
import { r as resolveElements, h as createLucideIcon, m as motion, L as Link, c as MessageCircle, f as Sparkles, H as Heart, A as Activity, R as Route, u as useQuery, s as supabase } from "./router-KkAtt7BH.js";
import { D as Download } from "./download-CtDT7Nnn.js";
import { S as Section } from "./section-BFWYTdNv.js";
import { A as Award } from "./award-CW9Nc2KK.js";
import { A as ArrowRight } from "./arrow-right-DZgomH15.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const thresholds = {
  some: 0,
  all: 1
};
function inView(elementOrSelector, onStart, { root, margin: rootMargin, amount = "some" } = {}) {
  const elements = resolveElements(elementOrSelector);
  const activeIntersections = /* @__PURE__ */ new WeakMap();
  const onIntersectionChange = (entries) => {
    entries.forEach((entry) => {
      const onEnd = activeIntersections.get(entry.target);
      if (entry.isIntersecting === Boolean(onEnd))
        return;
      if (entry.isIntersecting) {
        const newOnEnd = onStart(entry.target, entry);
        if (typeof newOnEnd === "function") {
          activeIntersections.set(entry.target, newOnEnd);
        } else {
          observer.unobserve(entry.target);
        }
      } else if (typeof onEnd === "function") {
        onEnd(entry);
        activeIntersections.delete(entry.target);
      }
    });
  };
  const observer = new IntersectionObserver(onIntersectionChange, {
    root,
    rootMargin,
    threshold: typeof amount === "number" ? amount : thresholds[amount]
  });
  elements.forEach((element) => observer.observe(element));
  return () => observer.disconnect();
}
function useInView(ref, { root, margin, amount, once = false, initial = false } = {}) {
  const [isInView, setInView] = reactExports.useState(initial);
  reactExports.useEffect(() => {
    if (!ref.current || once && isInView)
      return;
    const onEnter = () => {
      setInView(true);
      return once ? void 0 : () => setInView(false);
    };
    const options = {
      root: root && root.current || void 0,
      margin,
      amount
    };
    return inView(ref.current, onEnter, options);
  }, [root, ref, margin, once, amount]);
  return isInView;
}
const __iconNode$7 = [
  ["path", { d: "M10 2v2", key: "7u0qdc" }],
  ["path", { d: "M14 2v2", key: "6buw04" }],
  [
    "path",
    {
      d: "M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",
      key: "pwadti"
    }
  ],
  ["path", { d: "M6 2v2", key: "colzsn" }]
];
const Coffee = createLucideIcon("coffee", __iconNode$7);
const __iconNode$6 = [
  [
    "path",
    {
      d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",
      key: "mvr1a0"
    }
  ],
  ["path", { d: "M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27", key: "auskq0" }]
];
const HeartPulse = createLucideIcon("heart-pulse", __iconNode$6);
const __iconNode$5 = [
  [
    "path",
    {
      d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",
      key: "1gvzjb"
    }
  ],
  ["path", { d: "M9 18h6", key: "x1upvd" }],
  ["path", { d: "M10 22h4", key: "ceow96" }]
];
const Lightbulb = createLucideIcon("lightbulb", __iconNode$5);
const __iconNode$4 = [
  ["path", { d: "M6 18h8", key: "1borvv" }],
  ["path", { d: "M3 22h18", key: "8prr45" }],
  ["path", { d: "M14 22a7 7 0 1 0 0-14h-1", key: "1jwaiy" }],
  ["path", { d: "M9 14h2", key: "197e7h" }],
  ["path", { d: "M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z", key: "1bmzmy" }],
  ["path", { d: "M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3", key: "1drr47" }]
];
const Microscope = createLucideIcon("microscope", __iconNode$4);
const __iconNode$3 = [
  ["path", { d: "M13 2a9 9 0 0 1 9 9", key: "1itnx2" }],
  ["path", { d: "M13 6a5 5 0 0 1 5 5", key: "11nki7" }],
  [
    "path",
    {
      d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
      key: "9njp5v"
    }
  ]
];
const PhoneCall = createLucideIcon("phone-call", __iconNode$3);
const __iconNode$2 = [
  ["path", { d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5", key: "qeys4" }],
  [
    "path",
    {
      d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09",
      key: "u4xsad"
    }
  ],
  [
    "path",
    {
      d: "M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z",
      key: "676m9"
    }
  ],
  ["path", { d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05", key: "92ym6u" }]
];
const Rocket = createLucideIcon("rocket", __iconNode$2);
const __iconNode$1 = [
  ["path", { d: "M11 2v2", key: "1539x4" }],
  ["path", { d: "M5 2v2", key: "1yf1q8" }],
  ["path", { d: "M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1", key: "rb5t3r" }],
  ["path", { d: "M8 15a6 6 0 0 0 12 0v-3", key: "x18d4x" }],
  ["circle", { cx: "20", cy: "10", r: "2", key: "ts1r5v" }]
];
const Stethoscope = createLucideIcon("stethoscope", __iconNode$1);
const __iconNode = [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744", key: "16gr8j" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }]
];
const Users = createLucideIcon("users", __iconNode);
const portrait = "/assets/jxb-portrait-DAARC_kZ.jpg";
function Hero({ data, isLoading }) {
  if (!data && isLoading) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-screen" });
  if (!data) return null;
  return (
    // FIX: Using a key ensures Framer Motion restarts the writing animation
    // every time you navigate to this page.
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative pt-32 md:pt-40 pb-16 md:pb-24 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 -z-10 grid-pattern opacity-40" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-5 grid md:grid-cols-[1.2fr_1fr] gap-10 md:gap-16 items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.span,
            {
              initial: { opacity: 0, y: 10 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.5 },
              className: "inline-flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-full glass",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-primary animate-pulse" }),
                data.status_text,
                " · ",
                data.location
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.h1,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.5, delay: 0.1 },
              className: "mt-5 text-4xl sm:text-5xl md:text-7xl font-semibold leading-[1.05] tracking-tight",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block", children: data.headline_top }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-gradient", children: data.headline_bottom })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.p,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.5, delay: 0.2 },
              className: "mt-6 text-base md:text-lg text-muted-foreground max-w-xl",
              children: data.bio
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.5, delay: 0.3 },
              className: "mt-8 flex flex-wrap gap-3",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "a",
                  {
                    href: data.cv_url || "#",
                    className: "group inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-primary to-primary-glow text-primary-foreground font-medium shadow-glow transition-transform hover:scale-[1.02]",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "h-4 w-4" }),
                      " Download CV"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", className: "inline-flex items-center gap-2 px-5 py-3 rounded-full glass-strong font-medium hover:text-primary transition-colors", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-4 w-4" }),
                  " Contact Me"
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { delay: 0.5 },
              className: "mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted-foreground",
              children: data.roles?.map((role) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1 w-1 rounded-full bg-primary" }),
                role
              ] }, role))
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, scale: 0.95 },
            animate: { opacity: 1, scale: 1 },
            transition: { duration: 0.6 },
            className: "relative mx-auto w-full max-w-lg",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative rounded-xl overflow-hidden glass-strong p-0 shadow-elegant", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: data.portrait_url || portrait,
                alt: `Portrait of ${data.full_name}`,
                className: "rounded-xl aspect-square object-cover w-full"
              }
            ) })
          }
        )
      ] })
    ] }, data?.full_name || "hero")
  );
}
const iconMap$2 = { Heart, Sparkles, Users, Lightbulb };
function About({ items, isLoading }) {
  if (isLoading) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Section,
    {
      id: "about",
      eyebrow: "About me",
      title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        "Registered Nurse ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "focused on patient care." })
      ] }),
      description: "I trained across diverse clinical settings in Kenya, gaining hands-on experience in medical, surgical, paediatric, psychiatric, and critical care nursing. I value the small but powerful aspects of care clear communication, compassion, and presence at the bedside. My focus is delivering safe, respectful, and patient-centered nursing care while continuously growing in clinical practice.",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 gap-2", children: items?.map((item, i) => {
        const Icon = iconMap$2[item.icon_name] || Heart;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 24 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.5, delay: i * 0.08 },
            className: "glass rounded-3xl p-6 hover:shadow-elegant transition-shadow group",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-11 w-11 rounded-2xl bg-primary/15 text-primary grid place-items-center mb-4 group-hover:scale-110 transition-transform", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-semibold", children: item.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: item.body })
            ]
          },
          item.id
        );
      }) })
    }
  );
}
function Skills({ items, isLoading }) {
  if (isLoading) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Section,
    {
      id: "skills",
      eyebrow: "Skills",
      title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        "Clinical competence. ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "Growing capability." })
      ] }),
      description: "Built through hands-on clinical practice across diverse hospital settings, with a strong focus on safe, effective, and patient-centered nursing care.",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-3", children: items?.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.4, delay: i * 0.04 },
          className: "glass rounded-2xl p-5",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: s.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-wider text-muted-foreground", children: s.category })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 h-1.5 rounded-full bg-foreground/5 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { width: 0 },
                whileInView: { width: `${s.level}%` },
                viewport: { once: true },
                transition: { duration: 1, delay: 0.2 + i * 0.04, ease: "easeOut" },
                className: "h-full rounded-full bg-gradient-to-r from-primary to-primary-glow"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 text-xs text-muted-foreground", children: [
              s.level,
              "%"
            ] })
          ]
        },
        s.id
      )) })
    }
  );
}
const iconMap$1 = { Activity, HeartPulse, Rocket, Award, Users, Microscope };
function Counter({ value }) {
  const ref = reactExports.useRef(null);
  const inView2 = useInView(ref, { once: true });
  const [n, setN] = reactExports.useState(0);
  reactExports.useEffect(() => {
    if (!inView2) return;
    const dur = 1400;
    const start = performance.now();
    let raf = 0;
    const tick = (t) => {
      const p = Math.min(1, (t - start) / dur);
      setN(Math.floor((1 - Math.pow(1 - p, 3)) * value));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView2, value]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { ref, children: [
    n.toLocaleString(),
    value >= 1e3 ? "+" : ""
  ] });
}
function Achievements({ items, isLoading }) {
  if (isLoading) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Section,
    {
      id: "achievements",
      eyebrow: "By the numbers",
      title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        "A practice ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "measured in care." })
      ] }),
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 gap-3", children: items?.map((a, i) => {
        const Icon = iconMap$1[a.icon] || Activity;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.5, delay: i * 0.06 },
            className: "glass rounded-3xl p-6 relative overflow-hidden group",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-6 -top-6 h-24 w-24 rounded-full bg-primary/10 blur-2xl group-hover:bg-primary/20 transition" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-6 w-6 text-primary" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 text-3xl md:text-4xl font-display font-semibold", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Counter, { value: a.value }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-sm text-muted-foreground", children: a.label })
            ]
          },
          a.id
        );
      }) })
    }
  );
}
function FutureVision({ items, isLoading }) {
  if (isLoading) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Section,
    {
      id: "vision",
      eyebrow: "Future Vision",
      title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        "The future of ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "nursing in Kenya." })
      ] }),
      description: "A healthcare system where nurses are well-supported, well-equipped, and empowered to deliver safe, effective, and patient-centered care across all clinical settings.",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative pl-6 md:pl-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-2 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-8", children: items?.map((b, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.5, delay: i * 0.1 },
            className: `md:grid md:grid-cols-2 md:gap-12 items-center ${i % 2 ? "md:[&>*:first-child]:col-start-2" : ""}`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative md:px-8", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -left-5 md:left-auto md:right-full md:mr-[-9px] top-2 h-3 w-3 rounded-full bg-primary shadow-glow" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-mono text-primary", children: b.year }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-1 text-xl font-display font-semibold", children: b.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-muted-foreground", children: b.body })
            ] })
          },
          b.id
        )) })
      ] })
    }
  );
}
const iconMap = { Coffee, Stethoscope, Rocket, Lightbulb, Heart };
function Support({ tiers, goal, isLoading }) {
  if (isLoading || !goal) return null;
  const pct = Math.round(goal.current_amount / goal.target_amount * 100);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Section,
    {
      id: "support",
      eyebrow: "Support the journey",
      title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        "Support a Kenyan nurse ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "shaping better care." })
      ] }),
      description: "If this work resonates with you, your support helps improve nursing learning tools and contributes to building resources that strengthen clinical education and patient care.",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-[1.5fr_1fr] gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 gap-3", children: tiers?.map((t, i) => {
          const Icon = iconMap[t.icon_name] || Heart;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.button,
            {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.4, delay: i * 0.06 },
              className: "text-left glass rounded-2xl p-5 hover:shadow-elegant hover:-translate-y-0.5 transition-all",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 rounded-xl bg-primary/15 text-primary grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-mono text-muted-foreground", children: t.amount })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 font-display font-semibold", children: t.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: t.note })
              ]
            },
            t.id
          );
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            className: "glass-strong rounded-3xl p-6 flex flex-col",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "Active goal" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-1 text-xl font-display font-semibold", children: goal.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-baseline gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-3xl font-display font-semibold", children: [
                  goal.currency,
                  " ",
                  goal.current_amount.toLocaleString()
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-muted-foreground", children: [
                  "/ ",
                  goal.target_amount.toLocaleString()
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 h-2 rounded-full bg-foreground/5 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  initial: { width: 0 },
                  whileInView: { width: `${pct}%` },
                  viewport: { once: true },
                  transition: { duration: 1.2, ease: "easeOut" },
                  className: "h-full rounded-full bg-gradient-to-r from-primary to-primary-glow"
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3 text-sm text-muted-foreground", children: [
                pct,
                "% funded · M-Pesa & card support coming soon."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "mt-auto pt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-primary to-primary-glow text-primary-foreground font-medium text-sm shadow-glow", children: "Notify me when live" }) })
            ]
          }
        )
      ] })
    }
  );
}
function ContactCTA({ data, isLoading }) {
  const triggerFeedback = () => {
    if (typeof window !== "undefined") {
      const audio = new Audio("./tap.mp3");
      audio.volume = 0.4;
      audio.play().catch(() => {
      });
      if ("vibrate" in navigator) {
        navigator.vibrate(10);
      }
    }
  };
  if (isLoading || !data) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { id: "contact-cta", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-[2.5rem] glass-strong p-8 md:p-16 border border-primary/20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 -z-10", style: { background: "var(--gradient-aurora)", opacity: 0.4 } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        animate: {
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        },
        transition: { duration: 8, repeat: Infinity },
        className: "absolute -top-20 -right-20 h-72 w-72 rounded-full blur-3xl bg-primary/30 -z-10"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: -10 },
          whileInView: { opacity: 1, x: 0 },
          className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-wider mb-6",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative flex h-2 w-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative inline-flex rounded-full h-2 w-2 bg-primary" })
            ] }),
            "Direct Line to Innovation"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-3xl md:text-5xl font-display font-semibold tracking-tight", children: [
        "Ready to hire a ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "Registered Nurse" }),
        "?"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground md:text-lg", children: "Explore my clinical background, skills, and experience to see how I can contribute to safe, high-quality patient care in your facility." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/contact",
            onClick: triggerFeedback,
            className: "group relative inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-primary to-primary-glow text-primary-foreground font-semibold shadow-glow transition-all hover:scale-105 active:scale-95 overflow-hidden",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  animate: { x: ["-100%", "200%"] },
                  transition: { duration: 3, repeat: Infinity, ease: "linear" },
                  className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(PhoneCall, { className: "h-4 w-4 group-hover:rotate-12 transition-transform" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative z-10", children: "Contact for Hiring" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 relative z-10 group-hover:translate-x-1 transition-transform" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/recruiter",
            onClick: triggerFeedback,
            className: "inline-flex items-center gap-2 px-8 py-4 rounded-full glass font-medium hover:bg-white/10 transition-all active:scale-95 border border-white/5",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4 text-primary" }),
              "View Full Nursing Profile"
            ]
          }
        )
      ] })
    ] })
  ] }) });
}
function Home() {
  const loaderData = Route.useLoaderData();
  const {
    data: achievements,
    isLoading: loadingAchievements
  } = useQuery({
    queryKey: ["achievements"],
    queryFn: async () => {
      const {
        data,
        error
      } = await supabase.from("achievements").select("*");
      if (error) throw error;
      return data;
    }
  });
  const {
    data: pillars,
    isLoading: loadingPillars
  } = useQuery({
    queryKey: ["about_pillars"],
    queryFn: async () => {
      const {
        data,
        error
      } = await supabase.from("about_pillars").select("*").order("sort_order", {
        ascending: true
      });
      if (error) throw error;
      return data;
    }
  });
  const {
    data: skills,
    isLoading: loadingSkills
  } = useQuery({
    queryKey: ["skills"],
    queryFn: async () => {
      const {
        data,
        error
      } = await supabase.from("skills").select("*").order("sort_order", {
        ascending: true
      });
      if (error) throw error;
      return data;
    }
  });
  const {
    data: visionBeats,
    isLoading: loadingVision
  } = useQuery({
    queryKey: ["future_vision"],
    queryFn: async () => {
      const {
        data,
        error
      } = await supabase.from("future_vision").select("*").order("sort_order", {
        ascending: true
      });
      if (error) throw error;
      return data;
    }
  });
  const {
    data: supportTiers,
    isLoading: loadingTiers
  } = useQuery({
    queryKey: ["support_tiers"],
    queryFn: async () => {
      const {
        data,
        error
      } = await supabase.from("support_tiers").select("*").order("sort_order", {
        ascending: true
      });
      if (error) throw error;
      return data;
    }
  });
  const {
    data: supportGoal,
    isLoading: loadingGoal
  } = useQuery({
    queryKey: ["support_goal"],
    queryFn: async () => {
      const {
        data,
        error
      } = await supabase.from("support_goals").select("*").filter("is_active", "eq", true).single();
      if (error) throw error;
      return data;
    }
  });
  const {
    data: cta,
    isLoading: loadingCta
  } = useQuery({
    queryKey: ["cta_content"],
    queryFn: async () => {
      const {
        data,
        error
      } = await supabase.from("cta_content").select("*").single();
      if (error) throw error;
      return data;
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, { data: loaderData.profile, isLoading: false }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(About, { items: pillars, isLoading: loadingPillars }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Skills, { items: skills, isLoading: loadingSkills }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Achievements, { items: achievements, isLoading: loadingAchievements }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FutureVision, { items: visionBeats, isLoading: loadingVision }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Support, { tiers: supportTiers, goal: supportGoal, isLoading: loadingTiers || loadingGoal }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ContactCTA, { data: cta, isLoading: loadingCta })
  ] });
}
export {
  Home as component
};
