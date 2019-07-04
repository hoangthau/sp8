import React from 'react';

import { Head, withRouteData } from 'react-static';

import Home from 'components/Home';

const HomePage = ({ language }) => {
  return (
    <React.Fragment>
      <Head>
        <title>The mono-working space | SP8</title>
        <meta name="description" content="The mono-working space | SP8" />
        <meta name="author" content="SP8" />
        <meta name="robots" content="all" />

        {/* Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="600" />
        <meta property="og:image:height" content="315" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@SP8eGlobal" />
        <meta name="twitter:creator" content="@SP8Global" />
      </Head>
      <Home language={language} />
    </React.Fragment>
  );
};

export default withRouteData(HomePage);
