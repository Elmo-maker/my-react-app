import { useParams, useNavigate } from "react-router-dom";
import events from "../data/events";
import Navbar from "../components/Navbar"; // Diperlukan untuk halaman penuh
import Footer from "../components/Footer"; // Diperlukan untuk halaman penuh
import { Calendar, MapPin, Tag, ArrowRight } from "lucide-react"; // Ikon modern

export default function EventDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Logika untuk menemukan event
  const event = events.find((e) => e.id === parseInt(id));

  if (!event) {
    return (
        <div className="bg-gray-950 text-white min-h-screen pt-24 text-center">
            <p className="text-xl">Event tidak ditemukan. Kembali ke <a href="/" className="text-indigo-400 hover:underline">beranda</a>.</p>
        </div>
    );
  }

  return (
    <>
        <Navbar />
        {/* Kontainer Utama: Tema Gelap */}
        <div className="bg-gray-950 text-white min-h-screen pt-24 pb-16">
            <div className="max-w-6xl mx-auto px-6">
                
                {/* Gambar & Judul */}
                <div className="mb-8 relative">
                    <img 
                        src={event.img} 
                        alt={event.title}
                        className="w-full h-96 object-cover rounded-xl shadow-2xl shadow-gray-900/50" 
                    />
                    
                    {/* Judul Besar di atas gambar (Opsional, tapi keren) */}
                    <div className="absolute inset-0 bg-black/30 rounded-xl flex items-end p-8">
                        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tighter leading-none drop-shadow-lg">
                            {event.title}
                        </h1>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-10">
                    
                    {/* Kolom Kiri: Deskripsi & Detail */}
                    <div className="md:col-span-2">
                        <h2 className="text-3xl font-bold mb-4 border-b border-gray-800 pb-2 text-indigo-400">
                            Deskripsi Event
                        </h2>
                        <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                            {event.desc || "Deskripsi event ini belum tersedia. Mohon cek detailnya di website resmi penyelenggara."}
                        </p>

                        <div className="mt-8 p-6 bg-gray-800 rounded-xl border border-gray-700 space-y-4">
                            <h3 className="text-2xl font-bold text-white mb-4 flex items-center space-x-2">
                                Detail Penting
                            </h3>
                            
                            {/* Tanggal */}
                            <p className="text-lg font-semibold text-gray-300 flex items-center space-x-3">
                                <Calendar size={20} className="text-indigo-400" />
                                <span>Tanggal:</span>
                                <span className="font-bold text-white">{event.date}</span>
                            </p>

                            {/* Lokasi */}
                            <p className="text-lg font-semibold text-gray-300 flex items-center space-x-3">
                                <MapPin size={20} className="text-indigo-400" />
                                <span>Lokasi:</span>
                                <span className="font-bold text-white">{event.location}</span>
                            </p>
                        </div>
                    </div>

                    {/* Kolom Kanan: Pembelian Tiket (Sticky) */}
                    <div className="md:col-span-1 md:sticky md:top-28 self-start">
                        <div className="p-6 bg-gray-800 rounded-xl shadow-2xl border-t-4 border-indigo-600">
                            
                            {/* Harga */}
                            <p className="text-xl font-bold mb-4 flex items-center space-x-3 text-indigo-400">
                                <Tag size={24} />
                                <span>Harga Tiket Mulai:</span>
                            </p>
                            <p className="text-4xl font-extrabold text-white mb-6">
                                Rp {event.price.toLocaleString()}
                            </p>

                            {/* Tombol Beli Tiket */}
                            <button
                                onClick={() => navigate("/checkout", { state: { event } })}
                                className="w-full mt-4 bg-indigo-600 text-white font-semibold 
                                           px-6 py-4 rounded-lg text-lg 
                                           hover:bg-indigo-500 transition duration-300 transform 
                                           shadow-lg shadow-indigo-600/30 flex items-center justify-center space-x-2"
                            >
                                <span>Beli Tiket Sekarang</span>
                                <ArrowRight size={20} />
                            </button>
                            
                            {/* Catatan Kecil */}
                            <p className="text-xs text-gray-500 mt-4 text-center">
                                *Harga dapat berubah sewaktu-waktu dan belum termasuk pajak.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </>
  );
}