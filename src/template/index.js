import React from 'react';

/* eslint-disable */
// `routeInfo` only available for `build` command
export default ({ Html, Head, Body, children, routeInfo = {} }) => {
  const lang = routeInfo.allProps ? routeInfo.allProps.language : 'en';

  return (
    <Html lang="en">
      <head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </head>

      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,600&display=swap"
          rel="stylesheet"
        />
        <script
          type="text/javascript"
          src="https://cdn.emailjs.com/sdk/2.3.2/email.min.js"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-KDX562S');
        `
          }}
        />
      </Head>
      <Body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KDX562S"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
      </Body>
    </Html>
  );
};
