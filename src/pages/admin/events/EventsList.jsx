import React from 'react';

const EventsList = ({ events, onDeleteEvent }) => {
  return (
    <div style={{ padding: '20px' }}>
      <header style={{ marginBottom: '30px' }}>
        <h1 style={{ color: '#333', marginBottom: '10px' }}>Daftar Event</h1>
        <p style={{ color: '#666' }}>Total {events.length} event ditemukan</p>
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
              <th style={{ padding: '12px 15px', textAlign: 'left', borderBottom: '1px solid #eee', fontWeight: '600' }}>ID</th>
              <th style={{ padding: '12px 15px', textAlign: 'left', borderBottom: '1px solid #eee', fontWeight: '600' }}>Nama Event</th>
              <th style={{ padding: '12px 15px', textAlign: 'left', borderBottom: '1px solid #eee', fontWeight: '600' }}>Tanggal Event</th>
              <th style={{ padding: '12px 15px', textAlign: 'left', borderBottom: '1px solid #eee', fontWeight: '600' }}>Harga Event</th>
              <th style={{ padding: '12px 15px', textAlign: 'left', borderBottom: '1px solid #eee', fontWeight: '600' }}>Status Event</th>
              <th style={{ padding: '12px 15px', textAlign: 'left', borderBottom: '1px solid #eee', fontWeight: '600' }}>Status Bayar</th>
              <th style={{ padding: '12px 15px', textAlign: 'left', borderBottom: '1px solid #eee', fontWeight: '600' }}>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {events.length === 0 ? (
              <tr>
                <td colSpan="7" style={{ textAlign: 'center', padding: '20px', color: '#666' }}>
                  Belum ada event. Silakan tambah event baru.
                </td>
              </tr>
            ) : (
              events.map((event) => (
                <tr key={event.id} style={{ borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '12px 15px' }}>{event.id}</td>
                  <td style={{ padding: '12px 15px' }}>
                    <strong>{event.name}</strong>
                    {event.description && (
                      <div style={{ fontSize: '12px', color: '#666', marginTop: '5px' }}>
                        {event.description}
                      </div>
                    )}
                  </td>
                  <td style={{ padding: '12px 15px' }}>{event.date}</td>
                  <td style={{ padding: '12px 15px' }}>₿{parseInt(event.price).toLocaleString()}</td>
                  <td style={{ padding: '12px 15px' }}>
                    <span style={{ 
                      padding: '4px 8px', 
                      borderRadius: '12px', 
                      fontSize: '12px',
                      fontWeight: '500',
                      backgroundColor: event.status === 'Active' ? '#d4edda' : '#fff3cd',
                      color: event.status === 'Active' ? '#155724' : '#856404'
                    }}>
                      {event.status}
                    </span>
                  </td>
                  <td style={{ padding: '12px 15px' }}>
                    <span style={{ 
                      padding: '4px 8px', 
                      borderRadius: '12px', 
                      fontSize: '12px',
                      fontWeight: '500',
                      backgroundColor: event.payment === 'Paid' ? '#d4edda' : '#fff3cd',
                      color: event.payment === 'Paid' ? '#155724' : '#856404'
                    }}>
                      {event.payment}
                    </span>
                  </td>
                  <td style={{ padding: '12px 15px' }}>
                    <button 
                      onClick={() => {
                        if (window.confirm(`Hapus event "${event.name}"?`)) {
                          onDeleteEvent(event.id);
                        }
                      }}
                      style={{
                        padding: '5px 10px',
                        background: '#dc3545',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontSize: '12px'
                      }}
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EventsList;