import React from 'react';
import logo from 'assets/images/shared/audiophile-logo.svg';
import cart from 'assets/images/shared/icon-cart.svg';
import { Wrapper } from './Nav.styles';

const Nav = () => {
  return (
    <Wrapper>
      <div></div>
      <img src={logo} alt="audiophile" />
      <img src={cart} alt="cart" />
    </Wrapper>
  );
};

export default Nav;
