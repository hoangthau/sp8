import React from 'react';

import { Head, withRouteData } from 'react-static';

import Home from 'components/Home';

const HomePage = ({ language }) => {
  return (
    <React.Fragment>
      <Head>
        <title>SP8</title>
        <meta name="description" content="SP8" />
        <meta name="author" content="Quoine" />
        <meta name="robots" content="all" />

        {/* Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="600" />
        <meta property="og:image:height" content="315" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@QuoineGlobal" />
        <meta name="twitter:creator" content="@QuoineGlobal" />

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
      </Head>
      <Home language={language} />
    </React.Fragment>
  );
};

export default withRouteData(HomePage);
