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
          charset="UTF-8"
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
      </Head>
      <Body>{children}</Body>
    </Html>
  );
};
