import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Ticket, DollarSign, User, Mail, Phone, ShoppingCart, Loader2 } from "lucide-react";

export default function Checkout() {
  const { state } = useLocation();
  const event = state?.event || state;
  const navigate = useNavigate();

  const [ticketCount, setTicketCount] = useState(1);
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [isLoading, setIsLoading] = useState(false);

  const totalPrice = (ticketCount * event.price) || 0;
  
  if (!event) {
    return (
      <div className="bg-gray-950 text-white min-h-screen pt-24 text-center">
        <p className="text-xl">Event tidak ditemukan. Kembali ke <a href="/" className="text-indigo-400 hover:underline">beranda</a>.</p>
      </div>
    );
  }

  // Load Midtrans Snap script
  useEffect(() => {
    const midtransScriptUrl = 'https://app.sandbox.midtrans.com/snap/snap.js';
    
    const scriptTag = document.createElement('script');
    scriptTag.src = midtransScriptUrl;
    scriptTag.setAttribute('data-client-key', import.meta.env.VITE_MIDTRANS_CLIENT_KEY);
    
    document.body.appendChild(scriptTag);

    return () => {
      document.body.removeChild(scriptTag);
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const orderId = `ORDER-${Date.now()}`;

      // Data untuk backend
      const transactionData = {
        orderId: orderId,
        grossAmount: totalPrice,
        customerDetails: {
          first_name: form.name,
          email: form.email,
          phone: form.phone
        },
        itemDetails: [{
          id: event.id || 'event-1',
          price: event.price,
          quantity: ticketCount,
          name: event.title
        }]
      };

      // Panggil backend untuk generate token
      const response = await fetch('http://localhost:5000/api/payment/create-transaction', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(transactionData)
      });

      const data = await response.json();

      if (data.success && data.token) {
        window.snap.pay(data.token, {
          onSuccess: function(result) {
            navigate('/payment/success', {
              state: {
                orderId: orderId,
                event: event,
                ticketCount: ticketCount,
                totalPrice: totalPrice,
                form: form
              }
            });
          },
          onPending: function(result) {
            navigate('/payment/pending', {
              state: {
                orderId: orderId,
                event: event,
                ticketCount: ticketCount,
                totalPrice: totalPrice
              }
            });
          },
          onError: function(result) {
            alert('Pembayaran gagal. Silakan coba lagi.');
            setIsLoading(false);
          },
          onClose: function() {
            setIsLoading(false);
          }
        });
      } else {
        throw new Error(data.message || 'Gagal membuat transaksi');
      }

    } catch (error) {
      alert('Terjadi kesalahan: ' + error.message);
      setIsLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="bg-gray-950 text-white min-h-screen pt-24 pb-16">
        <div className="max-w-xl mx-auto px-6 py-8 bg-gray-900 rounded-xl shadow-2xl border border-gray-800">
          {/* --- TAMPILAN TIDAK DIUBAH --- */}
          <h2 className="text-3xl font-bold mb-6 border-b border-indigo-500/50 pb-2 text-indigo-400 flex items-center space-x-2">
            <ShoppingCart size={28} />
            <span>Konfirmasi Checkout</span>
          </h2>

          <div className="p-4 bg-gray-800 rounded-lg mb-6 border border-gray-700">
            <h3 className="text-xl font-bold mb-1 text-white">{event.title}</h3>
            <p className="text-sm text-gray-400">{event.date} | {event.location}</p>
            <p className="text-lg font-semibold text-gray-300 mt-3">
              Harga Satuan: <span className="text-white">Rp {event.price.toLocaleString()}</span>
            </p>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-semibold mb-2 text-gray-300 flex items-center space-x-2">
              <Ticket size={18} className="text-indigo-400" />
              <span>Jumlah Tiket:</span>
            </label>
            <input
              type="number"
              min="1"
              value={ticketCount}
              onChange={(e) => setTicketCount(parseInt(e.target.value) || 1)}
              className="bg-gray-800 border border-gray-700 p-3 w-full rounded-lg text-white focus:border-indigo-500 focus:ring-indigo-500"
              disabled={isLoading}
            />
          </div>

          <form onSubmit={handleSubmit}>
            <h3 className="text-2xl font-bold mb-4 border-b border-gray-800 pb-2 text-white">
              Detail Pembeli
            </h3>
            {/* --- INPUT FORM TIDAK DIUBAH --- */}
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2 text-gray-300 flex items-center space-x-2">
                <User size={18} className="text-indigo-400" />
                <span>Nama Lengkap:</span>
              </label>
              <input
                className="bg-gray-800 border border-gray-700 p-3 w-full rounded-lg text-white focus:border-indigo-500 focus:ring-indigo-500"
                required
                disabled={isLoading}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2 text-gray-300 flex items-center space-x-2">
                <Mail size={18} className="text-indigo-400" />
                <span>Email:</span>
              </label>
              <input
                type="email"
                className="bg-gray-800 border border-gray-700 p-3 w-full rounded-lg text-white focus:border-indigo-500 focus:ring-indigo-500"
                required
                disabled={isLoading}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-semibold mb-2 text-gray-300 flex items-center space-x-2">
                <Phone size={18} className="text-indigo-400" />
                <span>Nomor Telepon:</span>
              </label>
              <input
                type="tel"
                className="bg-gray-800 border border-gray-700 p-3 w-full rounded-lg text-white focus:border-indigo-500 focus:ring-indigo-500"
                required
                disabled={isLoading}
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
            </div>

            <div className="flex justify-between items-center p-4 bg-indigo-900/40 rounded-lg mb-6 border border-indigo-700">
              <p className="text-xl font-semibold text-white flex items-center space-x-2">
                <DollarSign size={24} className="text-indigo-400" />
                <span>Total Pembayaran:</span>
              </p>
              <p className="text-3xl font-extrabold text-indigo-400">
                Rp {totalPrice.toLocaleString()}
              </p>
            </div>

            <button 
              type="submit" 
              disabled={isLoading}
              className="bg-indigo-600 text-white w-full py-3 rounded-lg font-bold text-lg 
                         hover:bg-indigo-500 transition duration-300 transform 
                         shadow-lg shadow-indigo-600/30 disabled:opacity-50 
                         disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isLoading ? (
                <>
                  <Loader2 className="animate-spin mr-2" size={20} />
                  Memproses...
                </>
              ) : (
                'Lanjut ke Pembayaran'
              )}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
