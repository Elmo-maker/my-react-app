import React, { useState } from 'react';
import Swal from 'sweetalert2';

const CreateEvent = ({ onAddEvent }) => {
  const [eventData, setEventData] = useState({
    name: '',
    date: '',
    description: '',
    price: ''
  });

  const handleChange = (e) => {
    setEventData({
      ...eventData,
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!eventData.name || !eventData.date || !eventData.price) {
      alert('Harap isi semua field yang wajib!');
      return;
    }

    onAddEvent(eventData);
    
    setEventData({
      name: '',
      date: '',
      description: '',
      price: ''
    });

    Swal.fire({
  title: "Good job!",
  text: "event berhasil ditambahkan",
  icon: "success"
});
  };

  const handleReset = () => {
    setEventData({
      name: '',
      date: '',
      description: '',
      price: ''
    });
  };

  return (
    <div style={{ padding: '20px' }}>
      <header style={{ marginBottom: '30px' }}>
        <h1 style={{ color: '#333', marginBottom: '10px' }}>Tambah Event</h1>
        <p style={{ color: '#666' }}>Buat event baru untuk ditampilkan di platform</p>
      </header>

      <div style={{ maxWidth: '600px' }}>
        <form onSubmit={handleSubmit} style={{ 
          background: 'white', 
          padding: '30px', 
          borderRadius: '8px', 
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <div style={{ marginBottom: '25px' }}>
            <h2 style={{ color: '#333', marginBottom: '10px', fontSize: '18px' }}>Nama Event *</h2>
            <input
              type="text"
              name="name"
              value={eventData.name}
              onChange={handleChange}
              placeholder="Masukkan nama event..."
              style={{ 
                width: '100%', 
                padding: '12px', 
                border: '1px solid #ddd', 
                borderRadius: '4px', 
                fontSize: '16px',
                boxSizing: 'border-box'
              }}
              required
            />
          </div>

          <div style={{ marginBottom: '25px' }}>
            <h2 style={{ color: '#333', marginBottom: '10px', fontSize: '18px' }}>Tanggal Event *</h2>
            <input
              type="date"
              name="date"
              value={eventData.date}
              onChange={handleChange}
              style={{ 
                width: '100%', 
                padding: '12px', 
                border: '1px solid #ddd', 
                borderRadius: '4px', 
                fontSize: '16px',
                boxSizing: 'border-box'
              }}
              required
            />
          </div>

          <div style={{ marginBottom: '25px' }}>
            <h2 style={{ color: '#333', marginBottom: '10px', fontSize: '18px' }}>Deskripsi Event</h2>
            <textarea
              name="description"
              value={eventData.description}
              onChange={handleChange}
              placeholder="Masukkan deskripsi event..."
              style={{ 
                width: '100%', 
                padding: '12px', 
                border: '1px solid #ddd', 
                borderRadius: '4px', 
                fontSize: '16px',
                boxSizing: 'border-box',
                minHeight: '100px',
                resize: 'vertical'
              }}
              rows="4"
            />
          </div>

          <div style={{ marginBottom: '25px' }}>
            <h2 style={{ color: '#333', marginBottom: '10px', fontSize: '18px' }}>Harga Event *</h2>
            <input
              type="number"
              name="price"
              value={eventData.price}
              onChange={handleChange}
              placeholder="Masukkan harga event..."
              style={{ 
                width: '100%', 
                padding: '12px', 
                border: '1px solid #ddd', 
                borderRadius: '4px', 
                fontSize: '16px',
                boxSizing: 'border-box'
              }}
              required
            />
          </div>

          <div style={{ display: 'flex', gap: '10px', marginTop: '30px' }}>
            <button 
              type="submit"
              style={{
                padding: '12px 24px',
                background: '#3498db',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '16px'
              }}
            >
              Tambah Event
            </button>
            <button 
              type="button"
              onClick={handleReset}
              style={{
                padding: '12px 24px',
                background: '#95a5a6',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '16px'
              }}
            >
              Reset Form
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateEvent;