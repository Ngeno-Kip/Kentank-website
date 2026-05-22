import {
    j as e,
    L as a
} from "./index-DEBxCozj.js";
import {
    h as t
} from "./tank-hero-nqMAYr-a.js";
import {
    S as r
} from "./shield-CLJFp9NC.js";
import {
    D as i
} from "./droplets-OV74fR_7.js";
import {
    T as l
} from "./truck-CU-_gN3k.js";
import {
    U as d
} from "./users-D9I6g6sz.js";
import {
    a as c
} from "./sprout-DLbV3SnK.js";

const m = [{
        icon: r,
        title: "Durable build",
        text: "Multi-rib reinforced tanks built to last."
    }, {
        icon: i,
        title: "Affordable pricing",
        text: "Clear prices that make it easy to budget."
    }, {
        icon: c,
        title: "Wide size range",
        text: "From 1,000L right up to 24,000L."
    }, {
        icon: d,
        title: "Trusted brand",
        text: "Helpful support for homes and businesses."
    }, {
        icon: l,
        title: "Easy ordering",
        text: "Call or WhatsApp and get a quick quote."
    }, {
        icon: r,
        title: "Reliable delivery",
        text: "We coordinate delivery across Kenya."
    }];

function p() {
    return e.jsxs(e.Fragment, {
        children: [e.jsxs("section", {
            className: "section-yellow relative overflow-hidden",
            children: [e.jsxs("div", {
                className: "mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 py-16 md:flex-row md:py-20",
                children: [e.jsxs("div", {
                    className: "flex-1 text-center md:text-left",
                    children: [e.jsx("p", {
                        className: "font-heading text-sm font-bold uppercase tracking-[0.3em] text-brand-blue/60",
                        children: "Why Choose Us"
                    }), e.jsx("h1", {
                        className: "mt-2 font-heading text-4xl font-bold uppercase leading-tight text-brand-blue md:text-5xl lg:text-6xl",
                        children: "Why Choose KENTANK"
                    }), e.jsx("p", {
                        className: "mt-4 max-w-xl text-brand-blue/80",
                        children: "We keep the buying process practical, affordable, and focused on the customer."
                    }), e.jsxs("div", {
                        className: "mt-6 flex flex-wrap justify-center gap-3 md:justify-start",
                        children: [e.jsx(a, {
                            to: "/products",
                            className: "btn-cta-blue",
                            children: "Browse Products"
                        }), e.jsx(a, {
                            to: "/quote",
                            className: "btn-cta-white !border-brand-blue !text-brand-blue hover:!bg-brand-blue hover:!text-brand-yellow",
                            children: "Request Quote"
                        }), e.jsx("a", {
                            href: "https://wa.me/254785152927?text=Hello%20KENTANK%2C%20I%20would%20like%20to%20know%20why%20I%20should%20choose%20your%20tanks.",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "btn-cta-blue !bg-green-600",
                            children: "WhatsApp Us"
                        })]
                    })]
                }), e.jsx("div", {
                    className: "flex-1 flex justify-center",
                    children: e.jsx("img", {
                        src: t,
                        alt: "Why choose KENTANK",
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
                    children: "Reasons Customers Return"
                }), e.jsx("div", {
                    className: "mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3",
                    children: m.map(o => e.jsxs("div", {
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
                }), e.jsx("div", {
                    className: "mt-10 rounded border border-brand-blue/10 bg-brand-blue/5 p-4 text-center text-sm text-brand-blue/80",
                    children: "We aim to make every step simple: ask, compare, choose, and receive."
                })]
            })
        }), e.jsx("section", {
            className: "section-blue diagonal-top py-16",
            children: e.jsxs("div", {
                className: "mx-auto max-w-5xl px-4 text-center",
                children: [e.jsx("h2", {
                    className: "font-heading text-3xl font-bold uppercase text-brand-yellow",
                    children: "Let’s help you choose"
                }), e.jsx("p", {
                    className: "mt-3 text-white/70",
                    children: "If you want a quick recommendation, send us your tank size, location, and usage."
                }), e.jsxs("div", {
                    className: "mt-8 flex flex-wrap justify-center gap-3",
                    children: [e.jsx(a, {
                        to: "/contact",
                        className: "btn-cta-yellow",
                        children: "Contact Sales"
                    }), e.jsx(a, {
                        to: "/delivery",
                        className: "btn-cta-white !border-brand-yellow !text-brand-yellow hover:!bg-brand-yellow hover:!text-brand-blue",
                        children: "Delivery Info"
                    })]
                })]
            })
        })]
    })
}

export {
    p as component
};
