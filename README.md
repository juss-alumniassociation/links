# JUSSAA Links

A small, no-build link hub for QR codes displayed at alumni events. Uses plain HTML, CSS, a tiny vanilla JavaScript file, and the original JUSSAA logo. No Jekyll, web fonts, trackers, CDNs, frameworks, or embedded social widgets.

## Edit links

Open `index.html` in GitHub's web editor and edit the `href` values or visible labels. The original brand logo is `assets/logo_white_transparent.png`; page colors and layout live in `styles.css`.

The main website link intentionally points to `https://tjssalumni.org/`. That domain can temporarily redirect to the school's alumni page and later redirect to the new association website **without changing this links page or reprinting QR codes**. The Shopify shop may be paused outside event periods.

## Masthead, theme, and footer

The masthead stays fixed and shrinks on scroll; its full-height space is reserved in the page to avoid jumpy transitions. The real logo cross-fades from center to the content's leading edge; it is decorative branding, not a link. A tiny `site.js` handles the scroll state and sets the copyright year. It makes **no network requests**. Without JavaScript, the masthead stays expanded and all links still work.

Light/dark mode automatically follows the visitor's **OS/browser appearance setting** through CSS `prefers-color-scheme`. There is no manual theme switch. Reduced-motion preferences disable transitions. The 4 equal-width stripes represent the school house colours.

## Publish

1. In this repository's **Settings → Pages**, choose **Deploy from a branch**, branch `main`, folder `/(root)`, then Save.
2. Set the Pages custom domain to `links.tjssalumni.org`. For branch publishing, GitHub records this domain in a `CNAME` file on the publishing branch. The tracked `CNAME` file already contains it; keep this file. If configured from the Pages UI without an existing file, GitHub normally adds it automatically.
3. At the DNS provider for `tjssalumni.org`, create a CNAME record `links` pointing to `juss-alumniassociation.github.io` (not a URL with `/links`).
4. When DNS and the certificate are ready, enable **Enforce HTTPS** and confirm `https://links.tjssalumni.org/` works.

No GitHub Actions deployment workflow is needed for this tiny standalone site.

Test the actual site using cellular data before printing QR codes. It is lightweight but still requires an Internet connection. Print the written URL and email on the stand as fallbacks.

External web links open in a new tab, so the link hub remains available. The email link opens the visitor’s email application instead.
