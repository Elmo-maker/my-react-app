import { Briefcase, CheckCircle, AlertTriangle, Clock } from "lucide-react";

export default function Responsibilites() {
  return (
    // Tema Gelap: bg-gray-950, text-white, padding atas pt-24
    <div className="bg-gray-950 text-white min-h-screen pt-24 pb-12">
      {/* Container Utama */}
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-12 border-b border-gray-800 pb-8">
          <Briefcase size={48} className="text-indigo-400 mx-auto mb-4" />
          <h1 className="text-4xl font-extrabold tracking-tight mb-2">
            Tanggung Jawab Penyelenggara
          </h1>
          <p className="text-lg text-gray-400">
            Kewajiban hukum dan operasional bagi pihak yang menyelenggarakan event di Festify.
          </p>
        </div>

        {/* Konten Utama */}
        <div className="space-y-10">
          
          <section>
            <h2 className="text-2xl font-bold text-indigo-400 mb-3 flex items-center">
              <CheckCircle size={20} className="mr-3" />
              Kepatuhan dan Keakuratan Data
            </h2>
            <p className="text-gray-300 mb-4">
              Penyelenggara wajib memastikan semua **informasi event yang diunggah adalah benar, akurat, dan tidak menyesatkan**. Ini termasuk judul, tanggal, lokasi, harga, dan jumlah ketersediaan tiket. Setiap ketidakakuratan yang merugikan pengguna dapat menjadi dasar pembatalan event dan kewajiban refund.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-indigo-400 mb-3 flex items-center">
              <AlertTriangle size={20} className="mr-3" />
              Pelaksanaan Event Sesuai Izin
            </h2>
            <p className="text-gray-300 mb-4">
              Penyelenggara bertanggung jawab penuh untuk mendapatkan **semua izin dan persetujuan yang diperlukan** dari otoritas lokal sebelum menjual tiket. Festify tidak bertanggung jawab atas pembatalan karena masalah perizinan.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-indigo-400 mb-3 flex items-center">
              <Clock size={20} className="mr-3" />
              Penanganan Refund dan Pembatalan
            </h2>
            <p className="text-gray-300">
              Jika event dibatalkan atau dijadwal ulang, Penyelenggara bertanggung jawab untuk memproses **refund penuh** (kecuali biaya layanan/platform yang sudah ditentukan) sesuai dengan jangka waktu yang ditetapkan dalam Kebijakan Refund Festify.
            </p>
          </section>

        </div>
        
        <div className="mt-12 text-center">
          <a href="/legal/guides" className="text-amber-300 hover:text-amber-500 font-medium underline">
            ← Kembali ke Panduan Hukum
          </a>
        </div>
      </div>
    </div>
  );
}