# portfolio-latest

Personal portfolio of **Chetan Bhosale** ([chetanbhosale.com](https://chetanbhosale.com)), founding engineer at [Linkrunner](https://www.linkrunner.io).

Plain HTML, CSS and JavaScript. No framework, no build step, no dependencies.

## Files

- `index.html`: the page (content, SEO meta, JSON-LD, inline SVG icons)
- `styles.css`: all styles
- `script.js`: header ticker, Bengaluru clock, scroll reveal
- `index.md`, `llms.txt`, `llms-full.txt`: the same content for AI agents and LLMs
- `robots.txt`, `sitemap.xml`, `site.webmanifest`, `404.html`: crawler and browser files
- `image/`, `resume/`, `icon.svg`, `icon-*.png`, `apple-touch-icon.png`: static assets
- `vercel.json`: static hosting on Vercel, plus `/resume` serving the PDF

When you change the page content, update `index.md`, `llms-full.txt` and `llms.txt` too,
and bump `lastmod` in `sitemap.xml` and `dateModified` in the JSON-LD.

## Run locally

```bash
python3 -m http.server 8000
```

Open [http://localhost:8000](http://localhost:8000).

## Deploy

Every push to `main` deploys to the Oracle VM through `.github/workflows/deploy-oracle.yml`
(rsync over SSH, then a smoke test). Files listed in `.deployignore` are not uploaded.
It can also be run by hand from the Actions tab.

Secrets used: `ORACLE_VM_HOST`, `ORACLE_VM_SSH_KEY` (deploy key that can only rsync into
`/var/www/portfolio`), `ORACLE_VM_KNOWN_HOSTS`.

On Vercel it deploys as a static site with no build.
