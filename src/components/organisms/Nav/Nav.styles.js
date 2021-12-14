import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 2rem;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.lightBlack};
  position: relative;
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
`;
export const StyledLink = styled(NavLink).attrs(({ isActive }) => (isActive ? 'active' : ''))`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.grey};
  &.active {
    color: ${({ theme }) => theme.colors.white};
  }
`;
