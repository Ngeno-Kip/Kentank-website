import {
    j as e,
    L as a
} from "./index-DEBxCozj.js";
import {
    h as t
} from "./tank-hero-nqMAYr-a.js";
import {
    B as r,
    F as i,
    H as l,
    S as d,
    a as c
} from "./sprout-DLbV3SnK.js";
import {
    U as n
} from "./users-D9I6g6sz.js";
import {
    T as s
} from "./truck-CU-_gN3k.js";

const m = [{
        icon: l,
        title: "Homes",
        text: "Reliable water storage for family compounds.",
        size: "1,000L - 3,000L"
    }, {
        icon: n,
        title: "Rentals",
        text: "Serve multiple tenants with enough reserve.",
        size: "4,000L - 6,000L"
    }, {
        icon: d,
        title: "Schools",
        text: "Large-capacity options for student facilities.",
        size: "8,000L - 10,000L"
    }, {
        icon: c,
        title: "Farms",
        text: "Ideal for irrigation and livestock water.",
        size: "10,000L - 24,000L"
    }, {
        icon: i,
        title: "Businesses",
        text: "Commercial-grade storage for daily operations.",
        size: "5,000L - 10,000L"
    }, {
        icon: r,
        title: "Institutions",
        text: "Hospitals, churches, and community facilities.",
        size: "8,000L - 24,000L"
    }],
    p = [{
        icon: s,
        title: "Quick delivery",
        text: "We help coordinate delivery to your site."
    }, {
        icon: i,
        title: "Safe storage",
        text: "Food-grade tanks suited to potable water."
    }, {
        icon: c,
        title: "Right size",
        text: "We help customers pick the best capacity."
    }];

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
                        children: "Solutions"
                    }), e.jsx("h1", {
                        className: "mt-2 font-heading text-4xl font-bold uppercase leading-tight text-brand-blue md:text-5xl lg:text-6xl",
                        children: "Solutions for Every Need"
                    }), e.jsx("p", {
                        className: "mt-4 max-w-xl text-brand-blue/80",
                        children: "Browse our recommended tank sizes for homes, rentals, businesses, farms, and institutions."
                    }), e.jsxs("div", {
                        className: "mt-6 flex flex-wrap justify-center gap-3 md:justify-start",
                        children: [e.jsx(a, {
                            to: "/products",
                            className: "btn-cta-blue",
                            children: "View Products"
                        }), e.jsx(a, {
                            to: "/pricing",
                            className: "btn-cta-white !border-brand-blue !text-brand-blue hover:!bg-brand-blue hover:!text-brand-yellow",
                            children: "View Pricing"
                        }), e.jsx("a", {
                            href: "https://wa.me/254785152927?text=Hello%20KENTANK%2C%20please%20help%20me%20choose%20the%20right%20tank%20size.",
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
                        alt: "KENTANK solutions",
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
                    children: "Recommended Tank Sizes"
                }), e.jsx("div", {
                    className: "mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
                    children: m.map(u => e.jsxs("div", {
                        className: "rounded border-2 border-brand-blue/10 bg-card p-5 shadow-sm",
                        children: [e.jsx("div", {
                            className: "mb-3 flex h-12 w-12 items-center justify-center rounded bg-brand-yellow text-brand-blue",
                            children: e.jsx(u.icon, {
                                size: 24
                            })
                        }), e.jsx("h3", {
                            className: "font-heading text-lg font-bold text-brand-blue",
                            children: u.title
                        }), e.jsx("p", {
                            className: "mt-1 text-sm text-muted-foreground",
                            children: u.text
                        }), e.jsx("p", {
                            className: "mt-3 text-xs font-semibold uppercase tracking-wide text-brand-blue",
                            children: u.size
                        })]
                    }, u.title))
                })]
            })
        }), e.jsx("section", {
            className: "section-blue diagonal-top py-16",
            children: e.jsxs("div", {
                className: "mx-auto max-w-7xl px-4",
                children: [e.jsx("h2", {
                    className: "text-center font-heading text-3xl font-bold uppercase text-brand-yellow",
                    children: "What Makes the Right Solution"
                }), e.jsx("div", {
                    className: "mt-10 grid gap-6 md:grid-cols-3",
                    children: p.map(u => e.jsxs("div", {
                        className: "rounded bg-white/10 p-5 ring-1 ring-white/10",
                        children: [e.jsx("div", {
                            className: "mb-3 flex h-12 w-12 items-center justify-center rounded bg-brand-yellow text-brand-blue",
                            children: e.jsx(u.icon, {
                                size: 24
                            })
                        }), e.jsx("h3", {
                            className: "font-heading text-lg font-bold uppercase text-brand-yellow",
                            children: u.title
                        }), e.jsx("p", {
                            className: "mt-1 text-sm text-white/70",
                            children: u.text
                        })]
                    }, u.title))
                }), e.jsxs("div", {
                    className: "mt-10 text-center",
                    children: [e.jsx("p", {
                        className: "text-white/70",
                        children: "Need a recommendation? We can help you choose based on household size, refill frequency, and delivery location."
                    }), e.jsxs("div", {
                        className: "mt-6 flex flex-wrap justify-center gap-3",
                        children: [e.jsx(a, {
                            to: "/quote",
                            className: "btn-cta-yellow",
                            children: "Request Advice"
                        }), e.jsx(a, {
                            to: "/contact",
                            className: "btn-cta-white !border-brand-yellow !text-brand-yellow hover:!bg-brand-yellow hover:!text-brand-blue",
                            children: "Contact Sales"
                        })]
                    })]
                })]
            })
        })]
    })
}

export {
    o as component
};
