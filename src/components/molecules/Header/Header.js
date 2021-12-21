import React from 'react';
import { Background, ContentWrapper, Description, Wrapper } from './Header.styles';
import { Button } from 'components/atoms/Button/Button';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Wrapper>
      <Background></Background>
      <ContentWrapper>
        <p>New product</p>
        <h1>xx99 MARK II HEADPHONE</h1>
        <Description>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</Description>
        <Button as={Link} to={`/headphones/xx99-mark-ii`}>
          See product
        </Button>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Header;
