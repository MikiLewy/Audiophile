import styled from 'styled-components';
import { queries } from 'helpers/mediaQueries';

const handleColorType = (color, theme) => {
  switch (color) {
    case 'black':
      return theme.colors.black;
    case 'transparent':
      return 'transparent';
    default:
      return theme.colors.darkOrange;
  }
};
const handleTransition = (color) => {
  switch (color) {
    case 'transparent':
      return 'black';
    default:
      return null;
  }
};

export const Button = styled.button`
  padding: 0.75rem 1.5rem;
  color: ${({ theme, color }) => (color === 'transparent' ? theme.colors.black : theme.colors.lightWhite)};
  font-size: ${({ theme }) => theme.fontSize.xxs};
  background-color: ${({ theme, color }) => handleColorType(color, theme)};
  text-transform: uppercase;
  border: ${({ color }) => (color === 'transparent' ? '2px solid black' : 'none')};
  font-weight: bold;
  letter-spacing: 1px;
  text-decoration: none;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  &:hover {
    background-color: ${({ color }) => handleTransition(color)};
    color: ${({ color }) => (color === 'transparent' ? 'white' : null)};
  }
  @media ${queries.tablet} {
    padding: 1rem 2rem;
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
`;
