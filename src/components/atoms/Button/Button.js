import styled from 'styled-components';

export const Button = styled.button`
  padding: 0.75rem 1.5rem;
  color: ${({ theme }) => theme.colors.lightWhite};
  font-size: ${({ theme }) => theme.fontSize.xxs};
  background-color: ${({ theme }) => theme.colors.darkOrange};
  text-transform: uppercase;
  border: none;
  font-weight: bold;
  letter-spacing: 1px;
`;
