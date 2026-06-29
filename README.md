# washuemsim.org — unified hub

The front door for **WashU Emergency Medicine Simulation**. A small static
[Astro](https://astro.build) site that routes visitors to the program's two
applications, each of which lives in its own repo and on its own subdomain:

| URL | App | Repo |
|-----|-----|------|
| `washuemsim.org` (+ `www`) | **This hub** | `salthepal/washuemsim-hub` |
| `edu.washuemsim.org` | Simulation Education portal | `salthepal/washu-sim-edu` |
| `intel.washuemsim.org` | Sim Intelligence (LST/safety) | `salthepal/WashUSimIntelligence` |

The hub only links out — it shares no backend with the apps and holds no
secrets. Branding (design tokens, type, layout) mirrors the Education portal so
the three properties read as one program.

`edu.washuemsim.org` and `intel.washuemsim.org` are protected by Cloudflare
Access. The hub itself stays public at the apex and `www` hostnames.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output to ./dist
npm run preview  # serve the built site
```

## Deploy

Deployed as a static-assets Cloudflare Worker. The apex and `www` are attached
as custom domains in [wrangler.jsonc](wrangler.jsonc), `workers.dev` is disabled,
and security headers are served from [public/_headers](public/_headers).

```bash
npm run deploy   # astro build && wrangler deploy
```

Requires `wrangler` authenticated to the Cloudflare account that owns the
`washuemsim.org` zone.
