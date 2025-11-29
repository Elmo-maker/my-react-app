import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react"; // Tambahkan import useState
import Navbar from "../components/Navbar"; 
import Footer from "../components/Footer"; 
import { CheckCircle, DollarSign, QrCode, Loader2, CircleCheck } from "lucide-react"; // Import ikon tambahan

export default function Payment() {
  const { state } = useLocation();
  const navigate = useNavigate();
    
    // State untuk mengontrol pop-up dan loading
    const [isConfirming, setIsConfirming] = useState(false); 
    
  if (!state || !state.totalPrice || !state.event || !state.form) {
    return (
        <div className="bg-gray-950 text-white min-h-screen pt-24 text-center">
            <p className="text-xl">Error: Data transaksi tidak ditemukan. Kembali ke <a href="/" className="text-indigo-400 hover:underline">beranda</a>.</p>
        </div>
    );
  }

  const { event, totalPrice, ticketCount, form } = state;

  // Handler baru untuk menampilkan pop-up dan navigasi
  const handleConfirmation = () => {
    setIsConfirming(true);
    
    // Simulasi waktu proses 2.5 detik sebelum navigasi
    setTimeout(() => {
        setIsConfirming(false); // Opsional, tutup modal
        navigate("/confirmation", { 
            state: { 
                ...state, 
                paymentMethod: "QRIS" 
            } 
        });
    }, 2500); 
  };

  return (
    <>
        <Navbar />
        {/* Kontainer Utama: Tema Gelap */}
        <div className="bg-gray-950 text-white min-h-screen pt-24 pb-16">
            <div className="max-w-xl mx-auto px-6 py-8 bg-gray-900 rounded-xl shadow-2xl border border-indigo-700/50">
                
                {/* Judul Utama */}
                <div className="text-center mb-8">
                    <QrCode size={48} className="text-indigo-400 mx-auto mb-3" />
                    <h2 className="text-3xl font-bold text-white mb-2">Selesaikan Pembayaran</h2>
                    <p className="text-gray-400">Gunakan metode pembayaran QRIS untuk proses instan.</p>
                </div>

                {/* Ringkasan Transaksi */}
                <div className="p-4 bg-gray-800 rounded-lg mb-6 border border-gray-700">
                    <p className="text-lg font-semibold text-gray-300 mb-1">{event.title} ({ticketCount} Tiket)</p>
                    <div className="flex justify-between items-center border-t border-gray-700 pt-2">
                        <p className="text-xl font-bold text-white flex items-center space-x-2">
                            <DollarSign size={20} className="text-indigo-400" />
                            <span>Total Tagihan:</span>
                        </p>
                        <p className="text-3xl font-extrabold text-indigo-400">
                            Rp {totalPrice.toLocaleString()}
                        </p>
                    </div>
                </div>

                {/* Kode QRIS */}
                <div className="text-center p-6 bg-gray-800 rounded-xl border border-indigo-500/50 mb-6">
                    <h3 className="text-2xl font-bold mb-4 text-white">Scan QRIS Ini</h3>
                    
                    {/* Gambar QRIS */}
                    <img
                        src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=QRIS-DUMMY"
                        alt="QRIS Payment Code"
                        className="mx-auto mb-6 rounded-lg border-4 border-white shadow-xl"
                    />
                    
                    <p className="text-gray-300 font-light max-w-sm mx-auto">
                        Buka aplikasi pembayaran (seperti Dana, GoPay, OVO, Bank Mobile) dan scan kode QR di atas untuk menyelesaikan Rp {totalPrice.toLocaleString()}.
                    </p>
                </div>
                
                {/* Tombol Konfirmasi / Selesai */}
                 <button
                    onClick={handleConfirmation}
                    disabled={isConfirming} // Menonaktifkan tombol saat pop-up muncul
                    className={`w-full mt-4 text-white font-bold py-3 rounded-lg text-lg transition duration-300 transform 
                                ${isConfirming 
                                    ? 'bg-green-700 cursor-not-allowed opacity-80' 
                                    : 'bg-green-600 hover:bg-green-500 shadow-lg shadow-green-600/30'}`
                                }
                 >
                    {isConfirming ? (
                        <span className="flex items-center justify-center space-x-2">
                            <Loader2 size={20} className="animate-spin" />
                            <span>Memproses Konfirmasi...</span>
                        </span>
                    ) : (
                        <span className="flex items-center justify-center space-x-2">
                            <CheckCircle size={20} />
                            <span>Saya Sudah Membayar</span>
                        </span>
                    )}
                 </button>
            </div>
        </div>
        
        {/* MODAL / POP-UP KONFIRMASI (NEW) */}
        {isConfirming && (
            <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 transition-opacity duration-300">
                <div className="bg-gray-800 p-8 rounded-xl shadow-2xl text-center max-w-sm w-full border border-indigo-600/50 transform scale-100 transition-transform duration-300">
                    <CircleCheck size={60} className="text-green-500 mx-auto mb-4 animate-pulse" />
                    <h3 className="text-2xl font-bold text-white mb-2">Konfirmasi Terkirim!</h3>
                    <p className="text-gray-300">Sistem sedang memproses konfirmasi pembayaran Anda.</p>
                    <p className="text-sm text-indigo-400 mt-3">Anda akan diarahkan ke halaman berikutnya dalam beberapa detik...</p>
                </div>
            </div>
        )}
    </>
  );
}