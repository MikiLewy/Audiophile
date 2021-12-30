import { queries } from 'helpers/mediaQueries';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  width: 80%;
  @media ${queries.biggerPhone} {
    width: 60%;
    gap: 5px;
  }
  @media ${queries.tablet} {
    width: 48%;
    gap: 5px;
  }
  @media ${queries.laptop} {
    width: 49%;
    gap: 5px;
  }
`;
export const Label = styled.label`
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.xxs};
  text-transform: capitalize;
  @media ${queries.laptop} {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
`;
export const Input = styled.input`
  padding: 15px 20px;
  font-size: ${({ theme }) => theme.fontSize.xxs};
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};
  box-shadow: 0 0 2px ${({ theme }) => theme.colors.lightBlack};
  border-radius: 10px;
  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.darkOrange};
    box-shadow: 0 0 4px ${({ theme }) => theme.colors.darkOrange};
  }
  @media ${queries.laptop} {
    padding: 20px;
  }
`;
