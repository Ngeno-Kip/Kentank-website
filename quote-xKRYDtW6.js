import {
    j as e,
    L as a
} from "./index-DEBxCozj.js";
import {
    h as t
} from "./tank-hero-nqMAYr-a.js";
import {
    p as r
} from "./products-Bqo_J_p1.js";
import {
    P as i
} from "./ProductCard-D2P1SyxT.js";
import {
    U as l
} from "./users-D9I6g6sz.js";
import {
    T as d
} from "./truck-CU-_gN3k.js";
import {
    S as c
} from "./shield-CLJFp9NC.js";

const n = [{
        icon: l,
        title: "Tank size",
        text: "Tell us how many litres you need."
    }, {
        icon: d,
        title: "Delivery location",
        text: "Share the town, estate, or area."
    }, {
        icon: c,
        title: "Usage",
        text: "Let us know if the tank is for home, business, or farm."
    }],
    p = r;

function o() {
    return e.jsxs(e.Fragment, {
        children: [e.jsxs("section", {
            className: "section-yellow relative overflow-hidden",
            children: [e.jsxs("div", {
                className: "mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 py-16 md:flex-row md:py-20",
                children: [e.jsxs("div", {
                    className: "flex-1 text-center md:text-left",
                    children: [e.jsx("p", {
                        className: "font-heading text-sm font-bold uppercase tracking-[0.3em] text-brand-blue/60",
                        children: "Quote"
                    }), e.jsx("h1", {
                        className: "mt-2 font-heading text-4xl font-bold uppercase leading-tight text-brand-blue md:text-5xl lg:text-6xl",
                        children: "Get a Quote"
                    }), e.jsx("p", {
                        className: "mt-4 max-w-xl text-brand-blue/80",
                        children: "The fastest way to get pricing is to share your tank size and location on WhatsApp or by phone."
                    }), e.jsxs("div", {
                        className: "mt-6 flex flex-wrap justify-center gap-3 md:justify-start",
                        children: [e.jsx("a", {
                            href: "https://wa.me/254785152927?text=Hello%20KENTANK%2C%20I%20would%20like%20a%20quote.%20Tank%20size%3A%20%5Bsize%5D%20Location%3A%20%5Blocation%5D.",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "btn-cta-blue !bg-green-600",
                            children: "Quote on WhatsApp"
                        }), e.jsx("a", {
                            href: "tel:+254785152927",
                            className: "btn-cta-blue",
                            children: "Call Sales"
                        }), e.jsx(a, {
                            to: "/products",
                            className: "btn-cta-white !border-brand-blue !text-brand-blue hover:!bg-brand-blue hover:!text-brand-yellow",
                            children: "Browse Products"
                        })]
                    })]
                }), e.jsx("div", {
                    className: "flex-1 flex justify-center",
                    children: e.jsx("img", {
                        src: t,
                        alt: "Request a KENTANK quote",
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
                    children: "What to Send Us"
                }), e.jsx("div", {
                    className: "mt-10 grid gap-6 md:grid-cols-3",
                    children: n.map(s => e.jsxs("div", {
                        className: "rounded border-2 border-brand-blue/10 bg-card p-5 shadow-sm",
                        children: [e.jsx("div", {
                            className: "mb-3 flex h-12 w-12 items-center justify-center rounded bg-brand-yellow text-brand-blue",
                            children: e.jsx(s.icon, {
                                size: 24
                            })
                        }), e.jsx("h3", {
                            className: "font-heading text-lg font-bold text-brand-blue",
                            children: s.title
                        }), e.jsx("p", {
                            className: "mt-1 text-sm text-muted-foreground",
                            children: s.text
                        })]
                    }, s.title))
                }), e.jsx("div", {
                    className: "mt-10 rounded border border-brand-blue/10 bg-brand-blue/5 p-4 text-sm text-brand-blue/80",
                    children: "The more details you share, the faster we can confirm the right price."
                })]
            })
        }), e.jsx("section", {
            className: "py-16",
            children: e.jsxs("div", {
                className: "mx-auto max-w-7xl px-4",
                children: [e.jsx("h2", {
                    className: "text-center font-heading text-3xl font-bold uppercase text-brand-blue",
                    children: "All Tank Sizes for Quoting"
                }), e.jsx("p", {
                    className: "mt-2 text-center text-muted-foreground",
                    children: "Choose any tank size below and get a quote right away."
                }), e.jsx("div", {
                    className: "mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
                    children: p.map(s => e.jsx(i, {
                        product: s
                    }, s.litres))
                })]
            })
        }), e.jsx("section", {
            className: "section-blue diagonal-top py-16",
            children: e.jsxs("div", {
                className: "mx-auto max-w-5xl px-4 text-center",
                children: [e.jsx("h2", {
                    className: "font-heading text-3xl font-bold uppercase text-brand-yellow",
                    children: "Need Help Deciding?"
                }), e.jsx("p", {
                    className: "mt-3 text-white/70",
                    children: "We can help choose the best tank size for your household, rental, business, or farm."
                }), e.jsxs("div", {
                    className: "mt-8 flex flex-wrap justify-center gap-3",
                    children: [e.jsx(a, {
                        to: "/contact",
                        className: "btn-cta-yellow",
                        children: "Contact Us"
                    }), e.jsx(a, {
                        to: "/delivery",
                        className: "btn-cta-white !border-brand-yellow !text-brand-yellow hover:!bg-brand-yellow hover:!text-brand-blue",
                        children: "Learn Delivery"
                    })]
                })]
            })
        })]
    })
}

export {
    o as component
};
