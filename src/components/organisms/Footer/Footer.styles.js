import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { queries } from 'helpers/mediaQueries';

export const Wrapper = styled.footer`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.darkBlack};
  color: ${({ theme }) => theme.colors.darkGrey};
  padding: 2rem;
  gap: 30px;
  text-align: center;
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 3px;
    width: 25%;
    background-color: ${({ theme }) => theme.colors.darkOrange};
    @media ${queries.tablet} {
      left: 9%;
      margin-left: 2rem;
      height: 4px;
      width: 15%;
    }
  }
  @media ${queries.tablet} {
    align-items: flex-start;
    padding: 2rem 3rem;
  }
  p:nth-of-type(1) {
    width: 95%;
    font-size: ${({ theme }) => theme.fontSize.xs};
    @media ${queries.tablet} {
      text-align: left;
      font-size: ${({ theme }) => theme.fontSize.s};
    }
  }
  p:nth-of-type(2) {
    font-weight: bold;
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
`;
export const ContentWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
  @media ${queries.tablet} {
    margin-top: 20px;
    flex-direction: row;
    gap: 0;
    justify-content: space-between;
  }
`;
export const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  text-align: center;
  @media ${queries.tablet} {
    flex-direction: row;
  }
`;

export const StyledLink = styled(NavLink).attrs(({ isActive }) => (isActive ? 'active' : ''))`
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.colors.grey};
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: lighter;
  cursor: pointer;
  &.active {
    color: ${({ theme }) => theme.colors.white};
  }
`;
export const SocialWrapper = styled.div`
  display: flex;
  gap: 15px;
  @media ${queries.tablet} {
    gap: 20px;
  }
`;
