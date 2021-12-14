import styled from 'styled-components';
import { Button } from 'components/atoms/Button/Button';
import { Card } from 'components/atoms/Card/Card';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  width: 90%;
  margin: 70px auto;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.darkOrange};
  h4 {
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSize.xl};
    text-transform: uppercase;
    font-weight: 400;
    width: 50%;
    text-align: center;
    line-height: 110%;
  }
  p {
    color: rgba(255, 255, 255, 0.7);
    text-align: center;
    width: 90%;
  }
`;

export const ImageWrapper = styled.div`
  margin: 50px auto 20px;
  text-align: center;
  position: relative;
  z-index: 2;

  img {
    position: relative;
    z-index: 2;
    width: 50%;
  }
  img:last-child {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 80%;
    transform: translate(-50%, -50%);
    color: white;
    z-index: 1;
  }
`;
export const StyledButton = styled(Button)`
  margin-bottom: 25px;
`;

export const SpeakerWrapper = styled.div`
  height: 300px;
  padding: 1rem;
  width: 90%;
  margin: 0 auto 20px;
  border-radius: 10px;
  background-color: #e7e7e7;
  position: relative;
  img {
    border-radius: 10px;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
    object-fit: cover;
  }
`;
export const ContentWrapper = styled.div`
  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 20px 0;
  height: 100%;
  h4 {
    font-size: ${({ theme }) => theme.fontSize.l};
    text-transform: uppercase;
    letter-spacing: 2px;
  }
`;
export const StyledCard = styled(Card)`
  position: relative;
  margin: 20px auto;
  border-radius: 10px;
  overflow: hidden;
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }
`;
export const StyledInfo = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  padding: 1rem;
  margin: 20px auto;
  h4 {
    font-size: ${({ theme }) => theme.fontSize.l};
    text-transform: uppercase;
    letter-spacing: 2px;
  }
`;
