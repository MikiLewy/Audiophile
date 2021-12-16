import styled from 'styled-components';
import mobileHeadphones from 'assets/images/home/mobile/image-header.png';
import tabletHeadphones from 'assets/images/home/tablet/image-header.png';
import desktopHeadphones from 'assets/images/home/desktop/image-hero.png';
import { queries } from 'helpers/mediaQueries';

export const Wrapper = styled.header`
  height: 70vh;
  background-color: #121212;
  position: relative;
  z-index: 1;

  @media ${queries.tablet} {
    height: 80vh;
  }
  @media ${queries.desktop} {
    overflow-x: hidden;
    height: 95vh;
  }
`;
export const Background = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-image: url(${mobileHeadphones});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  @media ${queries.tablet} {
    background-image: url(${tabletHeadphones});
  }
  @media ${queries.laptop} {
    background-image: url(${desktopHeadphones});
    background-size: cover;
    margin-left: 100px;
  }
  @media ${queries.laptop} {
    background-image: url(${desktopHeadphones});
    background-size: cover;
    margin-left: 50px;
  }
`;
export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  justify-content: center;
  position: relative;
  z-index: 1;
  text-align: center;
  color: ${({ theme }) => theme.colors.lightWhite};
  gap: 15px;
  @media ${queries.biggerPhone} {
    gap: 25px;
  }
  @media ${queries.tablet} {
    gap: 20px;
  }
  @media ${queries.laptop} {
    text-align: left;
    align-items: flex-start;
    padding: 7rem;
  }
  @media ${queries.desktop} {
    padding: 10rem;
  }

  h1 {
    text-transform: uppercase;
    letter-spacing: 2px;
    line-height: 120%;
    @media ${queries.biggerPhone} {
      font-size: ${({ theme }) => theme.fontSize.xl};
      width: 80%;
    }
    @media ${queries.tablet} {
      font-size: ${({ theme }) => theme.fontSize.xxl};
      width: 70%;
    }
    @media ${queries.desktop} {
      width: 50%;
    }
  }
  p {
    color: ${({ theme }) => theme.colors.grey};
  }
  p:first-child {
    margin-top: 30px;
    text-transform: uppercase;
    letter-spacing: 6px;
    font-size: ${({ theme }) => theme.fontSize.s};
    font-weight: lighter;
    @media ${queries.tablet} {
      font-size: ${({ theme }) => theme.fontSize.s};
    }
    @media ${queries.laptop} {
      letter-spacing: 10px;
    }
  }
`;

export const Description = styled.p`
  padding: 0 2rem;
  color: ${({ theme }) => theme.colors.lightGrey};
  font-size: ${({ theme }) => theme.fontSize.xs};
  line-height: 160%;
  @media ${queries.biggerPhone} {
    width: 70%;
  }
  @media ${queries.tablet} {
    font-size: ${({ theme }) => theme.fontSize.m};
    width: 60%;
    margin-bottom: 20px;
  }
  @media ${queries.laptop} {
    text-align: left;
    padding: 0;
    width: 40%;
  }
  @media ${queries.desktop} {
    width: 30%;
  }
`;
