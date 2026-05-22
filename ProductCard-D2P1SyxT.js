import {
    c as l,
    j as e,
    m as r,
    g as n
} from "./index-DEBxCozj.js";
import {
    t as i
} from "./tank-product-hAiUylBt.js";
const o = [
        ["path", {
            d: "M20 6 9 17l-5-5",
            key: "1gmf2c"
        }]
    ],
    c = l("check", o);

function m({
    product: t,
    getQuoteLink: a = n
}) {
    const s = t.image || i;
    return e.jsxs("div", {
        className: "relative flex flex-col overflow-hidden rounded-md border-2 border-[#d7dce3] bg-card shadow-sm transition-shadow hover:shadow-lg",
        children: [t.badge && e.jsx("span", {
            className: "badge-yellow absolute right-4 top-4 z-10",
            children: t.badge
        }), e.jsx("div", {
            className: "flex min-h-[16rem] items-center justify-center bg-[#eef1f5] px-6 py-8",
            children: e.jsx("img", {
                src: s,
                alt: `${t.litres}L KENTANK`,
                className: "h-44 w-auto object-contain md:h-48"
            })
        }), e.jsxs("div", {
            className: "flex flex-1 flex-col px-6 pb-6 pt-5",
            children: [e.jsxs("h3", {
                className: "font-heading text-[2rem] font-bold leading-none text-brand-blue",
                children: [t.litres.toLocaleString(), "L"]
            }), e.jsx("p", {
                className: "mt-1 text-base text-muted-foreground",
                children: t.use
            }), e.jsxs("p", {
                className: "mt-3 font-heading text-2xl font-bold text-brand-blue",
                children: ["Ksh ", t.priceKsh.toLocaleString()]
            }), e.jsx("ul", {
                className: "mt-4 flex flex-col gap-2",
                children: t.benefits.map(s => e.jsxs("li", {
                    className: "flex items-start gap-2 text-sm text-muted-foreground",
                    children: [e.jsx(c, {
                        size: 16,
                        className: "mt-0.5 shrink-0 text-green-600"
                    }), " ", s]
                }, s))
            }), e.jsx("a", {
                href: a(`${t.litres}L`),
                target: "_blank",
                rel: "noopener noreferrer",
                className: "btn-cta-yellow mt-5 block w-full border-2 border-black text-center text-base font-heading uppercase tracking-wide",
                children: "Get Quote"
            })]
        })]
    })
}
export {
    m as P
};
