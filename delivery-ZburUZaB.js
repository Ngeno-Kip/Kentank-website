import {
    j as e,
    L as a
} from "./index-DEBxCozj.js";
import {
    h as t
} from "./tank-hero-nqMAYr-a.js";
import {
    T as r
} from "./truck-CU-_gN3k.js";
import {
    S as i
} from "./shield-CLJFp9NC.js";
import {
    U as l
} from "./users-D9I6g6sz.js";

const d = [{
        step: "1",
        title: "Choose a tank",
        text: "Pick the tank size that matches your storage needs."
    }, {
        step: "2",
        title: "Request a quote",
        text: "Send us your size and location so we can confirm pricing."
    }, {
        step: "3",
        title: "Confirm delivery",
        text: "We arrange delivery details and timing with you."
    }, {
        step: "4",
        title: "Receive your tank",
        text: "Your tank is delivered to the agreed location."
    }, {
        step: "5",
        title: "Start using it",
        text: "Install, fill, and enjoy reliable water storage."
    }];

function c() {
    return e.jsxs(e.Fragment, {
        children: [e.jsxs("section", {
            className: "section-yellow relative overflow-hidden",
            children: [e.jsxs("div", {
                className: "mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 py-16 md:flex-row md:py-20",
                children: [e.jsxs("div", {
                    className: "flex-1 text-center md:text-left",
                    children: [e.jsx("p", {
                        className: "font-heading text-sm font-bold uppercase tracking-[0.3em] text-brand-blue/60",
                        children: "Delivery"
                    }), e.jsx("h1", {
                        className: "mt-2 font-heading text-4xl font-bold uppercase leading-tight text-brand-blue md:text-5xl lg:text-6xl",
                        children: "Fast, Reliable Delivery"
                    }), e.jsx("p", {
                        className: "mt-4 max-w-xl text-brand-blue/80",
                        children: "We keep delivery simple: confirm the tank size, share your location, and we handle the logistics."
                    }), e.jsxs("div", {
                        className: "mt-6 flex flex-wrap justify-center gap-3 md:justify-start",
                        children: [e.jsx(a, {
                            to: "/quote",
                            className: "btn-cta-blue",
                            children: "Request a Quote"
                        }), e.jsx(a, {
                            to: "/contact",
                            className: "btn-cta-white !border-brand-blue !text-brand-blue hover:!bg-brand-blue hover:!text-brand-yellow",
                            children: "Contact Us"
                        }), e.jsx("a", {
                            href: "https://wa.me/254785152927?text=Hello%20KENTANK%2C%20I%20need%20delivery%20details.",
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
                        alt: "KENTANK delivery",
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
                    children: "How Delivery Works"
                }), e.jsx("div", {
                    className: "mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-5",
                    children: d.map(s => e.jsxs("div", {
                        className: "rounded border-2 border-brand-blue/10 bg-card p-5 text-center shadow-sm",
                        children: [e.jsx("div", {
                            className: "mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-yellow font-heading text-2xl font-bold text-brand-blue",
                            children: s.step
                        }), e.jsx("h3", {
                            className: "mt-3 font-heading text-lg font-bold text-brand-blue",
                            children: s.title
                        }), e.jsx("p", {
                            className: "mt-1 text-sm text-muted-foreground",
                            children: s.text
                        })]
                    }, s.step))
                })]
            })
        }), e.jsx("section", {
            className: "section-blue diagonal-top py-16",
            children: e.jsxs("div", {
                className: "mx-auto max-w-7xl px-4",
                children: [e.jsx("h2", {
                    className: "text-center font-heading text-3xl font-bold uppercase text-brand-yellow",
                    children: "Delivery Tips"
                }), e.jsx("div", {
                    className: "mt-10 grid gap-6 md:grid-cols-3",
                    children: [e.jsxs("div", {
                        className: "rounded bg-white/10 p-5 ring-1 ring-white/10",
                        children: [e.jsx("div", {
                            className: "mb-3 flex h-12 w-12 items-center justify-center rounded bg-brand-yellow text-brand-blue",
                            children: e.jsx(r, {
                                size: 24
                            })
                        }), e.jsx("h3", {
                            className: "font-heading text-lg font-bold uppercase text-brand-yellow",
                            children: "Plan ahead"
                        }), e.jsx("p", {
                            className: "mt-1 text-sm text-white/70",
                            children: "Share your location early so we can confirm delivery timelines."
                        })]
                    }), e.jsxs("div", {
                        className: "rounded bg-white/10 p-5 ring-1 ring-white/10",
                        children: [e.jsx("div", {
                            className: "mb-3 flex h-12 w-12 items-center justify-center rounded bg-brand-yellow text-brand-blue",
                            children: e.jsx(i, {
                                size: 24
                            })
                        }), e.jsx("h3", {
                            className: "font-heading text-lg font-bold uppercase text-brand-yellow",
                            children: "Protect the tank"
                        }), e.jsx("p", {
                            className: "mt-1 text-sm text-white/70",
                            children: "Keep the installation area clear so the tank can be placed safely."
                        })]
                    }), e.jsxs("div", {
                        className: "rounded bg-white/10 p-5 ring-1 ring-white/10",
                        children: [e.jsx("div", {
                            className: "mb-3 flex h-12 w-12 items-center justify-center rounded bg-brand-yellow text-brand-blue",
                            children: e.jsx(l, {
                                size: 24
                            })
                        }), e.jsx("h3", {
                            className: "font-heading text-lg font-bold uppercase text-brand-yellow",
                            children: "Ask for support"
                        }), e.jsx("p", {
                            className: "mt-1 text-sm text-white/70",
                            children: "We can help you choose the right tank before delivery is arranged."
                        })]
                    })]
                }), e.jsxs("div", {
                    className: "mt-10 text-center",
                    children: [e.jsx("p", {
                        className: "text-white/70",
                        children: "Need delivery advice now? Reach out and we will help you plan it."
                    }), e.jsxs("div", {
                        className: "mt-6 flex flex-wrap justify-center gap-3",
                        children: [e.jsx(a, {
                            to: "/contact",
                            className: "btn-cta-yellow",
                            children: "Contact Sales"
                        }), e.jsx(a, {
                            to: "/products",
                            className: "btn-cta-white !border-brand-yellow !text-brand-yellow hover:!bg-brand-yellow hover:!text-brand-blue",
                            children: "Browse Products"
                        })]
                    })]
                })]
            })
        })]
    })
}

export {
    c as component
};
