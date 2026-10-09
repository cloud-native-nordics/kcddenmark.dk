/* eslint-disable react/prop-types, jsx-a11y/html-has-lang */
import React from 'react';

const fontsBasePath = '/fonts';

// TODO: Add paths to fonts that need to be preloaded, need to add only fonts that are being used in header + hero sections
const fontsPaths = ['/plus-jakarta-sans/plus-jakarta-sans-600.woff2'];

const HTML = ({
  htmlAttributes,
  headComponents,
  bodyAttributes,
  preBodyComponents,
  body,
  postBodyComponents,
}) => (
  <html {...htmlAttributes}>
    <head>
      {/* Umami analytics: production-hostname guard — local dev (localhost/
          127.0.0.1/staging) never reports to the kcddenmark.dk production site.
          The inline guard runs during HTML parse, before the async tag fires. */}
      <script
        dangerouslySetInnerHTML={{
          __html:
            '(function(){var H="kcddenmark.dk";if(location.hostname!==H&&location.hostname!=="www."+H){var t=document.querySelector(\'script[data-website-id="1e690a48-4121-4389-8ec0-43c395cc9062"]\');if(t)t.remove();}})();',
        }}
      />
      <script async src="https://umami.robert-jensen.dk/script.js" data-website-id="1e690a48-4121-4389-8ec0-43c395cc9062"></script>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover"
      />
      {fontsPaths.map((fontPath, index) => (
        <link
          rel="preload"
          href={`${fontsBasePath}${fontPath}`}
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
          key={index}
        />
      ))}
      {headComponents}
    </head>
    <body {...bodyAttributes}>
      {preBodyComponents}
      <div key="body" id="___gatsby" dangerouslySetInnerHTML={{ __html: body }} />
      {postBodyComponents}
    </body>
  </html>
);

export default HTML;
