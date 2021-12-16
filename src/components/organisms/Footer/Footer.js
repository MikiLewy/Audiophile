import React from 'react';
import logo from 'assets/images/shared/audiophile-logo.svg';
import facebook from 'assets/images/shared/desktop/icon-facebook.svg';
import instagram from 'assets/images/shared/desktop/icon-instagram.svg';
import twitter from 'assets/images/shared/desktop/icon-twitter.svg';
import { LinksWrapper, Wrapper, StyledLink, SocialWrapper, ContentWrapper } from './Footer.styles';

const Footer = () => {
  return (
    <Wrapper>
      <img src={logo} alt="audiophile" />
      <LinksWrapper>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/headphones">Headphones</StyledLink>
        <StyledLink to="/speakers">Speakers</StyledLink>
        <StyledLink to="/earphones">Earphones</StyledLink>
      </LinksWrapper>
      <p>
        Audiophile is an all in one stopto fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo facility - we're open 7 days a week
      </p>
      <ContentWrapper>
        <p>Copyright 2021. All Rights Reserved</p>
        <SocialWrapper>
          <img src={facebook} alt="facebook" />
          <img src={twitter} alt="twitter" />
          <img src={instagram} alt="instagram" />
        </SocialWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Footer;
