import React from 'react';

const PaymentsList = () => {
  const payments = [
    { id: 'INV-001', event: 'Tech Conference', customer: 'John Doe', amount: '₿500,000', status: 'Paid', date: '2024-01-10' },
    { id: 'INV-002', event: 'Music Festival', customer: 'Jane Smith', amount: '₿350,000', status: 'Pending', date: '2024-01-09' },
    { id: 'INV-003', event: 'Art Exhibition', customer: 'Bob Johnson', amount: '₿200,000', status: 'Paid', date: '2024-01-08' },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <header style={{ marginBottom: '30px' }}>
        <h1 style={{ color: '#333', marginBottom: '10px' }}>Status Pembayaran</h1>
        <p style={{ color: '#666' }}>Kelola status pembayaran untuk semua event</p>
      </header>

      <div style={{ 
        background: 'white', 
        borderRadius: '8px', 
        overflow: 'hidden', 
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)' 
      }}>
        <table style={{ 
          width: '100%', 
          borderCollapse: 'collapse'
        }}>
          <thead>
            <tr style={{ backgroundColor: '#f8f9fa' }}>
              <th style={{ padding: '12px 15px', textAlign: 'left', borderBottom: '1px solid #eee', fontWeight: '600' }}>ID Invoice</th>
              <th style={{ padding: '12px 15px', textAlign: 'left', borderBottom: '1px solid #eee', fontWeight: '600' }}>Nama Event</th>
              <th style={{ padding: '12px 15px', textAlign: 'left', borderBottom: '1px solid #eee', fontWeight: '600' }}>Customer</th>
              <th style={{ padding: '12px 15px', textAlign: 'left', borderBottom: '1px solid #eee', fontWeight: '600' }}>Amount</th>
              <th style={{ padding: '12px 15px', textAlign: 'left', borderBottom: '1px solid #eee', fontWeight: '600' }}>Status</th>
              <th style={{ padding: '12px 15px', textAlign: 'left', borderBottom: '1px solid #eee', fontWeight: '600' }}>Tanggal</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment) => (
              <tr key={payment.id} style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '12px 15px' }}>{payment.id}</td>
                <td style={{ padding: '12px 15px' }}>{payment.event}</td>
                <td style={{ padding: '12px 15px' }}>{payment.customer}</td>
                <td style={{ padding: '12px 15px' }}>{payment.amount}</td>
                <td style={{ padding: '12px 15px' }}>
                  <span style={{ 
                    padding: '4px 8px', 
                    borderRadius: '12px', 
                    fontSize: '12px',
                    fontWeight: '500',
                    backgroundColor: payment.status === 'Paid' ? '#d4edda' : '#fff3cd',
                    color: payment.status === 'Paid' ? '#155724' : '#856404'
                  }}>
                    {payment.status}
                  </span>
                </td>
                <td style={{ padding: '12px 15px' }}>{payment.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentsList;