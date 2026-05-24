import { I as jsxRuntimeExports } from "./server-D6PlxVzG.js";
import { h as createLucideIcon, u as useQuery, s as supabase, m as motion, M as Mail, b as Linkedin, G as Github, L as Link } from "./router-KkAtt7BH.js";
import { S as Section } from "./section-BFWYTdNv.js";
import { M as MapPin } from "./map-pin-CAzC343d.js";
import { D as Download } from "./download-CtDT7Nnn.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$1 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
];
const CircleCheck = createLucideIcon("circle-check", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",
      key: "143wyd"
    }
  ],
  ["path", { d: "M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6", key: "1itne7" }],
  ["rect", { x: "6", y: "14", width: "12", height: "8", rx: "1", key: "1ue0tg" }]
];
const Printer = createLucideIcon("printer", __iconNode);
function RecruiterPage() {
  const {
    data: profile
  } = useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      const {
        data
      } = await supabase.from("profile").select("*").single();
      return data;
    }
  });
  const {
    data: contact
  } = useQuery({
    queryKey: ["contact_info"],
    queryFn: async () => {
      const {
        data
      } = await supabase.from("contact_info").select("*").single();
      return data;
    }
  });
  const {
    data: skills
  } = useQuery({
    queryKey: ["skills"],
    queryFn: async () => {
      const {
        data
      } = await supabase.from("skills").select("*").order("level", {
        ascending: false
      }).limit(8);
      return data;
    }
  });
  const {
    data: certs
  } = useQuery({
    queryKey: ["certifications"],
    queryFn: async () => {
      const {
        data
      } = await supabase.from("certifications").select("*").order("date", {
        ascending: false
      }).limit(4);
      return data;
    }
  });
  const {
    data: stats
  } = useQuery({
    queryKey: ["achievements"],
    queryFn: async () => {
      const {
        data
      } = await supabase.from("achievements").select("*").limit(3);
      return data;
    }
  });
  if (!profile || !contact) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { eyebrow: "Recruiter Mode", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    "The 60-second ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "overview." })
  ] }), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-[1fr_1.4fr] gap-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.aside, { initial: {
      opacity: 0,
      y: 20
    }, whileInView: {
      opacity: 1,
      y: 0
    }, viewport: {
      once: true
    }, className: "glass-strong rounded-3xl p-6 h-fit", children: [
      profile.portrait_url ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: profile.portrait_url, className: "h-16 w-16 rounded-full object-cover border-2 border-primary/20", alt: profile.full_name }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-16 w-16 rounded-full bg-gradient-to-br from-primary to-primary-glow grid place-items-center font-display text-2xl font-bold text-primary-foreground", children: profile.full_name.charAt(0) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-2xl font-display font-semibold", children: profile.full_name }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: profile.tagline }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 grid gap-2 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-4 w-4" }),
          " ",
          profile.location
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `mailto:${contact.email}`, className: "inline-flex items-center gap-2 hover:text-primary transition-colors", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4" }),
          " ",
          contact.email
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: contact.linkedin_url, target: "_blank", rel: "noreferrer", className: "inline-flex items-center gap-2 hover:text-primary transition-colors", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Linkedin, { className: "h-4 w-4" }),
          " LinkedIn"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: contact.github_url, target: "_blank", rel: "noreferrer", className: "inline-flex items-center gap-2 hover:text-primary transition-colors", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Github, { className: "h-4 w-4" }),
          " GitHub"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-col gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: profile.cv_url || "#", className: "inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-primary to-primary-glow text-primary-foreground font-medium text-sm shadow-glow hover:scale-[1.02] transition-transform", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "h-4 w-4" }),
          " Download CV"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => window.print(), className: "inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full glass font-medium text-sm hover:bg-white/10 transition-colors", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Printer, { className: "h-4 w-4" }),
          " Printable resume"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full font-medium text-sm text-muted-foreground hover:text-foreground", children: "Quick contact →" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-3xl p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-semibold", children: "Snapshot" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 grid grid-cols-3 gap-3 text-center", children: stats?.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-foreground/5 p-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xl md:text-2xl font-display font-semibold", children: [
            a.value.toLocaleString(),
            "+"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: a.label })
        ] }, a.id)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-3xl p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-semibold", children: "Top skills" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 flex flex-wrap gap-2", children: skills?.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-full bg-primary/10 text-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-3.5 w-3.5 text-primary" }),
          " ",
          s.name
        ] }, s.id)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-3xl p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-semibold", children: "Recent certifications" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-3 grid gap-2 text-sm", children: certs?.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start justify-between gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "font-medium", children: c.title }),
            " · ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: c.org })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs text-muted-foreground", children: c.date })
        ] }, c.id)) })
      ] })
    ] })
  ] }) }) });
}
export {
  RecruiterPage as component
};
