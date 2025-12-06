// src/pages/admin/Transactions.jsx
import { useState, useEffect } from "react";

export default function Transactions() {
  const [transaksi, setTransaksi] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/tr", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    })
      .then(r => r.json())
      .then(setTransaksi);
  }, []);

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-8">Semua Transaksi</h1>
      <div className="space-y-6">
        {transaksi.map((t) => (
          <div key={t.id_transaksi} className="bg-white p-6 rounded-xl shadow">
            <p><strong>User:</strong> {t.user?.username} ({t.user?.email})</p>
            <p><strong>Event:</strong> {t.tiket?.event?.nama_event}</p>
            <p><strong>Tiket:</strong> {t.tiket?.tipe_tiket} × {t.jumlah}</p>
            <p><strong>Total:</strong> Rp {t.total_harga.toLocaleString()}</p>
            <p className="text-sm text-gray-500">
              {new Date(t.createdAt).toLocaleString("id-ID")}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}