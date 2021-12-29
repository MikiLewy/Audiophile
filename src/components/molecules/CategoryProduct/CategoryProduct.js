import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useWindowSize } from 'hooks/useWindowSize';
import { changePhoto } from 'helpers/changePhoto';
import { ImageWrapper, Wrapper, StyledButton, ContentWrapper } from './CategoryProduct.styles';

const CategoryProduct = ({ product: { feature, name, info, id, productImg } }) => {
  const width = useWindowSize();
  return (
    <Wrapper>
      <ImageWrapper>
        {productImg.map((photo) => {
          if (
            changePhoto(
              photo.title === 'mobile' ? photo.url : null,
              photo.title === 'tablet' ? photo.url : null,
              photo.title === 'desktop' ? photo.url : null,
              width
            )
          ) {
            return <img key={photo.id} src={photo.url} alt="" />;
          }
          return null;
        })}
      </ImageWrapper>
      <ContentWrapper>
        {feature ? <h3>{feature}</h3> : null}
        <h2>{name}</h2>
        <p>{info}</p>
        <StyledButton as={Link} to={`${id}`}>
          See product
        </StyledButton>
      </ContentWrapper>
    </Wrapper>
  );
};

CategoryProduct.propTypes = {
  product: PropTypes.shape({
    feature: PropTypes.string,
    name: PropTypes.string,
    info: PropTypes.string,
    id: PropTypes.number,
    productImg: PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      url: PropTypes.string,
    }),
  }),
};

export default CategoryProduct;
