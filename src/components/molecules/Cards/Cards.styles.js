import styled from 'styled-components';
import { Button } from 'components/atoms/Button/Button';
import { Card } from 'components/atoms/Card/Card';
import { queries } from 'helpers/mediaQueries';

export const Container = styled.div`
  @media ${queries.laptop} {
    width: 100%;
    padding: 0 7rem;
  }
  @media ${queries.desktop} {
    padding: 0 10rem;
  }
`;
export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  width: 90%;
  margin: 70px auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.darkOrange};
  @media ${queries.tablet} {
    gap: 20px;
  }
  @media ${queries.laptop} {
    width: 100%;
    height: 500px;
    flex-direction: row;
    gap: 0 30px;
    padding: 0;
    overflow: hidden;
  }
`;

export const ImageWrapper = styled.div`
  margin: 50px auto 20px;
  text-align: center;
  position: relative;
  z-index: 1;

  @media ${queries.laptop} {
    bottom: -15%;
    max-width: 50%;
  }

  img {
    position: relative;
    z-index: 3;
    width: 50%;
    @media ${queries.tablet} {
      font-size: ${({ theme }) => theme.fontSize.xxl};
      width: 60%;
    }
    @media ${queries.laptop} {
      width: 60%;
    }
  }
  img:last-child {
    position: absolute;
    top: 45%;
    left: 50%;
    width: 100%;
    transform: translate(-50%, -50%);
    z-index: 2;
  }
`;
export const StyledButton = styled(Button)`
  margin-bottom: 25px;
`;
export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  gap: 20px;
  @media ${queries.tablet} {
    gap: 25px;
  }
  @media ${queries.laptop} {
    align-items: flex-start;
  }
  h4 {
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSize.xl};
    text-transform: uppercase;
    font-weight: 400;
    width: 50%;
    text-align: center;
    line-height: 110%;

    @media ${queries.tablet} {
      font-size: ${({ theme }) => theme.fontSize.xxl};
      width: 40%;
    }
    @media ${queries.laptop} {
      text-align: left;
    }
  }
  p {
    color: rgba(255, 255, 255, 0.7);
    text-align: center;
    width: 90%;
    @media ${queries.biggerPhone} {
      width: 80%;
    }
    @media ${queries.tablet} {
      font-size: ${({ theme }) => theme.fontSize.m};
      width: 60%;
    }
    @media ${queries.laptop} {
      text-align: left;
    }
  }
`;
export const SpeakerWrapper = styled.div`
  height: 300px;
  padding: 1rem;
  width: 90%;
  margin: 0 auto 20px;
  border-radius: 10px;
  background-color: #e7e7e7;
  position: relative;
  @media ${queries.biggerPhone} {
    padding: 1rem 2rem;
  }
  @media ${queries.tablet} {
    font-size: ${({ theme }) => theme.fontSize.l};
  }
  @media ${queries.laptop} {
    width: 100%;
    padding: 2rem 4rem;
  }
  img {
    border-radius: 10px;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
    object-fit: cover;
  }
`;
export const ContentWrapper = styled.div`
  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  height: 100%;
  @media ${queries.tablet} {
    gap: 30px;
  }
  h4 {
    font-size: ${({ theme }) => theme.fontSize.l};
    text-transform: uppercase;
    letter-spacing: 2px;
    @media ${queries.laptop} {
      font-size: ${({ theme }) => theme.fontSize.l};
    }
  }
`;
export const CardsWrapper = styled.div`
  @media ${queries.tablet} {
    margin: 50px auto;
    width: 90%;
    display: flex;
    gap: 20px;
    align-items: center;
    height: 300px;
  }
  @media ${queries.laptop} {
    width: 100%;
  }
`;
export const StyledCard = styled(Card)`
  position: relative;
  margin: 20px auto;
  border-radius: 10px;
  overflow: hidden;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media ${queries.tablet} {
    height: 100%;
  }
`;
export const StyledInfo = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  padding: 1rem;
  margin: 20px auto;
  h4 {
    font-size: ${({ theme }) => theme.fontSize.l};
    text-transform: uppercase;
    letter-spacing: 2px;
  }
  @media ${queries.biggerPhone} {
    padding: 1rem 2rem;
  }
  @media ${queries.tablet} {
    height: 100%;
  }
  @media ${queries.laptop} {
    padding: 1rem 4rem;
  }
`;
