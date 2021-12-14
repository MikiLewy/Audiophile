import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.darkBlack};
  color: ${({ theme }) => theme.colors.darkGrey};
  padding: 2rem;
  gap: 30px;
  text-align: center;
  p:nth-of-type(1) {
    width: 95%;
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
  p:nth-of-type(2) {
    font-weight: bold;
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
`;
export const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  text-align: center;
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
`;
