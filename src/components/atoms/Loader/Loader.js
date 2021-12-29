import React from 'react';
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

export default Loader;
