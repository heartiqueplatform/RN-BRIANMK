import { I as jsxRuntimeExports } from "./server-D6PlxVzG.js";
import { u as useQuery, s as supabase, m as motion, G as Github } from "./router-KkAtt7BH.js";
import { S as Section } from "./section-BFWYTdNv.js";
import { E as ExternalLink } from "./external-link-BGI5YI1J.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function ProjectsPage() {
  const {
    data: projects,
    isLoading
  } = useQuery({
    queryKey: ["projects_gallery"],
    queryFn: async () => {
      const {
        data,
        error
      } = await supabase.from("projects_gallery").select("*").order("sort_order", {
        ascending: true
      });
      if (error) throw error;
      return data;
    }
  });
  if (isLoading) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { eyebrow: "Projects", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    "Building tools for the ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "next era of care." })
  ] }), description: "A small, growing collection of experiments at the intersection of nursing, software, and community.", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-5", children: projects?.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.article, { initial: {
    opacity: 0,
    y: 30
  }, whileInView: {
    opacity: 1,
    y: 0
  }, viewport: {
    once: true
  }, transition: {
    duration: 0.5,
    delay: i * 0.08
  }, className: "group glass rounded-3xl p-6 relative overflow-hidden flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/10 blur-3xl group-hover:bg-primary/20 transition" }),
    p.image_url && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-6 overflow-hidden rounded-2xl aspect-video bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.image_url, alt: p.title, className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-display font-semibold", children: p.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-mono uppercase tracking-wider px-2 py-1 rounded-full bg-primary/15 text-primary", children: p.status })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: p.description }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 flex flex-wrap gap-1.5", children: p.tech?.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs px-2 py-1 rounded-full bg-foreground/5", children: t }, t)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-auto pt-6 flex gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: p.view_url, target: "_blank", rel: "noreferrer", className: "inline-flex items-center gap-1.5 text-sm font-medium hover:text-primary transition-colors", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "h-3.5 w-3.5" }),
        " View"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: p.github_url, target: "_blank", rel: "noreferrer", className: "inline-flex items-center gap-1.5 text-sm font-medium hover:text-primary transition-colors", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Github, { className: "h-3.5 w-3.5" }),
        " Code"
      ] })
    ] })
  ] }, p.id)) }) }) });
}
export {
  ProjectsPage as component
};
