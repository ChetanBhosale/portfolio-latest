# portfolio-latest

Personal portfolio of **Chetan Bhosale**, founding engineer at [Linkrunner](https://www.linkrunner.io).

Plain HTML, CSS and JavaScript. No framework, no build step, no dependencies.

## Files

- `index.html`: the page (content, SEO meta, JSON-LD, inline SVG icons)
- `styles.css`: all styles
- `script.js`: header ticker, Bengaluru clock, scroll reveal, walking mascot
- `image/`, `resume/`, `icon.svg`, `llms.txt`, `robots.txt`, `sitemap.xml`: static assets
- `vercel.json`: static hosting on Vercel, plus `/resume` serving the PDF

## Run locally

```bash
python3 -m http.server 8000
```

Open [http://localhost:8000](http://localhost:8000).

## Deploy

Upload the folder to any static host. On Vercel it deploys as a static site with no build.
For nginx, copy the folder to the web root.
