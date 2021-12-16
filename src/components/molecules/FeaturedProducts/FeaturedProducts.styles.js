import { Card } from 'components/atoms/Card/Card';
import styled from 'styled-components';
import { queries } from 'helpers/mediaQueries';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  gap: 80px 0;
  @media ${queries.tablet} {
    width: 90%;
    flex-direction: row;
    gap: 10px;
    justify-content: space-around;
    margin: 100px auto;
  }
  @media ${queries.laptop} {
    gap: 20px;
    width: 100%;
    padding: 0 7rem;
  }
  @media ${queries.desktop} {
    padding: 0 10rem;
  }
`;

export const FeaturedItem = styled(Card)`
  @media ${queries.tablet} {
    width: 33%;
  }
  @media ${queries.laptop} {
    height: 175px;
  }
  img:last-child {
    width: 10px;
  }
  h4 {
    text-transform: uppercase;
    letter-spacing: 1px;
    color: ${({ theme }) => theme.colors.black};
    font-size: ${({ theme }) => theme.fontSize.s};
  }
  div:last-child {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;
    p {
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors.darkGrey};
      font-weight: bold;
      font-size: ${({ theme }) => theme.fontSize.xs};
    }
  }
`;
export const ImageWrapper = styled.div`
  position: absolute;
  top: -40%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
  @media ${queries.laptop} {
    top: -35%;
  }
  img {
    width: 70%;
    object-fit: cover;
    @media ${queries.laptop} {
      width: 90%;
    }
  }
  img:last-child {
    position: absolute;
    top: 80%;
    width: 100%;
    z-index: 2;
    @media ${queries.laptop} {
      top: 70%;
    }
  }
`;
