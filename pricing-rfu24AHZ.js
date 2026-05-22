import {
    j as e,
    L as a
} from "./index-DEBxCozj.js";
import {
    p as t
} from "./products-Bqo_J_p1.js";
import {
    P as o
} from "./ProductCard-D2P1SyxT.js";
import {
    h as r
} from "./tank-hero-nqMAYr-a.js";
import {
    S as c
} from "./shield-CLJFp9NC.js";
import {
    D as i
} from "./droplets-OV74fR_7.js";
import {
    T as l
} from "./truck-CU-_gN3k.js";

const d = [{
        icon: c,
        title: "Transparent",
        text: "Clear pricing for every size."
    }, {
        icon: i,
        title: "Food-grade",
        text: "Safe water storage for homes and business."
    }, {
        icon: l,
        title: "Delivered",
        text: "Delivery arranged to your location."
    }];

function n() {
    const u = [...t].sort((f, s) => f.priceKsh - s.priceKsh);
    return e.jsxs(e.Fragment, {
        children: [e.jsxs("section", {
            className: "section-yellow relative overflow-hidden",
            children: [e.jsxs("div", {
                className: "mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 py-16 md:flex-row md:py-20",
                children: [e.jsxs("div", {
                    className: "flex-1 text-center md:text-left",
                    children: [e.jsx("p", {
                        className: "font-heading text-sm font-bold uppercase tracking-[0.3em] text-brand-blue/60",
                        children: "Pricing"
                    }), e.jsx("h1", {
                        className: "mt-2 font-heading text-4xl font-bold uppercase leading-tight text-brand-blue md:text-5xl lg:text-6xl",
                        children: "Simple, Transparent Prices"
                    }), e.jsx("p", {
                        className: "mt-4 max-w-xl text-brand-blue/80",
                        children: "Compare all KENTANK sizes and request a quote in one click. Prices are presented so customers can choose quickly and confidently."
                    }), e.jsxs("div", {
                        className: "mt-6 flex flex-wrap justify-center gap-3 md:justify-start",
                        children: [e.jsx(a, {
                            to: "/products",
                            className: "btn-cta-blue",
                            children: "Browse Products"
                        }), e.jsx(a, {
                            to: "/quote",
                            className: "btn-cta-white !border-brand-blue !text-brand-blue hover:!bg-brand-blue hover:!text-brand-yellow",
                            children: "Get a Quote"
                        }), e.jsx("a", {
                            href: "https://wa.me/254785152927?text=Hello%20KENTANK%2C%20please%20share%20your%20current%20prices.",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "btn-cta-blue !bg-green-600",
                            children: "WhatsApp Prices"
                        })]
                    })]
                }), e.jsx("div", {
                    className: "flex-1 flex justify-center",
                    children: e.jsx("img", {
                        src: r,
                        alt: "KENTANK water tank price guide",
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
            className: "py-12",
            children: e.jsxs("div", {
                className: "mx-auto max-w-7xl px-4",
                children: [e.jsx("div", {
                    className: "grid gap-6 md:grid-cols-3",
                    children: d.map(f => e.jsxs("div", {
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
                }), e.jsx("div", {
                    className: "mt-6 rounded border border-brand-blue/10 bg-brand-blue/5 p-4 text-sm text-brand-blue/80",
                    children: "Tip: Bigger tanks reduce refill frequency. If you are unsure, compare the 5,000L, 8,000L, and 10,000L options first."
                })]
            })
        }), e.jsx("section", {
            className: "py-16",
            children: e.jsxs("div", {
                className: "mx-auto max-w-7xl px-4",
                children: [e.jsx("h2", {
                    className: "text-center font-heading text-3xl font-bold uppercase text-brand-blue",
                    children: "Current Size Prices"
                }), e.jsx("p", {
                    className: "mt-2 text-center text-muted-foreground",
                    children: "Each product card includes the exact price and quote button."
                }), e.jsx("div", {
                    className: "mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
                    children: u.map(f => e.jsx(o, {
                        product: f
                    }, f.litres))
                })]
            })
        }), e.jsx("section", {
            className: "section-blue diagonal-top py-16",
            children: e.jsxs("div", {
                className: "mx-auto max-w-4xl px-4 text-center",
                children: [e.jsx("h2", {
                    className: "font-heading text-3xl font-bold uppercase text-brand-yellow",
                    children: "Need a Custom Quote?"
                }), e.jsx("p", {
                    className: "mt-3 text-white/70",
                    children: "Tell us your tank size, location, and delivery timeline. We will share the best available price."
                }), e.jsxs("div", {
                    className: "mt-8 flex flex-wrap justify-center gap-3",
                    children: [e.jsx(a, {
                        to: "/quote",
                        className: "btn-cta-yellow",
                        children: "Request Quote"
                    }), e.jsx(a, {
                        to: "/contact",
                        className: "btn-cta-white !border-brand-yellow !text-brand-yellow hover:!bg-brand-yellow hover:!text-brand-blue",
                        children: "Contact Sales"
                    })]
                })]
            })
        })]
    })
}

export {
    n as component
};
