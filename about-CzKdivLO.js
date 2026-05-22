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
    H as c,
    B as n,
    F as s,
    S as m,
    a as o
} from "./sprout-DLbV3SnK.js";

const p = [{
        icon: r,
        title: "Durable products",
        text: "Multi-rib tanks built for everyday use."
    }, {
        icon: i,
        title: "Safe water storage",
        text: "Food-grade materials for clean water."
    }, {
        icon: l,
        title: "Fast delivery",
        text: "We help customers across Kenya."
    }],
    g = [{
        icon: c,
        title: "Homes",
        text: "Reliable water for family compounds."
    }, {
        icon: n,
        title: "Businesses",
        text: "Practical storage for commercial use."
    }, {
        icon: s,
        title: "Farms",
        text: "Support for irrigation and livestock."
    }, {
        icon: m,
        title: "Schools",
        text: "Large-capacity tanks for institutions."
    }, {
        icon: o,
        title: "Growth",
        text: "A brand built to grow with your needs."
    }, {
        icon: d,
        title: "People first",
        text: "We make it easy to ask, buy, and receive support."
    }];

function u() {
    return e.jsxs(e.Fragment, {
        children: [e.jsxs("section", {
            className: "section-yellow relative overflow-hidden",
            children: [e.jsxs("div", {
                className: "mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 py-16 md:flex-row md:py-20",
                children: [e.jsxs("div", {
                    className: "flex-1 text-center md:text-left",
                    children: [e.jsx("p", {
                        className: "font-heading text-sm font-bold uppercase tracking-[0.3em] text-brand-blue/60",
                        children: "About Us"
                    }), e.jsx("h1", {
                        className: "mt-2 font-heading text-4xl font-bold uppercase leading-tight text-brand-blue md:text-5xl lg:text-6xl",
                        children: "About KENTANK"
                    }), e.jsx("p", {
                        className: "mt-4 max-w-xl text-brand-blue/80",
                        children: "KENTANK is focused on dependable water storage for homes, businesses, farms, and institutions across Kenya."
                    }), e.jsxs("div", {
                        className: "mt-6 flex flex-wrap justify-center gap-3 md:justify-start",
                        children: [e.jsx(a, {
                            to: "/products",
                            className: "btn-cta-blue",
                            children: "Browse Products"
                        }), e.jsx(a, {
                            to: "/contact",
                            className: "btn-cta-white !border-brand-blue !text-brand-blue hover:!bg-brand-blue hover:!text-brand-yellow",
                            children: "Contact Us"
                        }), e.jsx("a", {
                            href: "https://wa.me/254785152927?text=Hello%20KENTANK%2C%20I%20would%20like%20to%20learn%20more%20about%20your%20company.",
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
                        alt: "About KENTANK",
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
                    children: "What We Stand For"
                }), e.jsx("div", {
                    className: "mt-10 grid gap-6 md:grid-cols-3",
                    children: p.map(f => e.jsxs("div", {
                        className: "rounded border-2 border-brand-blue/10 bg-card p-5 shadow-sm",
                        children: [e.jsx("div", {
                            className: "mb-3 flex h-12 w-12 items-center justify-center rounded bg-brand-yellow text-brand-blue",
                            children: e.jsx(f.icon, {
                                size: 24
                            })
                        }), e.jsx("h3", {
                            className: "font-heading text-lg font-bold text-brand-blue",
                            children: f.title
                        }), e.jsx("p", {
                            className: "mt-1 text-sm text-muted-foreground",
                            children: f.text
                        })]
                    }, f.title))
                })]
            })
        }), e.jsx("section", {
            className: "section-blue diagonal-top py-16",
            children: e.jsxs("div", {
                className: "mx-auto max-w-7xl px-4",
                children: [e.jsx("h2", {
                    className: "text-center font-heading text-3xl font-bold uppercase text-brand-yellow",
                    children: "Serving the Right Spaces"
                }), e.jsx("div", {
                    className: "mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
                    children: g.map(f => e.jsxs("div", {
                        className: "rounded bg-white/10 p-5 ring-1 ring-white/10",
                        children: [e.jsx("div", {
                            className: "mb-3 flex h-12 w-12 items-center justify-center rounded bg-brand-yellow text-brand-blue",
                            children: e.jsx(f.icon, {
                                size: 24
                            })
                        }), e.jsx("h3", {
                            className: "font-heading text-lg font-bold uppercase text-brand-yellow",
                            children: f.title
                        }), e.jsx("p", {
                            className: "mt-1 text-sm text-white/70",
                            children: f.text
                        })]
                    }, f.title))
                }), e.jsxs("div", {
                    className: "mt-10 rounded bg-white/5 p-6 text-center ring-1 ring-white/10",
                    children: [e.jsx("p", {
                        className: "text-white/70",
                        children: "We keep the buying process simple: choose a tank, request a quote, confirm delivery details, and we handle the rest."
                    }), e.jsxs("div", {
                        className: "mt-6 flex flex-wrap justify-center gap-3",
                        children: [e.jsx(a, {
                            to: "/quote",
                            className: "btn-cta-yellow",
                            children: "Request Quote"
                        }), e.jsx(a, {
                            to: "/delivery",
                            className: "btn-cta-white !border-brand-yellow !text-brand-yellow hover:!bg-brand-yellow hover:!text-brand-blue",
                            children: "Learn Delivery"
                        })]
                    })]
                })]
            })
        })]
    })
}

export {
    u as component
};
