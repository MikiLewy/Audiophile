import React from 'react';
import { GlobalStyles } from 'assets/styles/GlobalStyles';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import Nav from 'components/organisms/Nav/Nav';
import Home from 'pages/Home/Home';

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <div className="App">
          <Nav />
          <Home />
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
