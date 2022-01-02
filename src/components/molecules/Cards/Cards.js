import React from 'react';
import mobileSpeakerZX9 from 'assets/images/home/mobile/image-speaker-zx9.png';
import mobileSpeaker from 'assets/images/home/mobile/image-speaker-zx7.jpg';
import mobileEarphones from 'assets/images/home/mobile/image-earphones-yx1.jpg';
import tabletSpeakerZX9 from 'assets/images/home/tablet/image-speaker-zx9.png';
import tabletSpeaker from 'assets/images/home/tablet/image-speaker-zx7.jpg';
import tabletEarphones from 'assets/images/home/tablet/image-earphones-yx1.jpg';
import desktopSpeakerZX9 from 'assets/images/home/desktop/image-speaker-zx9.png';
import desktopSpeaker from 'assets/images/home/desktop/image-speaker-zx7.jpg';
import desktopEarphones from 'assets/images/home/desktop/image-earphones-yx1.jpg';
import circles from 'assets/images/home/desktop/pattern-circles.svg';
import { Button } from 'components/atoms/Button/Button';
import {
  Container,
  ImageWrapper,
  Wrapper,
  StyledButton,
  SpeakerWrapper,
  ContentWrapper,
  StyledCard,
  StyledInfo,
  CardsWrapper,
  TitleWrapper,
} from './Cards.styles';
import { useWindowSize } from 'hooks/useWindowSize';
import { changePhoto } from 'helpers/changePhoto';
import { Link } from 'react-router-dom';

const Cards = () => {
  const width = useWindowSize();
  return (
    <Container>
      <Wrapper>
        <ImageWrapper>
          <img src={changePhoto(mobileSpeakerZX9, tabletSpeakerZX9, desktopSpeakerZX9, width)} alt="speaker" />
          <img src={circles} alt="circles" />
        </ImageWrapper>
        <TitleWrapper>
          <h4>ZX9 Speaker</h4>
          <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
          <StyledButton as={Link} to="/speakers/90353940" color="black">
            See product
          </StyledButton>
        </TitleWrapper>
      </Wrapper>
      <SpeakerWrapper>
        <img src={changePhoto(mobileSpeaker, tabletSpeaker, desktopSpeaker, width)} alt="" />
        <ContentWrapper>
          <h4>ZX7 Speaker</h4>
          <Button as={Link} to="/speakers/90335480" color="transparent">
            See product
          </Button>
        </ContentWrapper>
      </SpeakerWrapper>
      <CardsWrapper>
        <StyledCard>
          <img src={changePhoto(mobileEarphones, tabletEarphones, desktopEarphones, width)} alt="earphones" />
        </StyledCard>
        <StyledInfo>
          <h4>YX1 earphones</h4>
          <Button as={Link} to="/earphones/90353977" color="transparent">
            See product
          </Button>
        </StyledInfo>
      </CardsWrapper>
    </Container>
  );
};

Cards.propTypes = {};

export default Cards;
