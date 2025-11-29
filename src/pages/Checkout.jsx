import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/Navbar"; // Diperlukan untuk halaman penuh
import Footer from "../components/Footer"; // Diperlukan untuk halaman penuh
import { Ticket, DollarSign, User, Mail, Phone, ShoppingCart } from "lucide-react"; // Ikon modern

export default function Checkout() {
  // Pastikan state event diambil dengan benar
  const { state } = useLocation();
  const event = state?.event || state; // Menyesuaikan dengan cara passing dari EventDetail

  const navigate = useNavigate();

  const [ticketCount, setTicketCount] = useState(1);
  const [form, setForm] = useState({ name: "", email: "", phone: "" });

  // Perhitungan Total Harga
  const totalPrice = (ticketCount * event.price) || 0;
  
  if (!event) {
    return (
        <div className="bg-gray-950 text-white min-h-screen pt-24 text-center">
            <p className="text-xl">Event tidak ditemukan. Kembali ke <a href="/" className="text-indigo-400 hover:underline">beranda</a>.</p>
        </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/payment", {
      state: {
        event,
        totalPrice: totalPrice,
        form,
        ticketCount: ticketCount,
      },
    });
  };

  return (
    <>
        <Navbar />
        {/* Kontainer Utama: Tema Gelap */}
        <div className="bg-gray-950 text-white min-h-screen pt-24 pb-16">
            <div className="max-w-xl mx-auto px-6 py-8 bg-gray-900 rounded-xl shadow-2xl border border-gray-800">
                
                {/* JUDUL */}
                <h2 className="text-3xl font-bold mb-6 border-b border-indigo-500/50 pb-2 text-indigo-400 flex items-center space-x-2">
                    <ShoppingCart size={28} />
                    <span>Konfirmasi Checkout</span>
                </h2>

                {/* RINGKASAN EVENT */}
                <div className="p-4 bg-gray-800 rounded-lg mb-6 border border-gray-700">
                    <h3 className="text-xl font-bold mb-1 text-white">{event.title}</h3>
                    <p className="text-sm text-gray-400">{event.date} | {event.location}</p>
                    <p className="text-lg font-semibold text-gray-300 mt-3">
                        Harga Satuan: <span className="text-white">Rp {event.price.toLocaleString()}</span>
                    </p>
                </div>
                
                {/* INPUT JUMLAH TIKET */}
                <div className="mb-6">
                    <label className="block text-sm font-semibold mb-2 text-gray-300 flex items-center space-x-2">
                        <Ticket size={18} className="text-indigo-400" />
                        <span>Jumlah Tiket:</span>
                    </label>
                    <input
                        type="number"
                        min="1"
                        value={ticketCount}
                        onChange={(e) => setTicketCount(parseInt(e.target.value))}
                        className="bg-gray-800 border border-gray-700 p-3 w-full rounded-lg text-white focus:border-indigo-500 focus:ring-indigo-500"
                    />
                </div>

                <form onSubmit={handleSubmit}>
                    <h3 className="text-2xl font-bold mb-4 border-b border-gray-800 pb-2 text-white">
                        Detail Pembeli
                    </h3>
                    
                    {/* INPUT NAMA */}
                    <div className="mb-4">
                        <label className="block text-sm font-semibold mb-2 text-gray-300 flex items-center space-x-2">
                            <User size={18} className="text-indigo-400" />
                            <span>Nama Lengkap:</span>
                        </label>
                        <input
                            className="bg-gray-800 border border-gray-700 p-3 w-full rounded-lg text-white focus:border-indigo-500 focus:ring-indigo-500"
                            required
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                        />
                    </div>

                    {/* INPUT EMAIL */}
                    <div className="mb-4">
                        <label className="block text-sm font-semibold mb-2 text-gray-300 flex items-center space-x-2">
                            <Mail size={18} className="text-indigo-400" />
                            <span>Email:</span>
                        </label>
                        <input
                            type="email"
                            className="bg-gray-800 border border-gray-700 p-3 w-full rounded-lg text-white focus:border-indigo-500 focus:ring-indigo-500"
                            required
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                        />
                    </div>

                    {/* INPUT PHONE */}
                    <div className="mb-6">
                        <label className="block text-sm font-semibold mb-2 text-gray-300 flex items-center space-x-2">
                            <Phone size={18} className="text-indigo-400" />
                            <span>Nomor Telepon:</span>
                        </label>
                        <input
                            type="tel"
                            className="bg-gray-800 border border-gray-700 p-3 w-full rounded-lg text-white focus:border-indigo-500 focus:ring-indigo-500"
                            required
                            onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        />
                    </div>

                    {/* TOTAL HARGA */}
                    <div className="flex justify-between items-center p-4 bg-indigo-900/40 rounded-lg mb-6 border border-indigo-700">
                        <p className="text-xl font-semibold text-white flex items-center space-x-2">
                            <DollarSign size={24} className="text-indigo-400" />
                            <span>Total Pembayaran:</span>
                        </p>
                        <p className="text-3xl font-extrabold text-indigo-400">
                            Rp {totalPrice.toLocaleString()}
                        </p>
                    </div>

                    {/* TOMBOL SUBMIT */}
                    <button 
                        type="submit" 
                        className="bg-indigo-600 text-white w-full py-3 rounded-lg font-bold text-lg 
                                   hover:bg-indigo-500 transition duration-300 transform 
                                   shadow-lg shadow-indigo-600/30"
                    >
                        Lanjut ke Pembayaran
                    </button>
                </form>
            </div>
        </div>
    </>
  );
}