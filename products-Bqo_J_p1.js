const i = [{
        litres: 1e3,
        priceKsh: 4500,
        use: "Small Households",
        benefits: ["Compact design", "Easy installation", "Ideal for single-family homes"]
    }, {
        litres: 2e3,
        priceKsh: 10500,
        use: "Family Homes",
        benefits: ["Popular choice", "Fits most compounds", "Great for 5-8 people"],
        badge: "Popular"
    }, {
        litres: 3e3,
        priceKsh: 12500,
        use: "Large Families",
        benefits: ["Extended water supply", "Low maintenance", "UV-resistant material"]
    }, {
        litres: 4e3,
        priceKsh: 14500,
        use: "Rental Properties",
        benefits: ["Serves multiple units", "Durable multi-rib design", "Long lifespan"]
    }, {
        litres: 5e3,
        priceKsh: 16500,
        use: "Small Businesses",
        benefits: ["Reliable daily supply", "Heavy-duty construction", "Weather-resistant"],
        badge: "Best Value"
    }, {
        litres: 6e3,
        priceKsh: 19500,
        use: "Commercial Use",
        benefits: ["High-volume storage", "Stable base design", "Chemical-free liner"]
    }, {
        litres: 8e3,
        priceKsh: 24500,
        use: "Schools & Institutions",
        benefits: ["Large community supply", "Industrial-grade", "Low evaporation"]
    }, {
        litres: 1e4,
        priceKsh: 32500,
        use: "Farms & Agriculture",
        benefits: ["Irrigation ready", "Livestock water supply", "Rugged outdoor tank"],
        badge: "Farm Favourite"
    }, {
        litres: 16e3,
        priceKsh: 88500,
        use: "Large Farms & Industry",
        benefits: ["Massive reserve", "Industrial-grade walls", "Minimal footprint"]
    }, {
        litres: 2e4,
        priceKsh: 137500,
        use: "Industrial & Estate",
        benefits: ["Estate-level supply", "Backed by warranty", "Fire reserve capable"]
    }, {
        litres: 24e3,
        priceKsh: 162500,
        use: "Industrial / Government",
        benefits: ["Maximum capacity", "Heavy-duty ribbed walls", "Long-term investment"]
    }],
    t = ["All", "Household", "Rentals", "Business", "Farms", "Institutions", "Industrial"];

function r(s) {
    const e = s.use.toLowerCase();
    return e.includes("household") || e.includes("family") || e.includes("home") ? "Household" : e.includes("rental") ? "Rentals" : e.includes("business") || e.includes("commercial") ? "Business" : e.includes("farm") || e.includes("agriculture") ? "Farms" : e.includes("school") || e.includes("institution") ? "Institutions" : e.includes("industrial") || e.includes("estate") || e.includes("government") ? "Industrial" : "Household"
}
export {
    t as c, r as g, i as p
};
