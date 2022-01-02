import { queries } from 'helpers/mediaQueries';
import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 50px auto 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  @media ${queries.tablet} {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 70px auto;
  }
`;
export const Title = styled.h2`
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSize.m};
  @media ${queries.tablet} {
    font-size: ${({ theme }) => theme.fontSize.l};
    width: 100%;
  }
`;
export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  @media ${queries.tablet} {
    width: 30%;
  }
`;
export const ImageWrapper = styled.div`
  width: 100%;
  img {
    width: 100%;
    border-radius: 10px;
  }
  @media ${queries.tablet} {
    img {
      height: 200px;
      object-fit: cover;
    }
  }
  @media ${queries.laptop} {
    img {
      height: auto;
    }
  }
`;
