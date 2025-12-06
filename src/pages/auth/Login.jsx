import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple validation - bisa diganti dengan auth real
    if (email && password) {
      navigate('/admin');  // Ganti dengan rute dashboard admin yang bena
      } else {
      alert('Harap isi email dan password!');
    }
  
    // const isAdmin = user.email.includes("admin@admin.com");
    
    //     const token = jwt.sign(
    //       { id_login: user.id_login, role: isAdmin ? "admin" : "user" },
    //       "RAHASIA_KEY",
    //       { expiresIn: "1h" }
    //     );
    
    //     res.json({
    //       message: "Login berhasil",
    //       token,
    //       user: { ...user, role: isAdmin ? "admin" : "user" }
    //     });
    //     if (res.data.user.role === 'admin') {
    //       navigate('pages/Dashboard.jsx');           // atau '/admin/dashboard'
    //     } else {
    //       navigate('home.jsx');           // atau '/user/dashboard'
    //     }
  };

  return (
    <div style={{ 
      maxWidth: '400px', 
      margin: '100px auto', 
      padding: '2rem',
      border: '1px solid #ddd',
      borderRadius: '8px',
      background: 'white',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ textAlign: 'center', marginBottom: '30px', color: '#333' }}>
        Login to Admin Festify
      </h2>
      
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>E-mail</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Masukkan E-mail"
            style={{ 
              width: '100%', 
              padding: '0.75rem', 
              border: '1px solid #ddd', 
              borderRadius: '4px',
              fontSize: '16px',
              boxSizing: 'border-box'
            }}
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Masukkan Password"
            style={{ 
              width: '100%', 
              padding: '0.75rem', 
              border: '1px solid #ddd', 
              borderRadius: '4px',
              fontSize: '16px',
              boxSizing: 'border-box'
            }}
          />
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '1.5rem' }}>
          <a href="#" style={{ fontSize: '14px', color: '#3498db', textDecoration: 'none' }}>
            Lupa Password?
          </a>
        </div>
        
        <button
          type="submit"
          style={{
            width: '100%',
            padding: '0.75rem',
            background: '#3498db',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: '500'
          }}
        >
          Lanjut
        </button>
        
        <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
          <a href="#" style={{ fontSize: '14px', color: '#3498db', textDecoration: 'none' }}>
            Daftar
          </a>
        </div>
      </form>
    </div>
  );
};

export default Login;