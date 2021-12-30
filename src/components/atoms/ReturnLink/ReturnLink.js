import React from 'react';
import styled from 'styled-components';
import { queries } from 'helpers/mediaQueries';
import { useNavigate } from 'react-router';

const ReturnLink = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Link onClick={() => navigate(-1)}>Go Back</Link>
    </Wrapper>
  );
};

export default ReturnLink;
const Wrapper = styled.div`
  display: block;
  width: 90%;
  padding: 70px 0 0;
  margin: 0 auto;
  @media ${queries.laptop} {
    padding: 70px 7rem 10px;
    width: 100%;
  }
  @media ${queries.desktop} {
    padding: 70px 10rem 10px;
  }
`;
const Link = styled.button`
  text-align: left;
  border: none;
  background-color: transparent;
  font-size: ${({ theme }) => theme.fontSize.s};

  cursor: pointer;
  @media ${queries.laptop} {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;
