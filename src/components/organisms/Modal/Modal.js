import React, { useContext } from 'react';
import { ProductsContext } from 'providers/ProductsProvider';
import { ProductWrapper, QuantityWrapper } from 'components/molecules/Cart/Cart.styles';
import { StyledInfo } from 'pages/Checkout/Checkout.styles';
import { Wrapper, Title, Description, Info, StyledButton, CardsWrapper, Card, PriceWrapper, ContentWrapper, Background } from './Modal.styles';
import { Link } from 'react-router-dom';
const Modal = ({ isOpen, setIsOpen }) => {
  const ctx = useContext(ProductsContext);

  const reset = () => {
    setIsOpen(false);
    ctx.setProductsQuantity([]);
    ctx.setProductsPrice([]);
    ctx.setCartsProducts([]);
    ctx.setIsAdded(false);
  };
  return (
    <>
      {isOpen ? (
        <Background>
          <Wrapper>
            <ContentWrapper>
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="32" cy="32" r="32" fill="#D87D4A" />
                <path d="M20.7539 33.3328L27.5054 40.0843L43.3085 24.2812" stroke="white" strokeWidth="4" />
              </svg>
              <Title>Thank you for your order</Title>
              <Description>You will receive an email confirmation shortly.</Description>
              <CardsWrapper>
                <Card>
                  {ctx.cartsProducts.length > 0
                    ? ctx.cartsProducts[0].map(({ id, cartImg, name, price }) => (
                        <>
                          <ProductWrapper key={id}>
                            <StyledInfo>
                              <img src={cartImg.url} alt="" />
                              <div>
                                <h3>{name}</h3>
                                <p>${price}</p>
                              </div>
                            </StyledInfo>
                            <QuantityWrapper>
                              <p name={ctx.productsQuantity[0].id}>x{ctx.productsQuantity[0].counter}</p>
                            </QuantityWrapper>
                          </ProductWrapper>
                          {ctx.cartsProducts.length - 1 >= 0 ? <Info> and {ctx.cartsProducts.length - 1} other items(s)</Info> : null}
                        </>
                      ))
                    : null}
                </Card>
                <PriceWrapper>
                  <h2>Grand Total</h2>
                  <p>{parseInt((ctx.totalPrice * 1.2).toFixed()) + 50}$</p>
                </PriceWrapper>
              </CardsWrapper>
              <StyledButton as={Link} to="/" onClick={reset}>
                Back to home
              </StyledButton>
            </ContentWrapper>
          </Wrapper>
        </Background>
      ) : null}
    </>
  );
};

export default Modal;
