import styled from 'styled-components';
import { queries } from 'helpers/mediaQueries';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  gap: 25px;
  margin: 70px auto;
  @media ${queries.laptop} {
    width: 100%;
    padding: 0 7rem;
    flex-direction: row;
    gap: 40px;
  }
  @media ${queries.desktop} {
    padding: 0 10rem;
    justify-content: space-between;
    width: 100%;
  }

  img {
    border-radius: 10px;
    @media ${queries.tablet} {
      height: 300px;
      object-fit: cover;
    }
    @media ${queries.laptop} {
      height: auto;
      order: 1;
      width: 50%;
    }
  }
  div {
    text-align: center;
    @media ${queries.laptop} {
      width: 50%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      text-align: left;
      gap: 20px;
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
    @media ${queries.laptop} {
      margin: 0;
      width: 85%;
      padding: 0;
    }
    @media ${queries.desktop} {
      font-size: ${({ theme }) => theme.fontSize.xl};
      width: 70%;
    }

    span {
      color: ${({ theme }) => theme.colors.darkOrange};
    }
  }
  p {
    color: ${({ theme }) => theme.colors.darkGrey};
    @media ${queries.biggerPhone} {
      margin: 0 auto;
      max-width: 80%;
    }
    @media ${queries.tablet} {
      font-size: ${({ theme }) => theme.fontSize.m};
      width: 90%;
      margin: 0 auto;
    }
    @media ${queries.laptop} {
      margin: 0;
      width: 85%;
    }
    @media ${queries.desktop} {
      width: 75%;
      line-height: 160%;
    }
  }
`;
