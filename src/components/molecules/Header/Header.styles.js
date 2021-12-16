import styled from 'styled-components';
import mobileHeadphones from 'assets/images/home/mobile/image-header.png';
import tabletHeadphones from 'assets/images/home/tablet/image-header.png';
import { queries } from 'helpers/mediaQueries';

export const Wrapper = styled.header`
  height: 70vh;
  background-color: ${({ theme }) => theme.colors.lightBlack};
  position: relative;
  z-index: 1;
  @media ${queries.tablet} {
    height: 80vh;
  }
`;
export const Background = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-image: url(${mobileHeadphones});
  background-position: center;
  background-size: cover;
  @media ${queries.tablet} {
    background-image: url(${tabletHeadphones});
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
  @media ${queries.tablet} {
    gap: 20px;
  }

  h1 {
    text-transform: uppercase;
    letter-spacing: 2px;
    line-height: 120%;
    @media ${queries.tablet} {
      font-size: ${({ theme }) => theme.fontSize.xxl};
      width: 70%;
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
      font-size: ${({ theme }) => theme.fontSize.m};
    }
  }
`;

export const Description = styled.p`
  padding: 0 2rem;
  color: ${({ theme }) => theme.colors.lightGrey};
  font-size: ${({ theme }) => theme.fontSize.xs};
  line-height: 160%;
  @media ${queries.tablet} {
    font-size: ${({ theme }) => theme.fontSize.m};
    width: 60%;
    margin-bottom: 20px;
  }
`;
