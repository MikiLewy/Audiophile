import React, { useState } from 'react';
import logo from 'assets/images/shared/audiophile-logo.svg';
import hamburger from 'assets/images/shared/tablet/icon-hamburger.svg';
import close from 'assets/images/shared/tablet/icon-close-menu.svg';
import { Menu, StyledLink, Wrapper } from './Nav.styles';
import { useWindowSize } from 'hooks/useWindowSize';
import Cart from 'components/molecules/Cart/Cart';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const width = useWindowSize();
  const closeMenu = () => {
    setIsOpen(false);
  };
  return (
    <Wrapper>
      <Menu isOpen={isOpen}>
        <StyledLink onClick={closeMenu} to="/">
          Home
        </StyledLink>
        <StyledLink onClick={closeMenu} to="/headphones">
          Headphones
        </StyledLink>
        <StyledLink onClick={closeMenu} to="/speakers">
          Speakers
        </StyledLink>
        <StyledLink onClick={closeMenu} to="/earphones">
          Earphones
        </StyledLink>
      </Menu>
      {width > 1200 ? null : <img src={isOpen ? close : hamburger} alt="" onClick={() => setIsOpen((prevState) => !prevState)} />}
      <img src={logo} alt="audiophile" />
      <Cart />
    </Wrapper>
  );
};

export default Nav;
