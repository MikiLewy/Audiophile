import React from 'react';
import { GlobalStyles } from 'assets/styles/GlobalStyles';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import Home from 'pages/Home/Home';

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <MainTemplate>
          <Home />
        </MainTemplate>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
