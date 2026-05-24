import { I as jsxRuntimeExports } from "./server-D6PlxVzG.js";
import { h as createLucideIcon, u as useQuery, s as supabase, m as motion } from "./router-KkAtt7BH.js";
import { S as Section } from "./section-BFWYTdNv.js";
import { A as Award } from "./award-CW9Nc2KK.js";
import { E as ExternalLink } from "./external-link-BGI5YI1J.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode = [
  ["path", { d: "M12 7v4", key: "xawao1" }],
  ["path", { d: "M14 21v-3a2 2 0 0 0-4 0v3", key: "1rgiei" }],
  ["path", { d: "M14 9h-4", key: "1w2s2s" }],
  [
    "path",
    {
      d: "M18 11h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2",
      key: "1tthqt"
    }
  ],
  ["path", { d: "M18 21V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16", key: "dw4p4i" }]
];
const Hospital = createLucideIcon("hospital", __iconNode);
function JourneyPage() {
  const {
    data: journey,
    isLoading: loadJ
  } = useQuery({
    queryKey: ["journey_path"],
    queryFn: async () => {
      const {
        data,
        error
      } = await supabase.from("journey_path").select("*").order("sort_order", {
        ascending: true
      });
      if (error) throw error;
      return data;
    }
  });
  const {
    data: certs,
    isLoading: loadC
  } = useQuery({
    queryKey: ["certifications"],
    queryFn: async () => {
      const {
        data,
        error
      } = await supabase.from("certifications").select("*").order("sort_order", {
        ascending: true
      });
      if (error) throw error;
      return data;
    }
  });
  const {
    data: thoughts,
    isLoading: loadT
  } = useQuery({
    queryKey: ["reflections"],
    queryFn: async () => {
      const {
        data,
        error
      } = await supabase.from("reflections").select("*").order("sort_order", {
        ascending: true
      });
      if (error) throw error;
      return data;
    }
  });
  if (loadJ || loadC || loadT) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { eyebrow: "The Journey", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      "Hospitals, hands, ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "and human moments." })
    ] }), description: "Each rotation reshaped my understanding of care. Here is the path so far.", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-10", children: journey?.map((j, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.article, { initial: {
        opacity: 0,
        y: 30
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true
      }, transition: {
        duration: 0.5,
        delay: i * 0.1
      }, className: `relative md:grid md:grid-cols-2 md:gap-12 ${i % 2 === 0 ? "" : "md:[&>*]:col-start-2"}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-2.5 md:left-1/2 md:-translate-x-1/2 top-4 h-3 w-3 rounded-full bg-primary shadow-glow" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pl-10 md:pl-0 md:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-3xl p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs font-mono text-primary", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Hospital, { className: "h-3.5 w-3.5" }),
            j.period
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-2 text-xl font-display font-semibold", children: j.hospital }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
            j.department,
            " · ",
            j.role
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 grid gap-1.5 text-sm", children: j.responsibilities?.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary mt-1", children: "→" }),
            " ",
            r
          ] }, r)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-4 text-sm italic text-muted-foreground", children: [
            '"',
            j.lesson,
            '"'
          ] })
        ] }) })
      ] }, j.id)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { eyebrow: "Certifications", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      "Credentials that keep ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "growing." })
    ] }), children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-3", children: certs?.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.a, { href: c.url, initial: {
      opacity: 0,
      y: 20
    }, whileInView: {
      opacity: 1,
      y: 0
    }, viewport: {
      once: true
    }, transition: {
      duration: 0.4,
      delay: i * 0.05
    }, className: "glass rounded-2xl p-5 hover:shadow-elegant hover:-translate-y-0.5 transition-all block", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "h-5 w-5 text-primary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "mt-3 font-medium leading-snug", children: c.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-sm text-muted-foreground", children: c.org }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex items-center justify-between text-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-muted-foreground", children: c.date }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "h-3.5 w-3.5 opacity-60" })
      ] })
    ] }, c.id)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { eyebrow: "Healthcare Reflections", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      "Lessons from the ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "quiet hours." })
    ] }), description: "Privacy-conscious, professional reflections — no patient-identifiable information.", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-4", children: thoughts?.map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.article, { initial: {
      opacity: 0,
      y: 20
    }, whileInView: {
      opacity: 1,
      y: 0
    }, viewport: {
      once: true
    }, transition: {
      duration: 0.4,
      delay: i * 0.07
    }, className: "glass rounded-3xl p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-mono text-primary", children: r.tag }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "mt-2 font-display text-lg font-semibold leading-snug", children: r.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: r.excerpt }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-xs text-muted-foreground", children: r.date })
    ] }, r.id)) }) })
  ] });
}
export {
  JourneyPage as component
};
