# HmnDev-Tech.github.io

Two Next.js static sites in one repo, deployed together to GitHub Pages.

| Folder | URL | What |
| --- | --- | --- |
| [`profile/`](profile) | https://hmndev-tech.github.io/ | Main profile site (hamondev / HmnDev-Tech) |
| [`shevery/`](shevery) | https://hmndev-tech.github.io/shevery/ | Shevery landing page (built with `BASE_PATH=/shevery`) |

```
cd profile && pnpm install && pnpm dev
cd shevery && pnpm install && pnpm dev
```

`.github/workflows/pages.yml` builds both and assembles them into one artifact on every push to `main`.
