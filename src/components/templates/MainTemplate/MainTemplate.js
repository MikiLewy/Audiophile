import Footer from 'components/organisms/Footer/Footer';
import Nav from 'components/organisms/Nav/Nav';
import React from 'react';

const MainTemplate = ({ children }) => {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
};

export default MainTemplate;
