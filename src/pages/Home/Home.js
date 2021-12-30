import React from 'react';
import Header from 'components/molecules/Header/Header';
import FeaturedProducts from 'components/molecules/FeaturedProducts/FeaturedProducts';
import Cards from 'components/molecules/Cards/Cards';
import InfoSection from 'components/molecules/InfoSection/InfoSection';
import styled from 'styled-components';

const Home = () => {
  return (
    <Wrapper>
      <Header />
      <FeaturedProducts />
      <Cards />
      <InfoSection />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  max-width: 100vw;
`;
export default Home;
