// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     // Simple validation - bisa diganti dengan auth real
//     if (email && password) {
//       navigate('/admin');  // Ganti dengan rute dashboard admin yang bena
//       } else {
//       alert('Harap isi email dan password!');
//     }
  
//     // const isAdmin = user.email.includes("admin@admin.com");
    
//     //     const token = jwt.sign(
//     //       { id_login: user.id_login, role: isAdmin ? "admin" : "user" },
//     //       "RAHASIA_KEY",
//     //       { expiresIn: "1h" }
//     //     );
    
//     //     res.json({
//     //       message: "Login berhasil",
//     //       token,
//     //       user: { ...user, role: isAdmin ? "admin" : "user" }
//     //     });
//     //     if (res.data.user.role === 'admin') {
//     //       navigate('pages/Dashboard.jsx');           // atau '/admin/dashboard'
//     //     } else {
//     //       navigate('home.jsx');           // atau '/user/dashboard'
//     //     }
//   };

//   return (
//     <div style={{ 
//       maxWidth: '400px', 
//       margin: '100px auto', 
//       padding: '2rem',
//       border: '1px solid #ddd',
//       borderRadius: '8px',
//       background: 'white',
//       boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
//     }}>
//       <h2 style={{ textAlign: 'center', marginBottom: '30px', color: '#333' }}>
//         Login to Admin Festify
//       </h2>
      
//       <form onSubmit={handleSubmit}>
//         <div style={{ marginBottom: '1rem' }}>
//           <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>E-mail</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Masukkan E-mail"
//             style={{ 
//               width: '100%', 
//               padding: '0.75rem', 
//               border: '1px solid #ddd', 
//               borderRadius: '4px',
//               fontSize: '16px',
//               boxSizing: 'border-box'
//             }}
//           />
//         </div>
//         <div style={{ marginBottom: '1rem' }}>
//           <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Password</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="Masukkan Password"
//             style={{ 
//               width: '100%', 
//               padding: '0.75rem', 
//               border: '1px solid #ddd', 
//               borderRadius: '4px',
//               fontSize: '16px',
//               boxSizing: 'border-box'
//             }}
//           />
//         </div>
        
//         <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '1.5rem' }}>
//           <a href="#" style={{ fontSize: '14px', color: '#3498db', textDecoration: 'none' }}>
//             Lupa Password?
//           </a>
//         </div>
        
//         <button
//           type="submit"
//           style={{
//             width: '100%',
//             padding: '0.75rem',
//             background: '#3498db',
//             color: 'white',
//             border: 'none',
//             borderRadius: '4px',
//             cursor: 'pointer',
//             fontSize: '16px',
//             fontWeight: '500'
//           }}
//         >
//           Lanjut
//         </button>
        
//         <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
//           <a href="#" style={{ fontSize: '14px', color: '#3498db', textDecoration: 'none' }}>
//             Daftar
//           </a>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Login;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     // Simple validation - bisa diganti dengan auth real
//     if (email && password) {
//       navigate('/admin');  // Ganti dengan rute dashboard admin yang bena
//       } else {
//       alert('Harap isi email dan password!');
//     }
  
//     // const isAdmin = user.email.includes("admin@admin.com");
    
//     //     const token = jwt.sign(
//     //       { id_login: user.id_login, role: isAdmin ? "admin" : "user" },
//     //       "RAHASIA_KEY",
//     //       { expiresIn: "1h" }
//     //     );
    
//     //     res.json({
//     //       message: "Login berhasil",
//     //       token,
//     //       user: { ...user, role: isAdmin ? "admin" : "user" }
//     //     });
//     //     if (res.data.user.role === 'admin') {
//     //       navigate('pages/Dashboard.jsx');           // atau '/admin/dashboard'
//     //     } else {
//     //       navigate('home.jsx');           // atau '/user/dashboard'
//     //     }
//   };

//   return (
//     <div style={{ 
//       maxWidth: '400px', 
//       margin: '100px auto', 
//       padding: '2rem',
//       border: '1px solid #ddd',
//       borderRadius: '8px',
//       background: 'white',
//       boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
//     }}>
//       <h2 style={{ textAlign: 'center', marginBottom: '30px', color: '#333' }}>
//         Login to Admin Festify
//       </h2>
      
//       <form onSubmit={handleSubmit}>
//         <div style={{ marginBottom: '1rem' }}>
//           <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>E-mail</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Masukkan E-mail"
//             style={{ 
//               width: '100%', 
//               padding: '0.75rem', 
//               border: '1px solid #ddd', 
//               borderRadius: '4px',
//               fontSize: '16px',
//               boxSizing: 'border-box'
//             }}
//           />
//         </div>
//         <div style={{ marginBottom: '1rem' }}>
//           <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Password</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="Masukkan Password"
//             style={{ 
//               width: '100%', 
//               padding: '0.75rem', 
//               border: '1px solid #ddd', 
//               borderRadius: '4px',
//               fontSize: '16px',
//               boxSizing: 'border-box'
//             }}
//           />
//         </div>
        
//         <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '1.5rem' }}>
//           <a href="#" style={{ fontSize: '14px', color: '#3498db', textDecoration: 'none' }}>
//             Lupa Password?
//           </a>
//         </div>
        
//         <button
//           type="submit"
//           style={{
//             width: '100%',
//             padding: '0.75rem',
//             background: '#3498db',
//             color: 'white',
//             border: 'none',
//             borderRadius: '4px',
//             cursor: 'pointer',
//             fontSize: '16px',
//             fontWeight: '500'
//           }}
//         >
//           Lanjut
//         </button>
        
//         <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
//           <a href="#" style={{ fontSize: '14px', color: '#3498db', textDecoration: 'none' }}>
//             Daftar
//           </a>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Login;
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate();
  const location = useLocation();

  // Ambil redirect parameter (?redirect=/event/123)
  const redirectTo = new URLSearchParams(location.search).get('redirect') || '/';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (!email || !password) {
      setError('Harap isi email dan password!');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/login', {  // ← INI YANG BENAR
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email.trim(),
          password,
        }),
      });

      const data = await response.json();

      if (response.ok && data.token) {
        // Simpan token
        localStorage.setItem('token', data.token);

        // Redirect sesuai role
        if (data.user?.role === 'admin') {
          navigate('/admin');
        } else {
          navigate(decodeURIComponent(redirectTo)); // balik ke event detail atau home
        }
      } else {
        setError(data.error || data.message || 'Email atau password salah');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError('Gagal terhubung ke server. Periksa koneksi internet atau server.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      maxWidth: '420px',
      margin: '80px auto',
      padding: '2.5rem',
      background: 'white',
      borderRadius: '12px',
      boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
      fontFamily: 'system-ui, sans-serif'
    }}>
      <h2 style={{
        textAlign: 'center',
        marginBottom: '2rem',
        fontSize: '28px',
        fontWeight: '700',
        color: '#1a1a1a'
      }}>
        Login ke Festify
      </h2>

      {error && (
        <div style={{
          background: '#fee',
          color: '#c33',
          padding: '12px 16px',
          borderRadius: '8px',
          marginBottom: '20px',
          fontSize: '14px',
          textAlign: 'center',
          border: '1px solid #fcc'
        }}>
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '1.2rem' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#333' }}>
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="contoh@email.com"
            required
            disabled={loading}
            style={{
              width: '100%',
              padding: '12px 16px',
              border: '1px solid #ccc',
              borderRadius: '8px',
              fontSize: '16px',
              boxSizing: 'border-box'
            }}
          />
        </div>

        <div style={{ marginBottom: '1.2rem' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#333' }}>
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            required
            disabled={loading}
            style={{
              width: '100%',
              padding: '12px 16px',
              border: '1px solid #ccc',
              borderRadius: '8px',
              fontSize: '16px',
              boxSizing: 'border-box'
            }}
          />
        </div>

        <div style={{ textAlign: 'right', marginBottom: '1.5rem' }}>
          <a href="#" style={{ color: '#3498db', fontSize: '14px', textDecoration: 'none' }}>
            Lupa password?
          </a>
        </div>

        <button
          type="submit"
          disabled={loading}
          style={{
            width: '100%',
            padding: '14px',
            background: '#3498db',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '17px',
            fontWeight: '600',
            cursor: loading ? 'not-allowed' : 'pointer',
            opacity: loading ? 0.7 : 1
          }}
        >
          {loading ? 'Memproses...' : 'Masuk'}
        </button>

        <p style={{ textAlign: 'center', marginTop: '1.5rem', color: '#666', fontSize: '14px' }}>
          Belum punya akun?{' '}
          <a href="/register" style={{ color: '#3498db', fontWeight: '600', textDecoration: 'none' }}>
            Daftar di sini
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;