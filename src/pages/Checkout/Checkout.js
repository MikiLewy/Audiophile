import React, { useState, useContext } from 'react';
import ReturnLink from 'components/atoms/ReturnLink/ReturnLink';
import FormField from 'components/molecules/FormField/FormField';
import { ProductsContext } from 'providers/ProductsProvider';
import { ProductWrapper, QuantityWrapper } from 'components/molecules/Cart/Cart.styles';
import {
  Wrapper,
  ContentWrapper,
  Form,
  Title,
  Subtitle,
  FormWrapper,
  PriceWrapper,
  StyledInfo,
  GrandTotal,
  StyledButton,
  InputWrapper,
  ErrorMessage,
} from './Checkout.styles';
import { Navigate } from 'react-router';
import { useForm } from 'react-hook-form';
import Modal from 'components/organisms/Modal/Modal';

const Checkout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cartsProducts, productsQuantity, totalPrice } = useContext(ProductsContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = () => setIsOpen(true);
  if (cartsProducts.length <= 0) return <Navigate to="/" />;
  return (
    <>
      <Wrapper>
        <ReturnLink />
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormWrapper>
            <Title>Checkout</Title>
            <ContentWrapper>
              <Subtitle>bililing details</Subtitle>
              <InputWrapper>
                <FormField id="name" label="name" placeholder="John Ward" {...register('name', { required: true })} />
                {errors.name && <ErrorMessage>This field is required</ErrorMessage>}
              </InputWrapper>
              <InputWrapper>
                <FormField id="email" label="email address" type="email" placeholder="john@gmail.com" {...register('email', { required: true })} />
                {errors.email && <ErrorMessage>This field is required</ErrorMessage>}
              </InputWrapper>
              <InputWrapper>
                <FormField id="phone" label="phone number" placeholder="+1 202-555-0136" {...register('phone', { required: true })} />
                {errors.phone && <ErrorMessage>This field is required</ErrorMessage>}
              </InputWrapper>
            </ContentWrapper>
            <ContentWrapper>
              <Subtitle>shipping info</Subtitle>
              <InputWrapper>
                <FormField id="Adress" label="Adress" placeholder="1137 Williams Avenue" {...register('address', { required: true })} />
                {errors.address && <ErrorMessage>This field is required</ErrorMessage>}
              </InputWrapper>
              <InputWrapper>
                <FormField id="zipCode" label="ZIP code" placeholder="10001" {...register('zipCode', { required: true })} />
                {errors.zipCode && <ErrorMessage>This field is required</ErrorMessage>}
              </InputWrapper>
              <InputWrapper>
                <FormField id="city" label="city" placeholder="New York" {...register('city', { required: true })} />
                {errors.city && <ErrorMessage>This field is required</ErrorMessage>}
              </InputWrapper>
              <InputWrapper>
                <FormField id="country" label="country" placeholder="United States" {...register('country', { required: true })} />
                {errors.country && <ErrorMessage>This field is required</ErrorMessage>}
              </InputWrapper>
            </ContentWrapper>
            <ContentWrapper>
              <Subtitle>payment details</Subtitle>
              <InputWrapper>
                <FormField
                  id="cash"
                  {...register('checkbox', { required: true })}
                  type="checkbox"
                  label="cash on delivery"
                  placeholder="united states"
                />
                {errors.checkbox && <ErrorMessage>This field is required</ErrorMessage>}
              </InputWrapper>
              <InputWrapper>
                <FormField id="e-money" label="e-money" disabled placeholder="Available soon" />
              </InputWrapper>
            </ContentWrapper>
          </FormWrapper>
          <FormWrapper>
            <h3>Summary</h3>
            {cartsProducts.length > 0
              ? cartsProducts.map((item, i) => (
                  <ProductWrapper key={item[0].id}>
                    <StyledInfo>
                      <img src={item[0].cartImg.url} alt="" />
                      <div>
                        <h3>{item[0].name}</h3>
                        <p>${item[0].price}</p>
                      </div>
                    </StyledInfo>
                    <QuantityWrapper>
                      <p name={productsQuantity[i].id}>x{productsQuantity[i].counter}</p>
                    </QuantityWrapper>
                  </ProductWrapper>
                ))
              : null}
            <PriceWrapper>
              <p>Total</p>
              <p>{totalPrice}$</p>
            </PriceWrapper>
            <PriceWrapper>
              <p>Shipping</p>
              <p>50$</p>
            </PriceWrapper>
            <PriceWrapper>
              <p>vat (included)</p>
              <p>{(totalPrice * 0.2).toFixed()}$</p>
            </PriceWrapper>
            <PriceWrapper>
              <p>Grand Total</p>
              <GrandTotal>{parseInt((totalPrice * 1.2).toFixed()) + 50}$</GrandTotal>
            </PriceWrapper>
            <StyledButton type="submit">Continue and pay</StyledButton>
          </FormWrapper>
        </Form>
      </Wrapper>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

Checkout.propTypes = {};

export default Checkout;
