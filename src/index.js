import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

//component 
import Navbar from './components/Navbar/Navbar'
import Content from './components/Content/Content1';
import DonationNow from './components/DonateNow/DonateNow'

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Content />
    <DonationNow />
  </React.StrictMode>,
  document.getElementById('root')
);

