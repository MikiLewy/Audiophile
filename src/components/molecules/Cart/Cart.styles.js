import styled from 'styled-components';
import { queries } from 'helpers/mediaQueries';
import { Button } from 'components/atoms/Button/Button';

export const Wrapper = styled.div`
  order: 2;
  position: relative;
  @media ${queries.tablet} {
    margin-left: auto;
  }
`;
export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  z-index: 55;
  background-color: rgba(0, 0, 0, 0.7);
`;
export const CartWrapper = styled.div`
  position: relative;

  @media ${queries.laptop} {
    svg {
      cursor: pointer;
    }
  }

  div {
    position: absolute;
    top: -10px;
    right: -5px;
    background-color: ${({ theme }) => theme.colors.darkOrange};
    width: 15px;
    height: 15px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 7px;
    font-size: 10px;
    color: ${({ theme }) => theme.colors.white};
  }
`;
export const CheckoutWrapper = styled.div`
  position: absolute;
  top: 70px;
  right: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  width: 300px;
  height: auto;
  z-index: 99;
  padding: 2rem 0;
  border-radius: 10px;
  gap: 10px;
  box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.8);
  @media ${queries.biggerPhone} {
    left: 50%;
    transform: translateX(-100%);
  }
  @media ${queries.tablet} {
    right: 0;
  }
  @media ${queries.laptop} {
    width: 350px;
  }
`;
export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 20px;
  width: 80%;
`;
export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  h2 {
    text-transform: uppercase;
    font-size: ${({ theme }) => theme.fontSize.s};
    @media ${queries.laptop} {
      font-size: ${({ theme }) => theme.fontSize.m};
    }
  }
  button {
    background-color: transparent;
    border: none;
    text-decoration: underline;
    cursor: pointer;
  }
`;
export const ProductWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  p {
    font-size: ${({ theme }) => theme.fontSize.xs};
    color: ${({ theme }) => theme.colors.darkGrey};
    @media ${queries.laptop} {
      font-size: ${({ theme }) => theme.fontSize.s};
    }
  }
`;
export const ProductInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  h3 {
    font-size: ${({ theme }) => theme.fontSize.xs};
    text-transform: uppercase;
    @media ${queries.laptop} {
      font-size: ${({ theme }) => theme.fontSize.s};
    }
    @media ${queries.desktop} {
      font-size: ${({ theme }) => theme.fontSize.m};
    }
  }
  p {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
  img {
    width: 45%;
    @media ${queries.laptop} {
      width: 25%;
    }
  }
`;
export const QuantityWrapper = styled.div`
  text-align: right;
  button {
    margin-left: 25px;
    cursor: pointer;
    background-color: transparent;
    border: none;
    font-size: 14px;
  }
`;
export const PriceWrapper = styled.div`
  margin-top: 10px;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  p:nth-of-type(1) {
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.darkGrey};
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
  p:nth-of-type(2) {
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.black};
    font-size: ${({ theme }) => theme.fontSize.m};
    font-weight: bold;
  }
`;
export const StyledButton = styled(Button)`
  width: 80%;
  margin-top: 5px;
  padding: 0.75rem;
  text-align: center;
`;
