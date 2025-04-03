import React, { useState } from 'react';
import axios from 'axios';

const RegisterPayment = () => {
  const [paymentData, setPaymentData] = useState({
    amount: '',
    date: '',
    description: ''
  });

  const handleChange = (e) => {
    setPaymentData({
      ...paymentData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/pagos', paymentData);
      alert('Pago registrado exitosamente');
    } catch (error) {
      console.error('Error registrando el pago', error);
      alert('Error registrando el pago');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Monto:</label>
        <input type="number" name="amount" value={paymentData.amount} onChange={handleChange} required />
      </div>
      <div>
        <label>Fecha:</label>
        <input type="date" name="date" value={paymentData.date} onChange={handleChange} required />
      </div>
      <div>
        <label>Descripción:</label>
        <input type="text" name="description" value={paymentData.description} onChange={handleChange} required />
      </div>
      <button type="submit">Registrar Pago</button>
    </form>
  );
};

export default RegisterPayment;
