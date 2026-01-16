import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Calendar, MapPin, Ticket, AlertCircle } from 'lucide-react';
import { API_BASE_URL } from '../config/api';

export default function MyTickets() {
  const [transaksi, setTransaksi] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const token = localStorage.getItem('token');
  const formatTanggal = (dateString) => {
    if (!dateString) return "-";
    const d = new Date(dateString);
    return d.toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  useEffect(() => {
    // Kalau belum login → langsung ke login
    if (!token) {
      navigate('/login?redirect=/history');
      return;
    }

    // Ambil riwayat transaksi
    fetch(`${API_BASE_URL}/transaksi/tr`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        if (!res.ok) {
          if (res.status === 401) {
            localStorage.removeItem('token');
            navigate('/login?redirect=/history');
            return;
          }
          throw new Error('Gagal mengambil data transaksi');
        }
        return res.json();
      })
      .then((data) => {
        console.log("DATA TRANSAKSI USER:", data);
        setTransaksi(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(err.message || 'Terjadi kesalahan');
        setLoading(false);
      });
  }, [token, navigate]);

  if (loading) {
    return (
      <div className="bg-gray-950 text-white min-h-screen flex items-center justify-center">
        <p className="text-xl">Memuat riwayat transaksi...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-gray-950 text-white min-h-screen flex items-center justify-center">
        <p className="text-red-400 text-xl">{error}</p>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="bg-gray-950 text-white min-h-screen pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-12 text-center text-indigo-400">
            Riwayat Tiket Saya
          </h1>

          {transaksi.length === 0 ? (
            <div className="text-center py-20">
              <AlertCircle size={80} className="mx-auto text-gray-600 mb-6" />
              <p className="text-xl text-gray-400">Belum ada transaksi tiket.</p>
              <button
                onClick={() => navigate('/')}
                className="mt-8 bg-indigo-600 hover:bg-indigo-500 px-8 py-4 rounded-lg text-lg font-semibold transition"
              >
                Cari Event Sekarang
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {transaksi.map((tr) => (
                <div
                  key={tr.id_transaksi}
                  className="bg-gray-800 rounded-xl overflow-hidden shadow-2xl border border-gray-700 hover:border-indigo-600 transition"
                >
                  <img
                    src={tr.event?.img || "/placeholder.jpg"}
                    alt={tr.event?.nama_event}
                    className="w-full h-48 object-cover"
                  />

                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3 text-indigo-400">
                      {tr.event?.nama_event || "Event Tidak Diketahui"}
                    </h3>

                    <div className="space-y-3 text-gray-300">
                      <p className="flex items-center space-x-3">
                        <Calendar size={18} />
                        <span>{formatTanggal(tr.event?.tanggal_event)}</span>
                      </p>
                      <p className="flex items-center space-x-3">
                        <MapPin size={18} />
                        <span>{tr.event?.lokasi || "-"}</span>
                      </p>
                      <p className="flex items-center space-x-3">
                        <Ticket size={18} />
                        <span>Jumlah: {tr.jumlah_tiket} tiket</span>
                      </p>
                      <p className="text-xl font-bold text-white mt-4">
                        Total: Rp {tr.total_harga?.toLocaleString('id-ID') || "0"}
                      </p>
                      <p className="text-sm text-gray-500 mt-2">
                        Tanggal beli: {formatTanggal(tr.tanggal_transaksi)}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-gray-700">
                      <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${tr.status === 'paid' || tr.status === 'success'
                        ? 'bg-green-900 text-green-300'
                        : tr.status === 'pending'
                          ? 'bg-yellow-900 text-yellow-300'
                          : 'bg-red-900 text-red-300'
                        }`}>
                        {tr.status?.toUpperCase() || 'PENDING'}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
