import React from 'react';

import { Head, withRouteData } from 'react-static';

import Home from 'components/Home';

const HomePage = ({ language }) => {
  return (
    <React.Fragment>
      <Head>
        <title>{language === 'ru'? 'Russian': 'English'}</title>
        <meta name="description" content="aaa" />
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
      </Head>
      <Home />
    </React.Fragment>
  );
};

export default withRouteData(HomePage);