import React from 'react';
import { Background, ContentWrapper, Description, Wrapper } from './Header.styles';
import { Button } from 'components/atoms/Button/Button';

const Header = () => {
  return (
    <Wrapper>
      <Background></Background>
      <ContentWrapper>
        <p>New product</p>
        <h1>xx99 MARK II HEADPHONE</h1>
        <Description>Experience natural, lifelike audio and exceptional build quality made for the assionate music enthusiast.</Description>
        <Button>See product</Button>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Header;
