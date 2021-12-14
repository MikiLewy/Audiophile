import styled from 'styled-components';

export const Card = styled.div`
  position: relative;
  display: flex;
  height: 150px;
  width: 90%;
  flex-direction: column;
  justify-content: flex-end;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  text-decoration: none;
  gap: 10px;
  text-align: center;
  border-radius: 10px;
`;
