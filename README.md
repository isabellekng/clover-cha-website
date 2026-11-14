# Clover & Cha

A calm editorial tea accessories affiliate site with a home page, story, filterable product shelf, contact page, privacy policy, and affiliate disclosure. Built with React 19, TypeScript, TanStack Start, and CSS, hosted on Netlify. The site has no cart, payments, accounts, or application database.

## Local development

Use Node 22.13+ or Node 24 and pnpm. Run `pnpm install`, then `netlify dev --port 8889`. Netlify's development server provides the Image CDN used for the hero image.

## Editing the collection

Update the product array in `src/components/TeaSite.tsx`. The reusable ProductCard renders a sample illustration, honest take, intended audience, price note, and external Amazon link. The initial links are Amazon searches without affiliate tracking. Replace them with verified individual product URLs and your affiliate tag when ready, and revise the sample labels and testing statements accurately. Keep the disclosure above all pages containing product links.

Replace the example email in the contact page before using it for correspondence. Review the privacy policy when adding analytics or other services. Category art lives in `public/img`; the hero is an AI-generated lifestyle image, not a photograph of a specific product. Netlify Image CDN serves its resized version.
