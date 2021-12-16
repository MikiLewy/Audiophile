import styled from 'styled-components';
import { queries } from 'helpers/mediaQueries';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  gap: 25px;
  margin: 70px auto;

  text-align: center;
  img {
    border-radius: 10px;
    @media ${queries.tablet} {
      height: 300px;
      object-fit: cover;
    }
  }
  h3 {
    font-size: ${({ theme }) => theme.fontSize.l};
    padding: 0.5rem;
    line-height: 110%;
    text-transform: uppercase;
    letter-spacing: 1px;
    @media ${queries.tablet} {
      font-size: ${({ theme }) => theme.fontSize.xl};
      width: 75%;
      margin: 20px auto 10px;
    }
    span {
      color: ${({ theme }) => theme.colors.darkOrange};
    }
  }
  p {
    color: ${({ theme }) => theme.colors.darkGrey};
    @media ${queries.tablet} {
      font-size: ${({ theme }) => theme.fontSize.m};
      width: 90%;
      margin: 0 auto;
    }
  }
`;
