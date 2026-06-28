// Handles all redirects so the Location header is always absolute.
// Cloudflare Pages _redirects strips the domain from same-site destinations,
// which causes GSC redirect validation to fail. This middleware uses
// Response.redirect() which always produces an absolute Location header.

const EXACT = {
  '/pool-dose-calculator': '/tools/',
  '/terms': '/terms-app',
  '/privacy': '/privacy-app',
};

const HTML_RENAMES = {
  '/privacy': '/privacy-app',
  '/terms': '/terms-app',
};

export async function onRequest(context) {
  const url = new URL(context.request.url);
  const path = url.pathname;

  // Exact-match redirects (no .html involved)
  if (EXACT[path]) {
    return Response.redirect(`https://www.poolchemtracker.com${EXACT[path]}`, 301);
  }

  // .html stripping
  if (!path.endsWith('.html')) {
    return context.next();
  }

  let clean = path.slice(0, -5); // remove .html

  // /index.html -> / and /blog/index.html -> /blog/
  if (clean === '/index') {
    clean = '/';
  } else if (clean.endsWith('/index')) {
    clean = clean.slice(0, -'/index'.length) + '/';
  }

  // Renamed paths (e.g. /privacy.html -> /privacy-app)
  if (HTML_RENAMES[clean]) {
    clean = HTML_RENAMES[clean];
  }

  return Response.redirect(`https://www.poolchemtracker.com${clean}`, 301);
}
