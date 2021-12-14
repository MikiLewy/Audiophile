import React from 'react';
import speakerZX9 from 'assets/images/home/mobile/image-speaker-zx9.png';
import circles from 'assets/images/home/desktop/pattern-circles.svg';
import { Button } from 'components/atoms/Button/Button';
import { ImageWrapper, Wrapper, StyledButton, SpeakerWrapper, ContentWrapper, StyledCard, StyledInfo } from './Cards.styles';
import speaker from 'assets/images/home/mobile/image-speaker-zx7.jpg';
import earphones from 'assets/images/home/mobile/image-earphones-yx1.jpg';
import { Card } from 'components/atoms/Card/Card';

const Cards = () => {
  return (
    <>
      <Wrapper>
        <ImageWrapper>
          <img src={speakerZX9} alt="speaker" />
          <img src={circles} alt="circles" />
        </ImageWrapper>
        <h4>ZX9 Speaker</h4>
        <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
        <StyledButton color="black">See product</StyledButton>
      </Wrapper>
      <SpeakerWrapper>
        <img src={speaker} alt="" />
        <ContentWrapper>
          <h4>ZX7 Speaker</h4>
          <Button color="transparent">See product</Button>
        </ContentWrapper>
      </SpeakerWrapper>
      <StyledCard>
        <img src={earphones} alt="earphones" />
      </StyledCard>
      <StyledInfo>
        <h4>YX1 earphones</h4>
        <Button color="transparent">See product</Button>
      </StyledInfo>
    </>
  );
};

Cards.propTypes = {};

export default Cards;
