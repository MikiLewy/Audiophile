import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './Loader.styles';
const Loader = () => {
  return (
    <Wrapper className="lds-spinner">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </Wrapper>
  );
};

Loader.propTypes = {};

export default Loader;
