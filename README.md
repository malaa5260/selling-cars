# Selling Cars

Initial Angular foundation for a car marketplace, with an Arabic RTL interface.

## Run

Use a compatible Node.js version: ^22.22.3, ^24.15.0, or >=26.0.0.
Validated on Node 26.4.0 and npm 11.17.0.

```powershell
cd D:\React\selling-cars
npm ci
npm start
```

Open http://localhost:4200. Run `npm run build` for production output in
`dist/selling-cars`, and `npm test -- --watch=false` for tests.

## Styling

Tailwind CSS 4.3.3 is integrated through `@tailwindcss/postcss` in
`.postcssrc.json`, following the [official Angular integration guide](https://tailwindcss.com/docs/installation/framework-guides/angular).
`src/styles.css` contains only `@import "tailwindcss";`; Angular includes it
as the global stylesheet. Tailwind detects utility classes in Angular templates,
including inline component templates. No Sass or custom CSS rules are needed.

Write full utility class names directly in templates. Responsive, hover, active
navigation and keyboard-focus states use Tailwind variants. Arbitrary values
preserve the original palette, typography, spacing and 850px/560px breakpoints.
Arabic RTL remains configured on the document. New CLI components default to CSS
with stylesheet generation skipped; put their styling in template utilities.

## Structure

```text
src/app/
  core/                       Future auth and HTTP infrastructure
  shared/ui/                  Generic, domain-independent UI
  layout/                     Navigation shell and not-found page
  features/
    cars/
      search/                 Search page and computed filtering
      details/                Route-driven detail page
      ui/                     Car card with signal inputs/outputs
      data-access/            Car model and in-memory signal store
      cars.routes.ts          Lazy car routes
    sell-car/                 Placeholder for creating listings
    my-listings/              Placeholder for managing listings
    favorites/                Session-only favorites
    account/                  Placeholder for authentication
  app.ts                      Root standalone component
  app.config.ts               Application providers
  app.routes.ts               Lazy feature entry points
```

All components are standalone (the Angular default), use OnPush, and have no
NgModules. Feature-specific code stays in its feature; only generic UI belongs
in shared. Favorites reuse the cars domain store and card.

Search and favorites use signals and computed state. Three clearly marked demo
cars allow navigation and interaction without a backend. Favorites reset on page
reload. No real accounts, listing publishing, seller contact, API or persistence
are implemented. Core is reserved; add auth/http services only when needed.

Angular core 22.1.7 and CLI 22.1.8 were verified as npm's stable latest releases
on 2026-09-21. The lockfile records exact dependencies; use npm ci for reproducible
installs. Official release policy: https://angular.dev/reference/releases

Tests cover filtering, favorites across routes, detail route changes, missing
cars, lazy placeholder pages, and unknown URLs. Production hosting must fall back
to index.html for client-side routes.
