import { Q as reactExports, I as jsxRuntimeExports } from "./server-D6PlxVzG.js";
import { u as useQuery, s as supabase, a as AnimatePresence, m as motion, f as Sparkles, H as Heart, S as Send, M as Mail, c as MessageCircle, b as Linkedin, G as Github } from "./router-KkAtt7BH.js";
import { S as Section } from "./section-BFWYTdNv.js";
import { M as MapPin } from "./map-pin-CAzC343d.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function ContactPage() {
  const [sent, setSent] = reactExports.useState(false);
  const [loading, setLoading] = reactExports.useState(false);
  const formRef = reactExports.useRef(null);
  const triggerFeedback = () => {
    const audio = new Audio("./tap.mp3");
    audio.volume = 0.5;
    audio.play().catch(() => {
    });
    if ("vibrate" in navigator) {
      navigator.vibrate(10);
    }
  };
  const {
    data: info,
    isLoading
  } = useQuery({
    queryKey: ["contact_info"],
    queryFn: async () => {
      const {
        data,
        error
      } = await supabase.from("contact_info").select("*").single();
      if (error) throw error;
      return data;
    }
  });
  async function handleSubmit(e) {
    e.preventDefault();
    triggerFeedback();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const messageData = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message")
    };
    const {
      error
    } = await supabase.from("contact_messages").insert([messageData]);
    if (!error) {
      setSent(true);
      formRef.current?.reset();
    } else {
      alert("Oh no! The letter got lost. Try again?");
    }
    setLoading(false);
  }
  if (isLoading || !info) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-24 relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: sent && /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
      opacity: 0
    }, animate: {
      opacity: 1
    }, exit: {
      opacity: 0
    }, className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/60 backdrop-blur-md", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
      scale: 0.9,
      y: 20,
      opacity: 0
    }, animate: {
      scale: 1,
      y: 0,
      opacity: 1
    }, exit: {
      scale: 0.9,
      y: 20,
      opacity: 0
    }, className: "glass-strong max-w-sm w-full p-8 rounded-[2.5rem] text-center shadow-2xl border-primary/20 relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { animate: {
        rotate: 360
      }, transition: {
        duration: 8,
        repeat: Infinity,
        ease: "linear"
      }, className: "absolute -top-12 -right-12 text-primary/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { size: 120 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
          bounce: 0.5,
          type: "spring",
          scale: 0
        }, animate: {
          scale: 1
        }, transition: {
          delay: 0.2,
          duration: 0.5
        }, className: "w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "text-primary fill-primary h-10 w-10 animate-pulse" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mb-2", children: "Yay! It's sent!" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed mb-8", children: "Your message is flying safely to my inbox. I'm so excited to read it and will get back to you shortly! ✨" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
          triggerFeedback();
          setSent(false);
        }, className: "w-full py-4 px-6 rounded-2xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-all active:scale-95 shadow-lg shadow-primary/25", children: "Close with a smile" })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { eyebrow: "Contact", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      "Let's talk about ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "care, code, or both." })
    ] }), description: "I respond to most messages within 48 hours. For roles, please attach the JD if you have one.", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-[1.2fr_1fr] gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.form, { ref: formRef, initial: {
        opacity: 0,
        y: 20
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true
      }, onSubmit: handleSubmit, className: "glass-strong rounded-3xl p-6 grid gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Your name", name: "name", required: true }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email", name: "email", type: "email", required: true })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Subject", name: "subject" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "grid gap-1.5 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: "Message" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { name: "message", rows: 6, required: true, className: "rounded-2xl bg-background/40 border border-border/60 px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-primary to-primary-glow text-primary-foreground font-medium shadow-glow disabled:opacity-50 transition-transform active:scale-95", disabled: loading, children: loading ? "Sending..." : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-4 w-4" }),
          " Send message"
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.aside, { initial: {
        opacity: 0,
        y: 20
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true
      }, className: "grid gap-3 h-fit", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `mailto:${info.email}`, onClick: triggerFeedback, target: "_blank", rel: "noreferrer", className: "glass rounded-2xl p-5 flex items-center gap-3 hover:text-primary transition-colors group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-5 w-5 group-hover:scale-110 transition-transform" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: info.email })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: info.whatsapp_url, onClick: triggerFeedback, target: "_blank", rel: "noreferrer", className: "glass rounded-2xl p-5 flex items-center gap-3 hover:text-primary transition-colors group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-5 w-5 group-hover:scale-110 transition-transform" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: "Chat on WhatsApp" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: info.linkedin_url, onClick: triggerFeedback, target: "_blank", rel: "noreferrer", className: "glass rounded-2xl p-5 flex items-center gap-3 hover:text-primary transition-colors group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Linkedin, { className: "h-5 w-5 group-hover:scale-110 transition-transform" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: "LinkedIn" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: info.github_url, onClick: triggerFeedback, target: "_blank", rel: "noreferrer", className: "glass rounded-2xl p-5 flex items-center gap-3 hover:text-primary transition-colors group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Github, { className: "h-5 w-5 group-hover:scale-110 transition-transform" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: "GitHub" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-2xl p-5 flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-5 w-5 text-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: info.location })
        ] })
      ] })
    ] }) })
  ] });
}
function Field({
  label,
  name,
  type = "text",
  required
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "grid gap-1.5 text-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { name, type, required, className: "rounded-2xl bg-background/40 border border-border/60 px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all" })
  ] });
}
export {
  ContactPage as component
};
