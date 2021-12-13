import React from 'react';
import headphones from 'assets/images/shared/headphones.png';
import speakers from 'assets/images/shared/speakers.png';
import earphones from 'assets/images/shared/earphones.png';
import shadow from 'assets/images/shared/shadow.png';
import arrow from 'assets/images/shared/desktop/icon-arrow-right.svg';
import { ImageWrapper, Wrapper, FeaturedItem } from './FeaturedProducts.styles';
import { Link } from 'react-router-dom';
const FeaturedProducts = () => {
  return (
    <Wrapper>
      <FeaturedItem as={Link} to="/headphones">
        <ImageWrapper>
          <img src={headphones} alt="" />
          <img src={shadow} alt="" />
        </ImageWrapper>
        <h4>HeadPhones</h4>
        <div>
          <p>Shop</p>
          <img src={arrow} alt="" />
        </div>
      </FeaturedItem>
      <FeaturedItem as={Link} to="/speakers">
        <ImageWrapper>
          <img src={speakers} alt="" />
          <img src={shadow} alt="" />
        </ImageWrapper>
        <h4>Speakers</h4>
        <div>
          <p>Shop</p>
          <img src={arrow} alt="" />
        </div>
      </FeaturedItem>
      <FeaturedItem as={Link} to="/earphones">
        <ImageWrapper>
          <img src={earphones} alt="" />
          <img src={shadow} alt="" />
        </ImageWrapper>
        <h4>Earphones</h4>
        <div>
          <p>Shop</p>
          <img src={arrow} alt="" />
        </div>
      </FeaturedItem>
    </Wrapper>
  );
};

export default FeaturedProducts;
