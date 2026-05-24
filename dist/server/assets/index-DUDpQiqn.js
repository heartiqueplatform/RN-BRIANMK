import { I as jsxRuntimeExports } from "./server-D6PlxVzG.js";
import { d as Route, m as motion, L as Link } from "./router-KkAtt7BH.js";
import { S as Section } from "./section-BFWYTdNv.js";
import { C as Clock } from "./clock-BvHynB8X.js";
import { A as ArrowRight } from "./arrow-right-DZgomH15.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function BlogPage() {
  const {
    posts
  } = Route.useLoaderData();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { eyebrow: "Writing", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    "Stories from the ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "ward and the workbench." })
  ] }), description: "Reflections on nursing life, healthcare innovation, mental health, and the future of Kenyan medicine.", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-3", children: posts?.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
    opacity: 0,
    y: 20
  }, whileInView: {
    opacity: 1,
    y: 0
  }, viewport: {
    once: true
  }, transition: {
    duration: 0.4,
    delay: i * 0.06
  }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/blog/$slug", params: {
    slug: p.slug
  }, className: "group glass rounded-3xl p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-6 hover:shadow-elegant transition-all block", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-primary uppercase tracking-wider", children: p.category }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground inline-flex items-center gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-3 w-3" }),
          " ",
          p.read_time
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: p.post_date })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 text-xl md:text-2xl font-display font-semibold leading-snug group-hover:text-primary transition-colors", children: p.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-muted-foreground", children: p.excerpt })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-5 w-5 text-muted-foreground group-hover:translate-x-1 group-hover:text-primary transition-all" })
  ] }) }, p.id)) }) }) });
}
export {
  BlogPage as component
};
