import styled from 'styled-components';
import { queries } from 'helpers/mediaQueries';
import { ProductInfo } from 'components/molecules/Cart/Cart.styles';
import { Button } from 'components/atoms/Button/Button';
export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGrey};
  width: 100%;
`;
export const FormWrapper = styled.div`
  width: 90%;
  margin: 20px auto;
  background-color: #fff;
  box-shadow: 0 0 2px ${({ theme }) => theme.colors.lightBlack};
  border-radius: 10px;
  padding: 1.5rem;
  h3 {
    text-transform: uppercase;
  }
  @media ${queries.tablet} {
    margin-bottom: 50px;
  }
`;
export const Form = styled.form`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  @media ${queries.laptop} {
    width: 100%;
    margin: 0 auto;
    padding: 0 7rem;
    flex-direction: row;
    gap: 10px;
    ${FormWrapper}:first-child {
      width: 75%;
    }
    ${FormWrapper}:last-child {
      width: 25%;
    }
  }
  @media ${queries.desktop} {
    padding: 0 10rem;
    gap: 50px;
    ${FormWrapper}:first-child {
      padding: 2rem 3rem;
    }
    ${FormWrapper}:last-child {
      padding: 2rem;
    }
  }
`;
export const InputWrapper = styled.div`
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
export const Title = styled.h2`
  font-size: 24px;
  letter-spacing: 1px;
  text-transform: uppercase;
  @media ${queries.laptop} {
    font-size: ${({ theme }) => theme.fontSize.l};
    letter-spacing: 2px;
  }
`;
export const Subtitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.colors.darkOrange};
  @media ${queries.tablet} {
    width: 100%;
  }
  @media ${queries.laptop} {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;

export const ContentWrapper = styled.div`
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media ${queries.tablet} {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
  }
`;
export const StyledInfo = styled(ProductInfo)`
  margin: 10px 0;
  h3 {
    width: 70%;
    @media ${queries.laptop} {
      width: 100%;
      font-size: ${({ theme }) => theme.fontSize.xs};
    }
  }
  img {
    width: 100px;
    @media ${queries.laptop} {
      width: 75px;
    }
  }
`;
export const PriceWrapper = styled.div`
  margin: 15px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.xs};
  text-transform: uppercase;
  @media ${queries.laptop} {
    font-size: ${({ theme }) => theme.fontSize.s};
  }

  p:last-child {
    font-weight: bold;
  }
`;
export const GrandTotal = styled.p`
  color: ${({ theme }) => theme.colors.darkOrange};
`;
export const StyledButton = styled(Button)`
  @media ${queries.laptop} {
    width: 100%;
  }
`;
export const ErrorMessage = styled.span`
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.xxs};
  color: rgb(180, 3, 28);
`;
