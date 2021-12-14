import React, { useState } from 'react';
import logo from 'assets/images/shared/audiophile-logo.svg';
import cart from 'assets/images/shared/icon-cart.svg';
import hamburger from 'assets/images/shared/tablet/icon-hamburger.svg';
import close from 'assets/images/shared/tablet/icon-close-menu.svg';
import { Menu, StyledLink, Wrapper } from './Nav.styles';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Wrapper>
      <Menu isOpen={isOpen}>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/headphones">Headphones</StyledLink>
        <StyledLink to="/speakers">Speakers</StyledLink>
        <StyledLink to="/earphones">Earphones</StyledLink>
      </Menu>
      <img src={isOpen ? close : hamburger} alt="" onClick={() => setIsOpen((prevState) => !prevState)} />
      <img src={logo} alt="audiophile" />
      <img src={cart} alt="cart" />
    </Wrapper>
  );
};

export default Nav;
