import React, { useState } from 'react';
import axios from 'axios';

const ConsultPayment = () => {
  const [paymentId, setPaymentId] = useState('');
  const [paymentData, setPaymentData] = useState(null);

  const handleChange = (e) => {
    setPaymentId(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:8080/pagos/${paymentId}`);
      setPaymentData(response.data);
    } catch (error) {
      console.error('Error consultando el pago', error);
      alert('Error consultando el pago');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>ID del Pago:</label>
          <input type="text" value={paymentId} onChange={handleChange} required />
        </div>
        <button type="submit">Consultar Pago</button>
      </form>
      {paymentData && (
        <div>
          <h3>Detalles del Pago</h3>
          <p>Monto: {paymentData.amount}</p>
          <p>Fecha: {paymentData.date}</p>
          <p>Descripción: {paymentData.description}</p>
        </div>
      )}
    </div>
  );
};

export default ConsultPayment;
