import React from 'react';

const Dashboard = ({ events }) => {
  const totalEvents = events.length;
  const pendingPayments = events.filter(event => event.payment === 'Pending').length;
  const completedPayments = events.filter(event => event.payment === 'Paid').length;

  return (
    <div style={{ padding: '20px' }}>
      <header style={{ marginBottom: '30px' }}>
        <h1 style={{ color: '#333', marginBottom: '10px' }}>ADMIN DASHBOARD</h1>
        <p style={{ color: '#666' }}>Welcome to Festify Event Management System</p>
      </header>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
        gap: '20px', 
        marginBottom: '30px' 
      }}>
        <div style={{ 
          padding: '20px', 
          background: 'white', 
          borderRadius: '8px', 
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          borderLeft: '4px solid #4CAF50'
        }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#666', fontSize: '14px' }}>Total Events</h3>
          <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#4CAF50' }}>
            {totalEvents}
          </div>
        </div>
        
        <div style={{ 
          padding: '20px', 
          background: 'white', 
          borderRadius: '8px', 
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          borderLeft: '4px solid #FF9800'
        }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#666', fontSize: '14px' }}>Pending Payments</h3>
          <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#FF9800' }}>
            {pendingPayments}
          </div>
        </div>
        
        <div style={{ 
          padding: '20px', 
          background: 'white', 
          borderRadius: '8px', 
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          borderLeft: '4px solid #2196F3'
        }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#666', fontSize: '14px' }}>Completed Payments</h3>
          <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#2196F3' }}>
            {completedPayments}
          </div>
        </div>
      </div>

      <div style={{ 
        background: 'white', 
        padding: '20px', 
        borderRadius: '8px', 
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <h2 style={{ marginBottom: '15px' }}>Recent Events</h2>
        {events.slice(-3).reverse().map(event => (
          <div key={event.id} style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            padding: '10px',
            borderBottom: '1px solid #eee'
          }}>
            <span style={{ fontWeight: '500' }}>{event.name}</span>
            <span style={{ color: '#666', fontSize: '14px' }}>{event.date}</span>
            <span style={{ 
              padding: '4px 8px', 
              borderRadius: '12px', 
              fontSize: '12px',
              backgroundColor: event.payment === 'Paid' ? '#d4edda' : '#fff3cd',
              color: event.payment === 'Paid' ? '#155724' : '#856404'
            }}>
              {event.payment}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;