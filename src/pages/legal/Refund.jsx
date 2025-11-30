import { Receipt, DollarSign, Ban, RefreshCw } from "lucide-react";

export default function Refund() {
  return (
    // Tema Gelap: bg-gray-950, text-white, padding atas pt-24
    <div className="bg-gray-950 text-white min-h-screen pt-24 pb-12">
      {/* Container Utama */}
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-12 border-b border-gray-800 pb-8">
          <Receipt size={48} className="text-indigo-400 mx-auto mb-4" />
          <h1 className="text-4xl font-extrabold tracking-tight mb-2">
            Ketentuan Tiket & Refund
          </h1>
          <p className="text-lg text-gray-400">
            Aturan mengenai pembelian tiket, validitas, dan kondisi pengembalian dana.
          </p>
        </div>

        {/* Konten Utama */}
        <div className="space-y-10">
          
          <section>
            <h2 className="text-2xl font-bold text-indigo-400 mb-3 flex items-center">
              <DollarSign size={20} className="mr-3" />
              Kebijakan Pembelian Tiket
            </h2>
            <p className="text-gray-300 mb-4">
              Semua penjualan tiket bersifat **final** setelah pembayaran berhasil. Tiket hanya berlaku untuk event, tanggal, dan waktu yang tertera. Harga yang ditampilkan sudah termasuk biaya platform, namun belum termasuk biaya layanan/transaksi bank yang mungkin dikenakan.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-indigo-400 mb-3 flex items-center">
              <Ban size={20} className="mr-3" />
              Pembatalan oleh Pengguna (No Refund Policy)
            </h2>
            <p className="text-gray-300 mb-4">
              Festify memiliki kebijakan **"No Refund"** untuk tiket yang dibatalkan atas inisiatif pengguna (misalnya, pengguna tidak dapat hadir atau berubah pikiran). Pengecualian hanya berlaku jika event dibatalkan atau dijadwal ulang oleh Penyelenggara.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-indigo-400 mb-3 flex items-center">
              <RefreshCw size={20} className="mr-3" />
              Prosedur Pengembalian Dana (Refund)
            </h2>
            <p className="text-gray-300">
              Refund hanya diproses jika event **dibatalkan total** oleh Penyelenggara atau Festify. Proses refund akan dimulai 14 hari kerja setelah pengumuman pembatalan dan dana akan dikembalikan ke metode pembayaran awal dalam waktu 30 hari kerja. Biaya layanan platform mungkin tidak dapat dikembalikan.
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