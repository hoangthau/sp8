import React from 'react';

import Header from 'components/Header';
import Banner from 'components/Home/Banner';
import Innovate from 'components/Home/Innovate';
import Feature from 'components/Home/Feature';
import Amenity from 'components/Home/Amenity';
import Workspace from 'components/Home/Workspace';
import Book from 'components/Home/Book';
import Footer from 'components/Footer';

import { set as setLanguage } from 'translate';

const Home = ({ language }) => {
  setLanguage(language);
  return (
    <React.Fragment>
      <Header />
      <Banner />
      <Innovate />
      <Feature />
      <Amenity />
      <Workspace />
      <Book />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
