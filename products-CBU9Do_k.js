import {
    j as e,
    L as a,
    k as React
} from "./index-DEBxCozj.js";
import {
    p as t,
    c as n
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
import {
    U as d
} from "./users-D9I6g6sz.js";

const s = [{
        icon: c,
        title: "Durable build",
        text: "Multi-rib tanks designed for long service life."
    }, {
        icon: i,
        title: "Food-grade safe",
        text: "Made for clean storage of potable water."
    }, {
        icon: l,
        title: "Quick delivery",
        text: "We arrange delivery across Kenya."
    }, {
        icon: d,
        title: "Trusted brand",
        text: "A reliable choice for homes and businesses."
    }],
    m = [{
        title: "Homes",
        text: "Affordable, compact tanks for everyday family use.",
        size: "1,000L - 3,000L"
    }, {
        title: "Rentals",
        text: "Reliable water storage for multiple units.",
        size: "4,000L - 6,000L"
    }, {
        title: "Businesses",
        text: "Practical options for shops, offices, and commercial use.",
        size: "5,000L - 10,000L"
    }, {
        title: "Farms",
        text: "Higher capacity tanks for irrigation and livestock.",
        size: "10,000L - 24,000L"
    }];

function p() {
    const u = t.filter(f => f.badge);
    React.useLayoutEffect(() => {
        if (typeof window > "u" || window.location.hash !== "#available-sizes") return;
        const f = document.getElementById("available-sizes");
        f && f.scrollIntoView({
            behavior: "auto",
            block: "start"
        })
    }, []);
    return e.jsxs(e.Fragment, {
        children: [e.jsxs("section", {
            className: "section-yellow relative overflow-hidden",
            children: [e.jsxs("div", {
                className: "mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 py-16 md:flex-row md:py-20",
                children: [e.jsxs("div", {
                    className: "flex-1 text-center md:text-left",
                    children: [e.jsx("p", {
                        className: "font-heading text-sm font-bold uppercase tracking-[0.3em] text-brand-blue/60",
                        children: "Product Range"
                    }), e.jsx("h1", {
                        className: "mt-2 font-heading text-4xl font-bold uppercase leading-tight text-brand-blue md:text-5xl lg:text-6xl",
                        children: "All KENTANK Products"
                    }), e.jsx("p", {
                        className: "mt-4 max-w-xl text-brand-blue/80",
                        children: "Browse the complete range from 1,000L to 24,000L. Every tank is built for safe storage, reliable supply, and quick delivery."
                    }), e.jsxs("div", {
                        className: "mt-6 flex flex-wrap justify-center gap-3 md:justify-start",
                        children: [e.jsx(a, {
                            to: "/pricing",
                            className: "btn-cta-blue",
                            children: "View Pricing"
                        }), e.jsx(a, {
                            to: "/quote",
                            className: "btn-cta-white !border-brand-blue !text-brand-blue hover:!bg-brand-blue hover:!text-brand-yellow",
                            children: "Get a Quote"
                        }), e.jsx("a", {
                            href: "https://wa.me/254785152927?text=Hello%20KENTANK%2C%20I%20would%20like%20to%20know%20more%20about%20your%20products.",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "btn-cta-blue !bg-green-600",
                            children: "WhatsApp Us"
                        })]
                    }), e.jsx("div", {
                        className: "mt-6 flex flex-wrap justify-center gap-2 md:justify-start",
                        children: n.map(f => e.jsx("span", {
                            className: "rounded border border-brand-blue/20 bg-brand-blue/5 px-3 py-1.5 text-xs font-semibold text-brand-blue",
                            children: f
                        }, f))
                    })]
                }), e.jsx("div", {
                    className: "flex-1 flex justify-center",
                    children: e.jsx("img", {
                        src: r,
                        alt: "KENTANK water tank",
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
                children: [e.jsx("h2", {
                    className: "text-center font-heading text-3xl font-bold uppercase text-brand-blue",
                    children: "Why Customers Choose KENTANK"
                }), e.jsx("div", {
                    className: "mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
                    children: s.map(f => e.jsxs("div", {
                        className: "rounded border-2 border-brand-blue/10 bg-card p-5 shadow-sm transition-shadow hover:shadow-md",
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
            id: "available-sizes",
            className: "py-16",
            style: {
                scrollMarginTop: "100px"
            },
            children: e.jsxs("div", {
                className: "mx-auto max-w-7xl px-4",
                children: [e.jsxs("div", {
                    className: "text-center",
                    children: [e.jsx("p", {
                        className: "font-heading text-sm font-bold uppercase tracking-[0.3em] text-brand-blue/60",
                        children: "Complete Tank Range"
                    }), e.jsx("h2", {
                        className: "mt-2 font-heading text-3xl font-bold uppercase text-brand-blue md:text-4xl",
                        children: "Available Sizes"
                    }), e.jsx("p", {
                        className: "mt-2 text-muted-foreground",
                        children: "Each product includes a quote button so customers can request the exact tank they need."
                    })]
                }), e.jsx("div", {
                    className: "mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
                    children: t.map(f => e.jsx(o, {
                        product: f
                    }, f.litres))
                })]
            })
        }), e.jsx("section", {
            className: "section-blue diagonal-top py-16",
            children: e.jsxs("div", {
                className: "mx-auto max-w-7xl px-4",
                children: [e.jsx("h2", {
                    className: "text-center font-heading text-3xl font-bold uppercase text-brand-yellow",
                    children: "Match the Tank to the Job"
                }), e.jsx("div", {
                    className: "mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4",
                    children: m.map(f => e.jsxs("div", {
                        className: "rounded bg-white/10 p-5 ring-1 ring-white/10",
                        children: [e.jsx("h3", {
                            className: "font-heading text-lg font-bold uppercase text-brand-yellow",
                            children: f.title
                        }), e.jsx("p", {
                            className: "mt-2 text-sm text-white/70",
                            children: f.text
                        }), e.jsx("p", {
                            className: "mt-3 text-xs font-semibold uppercase tracking-wide text-brand-yellow/80",
                            children: f.size
                        })]
                    }, f.title))
                }), e.jsxs("div", {
                    className: "mt-10 text-center",
                    children: [e.jsx("p", {
                        className: "text-white/70",
                        children: "Not sure which size to choose? We can help you decide based on your usage and location."
                    }), e.jsxs("div", {
                        className: "mt-6 flex flex-wrap justify-center gap-3",
                        children: [e.jsx(a, {
                            to: "/quote",
                            className: "btn-cta-yellow",
                            children: "Request a Quote"
                        }), e.jsx(a, {
                            to: "/contact",
                            className: "btn-cta-white !border-brand-yellow !text-brand-yellow hover:!bg-brand-yellow hover:!text-brand-blue",
                            children: "Contact Us"
                        })]
                    })]
                })]
            })
        })]
    })
}

export {
    p as component
};
