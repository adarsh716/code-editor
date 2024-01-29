import React from 'react';
import { render } from "react-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ClerkProvider } from '@clerk/clerk-react';
import { BrowserRouter } from 'react-router-dom';

const root = document.getElementById("root");
render(
  <ClerkProvider publishableKey="pk_test_dW5pdGVkLXN3YW4tMzcuY2xlcmsuYWNjb3VudHMuZGV2JA">
      <BrowserRouter>
  <App />
  </BrowserRouter>
  </ClerkProvider>
  , root);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
