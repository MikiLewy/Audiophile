import { Button } from 'components/atoms/Button/Button';
import styled from 'styled-components';
import { queries } from 'helpers/mediaQueries';

export const Wrapper = styled.div`
  width: 90%;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 20px;
  @media ${queries.biggerPhone} {
    margin: 70px auto;
    gap: 15px;
  }
  @media ${queries.laptop} {
    flex-direction: row;
    padding: 0 7rem;
    gap: 80px;
    width: 100%;
  }
  @media ${queries.desktop} {
    padding: 0 10rem;
    width: 100%;
  }
`;
export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  @media ${queries.tablet} {
    gap: 15px;
  }
  @media ${queries.laptop} {
    width: 50%;
    align-items: flex-start;
    text-align: left;
  }
  @media ${queries.desktop} {
    width: 60%;
    gap: 30px;
  }
  h3 {
    letter-spacing: 6px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.darkOrange};
    font-size: ${({ theme }) => theme.fontSize.xs};
    @media ${queries.desktop} {
      font-size: ${({ theme }) => theme.fontSize.m};
      letter-spacing: 8px;
    }
  }
  h2 {
    font-size: ${({ theme }) => theme.fontSize.l};
    width: 80%;
    line-height: 110%;
    @media ${queries.tablet} {
      font-size: 32px;
    }
    @media ${queries.desktop} {
      font-size: ${({ theme }) => theme.fontSize.xl};
      width: 60%;
    }
  }
  p {
    width: 80%;
    line-height: 160%;
    @media ${queries.tablet} {
      width: 60%;
    }
    @media ${queries.laptop} {
      width: 90%;
    }
    @media ${queries.desktop} {
      font-size: ${({ theme }) => theme.fontSize.m};
      width: 75%;
    }
  }
`;

export const ImageWrapper = styled.div`
  order: -1;
  overflow-x: hidden;
  border-radius: 15px;

  @media ${queries.laptop} {
    width: 50%;
  }
  img {
    width: 90%;
    @media ${queries.biggerPhone} {
      height: 400px;
      object-fit: cover;
      width: 100%;
    }
    @media ${queries.tablet} {
      height: 500px;
    }
    @media ${queries.laptop} {
      height: auto;
      width: 100%;
    }
  }
`;
export const StyledButton = styled(Button)`
  margin-top: 10px;
  text-decoration: none;
`;
