import React, { useState } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";

const AdminLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { name: 'Tambah Event', path: '/admin/events/create', icon: '➕' },
    { name: 'Daftar Event', path: '/admin/events', icon: '📋' },
    { name: 'Status Pembayaran', path: '/admin/payments', icon: '💰' },
  ];

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <div style={{ 
        width: '250px', 
        background: '#2c3e50', 
        color: 'white',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <div style={{ padding: '20px', borderBottom: '1px solid #34495e' }}>
          <h2 style={{ margin: 0, fontSize: '18px' }}>ADMIN PAGE</h2>
        </div>
        
        <nav style={{ padding: '20px 0', flex: 1 }}>
          {menuItems.map((item) => (
            <button
              key={item.path}
              style={{ 
                width: '100%', 
                background: location.pathname === item.path ? '#3498db' : 'none', 
                border: 'none', 
                color: 'white', 
                padding: '12px 20px',
                textAlign: 'left',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                transition: 'background 0.3s'
              }}
              onClick={() => navigate(item.path)}
            >
              <span style={{ fontSize: '18px' }}>{item.icon}</span>
              <span>{item.name}</span>
            </button>
          ))}
        </nav>

        <div style={{ padding: '20px', borderTop: '1px solid #34495e' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '24px' }}>👤</span>
            <div>
              <div style={{ fontWeight: 'bold' }}>PROFILE</div>
              <div style={{ fontSize: '12px', opacity: '0.8' }}>Filled text</div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ flex: 1, background: '#ecf0f1' }}>
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;