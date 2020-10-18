import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';

import NavBar from './Components/NavBar';


import './styles/global/styles.css';


export default function App () {
  return (
    <BrowserRouter>
      <NavBar />
     
      <Routes />
    </BrowserRouter>
  )
}

