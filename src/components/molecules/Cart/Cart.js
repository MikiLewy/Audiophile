import React, { useState, useContext } from 'react';
import {
  CartWrapper,
  CheckoutWrapper,
  ContentWrapper,
  PriceWrapper,
  ProductInfo,
  ProductWrapper,
  TitleWrapper,
  Wrapper,
  StyledButton,
  Background,
  QuantityWrapper,
} from './Cart.styles';
import { ProductsContext } from 'providers/ProductsProvider';

const Cart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ctx = useContext(ProductsContext);
  const removeItem = (e) => {
    const quantity = e.target.previousElementSibling.innerHTML.split('x');
    const deletedProduct = ctx.cartsProducts.filter((product) => product[0].id === e.target.name);
    const [deletedProductPrice] = deletedProduct.map((product) => product[0].price);
    const matchingQuantity = ctx.productsQuantity.filter((quantity) => quantity.id !== e.target.name);
    const matchingProducts = ctx.cartsProducts.filter((product) => product[0].id !== e.target.name);
    const matchingPrice = ctx.productsPrice.filter((price) => price.id !== e.target.name);
    ctx.setProductsPrice(matchingPrice);
    ctx.setProductsQuantity(matchingQuantity);
    ctx.setCartsProducts(matchingProducts);
    ctx.setTotalPrice(ctx.totalPrice - deletedProductPrice * parseInt(quantity[1], 10));
  };
  const removeAllProducts = () => {
    ctx.setProductsQuantity([]);
    ctx.setProductsPrice([]);
    ctx.setCartsProducts([]);
    ctx.setIsAdded(false);
  };
  return (
    <Wrapper>
      <CartWrapper onClick={() => setIsOpen(!isOpen)}>
        <svg width="30" height="20" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M8.625 15.833c1.132 0 2.054.935 2.054 2.084 0 1.148-.922 2.083-2.054 2.083-1.132 0-2.054-.935-2.054-2.083 0-1.15.922-2.084 2.054-2.084zm9.857 0c1.132 0 2.054.935 2.054 2.084 0 1.148-.922 2.083-2.054 2.083-1.132 0-2.053-.935-2.053-2.083 0-1.15.92-2.084 2.053-2.084zm-9.857 1.39a.69.69 0 00-.685.694.69.69 0 00.685.694.69.69 0 00.685-.694.69.69 0 00-.685-.695zm9.857 0a.69.69 0 00-.684.694.69.69 0 00.684.694.69.69 0 00.685-.694.69.69 0 00-.685-.695zM4.717 0c.316 0 .59.215.658.517l.481 2.122h16.47a.68.68 0 01.538.262c.127.166.168.38.11.579l-2.695 9.236a.672.672 0 01-.648.478H7.41a.667.667 0 00-.673.66c0 .364.303.66.674.66h12.219c.372 0 .674.295.674.66 0 .364-.302.66-.674.66H7.412c-1.115 0-2.021-.889-2.021-1.98 0-.812.502-1.511 1.218-1.816L4.176 1.32H.674A.667.667 0 010 .66C0 .296.302 0 .674 0zm16.716 3.958H6.156l1.797 7.917h11.17l2.31-7.917z"
            fill="#FFF"
            fillRule="nonzero"
          />
        </svg>
        {ctx.isAdded ? ctx.cartsProducts.length === 0 ? null : <div>{ctx.cartsProducts.length}</div> : null}
      </CartWrapper>
      {ctx.isAdded ? (
        isOpen ? (
          <>
            <Background onClick={() => setIsOpen(!isOpen)}></Background>
            <CheckoutWrapper>
              <ContentWrapper>
                <TitleWrapper>
                  <h2>Cart ({ctx.isAdded ? ctx.cartsProducts.length : 0})</h2>
                  <button onClick={removeAllProducts}>Remove all</button>
                </TitleWrapper>
                {ctx.cartsProducts.length > 0
                  ? ctx.cartsProducts.map((item, i) => (
                      <ProductWrapper key={item[0].id}>
                        <ProductInfo>
                          <img src={item[0].cartImg.url} alt="" />
                          <div>
                            <h3>{item[0].name}</h3>
                            <p>${item[0].price}</p>
                          </div>
                        </ProductInfo>
                        <QuantityWrapper>
                          <p name={ctx.productsQuantity[i].id}>x{ctx.productsQuantity[i].counter}</p>
                          <button onClick={removeItem} name={item[0].id}>
                            Remove
                          </button>
                        </QuantityWrapper>
                      </ProductWrapper>
                    ))
                  : null}
              </ContentWrapper>
              <PriceWrapper>
                <p>Total</p>
                <p>{ctx.totalPrice}$</p>
              </PriceWrapper>
              <StyledButton>Checkout</StyledButton>
            </CheckoutWrapper>
          </>
        ) : null
      ) : null}
    </Wrapper>
  );
};

export default Cart;
