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
`;
