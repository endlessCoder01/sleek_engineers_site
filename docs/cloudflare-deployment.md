# Deploy Sleek Engineering to Cloudflare Pages

Primary website: **https://sleekengineering.co.zw**

This repository is a Next.js static website, not a Vite application. The older
downloaded Cloudflare configuration package's `React (Vite)` preset and `dist`
directory do not apply to this source.

## Production build

```sh
npm ci
npm run build
```

The deployable website is generated in `out/`. The configuration disables
Next.js server image optimization so the transparent logo is served directly
on Cloudflare Pages. Webpack is used for production builds; local development
continues to use Turbopack. `.node-version` pins Node.js 24.21.0 to match the
installed local version.

## Git-connected deployment

In Cloudflare, open **Workers & Pages > Create application > Pages > Import an
existing Git repository**. Select `endlessCoder01/sleek_engineers_site` and use:

| Setting | Value |
| --- | --- |
| Project name | `sleekengineering`, if available |
| Production branch | `main` |
| Framework preset | Next.js (Static HTML Export) |
| Root directory | Repository root; leave blank |
| Build command | `npm run build` |
| Build output directory | `out` |
| Node.js | Read from `.node-version` |

Commit and push the deployment changes before building from GitHub. Select
**Save and Deploy**, then test the exact `*.pages.dev` address Cloudflare returns,
including `/about`, `/services`, `/work`, and `/contact`.

If a Pages project already exists, update its settings rather than creating a
duplicate. If its name differs, update `name` in `wrangler.jsonc` to match it.

## Alternative: deploy the local build

After authenticating to the intended Cloudflare account:

```sh
npx wrangler@4 login
npx wrangler@4 pages project list
```

For an existing project, use its actual name in the deploy command. If creating
a new Direct Upload project is the desired workflow:

```sh
npx wrangler@4 pages project create sleekengineering --production-branch main
npx wrangler@4 pages deploy out --project-name sleekengineering --branch main
```

A Direct Upload project cannot later be converted to a Git-connected project;
use the Git-connected workflow above for automatic deployments from GitHub.
You can also upload the contents of `out/` as a folder or ZIP in the dashboard
when creating a Direct Upload project. Upload the built files, not the source
repository or `.next/` directory.

## Connect sleekengineering.co.zw

The domain has been added to Cloudflare and is awaiting nameserver activation.

1. Open the domain's **Overview** in the intended Cloudflare account. Copy the
   exact two assigned nameservers. If the registrar already uses those values,
   use Cloudflare's nameserver check and allow the change to propagate.
2. If they differ, update the domain's nameservers at its registrar to that
   exact assigned pair. Preserve the existing DNS records needed for email and
   other services when moving DNS to this zone.
3. Once the zone is **Active**, open the deployed **Pages project > Custom
   domains > Set up a domain** and enter `sleekengineering.co.zw`.
4. Let Pages create the website DNS record and finish HTTPS certificate
   activation. Use the Pages-assigned target; do not invent an IP address or
   `pages.dev` hostname.
5. If `www.sleekengineering.co.zw` should also serve the website, attach it through
   the same Custom domains workflow. Keep `sleekengineering.co.zw` as the
   primary public address.
6. Verify HTTPS, all five pages, the logo, and the email links on the custom
   domain after activation.

The metadata already uses `https://sleekengineering.co.zw`. Mail links and form
recipients use `info@sleekengineering.co.zw`. Deploying the website does not
create that mailbox or configure email forwarding; the forms currently open
the visitor's email app.

## Google Search after deployment

The build includes `robots.txt`, a sitemap with all five public pages, unique
canonical URLs, page-specific sharing metadata, and homepage `WebSite` and
`Organization` structured data. The preferred site name is **Sleek Engineering**,
with **SleekEngineering** as an alternate spelling. These help search engines
understand the business; they do not guarantee indexing or a first-place rank.

1. Deploy the updated `out/` directory and confirm the custom domain works over
   HTTPS. Open `https://sleekengineering.co.zw/robots.txt` and
   `https://sleekengineering.co.zw/sitemap.xml` to check the files are public.
2. Add `sleekengineering.co.zw` as a Domain property in
   [Google Search Console](https://search.google.com/search-console/). Verify
   ownership using the exact DNS TXT value Google supplies in the Cloudflare
   DNS zone. The value must come from your own Google account.
3. Submit `https://sleekengineering.co.zw/sitemap.xml` in the Sitemaps report.
4. Use URL Inspection for `https://sleekengineering.co.zw/`, run a live test,
   and request indexing. Monitor the indexing report and branded queries.
5. Use the same business name and website address on the business's genuine
   profiles and listings so people can identify and link to the official site.

Google decides which pages it indexes and how they rank. Crawling can take days
to weeks; repeatedly requesting indexing does not speed it up. See Google's
[site-name guidance](https://developers.google.com/search/docs/appearance/site-names)
and [recrawl guidance](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl).

## Official references

- [Static Next.js on Pages](https://developers.cloudflare.com/pages/framework-guides/nextjs/deploy-a-static-nextjs-site/)
- [Build settings](https://developers.cloudflare.com/pages/configuration/build-configuration/)
- [Node.js build version](https://developers.cloudflare.com/pages/configuration/build-image/)
- [Custom domains and nameservers](https://developers.cloudflare.com/pages/configuration/custom-domains/)
- [Direct Upload](https://developers.cloudflare.com/pages/get-started/direct-upload/)
