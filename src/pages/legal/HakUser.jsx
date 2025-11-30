import { Shield, Lock, FileText, Settings } from "lucide-react";

export default function HakUser() { 
  return (
    // Tema Gelap: bg-gray-950, text-white, padding atas pt-24
    <div className="bg-gray-950 text-white min-h-screen pt-24 pb-12">
      {/* Container Utama */}
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-12 border-b border-gray-800 pb-8">
          <Shield size={48} className="text-indigo-400 mx-auto mb-4" />
          <h1 className="text-4xl font-extrabold tracking-tight mb-2">
            Hak Dasar Pengguna
          </h1>
          <p className="text-lg text-gray-400">
            Klausul mengenai perlindungan data, keamanan transaksi, dan akses informasi Anda.
          </p>
        </div>

        {/* Konten Utama */}
        <div className="space-y-10">
          
          <section>
            <h2 className="text-2xl font-bold text-indigo-400 mb-3 flex items-center">
              <Lock size={20} className="mr-3" />
              Privasi dan Keamanan Data
            </h2>
            <p className="text-gray-300 mb-4">
              Setiap pengguna berhak atas **kerahasiaan data pribadi** yang diunggah ke Festify. Data Anda (nama, email, nomor telepon) hanya akan digunakan untuk keperluan transaksi tiket, komunikasi event, dan peningkatan layanan. Kami menjamin data Anda tidak akan dijual kepada pihak ketiga tanpa persetujuan eksplisit.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-indigo-400 mb-3 flex items-center">
              <FileText size={20} className="mr-3" />
              Transparansi Informasi Event
            </h2>
            <p className="text-gray-300 mb-4">
              Pengguna berhak mendapatkan **informasi event yang akurat dan lengkap** dari penyelenggara, termasuk jadwal, lokasi, harga, dan ketersediaan tiket. Jika ada perubahan signifikan pada event, pengguna berhak mendapatkan pemberitahuan segera.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-indigo-400 mb-3 flex items-center">
              <Settings size={20} className="mr-3" />
              Proses Klaim dan Layanan Bantuan
            </h2>
            <p className="text-gray-300">
              Pengguna berhak mengajukan **klaim atau komplain** terkait layanan dan transaksi. Proses penanganan klaim harus transparan dan diselesaikan dalam jangka waktu yang wajar sesuai dengan Ketentuan Tiket & Refund.
            </p>
          </section>

        </div>
        
        {/* Tombol kembali */}
        <div className="mt-12 text-center">
          <a href="/legal/guides" className="text-amber-300 hover:text-amber-500 font-medium underline">
            ← Kembali ke Panduan Hukum
          </a>
        </div>
      </div>
    </div>
  );
}