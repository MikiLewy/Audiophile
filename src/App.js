import React from 'react';
import { GlobalStyles } from 'assets/styles/GlobalStyles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import Home from 'pages/Home/Home';
import Category from 'pages/Category/Category';
import ProductDetail from 'pages/ProductDetail/ProductDetail';
import ProductsProvider from 'providers/ProductsProvider';
import Checkout from 'pages/Checkout/Checkout';

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <ProductsProvider>
          <MainTemplate>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/:category" element={<Category />} />
              <Route path="/:category/:id" element={<ProductDetail />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </MainTemplate>
        </ProductsProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
