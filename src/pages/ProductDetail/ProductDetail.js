import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { useWindowSize } from 'hooks/useWindowSize';
import { changePhoto } from 'helpers/changePhoto';
import { useNavigate } from 'react-router';
import axios from 'axios';
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
  Link,
  FeatureWrapper,
  Price,
} from './ProductDetail.styles';
export const query = `{
  allProducts {
    id
    name
    category
    feature
    price
    info
    description1
    description2
    amount
    content
    amount2
    content2
    amount3
    content3
    amount4
    content4
    amount5
    content5
    amount6
    content6
    gallery{
      id
      title
      url
    }
    productImg{
      id
      title
      url
    }
  }
}`;
const ProductDetail = () => {
  const navigate = useNavigate();
  const [product, setProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState([]);
  const { pathname } = useLocation();
  const width = useWindowSize();

  useEffect(() => {
    axios
      .post(
        'https://graphql.datocms.com/',
        {
          query: query,
        },
        {
          headers: {
            authorization: `Bearer ${process.env.REACT_APP_DATO_TOKEN}`,
          },
        }
      )
      .then(({ data: { data } }) => setProducts(data.allProducts))
      .catch((e) => console.log(e));
    // const [matchingProduct] = productData.filter((product) => `/${product.category}/${product.id}` === pathname);
    // setCurrentProduct(matchingProduct);
  }, []);
  return (
    <Wrapper>
      <Link onClick={() => navigate(-1)}>Go Back</Link>
      {product.length > 0 ? (
        product.map((product) => (
          <>
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
                    <p>-</p>
                    <p>1</p>
                    <p>+</p>
                  </ProductCount>
                  <Button>Add to cart</Button>
                </ButtonsWrapper>
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
          </>
        ))
      ) : (
        <p>Loading</p>
      )}
    </Wrapper>
  );
};

export default ProductDetail;
