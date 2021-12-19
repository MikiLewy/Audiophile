import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useWindowSize } from 'hooks/useWindowSize';
import { changePhoto } from 'helpers/changePhoto';
import { ImageWrapper, Wrapper, StyledButton, ContentWrapper } from './CategoryProduct.styles';

const CategoryProduct = ({
  product: {
    feature,
    name,
    detail,
    link,
    image: { mobileImg, tabletImg, desktopImg },
    alt,
  },
}) => {
  const width = useWindowSize();
  return (
    <Wrapper>
      <ImageWrapper>
        <img src={changePhoto(mobileImg, tabletImg, desktopImg, width)} alt={alt} />
      </ImageWrapper>
      <ContentWrapper>
        {feature ? <h3>{feature}</h3> : null}
        <h2>{name}</h2>
        <p>{detail}</p>
        <StyledButton as={Link} to={`/${link}`}>
          See product
        </StyledButton>
      </ContentWrapper>
    </Wrapper>
  );
};

CategoryProduct.propTypes = {};

export default CategoryProduct;
