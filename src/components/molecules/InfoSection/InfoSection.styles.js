import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  gap: 25px;
  margin: 70px auto;

  text-align: center;
  img {
    border-radius: 10px;
  }
  h3 {
    font-size: ${({ theme }) => theme.fontSize.l};
    padding: 0.5rem;
    line-height: 110%;
    text-transform: uppercase;
    letter-spacing: 1px;
    span {
      color: ${({ theme }) => theme.colors.darkOrange};
    }
  }
  p {
    color: ${({ theme }) => theme.colors.darkGrey};
  }
`;
