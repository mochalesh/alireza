/**
 * CloudFront Function — viewer request.
 *
 * The build emits flat files: /pricing.html, /ar.html, /ar/blog.html. Every
 * link, canonical tag and sitemap entry points at the extensionless form
 * (/pricing). Cloudflare Pages and Netlify resolve that on their own;
 * CloudFront does not, so without this function every page but the home page
 * is a 404.
 *
 * Written to the conservative end of the CloudFront Functions runtime —
 * charAt and indexOf rather than endsWith — so it runs on either JS runtime
 * version without surprises.
 *
 * Attach to the default cache behaviour, event type: viewer request.
 */
function handler(event) {
  var request = event.request;
  var uri = request.uri;

  /* /index.html is a second address for the home page. One canonical URL. */
  if (uri === '/index.html') {
    return redirect('/');
  }

  /* Trailing slash likewise. A link someone pastes with a slash should not
     become a second URL for Google to index. */
  if (uri.length > 1 && uri.charAt(uri.length - 1) === '/') {
    return redirect(uri.substring(0, uri.length - 1));
  }

  if (uri === '/') {
    request.uri = '/index.html';
    return request;
  }

  /* Anything without a file extension in its last segment is a page.
     /pricing -> /pricing.html, /ar/for/plumbing -> /ar/for/plumbing.html.
     /_astro/index.abc123.css already has one and is left alone. */
  var last = uri.substring(uri.lastIndexOf('/') + 1);
  if (last.indexOf('.') === -1) {
    request.uri = uri + '.html';
  }

  return request;
}

function redirect(location) {
  return {
    statusCode: 301,
    statusDescription: 'Moved Permanently',
    headers: { location: { value: location } },
  };
}
