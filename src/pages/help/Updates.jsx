import { CheckCircle, Clock, Server, BarChart2, Zap } from "lucide-react"; 

export default function Updates() {
  return (
    // Kontainer Utama Dark Mode
    <div className="bg-gray-950 text-white min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-20">
        
        {/* Header Section */}
        <div className="text-center mb-16 border-b border-gray-800 pb-8">
            <Server size={48} className="text-indigo-400 mx-auto mb-4" />
            <h1 className="text-5xl font-extrabold tracking-tight mb-4">
                Status Sistem & Pembaruan FESTIFY
            </h1>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
                Halaman ini menampilkan status waktu nyata layanan kami, riwayat perbaikan,
                dan pembaruan yang akan datang. Kami berkomitmen pada performa terbaik.
            </p>
        </div>

        {/* 1. Status Sistem Saat Ini (Indikator Utama) */}
        <div className="bg-gray-900 p-8 rounded-xl border border-indigo-700/50 shadow-2xl mb-12">
            <h2 className="text-3xl font-extrabold text-white mb-4 flex items-center space-x-3">
                <CheckCircle size={32} className="text-green-500" />
                <span>Status Layanan Utama Saat Ini</span>
            </h2>
            
            {/* Indikator Status: Hijau untuk normal */}
            <div className="flex flex-col md:flex-row justify-between items-center bg-gray-800 p-5 rounded-lg border-l-4 border-green-500">
                <div className="flex items-center space-x-3">
                    <CheckCircle size={28} className="text-green-500" />
                    <div>
                        <p className="text-xl font-semibold text-white">Semua Layanan Beroperasi Normal</p>
                        <p className="text-gray-400 text-sm">Tidak ada gangguan yang dilaporkan dalam 90 hari terakhir.</p>
                    </div>
                </div>
                <div className="text-right mt-4 md:mt-0">
                    <div className="text-2xl font-bold text-indigo-400 flex items-center space-x-2">
                        <BarChart2 size={20} />
                        <span>99.99% Uptime</span>
                    </div>
                    <p className="text-gray-500 text-xs">Target kami adalah selalu online.</p>
                </div>
            </div>
        </div>

        {/* 2. Riwayat Perbaikan (Timeline/Log) */}
        <section className="mb-12">
            <h2 className="text-3xl font-bold text-indigo-400 mb-6 flex items-center space-x-3">
                <Clock size={28} />
                <span>Riwayat Pembaruan Terbaru</span>
            </h2>
            
            {/* Item Log Perbaikan */}
            <div className="space-y-4">
                <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-yellow-500/50 hover:bg-gray-700 transition duration-200">
                    <p className="text-sm font-medium text-yellow-400 mb-1">28 Nov 2025 | Peningkatan</p>
                    <p className="text-white font-semibold">Peningkatan Sistem Pembayaran</p>
                    <ul className="text-gray-400 list-disc ml-5 text-sm">
                        <li>Mengoptimalkan stabilitas gateway pembayaran.</li>
                        <li>Memperbaiki bug *timeout* saat volume transaksi tinggi.</li>
                    </ul>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-green-500/50 hover:bg-gray-700 transition duration-200">
                    <p className="text-sm font-medium text-green-400 mb-1">20 Nov 2025 | Perbaikan</p>
                    <p className="text-white font-semibold">Perbaikan Performa Event Detail</p>
                    <ul className="text-gray-400 list-disc ml-5 text-sm">
                        <li>Mengurangi waktu *load* halaman detail event sebesar 30%.</li>
                        <li>Optimisasi tampilan mobile untuk halaman checkout.</li>
                    </ul>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-green-500/50 hover:bg-gray-700 transition duration-200">
                    <p className="text-sm font-medium text-green-400 mb-1">15 Nov 2025 | Rilis Fitur</p>
                    <p className="text-white font-semibold">Rilis Notifikasi Event Baru</p>
                    <ul className="text-gray-400 list-disc ml-5 text-sm">
                        <li>Penambahan fitur notifikasi untuk event yang sesuai preferensi pengguna.</li>
                    </ul>
                </div>
            </div>
        </section>

        {/* 3. Pembaruan Mendatang (Future Plans) */}
        <section>
            <h2 className="text-3xl font-bold text-indigo-400 mb-6 flex items-center space-x-3">
                <Zap size={28} />
                <span>Pembaruan dan Peningkatan Mendatang</span>
            </h2>
            <div className="bg-gray-900 p-6 rounded-xl border border-gray-700 shadow-lg">
                <p className="text-gray-300 leading-relaxed mb-4">
                    Kami terus bekerja keras untuk meningkatkan platform Festify. Berikut adalah fokus kami selanjutnya:
                </p>
                <ul className="list-disc ml-6 space-y-2 text-gray-400">
                    <li>**Dashboard Penyelenggara Baru:** Merilis *dashboard* penyelenggara yang lebih lengkap dengan analitik *real-time* (Target: Q1 2026).</li>
                    <li>**Integrasi Pembayaran Baru:** Menambahkan dukungan untuk metode pembayaran dompet digital tambahan.</li>
                    <li>**API Developer:** Meluncurkan *Public API* untuk integrasi pihak ketiga yang lebih luas.</li>
                </ul>
            </div>
        </section>
        
      </div>
    </div>
  );
}