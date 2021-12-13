import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  gap: 80px 0;
`;

export const FeaturedItem = styled.div`
  position: relative;
  display: flex;
  height: 150px;
  width: 80%;
  flex-direction: column;
  justify-content: flex-end;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  text-decoration: none;
  gap: 10px;
  text-align: center;
  border-radius: 10px;
  img:last-child {
    width: 10px;
  }
  h4 {
    text-transform: uppercase;
    letter-spacing: 1px;
    color: ${({ theme }) => theme.colors.black};
  }
  div:last-child {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;
    p {
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors.darkGrey};
      font-weight: bold;
      font-size: ${({ theme }) => theme.fontSize.xs};
    }
  }
`;
export const ImageWrapper = styled.div`
  position: absolute;
  top: -40%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
  img {
    width: 70%;
    object-fit: cover;
  }
  img:last-child {
    position: absolute;
    top: 80%;
    width: 100%;
    z-index: 2;
  }
`;
