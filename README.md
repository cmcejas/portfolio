# Portfolio — Carlos Manuel Cejas

Personal site: editorial layout, full-viewport project slides, keyboard navigation, and motion that respects `prefers-reduced-motion`.

**Stack:** React, TypeScript, Vite. Deployed on [Vercel](https://vercel.com) (`framework: vite`, output `dist`).

## Performance

Static client build; lazy-loaded project visuals where applicable. Animations respect `prefers-reduced-motion` so reduced-motion users get a calmer experience.

## Social / Open Graph

`index.html` includes `og:*` and `twitter:*` tags pointing at `https://cmcejas.dev/`. For best link previews on every platform, add a **1200×630** raster (e.g. `public/og.png`) and set `og:image` / `twitter:image` to that file’s absolute URL.
