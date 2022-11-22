import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

var myCheese = { name : 'Camembert', smellFactor: 'Extreme pong', price : '3.50' };

root.render(
  <App message="Boss" cheese={myCheese}/>
);
