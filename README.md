# Mango Grove

A single-page mango store built with React and Vite for CSC 436 (Project 2: React Fundamentals). Browse eight mango varieties, search, filter, and sort them, build a box, apply a promo code, and place a (pretend) order. The whole page is a function of state: every click updates the cart, totals, and badges instantly.

**Live site:** https://YOUR-SITE-NAME.netlify.app  <!-- replace after deploying -->

## Run locally

Requires [Node.js](https://nodejs.org/) 20 or newer.

```bash
npm install
npm run dev      # start the dev server at http://localhost:5173
npm run build    # production build into dist/
npm run preview  # serve the production build locally
```

Try the promo codes `MANGO10` and `SUMMER15`.

## Project requirements

| Requirement | Where to find it |
| --- | --- |
| Vite + React | `package.json`, `vite.config.js` |
| 5+ components, 2+ using props | `src/components/` (14 components plus `App`; nearly all take props) |
| 3+ independent `useState` | `App.jsx` (cart, drawer open, search, category, sort, gift box, promo, receipt) and `PromoCode.jsx` |
| Lists with stable keys | `ProductGrid`, `CartDrawer`, `CategoryTabs`, `Perks`, `ProductCard` (all keyed by id/value, never index) |
| Conditional rendering | Sold-out cards, "in your box" badges, empty search state, empty cart, free-shipping banner, promo error, order confirmation |
| Controlled inputs | Search box, sort select, gift checkbox, promo code field |
| Lifted state | `query`, `category`, and `sortBy` live in `App` and are shared by `Toolbar` and `ProductGrid`; the cart is shared by `ProductCard`, `Header`, and `CartDrawer` |
| Netlify deploy | `netlify.toml` (build `npm run build`, publish `dist`) |

## Component tree

```
App
├── Header
├── Hero ── MangoImage
├── Toolbar
│   ├── SearchBar
│   └── CategoryTabs
├── ProductGrid
│   └── ProductCard ── MangoImage
├── Perks
├── Footer
└── CartDrawer
    ├── CartLine ── MangoImage
    ├── PromoCode
    └── OrderConfirmation ── MangoImage
```

## Notes

- All mango artwork is drawn as inline SVG in `MangoImage.jsx`, so there are no image files to load and it recolors per variety through props.
- Pricing rules (promo discounts, gift box, free shipping over $40) live in `src/utils/pricing.js`.
- This is a class project: no payment is taken and nothing ships.
