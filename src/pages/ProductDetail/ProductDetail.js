import React, { useContext, useState } from 'react';
import { useWindowSize } from 'hooks/useWindowSize';
import { changePhoto } from 'helpers/changePhoto';
import { Button } from 'components/atoms/Button/Button';
import {
  ContentWrapper,
  Gallery,
  ImageWrapper,
  Wrapper,
  InfoWrapper,
  ButtonsWrapper,
  ProductCount,
  Info,
  DescriptionWrapper,
  BoxWrapper,
  Amount,
  ItemsWrapper,
  FeatureWrapper,
  Price,
  SuccessMessage,
} from './ProductDetail.styles';
import Loader from 'components/atoms/Loader/Loader';
import { ProductsContext } from 'providers/ProductsProvider';
import ReturnLink from 'components/atoms/ReturnLink/ReturnLink';
import RecommendedProducts from 'components/organisms/RecomendedProducts/RecommendedProducts';

const ProductDetail = () => {
  const ctx = useContext(ProductsContext);
  const width = useWindowSize();
  const [message, setMessage] = useState(false);

  const handleAddItem = () => {
    if (ctx.cartsProducts.filter((product) => product[0].id === ctx.currentProduct[0].id).length > 0) return;
    ctx.setProductsPrice([...ctx.productsPrice, { id: ctx.currentProduct[0].id, price: ctx.currentProduct[0].price }]);
    ctx.setProductsQuantity([...ctx.productsQuantity, { id: ctx.currentProduct[0].id, counter: ctx.counter }]);
    ctx.setCounter(1);
    ctx.setCartsProducts([...ctx.cartsProducts, ctx.currentProduct]);
    ctx.setIsAdded(true);
    setMessage(true);
    setTimeout(() => {
      setMessage(false);
    }, 3000);
  };
  return (
    <>
      <ReturnLink />
      <Wrapper>
        {ctx.currentProduct.length > 0 ? (
          ctx.currentProduct.map((product) => (
            <div key={product.id}>
              <ContentWrapper className="content">
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
                <InfoWrapper>
                  <h3>{product.feature}</h3>
                  <h2>{product.name}</h2>
                  <Info>{product.info}</Info>
                  <Price>${product.price}</Price>
                  <ButtonsWrapper>
                    <ProductCount>
                      <p onClick={() => ctx.handleCounterChange('-')}>-</p>
                      <p>{ctx.counter ? ctx.counter : '1'}</p>
                      <p onClick={() => ctx.handleCounterChange('+')}>+</p>
                    </ProductCount>
                    <Button onClick={handleAddItem}>Add to cart</Button>
                  </ButtonsWrapper>
                  {message ? <SuccessMessage>Added item to the cart</SuccessMessage> : null}
                </InfoWrapper>
              </ContentWrapper>
              <FeatureWrapper>
                <DescriptionWrapper>
                  <h3>Features</h3>
                  <p>{product.description1}</p>
                  <p>{product.description2}</p>
                </DescriptionWrapper>
                <BoxWrapper>
                  <h3>In the box</h3>
                  <ItemsWrapper>
                    <Amount>
                      <p>{product.amount}</p>
                      {product.amount2 ? <p>{product.amount2}</p> : null}
                      {product.amount3 ? <p>{product.amount3}</p> : null}
                      {product.amount4 ? <p>{product.amount4}</p> : null}
                      {product.amount5 ? <p>{product.amount5}</p> : null}
                      {product.amount6 ? <p>{product.amount6}</p> : null}
                    </Amount>
                    <div className="content">
                      <p>{product.content}</p>
                      {product.content2 ? <p>{product.content2}</p> : null}
                      {product.content3 ? <p>{product.content3}</p> : null}
                      {product.content4 ? <p>{product.content4}</p> : null}
                      {product.content5 ? <p>{product.content5}</p> : null}
                      {product.content6 ? <p>{product.content6}</p> : null}
                    </div>
                  </ItemsWrapper>
                </BoxWrapper>
              </FeatureWrapper>
              <Gallery>
                {product.gallery.map((photo) => {
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
              </Gallery>
            </div>
          ))
        ) : (
          <Loader />
        )}
        <RecommendedProducts />
      </Wrapper>
    </>
  );
};

export default ProductDetail;
