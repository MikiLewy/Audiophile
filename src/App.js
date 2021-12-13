import React from 'react';
import { GlobalStyles } from 'assets/styles/GlobalStyles';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <div className="App">
        <h1>Audiophile</h1>
      </div>
    </BrowserRouter>
  );
};

export default App;
