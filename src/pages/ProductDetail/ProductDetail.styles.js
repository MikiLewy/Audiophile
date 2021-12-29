import styled, { keyframes } from 'styled-components';
import { queries } from 'helpers/mediaQueries';
const fade = keyframes`
0%{
  opacity: 1;
}
100%{
  opacity: 0;
}

`;
export const Wrapper = styled.div`
  margin: 70px auto;
  width: 90%;
  @media ${queries.laptop} {
    width: 100%;
    padding: 0 7rem;
  }
  @media ${queries.desktop} {
    padding: 0 10rem;
  }
`;
export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media ${queries.laptop} {
    flex-direction: row;
    justify-content: space-between;
    gap: 70px;
  }
`;
export const Link = styled.button`
  border: none;
  background-color: transparent;
  font-size: ${({ theme }) => theme.fontSize.s};
  margin: 30px 0;
  cursor: pointer;
  @media ${queries.laptop} {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;
export const ImageWrapper = styled.div`
  height: 350px;
  width: 100%;
  text-align: center;
  @media ${queries.tablet} {
    height: 550px;
  }
  @media ${queries.laptop} {
    width: 60%;
  }
  @media ${queries.desktop} {
    height: auto;
    width: 40%;
  }
  img {
    width: 100%;
    object-fit: cover;
    height: 100%;
    border-radius: 10px;
  }
`;
export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-top: 20px;
  gap: 10px;
  @media ${queries.laptop} {
    width: 40%;
    gap: 20px;
  }
  @media ${queries.desktop} {
    width: 50%;
  }
  h3 {
    font-size: ${({ theme }) => theme.fontSize.xs};
    color: ${({ theme }) => theme.colors.darkOrange};
    text-transform: uppercase;
    letter-spacing: 6px;
    margin: 0 auto;
    @media ${queries.tablet} {
      font-size: ${({ theme }) => theme.fontSize.s};
    }
    @media ${queries.laptop} {
      margin: 0;
      letter-spacing: 8px;
      font-weight: lighter;
    }
  }
  h2 {
    width: 80%;
    text-align: center;
    margin: 0 auto;
    text-transform: uppercase;
    @media ${queries.tablet} {
      font-size: ${({ theme }) => theme.fontSize.l};
    }
    @media ${queries.laptop} {
      margin: 0;
      font-size: ${({ theme }) => theme.fontSize.xl};
      text-align: left;
      line-height: 110%;
    }
    @media ${queries.desktop} {
      width: 50%;
    }
  }
`;
export const Info = styled.p`
  text-align: center;
  width: 95%;
  margin: 0 auto;
  line-height: 160%;
  @media ${queries.tablet} {
    width: 80%;
  }
  @media ${queries.laptop} {
    margin: 0;
    font-size: ${({ theme }) => theme.fontSize.m};
    text-align: left;
    width: 100%;
  }
  @media ${queries.desktop} {
    width: 65%;
  }
`;
export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 20px;
  align-items: center;
  width: 100%;
`;
export const SuccessMessage = styled.p`
  color: #008000;
  animation: ${fade} 1s 2s forwards ease-in-out;
`;
export const ProductCount = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #e7e7e7;
  font-size: ${({ theme }) => theme.fontSize.m};
  width: 125px;
  padding: 0.5rem 1rem;
  font-weight: bold;
  p:nth-of-type(1),
  p:nth-of-type(3) {
    cursor: pointer;
    font-weight: lighter;
  }
  @media ${queries.tablet} {
    padding: 0.75rem 1rem;
    width: 150px;
  }
`;
export const Price = styled.p`
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.m};
  @media ${queries.tablet} {
    font-size: 26px;
  }
  @media ${queries.laptop} {
    font-size: ${({ theme }) => theme.fontSize.l};
  }
`;
export const FeatureWrapper = styled.div`
  @media ${queries.laptop} {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 70px;
  }
  @media ${queries.desktop} {
    margin: 70px 0;
  }
  h3 {
    font-size: ${({ theme }) => theme.fontSize.m};
    text-transform: uppercase;
    @media ${queries.tablet} {
      margin-top: 30px;
      font-size: ${({ theme }) => theme.fontSize.l};
    }
    @media ${queries.desktop} {
      font-size: ${({ theme }) => theme.fontSize.xl};
    }
  }
`;
export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSize.s};
  line-height: 160%;
  gap: 20px;
  margin-top: 30px;
  @media ${queries.laptop} {
    font-size: ${({ theme }) => theme.fontSize.m};
    width: 70%;
  }
  @media ${queries.desktop} {
    width: 60%;
    gap: 30px;
  }
`;
export const BoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 30px;
  @media ${queries.laptop} {
    margin: 0;
    gap: 20px;
  }
  @media ${queries.desktop} {
    width: 40%;
    gap: 30px;
  }
`;
export const ItemsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  line-height: 180%;
  @media ${queries.laptop} {
    line-height: 220%;
  }
  @media ${queries.desktop} {
    gap: 30px;
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;
export const Amount = styled.div`
  color: ${({ theme }) => theme.colors.darkOrange};
  font-weight: bold;
`;

export const Gallery = styled.div`
  margin: 50px auto 0;
  img {
    width: 100%;
    border-radius: 10px;
  }
  @media ${queries.laptop} {
    display: grid;
    grid-template-columns: 30% 1fr;
    grid-template-rows: 50% 1fr;
    column-gap: 20px;
    row-gap: 10px;
    margin: 20px 0;
    height: 620px;
    align-items: space-between;
    img {
      min-height: 300px;
      object-fit: cover;
    }
    img:nth-of-type(3) {
      grid-column: 2/2;
      grid-row: 1/-1;
      height: 620px;
    }
    img:nth-of-type(1) {
      grid-column: 1/2;
      grid-row: 1/2;
    }
    img:nth-of-type(2) {
      grid-column: 1/2;
      grid-row: 2/2;
    }
  }
  @media ${queries.desktop} {
    margin-top: 100px;
    img {
      min-height: 300px;
      max-height: 300px;
    }
    img:nth-of-type(3) {
      min-height: 620px;
      max-height: 620px;
      object-fit: cover;
    }
  }
`;
