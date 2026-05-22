import {
    j as e,
    L as a
} from "./index-DEBxCozj.js";
import {
    h as t
} from "./tank-hero-nqMAYr-a.js";
import {
    t as r
} from "./tank-product-hAiUylBt.js";
import {
    p as i
} from "./products-Bqo_J_p1.js";
import {
    P as l
} from "./ProductCard-D2P1SyxT.js";

const d = [{
        src: t,
        title: "Brand hero",
        text: "A clean and bold showcase image."
    }, {
        src: r,
        title: "Product close-up",
        text: "The tank finish and practical design."
    }, {
        src: t,
        title: "Reliable storage",
        text: "Built for daily water supply needs."
    }, {
        src: r,
        title: "Quote-ready",
        text: "Choose a size and request pricing."
    }];

function n() {
    const o = i.filter(s => s.badge).slice(0, 3);
    return e.jsxs(e.Fragment, {
        children: [e.jsxs("section", {
            className: "section-yellow relative overflow-hidden",
            children: [e.jsxs("div", {
                className: "mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 py-16 md:flex-row md:py-20",
                children: [e.jsxs("div", {
                    className: "flex-1 text-center md:text-left",
                    children: [e.jsx("p", {
                        className: "font-heading text-sm font-bold uppercase tracking-[0.3em] text-brand-blue/60",
                        children: "Gallery"
                    }), e.jsx("h1", {
                        className: "mt-2 font-heading text-4xl font-bold uppercase leading-tight text-brand-blue md:text-5xl lg:text-6xl",
                        children: "Gallery"
                    }), e.jsx("p", {
                        className: "mt-4 max-w-xl text-brand-blue/80",
                        children: "A simple visual tour of the tanks, finish, and product range."
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
                        })]
                    })]
                }), e.jsx("div", {
                    className: "flex-1 flex justify-center",
                    children: e.jsx("img", {
                        src: t,
                        alt: "KENTANK gallery",
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
                    children: "Image Highlights"
                }), e.jsx("div", {
                    className: "mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
                    children: d.map(s => e.jsxs("div", {
                        className: "overflow-hidden rounded border-2 border-brand-blue/10 bg-card shadow-sm",
                        children: [e.jsx("img", {
                            src: s.src,
                            alt: s.title,
                            className: "h-52 w-full object-cover"
                        }), e.jsxs("div", {
                            className: "p-4",
                            children: [e.jsx("h3", {
                                className: "font-heading text-lg font-bold text-brand-blue",
                                children: s.title
                            }), e.jsx("p", {
                                className: "mt-1 text-sm text-muted-foreground",
                                children: s.text
                            })]
                        })]
                    }, s.title))
                })]
            })
        }), e.jsx("section", {
            className: "section-blue diagonal-top py-16",
            children: e.jsxs("div", {
                className: "mx-auto max-w-7xl px-4",
                children: [e.jsx("h2", {
                    className: "text-center font-heading text-3xl font-bold uppercase text-brand-yellow",
                    children: "Featured Products"
                }), e.jsx("div", {
                    className: "mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
                    children: o.map(s => e.jsx(l, {
                        product: s
                    }, s.litres))
                }), e.jsx("div", {
                    className: "mt-10 text-center",
                    children: e.jsxs("div", {
                        className: "flex flex-wrap justify-center gap-3",
                        children: [e.jsx(a, {
                            to: "/pricing",
                            className: "btn-cta-yellow",
                            children: "View Pricing"
                        }), e.jsx(a, {
                            to: "/contact",
                            className: "btn-cta-white !border-brand-yellow !text-brand-yellow hover:!bg-brand-yellow hover:!text-brand-blue",
                            children: "Contact Us"
                        })]
                    })
                })]
            })
        })]
    })
}

export {
    n as component
};
