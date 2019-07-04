import React from 'react';

import Header from 'components/Header';
import Amenity from 'components/Home/Amenity';
import Workspace from 'components/Home/Workspace';
import Book from 'components/Home/Book';
import Footer from 'components/Footer';
import Banner from 'components/Pricing/Banner';
import Plans from 'components/Pricing/Plans';

import { set as setLanguage } from 'translate';

const Pricing = ({ language }) => {
  setLanguage(language);
  return (
    <React.Fragment>
      <Header />
      <Banner />
      <Plans />
      <Amenity />
      <Workspace />
      <Book />
      <Footer />
    </React.Fragment>
  );
};

export default Pricing;
