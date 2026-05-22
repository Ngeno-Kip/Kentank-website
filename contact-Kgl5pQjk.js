import {
    j as e,
    L as a
} from "./index-DEBxCozj.js";
import {
    h as t
} from "./tank-hero-nqMAYr-a.js";
import {
    U as r
} from "./users-D9I6g6sz.js";
import {
    T as i
} from "./truck-CU-_gN3k.js";
import {
    S as l
} from "./shield-CLJFp9NC.js";
import {
    D as d
} from "./droplets-OV74fR_7.js";

const c = [{
        icon: r,
        title: "Sales & quotes",
        text: "Talk to us for pricing and product guidance."
    }, {
        icon: i,
        title: "Delivery help",
        text: "We can help confirm delivery and logistics."
    }, {
        icon: l,
        title: "Product support",
        text: "Ask about sizes, materials, and care tips."
    }, {
        icon: d,
        title: "Water storage advice",
        text: "We can suggest a tank that suits your usage."
    }];

function n() {
    return e.jsxs(e.Fragment, {
        children: [e.jsxs("section", {
            className: "section-yellow relative overflow-hidden",
            children: [e.jsxs("div", {
                className: "mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 py-16 md:flex-row md:py-20",
                children: [e.jsxs("div", {
                    className: "flex-1 text-center md:text-left",
                    children: [e.jsx("p", {
                        className: "font-heading text-sm font-bold uppercase tracking-[0.3em] text-brand-blue/60",
                        children: "Contact"
                    }), e.jsx("h1", {
                        className: "mt-2 font-heading text-4xl font-bold uppercase leading-tight text-brand-blue md:text-5xl lg:text-6xl",
                        children: "Contact KENTANK"
                    }), e.jsx("p", {
                        className: "mt-4 max-w-xl text-brand-blue/80",
                        children: "Need a quote, delivery details, or help choosing a tank? Reach out and we will respond as quickly as possible."
                    }), e.jsxs("div", {
                        className: "mt-6 flex flex-wrap justify-center gap-3 md:justify-start",
                        children: [e.jsx("a", {
                            href: "tel:+254785152927",
                            className: "btn-cta-blue",
                            children: "Call Now"
                        }), e.jsx("a", {
                            href: "https://wa.me/254785152927?text=Hello%20KENTANK%2C%20I%20would%20like%20to%20ask%20about%20your%20water%20tanks.",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "btn-cta-yellow",
                            children: "WhatsApp Us"
                        }), e.jsx(a, {
                            to: "/quote",
                            className: "btn-cta-white !border-brand-blue !text-brand-blue hover:!bg-brand-blue hover:!text-brand-yellow",
                            children: "Get a Quote"
                        })]
                    })]
                }), e.jsx("div", {
                    className: "flex-1 flex justify-center",
                    children: e.jsx("img", {
                        src: t,
                        alt: "Contact KENTANK",
                        className: "w-64 drop-shadow-2xl md:w-80 lg:w-96"
                    })
                })]
            }), e.jsx("div", {
                className: "h-8 bg-brand-blue",
                style: {
                    clipPath: "polygon(0 0, 100% 100%, 0 100%)"
                }
            })]
        }), e.jsx("section", {
            className: "py-16",
            children: e.jsxs("div", {
                className: "mx-auto max-w-7xl px-4",
                children: [e.jsx("h2", {
                    className: "text-center font-heading text-3xl font-bold uppercase text-brand-blue",
                    children: "How We Can Help"
                }), e.jsx("div", {
                    className: "mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
                    children: c.map(o => e.jsxs("div", {
                        className: "rounded border-2 border-brand-blue/10 bg-card p-5 shadow-sm",
                        children: [e.jsx("div", {
                            className: "mb-3 flex h-12 w-12 items-center justify-center rounded bg-brand-yellow text-brand-blue",
                            children: e.jsx(o.icon, {
                                size: 24
                            })
                        }), e.jsx("h3", {
                            className: "font-heading text-lg font-bold text-brand-blue",
                            children: o.title
                        }), e.jsx("p", {
                            className: "mt-1 text-sm text-muted-foreground",
                            children: o.text
                        })]
                    }, o.title))
                }), e.jsxs("div", {
                    className: "mt-10 grid gap-6 md:grid-cols-3",
                    children: [e.jsxs("div", {
                        className: "rounded bg-brand-blue/5 p-5",
                        children: [e.jsx("h3", {
                            className: "font-heading text-lg font-bold uppercase text-brand-blue",
                            children: "Phone"
                        }), e.jsx("p", {
                            className: "mt-2 text-sm text-muted-foreground",
                            children: "+254 782 412 269"
                        }), e.jsx("a", {
                            href: "tel:+254785152927",
                            className: "mt-4 inline-block btn-cta-blue text-sm",
                            children: "Call Now"
                        })]
                    }), e.jsxs("div", {
                        className: "rounded bg-brand-blue/5 p-5",
                        children: [e.jsx("h3", {
                            className: "font-heading text-lg font-bold uppercase text-brand-blue",
                            children: "WhatsApp"
                        }), e.jsx("p", {
                            className: "mt-2 text-sm text-muted-foreground",
                            children: "Quick replies, quote requests, and delivery questions."
                        }), e.jsx("a", {
                            href: "https://wa.me/254785152927?text=Hello%20KENTANK%2C%20I%20need%20a%20quote.",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "mt-4 inline-block btn-cta-yellow text-sm",
                            children: "Open WhatsApp"
                        })]
                    }), e.jsxs("div", {
                        className: "rounded bg-brand-blue/5 p-5",
                        children: [e.jsx("h3", {
                            className: "font-heading text-lg font-bold uppercase text-brand-blue",
                            children: "Location"
                        }), e.jsx("p", {
                            className: "mt-2 text-sm text-muted-foreground",
                            children: "Nairobi, Kenya"
                        }), e.jsx("p", {
                            className: "mt-3 text-xs text-muted-foreground",
                            children: "Tell us your area and we will help plan delivery."
                        })]
                    })]
                }), e.jsxs("div", {
                    className: "mt-10 text-center",
                    children: [e.jsx("p", {
                        className: "text-muted-foreground",
                        children: "Prefer to browse first? Check the products and pricing pages."
                    }), e.jsxs("div", {
                        className: "mt-6 flex flex-wrap justify-center gap-3",
                        children: [e.jsx(a, {
                            to: "/products",
                            className: "btn-cta-blue",
                            children: "Browse Products"
                        }), e.jsx(a, {
                            to: "/pricing",
                            className: "btn-cta-white !border-brand-blue !text-brand-blue hover:!bg-brand-blue hover:!text-brand-yellow",
                            children: "View Pricing"
                        })]
                    })]
                })]
            })
        })]
    })
}

export {
    n as component
};
