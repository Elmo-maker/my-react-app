// src/pages/admin/Transactions.jsx
import { useState, useEffect } from "react";

export default function Transactions() {
  const [transaksi, setTransaksi] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/transaksi/semua", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((r) => {
        if (!r.ok) throw new Error("Gagal fetch transaksi");
        return r.json();
      })
      .then((data) => {
        console.log("DATA TRANSAKSI:", data);
        setTransaksi(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="p-8 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold mb-8">Semua Transaksi</h1>
        <div className="text-center text-gray-600">⏳ Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-8 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold mb-8">Semua Transaksi</h1>
        <div className="text-center text-red-600">❌ Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-8">Semua Transaksi</h1>

      {transaksi.length === 0 ? (
        <div className="text-center text-gray-500 py-10">
          Belum ada transaksi
        </div>
      ) : (
        <div className="space-y-6">
          {transaksi.map((t) => (
            <div key={t.id_transaksi} className="bg-white p-6 rounded-xl shadow">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-sm text-gray-500">Order ID</p>
                  <p className="font-mono font-bold">{t.orderId || t.order_id || '-'}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${t.status === 'paid' ? 'bg-green-100 text-green-700' :
                    t.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                  }`}>
                  {t.status?.toUpperCase() || 'PENDING'}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p><strong>Pembeli:</strong> {t.nama_pembeli || t.login?.username || '-'}</p>
                  <p><strong>Email:</strong> {t.email || t.login?.email || '-'}</p>
                  <p><strong>Telepon:</strong> {t.telepon || '-'}</p>
                </div>
                <div>
                  <p><strong>Event:</strong> {t.event?.nama_event || t.tiket?.event?.nama_event || '-'}</p>
                  <p><strong>Jumlah Tiket:</strong> {t.jumlah_tiket || t.jumlah || 0}</p>
                  <p><strong>Total:</strong> Rp {t.total_harga?.toLocaleString('id-ID') || 0}</p>
                </div>
              </div>

              <p className="text-sm text-gray-500 mt-4">
                📅 {new Date(t.tanggal_transaksi || t.createdAt).toLocaleString("id-ID")}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
