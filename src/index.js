/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import MyContext, { MyContextProvider } from './contexts/MyContext';

ReactDOM.render(
  <MyContextProvider>
  <App />
</MyContextProvider>,

  document.querySelector('#root')
);
