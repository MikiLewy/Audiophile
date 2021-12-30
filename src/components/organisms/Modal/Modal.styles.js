import styled from 'styled-components';
import { queries } from 'helpers/mediaQueries';
import { Button } from 'components/atoms/Button/Button';
export const Background = styled.div`
  z-index: 99;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
`;
export const Wrapper = styled.div`
  width: 90%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;

  box-shadow: 0 0 2px ${({ theme }) => theme.colors.lightBlack};
  border-radius: 10px;
  padding: 2rem;
  p {
    font-size: ${({ theme }) => theme.fontSize.xs};
    color: rgba(0, 0, 0, 0.8);
  }
  svg {
    width: 15%;
  }
  @media ${queries.tablet} {
    width: 70%;
  }
  @media ${queries.laptop} {
    width: 50%;
  }
  @media ${queries.desktop} {
    width: 30%;
  }
`;
export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media ${queries.laptop} {
    padding: 2rem;
    gap: 10px;
  }
`;
export const Title = styled.h2`
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSize.m};
  @media ${queries.tablet} {
    font-size: ${({ theme }) => theme.fontSize.l};
  }
`;
export const Description = styled.p`
  width: 30ch;
  @media ${queries.tablet} {
    width: 80%;
  }
`;
export const Info = styled.p`
  text-align: left;
`;

export const CardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const Card = styled.div`
  width: 100%;
  h3 {
    width: 100%;
  }
`;
export const PriceWrapper = styled.div`
  margin-top: 10px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h2 {
    font-size: ${({ theme }) => theme.fontSize.xs};
    text-transform: uppercase;
    @media ${queries.laptop} {
      font-size: ${({ theme }) => theme.fontSize.s};
    }
  }
  p {
    font-size: ${({ theme }) => theme.fontSize.s};
    font-weight: bold;
    color: ${({ theme }) => theme.colors.darkOrange};
    @media ${queries.tablet} {
      font-size: ${({ theme }) => theme.fontSize.m};
    }
  }
`;
export const StyledButton = styled(Button)`
  text-align: center;
  width: 50%;
  margin-bottom: 10px;
  @media ${queries.tablet} {
    margin-top: 20px;
    width: 100%;
  }
  @media ${queries.laptop} {
    margin: 20px 0 0;
  }
`;
