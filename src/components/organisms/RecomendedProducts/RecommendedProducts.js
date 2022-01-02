import React, { useState, useEffect } from 'react';
import { useProducts } from 'hooks/useProducts';
import { useWindowSize } from 'hooks/useWindowSize';
import { changePhoto } from 'helpers/changePhoto';
import { Button } from 'components/atoms/Button/Button';
import { Link } from 'react-router-dom';
import { ContentWrapper, ImageWrapper, Title, Wrapper } from './RecommendedProducts.styles';

const RecommendedProducts = () => {
  const products = useProducts();
  const width = useWindowSize();
  const [recommendedProducts, setRecommendedProducts] = useState([]);
  useEffect(() => {
    if (products.length > 0) {
      setRecommendedProducts([products[0], products[3], products[5]]);
    }
  }, [products]);
  return (
    <>
      {recommendedProducts.length > 0 ? (
        <Wrapper>
          <Title>You may also like</Title>
          {recommendedProducts.map((product) => (
            <ContentWrapper key={product.id}>
              <ImageWrapper>
                {product.productImg.map((photo) => {
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
              <h3>{product.name}</h3>
              <Button as={Link} to={`/${product.category}/${product.id}`}>
                See product
              </Button>
            </ContentWrapper>
          ))}
        </Wrapper>
      ) : null}
    </>
  );
};

export default RecommendedProducts;
