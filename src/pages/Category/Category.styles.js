import styled from 'styled-components';
import { queries } from 'helpers/mediaQueries';

export const CategoryTitle = styled.h1`
  background-color: ${({ theme }) => theme.colors.lightBlack};
  color: ${({ theme }) => theme.colors.white};
  font-weight: lighter;
  font-size: 22px;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 1px;
  padding: 15px;
  @media ${queries.tablet} {
    padding: 20px;
  }
  @media ${queries.laptop} {
    font-size: ${({ theme }) => theme.fontSize.l};
  }
  @media ${queries.desktop} {
    padding: 25px;
  }
`;
