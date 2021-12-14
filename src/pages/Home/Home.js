import React from 'react';
import Header from 'components/molecules/Header/Header';
import FeaturedProducts from 'components/molecules/FeaturedProducts/FeaturedProducts';
import Cards from 'components/molecules/Cards/Cards';
import InfoSection from 'components/molecules/InfoSection/InfoSection';

const Home = () => {
  return (
    <div>
      <Header />
      <FeaturedProducts />
      <Cards />
      <InfoSection />
    </div>
  );
};

export default Home;
