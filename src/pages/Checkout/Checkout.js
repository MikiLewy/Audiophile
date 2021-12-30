import React, { useContext } from 'react';
import ReturnLink from 'components/atoms/ReturnLink/ReturnLink';
import FormField from 'components/molecules/FormField/FormField';
import { ProductsContext } from 'providers/ProductsProvider';
import { ProductWrapper, QuantityWrapper } from 'components/molecules/Cart/Cart.styles';
import { Wrapper, ContentWrapper, Form, Title, Subtitle, FormWrapper, PriceWrapper, StyledInfo, GrandTotal, StyledButton } from './Checkout.styles';
import { Navigate } from 'react-router';

const Checkout = () => {
  const ctx = useContext(ProductsContext);
  if (ctx.cartsProducts.length <= 0) return <Navigate to="/" />;
  return (
    <Wrapper>
      <ReturnLink />
      <Form>
        <FormWrapper>
          <Title>Checkout</Title>
          <ContentWrapper>
            <Subtitle>bililing details</Subtitle>
            <FormField id="name" label="name" placeholder="John Ward" />
            <FormField id="email" label="email address" placeholder="john@gmail.com" />
            <FormField id="phone" label="phone number" placeholder="+1 202-555-0136" />
          </ContentWrapper>
          <ContentWrapper>
            <Subtitle>shipping info</Subtitle>
            <FormField id="Adress" label="Adress" placeholder="1137 Williams Avenue" />
            <FormField id="zipCode" label="ZIP code" placeholder="10001" />
            <FormField id="city" label="city" placeholder="New York" />
            <FormField id="country" label="country" placeholder="United States" />
          </ContentWrapper>
          <ContentWrapper>
            <Subtitle>payment details</Subtitle>
            <FormField id="e-money" label="e-money" disabled placeholder="Available soon" />
            <FormField id="cash" type="checkbox" label="cash on delivery" placeholder="united states" />
          </ContentWrapper>
        </FormWrapper>
        <FormWrapper>
          <h3>Summary</h3>
          {ctx.cartsProducts.length > 0
            ? ctx.cartsProducts.map((item, i) => (
                <ProductWrapper key={item[0].id}>
                  <StyledInfo>
                    <img src={item[0].cartImg.url} alt="" />
                    <div>
                      <h3>{item[0].name}</h3>
                      <p>${item[0].price}</p>
                    </div>
                  </StyledInfo>
                  <QuantityWrapper>
                    <p name={ctx.productsQuantity[i].id}>x{ctx.productsQuantity[i].counter}</p>
                  </QuantityWrapper>
                </ProductWrapper>
              ))
            : null}
          <PriceWrapper>
            <p>Total</p>
            <p>{ctx.totalPrice}$</p>
          </PriceWrapper>
          <PriceWrapper>
            <p>Shipping</p>
            <p>50$</p>
          </PriceWrapper>
          <PriceWrapper>
            <p>vat (included)</p>
            <p>{(ctx.totalPrice * 0.2).toFixed()}$</p>
          </PriceWrapper>
          <PriceWrapper>
            <p>Grand Total</p>
            <GrandTotal>{ctx.totalPrice + parseInt((ctx.totalPrice * 0.2).toFixed()) + 50}$</GrandTotal>
          </PriceWrapper>
          <StyledButton>Continue and pay</StyledButton>
        </FormWrapper>
      </Form>
    </Wrapper>
  );
};

Checkout.propTypes = {};

export default Checkout;
