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

const s = [{
        q: "What sizes do KENTANK tanks come in?",
        a: "We offer sizes from 1,000 litres to 24,000 litres to suit homes, rentals, businesses, farms, and institutions."
    }, {
        q: "How do I order a tank?",
        a: "Simply call us or send a WhatsApp message. We will confirm the tank size, location, and delivery details."
    }, {
        q: "Do you deliver across Kenya?",
        a: "Yes. We arrange delivery across Kenya and can help you plan for your area."
    }, {
        q: "Are your tanks food-grade safe?",
        a: "Yes. KENTANK tanks are made for safe water storage and are suitable for domestic use."
    }, {
        q: "How can I get the latest price?",
        a: "Open the pricing page or request a direct quote on WhatsApp for the most up-to-date amount."
    }, {
        q: "Which tank size should I choose?",
        a: "Choose based on household size, water usage, and refill frequency. We can recommend the best size for your needs."
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
                        children: "Support"
                    }), e.jsx("h1", {
                        className: "mt-2 font-heading text-4xl font-bold uppercase leading-tight text-brand-blue md:text-5xl lg:text-6xl",
                        children: "Frequently Asked Questions"
                    }), e.jsx("p", {
                        className: "mt-4 max-w-xl text-brand-blue/80",
                        children: "Quick answers about sizes, ordering, delivery, and pricing."
                    }), e.jsxs("div", {
                        className: "mt-6 flex flex-wrap justify-center gap-3 md:justify-start",
                        children: [e.jsx(a, {
                            to: "/contact",
                            className: "btn-cta-blue",
                            children: "Contact Us"
                        }), e.jsx(a, {
                            to: "/quote",
                            className: "btn-cta-white !border-brand-blue !text-brand-blue hover:!bg-brand-blue hover:!text-brand-yellow",
                            children: "Request Quote"
                        }), e.jsx("a", {
                            href: "https://wa.me/254785152927?text=Hello%20KENTANK%2C%20I%20have%20a%20question%20about%20your%20water%20tanks.",
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
                        alt: "KENTANK water tank FAQ",
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
                    className: "grid gap-6 md:grid-cols-2",
                    children: [e.jsxs("div", {
                        className: "rounded border-2 border-brand-blue/10 bg-card p-5 shadow-sm",
                        children: [e.jsx("div", {
                            className: "mb-3 flex h-12 w-12 items-center justify-center rounded bg-brand-yellow text-brand-blue",
                            children: e.jsx(r, {
                                size: 24
                            })
                        }), e.jsx("h3", {
                            className: "font-heading text-lg font-bold text-brand-blue",
                            children: "Safe Water Storage"
                        }), e.jsx("p", {
                            className: "mt-1 text-sm text-muted-foreground",
                            children: "Food-grade tanks designed for clean, reliable use at home or work."
                        })]
                    }), e.jsxs("div", {
                        className: "rounded border-2 border-brand-blue/10 bg-card p-5 shadow-sm",
                        children: [e.jsx("div", {
                            className: "mb-3 flex h-12 w-12 items-center justify-center rounded bg-brand-yellow text-brand-blue",
                            children: e.jsx(i, {
                                size: 24
                            })
                        }), e.jsx("h3", {
                            className: "font-heading text-lg font-bold text-brand-blue",
                            children: "Trusted by Customers"
                        }), e.jsx("p", {
                            className: "mt-1 text-sm text-muted-foreground",
                            children: "We help households, farms, schools, and institutions choose the right capacity."
                        })]
                    })]
                }), e.jsx("div", {
                    className: "mt-10 space-y-3",
                    children: s.map(o => e.jsxs("details", {
                        className: "group rounded bg-white/80 shadow-sm",
                        children: [e.jsx("summary", {
                            className: "cursor-pointer px-5 py-4 font-heading text-sm font-bold text-brand-blue",
                            children: o.q
                        }), e.jsx("p", {
                            className: "px-5 pb-4 text-sm text-brand-blue/70",
                            children: o.a
                        })]
                    }, o.q))
                }), e.jsx("div", {
                    className: "mt-8 text-center",
                    children: e.jsx(a, {
                        to: "/contact",
                        className: "btn-cta-blue inline-block",
                        children: "Still Need Help? Contact Us"
                    })
                })]
            })
        })]
    })
}

export {
    n as component
};
