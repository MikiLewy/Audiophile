import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { queries } from 'helpers/mediaQueries';

export const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 2rem;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.lightBlack};
  position: relative;
  @media ${queries.tablet} {
    padding: 2rem 2.5rem;
    justify-content: flex-start;
    gap: 50px;
  }
  @media ${queries.laptop} {
    padding: 2rem 7rem;
  }
  @media ${queries.desktop} {
    padding: 2rem 10rem;
  }
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 1px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.grey};
  }

  img:nth-of-type(1) {
    position: relative;
    z-index: 51;
  }
`;
export const Menu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.lightBlack};
  transform: translateX(${({ isOpen }) => (isOpen ? '0' : '-200%')});
  transition: 0.8s ease-in-out;
  z-index: 50;
  @media ${queries.laptop} {
    position: inherit;
    transform: translateX(0);
    flex-direction: row;
    order: 1;
  }
  @media ${queries.laptop} {
    margin-left: -10rem;
  }
`;
export const StyledLink = styled(NavLink).attrs(({ isActive }) => (isActive ? 'active' : ''))`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.grey};
  @media ${queries.tablet} {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
  @media ${queries.laptop} {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
  &.active {
    color: ${({ theme }) => theme.colors.white};
  }
`;
