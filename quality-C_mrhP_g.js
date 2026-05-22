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

const c = [{
        icon: r,
        title: "UV resistant",
        text: "Designed for Kenya's outdoor conditions."
    }, {
        icon: i,
        title: "Food-grade safe",
        text: "Suitable for clean domestic water storage."
    }, {
        icon: r,
        title: "Strong walls",
        text: "Built with durable construction for long service."
    }, {
        icon: d,
        title: "After-sales support",
        text: "Help is available when you need it."
    }, {
        icon: l,
        title: "Reliable delivery",
        text: "We plan logistics to match your location."
    }, {
        icon: i,
        title: "Multiple sizes",
        text: "Choose the tank that fits your water demand."
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
                        children: "Quality"
                    }), e.jsx("h1", {
                        className: "mt-2 font-heading text-4xl font-bold uppercase leading-tight text-brand-blue md:text-5xl lg:text-6xl",
                        children: "Quality & Warranty"
                    }), e.jsx("p", {
                        className: "mt-4 max-w-xl text-brand-blue/80",
                        children: "Every KENTANK tank is presented with the same promise: dependable storage, practical support, and materials made for water."
                    }), e.jsxs("div", {
                        className: "mt-6 flex flex-wrap justify-center gap-3 md:justify-start",
                        children: [e.jsx(a, {
                            to: "/products",
                            className: "btn-cta-blue",
                            children: "View Products"
                        }), e.jsx(a, {
                            to: "/quote",
                            className: "btn-cta-white !border-brand-blue !text-brand-blue hover:!bg-brand-blue hover:!text-brand-yellow",
                            children: "Get a Quote"
                        }), e.jsx("a", {
                            href: "https://wa.me/254785152927?text=Hello%20KENTANK%2C%20I%20would%20like%20to%20ask%20about%20quality%20and%20warranty.",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "btn-cta-blue !bg-green-600",
                            children: "Ask on WhatsApp"
                        })]
                    })]
                }), e.jsx("div", {
                    className: "flex-1 flex justify-center",
                    children: e.jsx("img", {
                        src: t,
                        alt: "KENTANK quality and warranty",
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
                    children: "Why the Quality Matters"
                }), e.jsx("div", {
                    className: "mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3",
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
                })]
            })
        }), e.jsx("section", {
            className: "section-blue diagonal-top py-16",
            children: e.jsxs("div", {
                className: "mx-auto max-w-5xl px-4 text-center",
                children: [e.jsx("h2", {
                    className: "font-heading text-3xl font-bold uppercase text-brand-yellow",
                    children: "Our Quality Promise"
                }), e.jsx("p", {
                    className: "mt-3 text-white/70",
                    children: "We focus on practical quality: safe materials, strong build quality, useful guidance, and responsive support after purchase."
                }), e.jsxs("div", {
                    className: "mt-8 flex flex-wrap justify-center gap-3",
                    children: [e.jsx(a, {
                        to: "/contact",
                        className: "btn-cta-yellow",
                        children: "Talk to Us"
                    }), e.jsx(a, {
                        to: "/delivery",
                        className: "btn-cta-white !border-brand-yellow !text-brand-yellow hover:!bg-brand-yellow hover:!text-brand-blue",
                        children: "Delivery Details"
                    })]
                })]
            })
        })]
    })
}

export {
    p as component
};
