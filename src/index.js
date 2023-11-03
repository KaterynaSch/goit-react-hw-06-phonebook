import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'components/ClobalStyle';
import { Provider } from 'react-redux';
import { persistor, store } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';

const theme = {
  colors: {
    white: '#fff',
    lableColor: '#434455',
    accentColor: '#5ad9bb',
    borderColor: '#8e8f99',
    secondaryColor: '#27a688',
    errorColor: '#d06a31',
  },
  radius: {   
    m: '8px',
    l: '16px',
  },
  spacing: value => `${value *4}px`
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <PersistGate persistor={persistor} loading={null}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <App /> 
        <GlobalStyle/>
      </ThemeProvider>
      </Provider> 
    </PersistGate>     
  </React.StrictMode>
);