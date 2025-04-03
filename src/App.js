// src/App.js
import React from 'react';
import RegisterPayment from './components/RegisterPayment';
import ConsultPayment from './components/ConsultPayment';

const App = () => {
  return (
    <div>
      <h1>Gestión de Pagos</h1>
      <RegisterPayment />
      <ConsultPayment />
    </div>
  );
};

export default App;
