import { ShieldCheck, Calendar, List, CheckCircle, Mail, MessageCircle } from "lucide-react"; 

export default function Privacy() {
  return (
    // Kontainer Utama Dark Mode
    <div className="bg-gray-950 text-white min-h-screen">
      <div className="max-w-5xl mx-auto px-6 py-20">
        
        {/* Header & Meta Info */}
        <div className="mb-12 border-b border-gray-800 pb-6">
          <ShieldCheck size={48} className="text-indigo-400 mb-4 mx-auto md:mx-0" />
          <h1 className="text-4xl font-extrabold text-white mb-2">
            Kebijakan Privasi FESTIFY
          </h1>

          <p className="text-lg text-gray-400 leading-relaxed">
            Kebijakan privasi ini menjelaskan bagaimana Festify mengumpulkan, menyimpan,
            dan melindungi data pengguna. Kami berkomitmen menjaga keamanan informasi Anda
            sesuai dengan standar industri.
          </p>
          
          {/* Timestamp untuk profesionalisme */}
          <div className="flex items-center space-x-2 text-sm text-gray-500 mt-4">
            <Calendar size={16} className="text-indigo-400" />
            <span>Terakhir diperbarui: 30 November 2025</span>
          </div>
        </div>

        <div className="space-y-12">

          {/* Bagian 1: Informasi yang Kami Kumpulkan */}
          <section className="p-6 bg-gray-800 rounded-xl border border-gray-700 shadow-xl">
            <h2 className="text-2xl font-bold text-indigo-400 mb-4 flex items-center space-x-3">
              <List size={24} />
              <span>1. Informasi yang Kami Kumpulkan</span>
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Kami mengumpulkan berbagai jenis informasi untuk menyediakan dan meningkatkan layanan kami:
            </p>
            <ul className="list-disc ml-6 space-y-2 text-gray-400">
              <li>**Data Identitas:** Nama lengkap, alamat email, nomor telepon, dan alamat penagihan.</li>
              <li>**Data Transaksi:** Informasi pembelian tiket, riwayat pesanan, dan metode pembayaran.</li>
              <li>**Data Penggunaan:** Data mengenai bagaimana Anda mengakses dan menggunakan platform (misalnya, jenis *event* yang dicari).</li>
              <li>**Data Teknis:** Alamat IP, jenis *browser*, dan data perangkat lain untuk tujuan keamanan.</li>
            </ul>
          </section>

          {/* Bagian 2: Dasar Penggunaan Data Anda */}
          <section>
            <h2 className="text-2xl font-bold text-indigo-400 mb-6 flex items-center space-x-3">
              <CheckCircle size={24} />
              <span>2. Dasar Penggunaan Data Anda</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start space-x-3 bg-gray-900 p-4 rounded-lg shadow-md border border-indigo-700/50">
                <CheckCircle size={20} className="text-green-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300">**Pemrosesan Transaksi:** Menyelesaikan pembelian tiket dan mengirimkan konfirmasi. </p>
              </div>
              <div className="flex items-start space-x-3 bg-gray-900 p-4 rounded-lg shadow-md border border-indigo-700/50">
                <CheckCircle size={20} className="text-green-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300">**Keamanan & Verifikasi:** Melindungi akun Anda dari akses tidak sah dan mencegah penipuan. </p>
              </div>
              <div className="flex items-start space-x-3 bg-gray-900 p-4 rounded-lg shadow-md border border-indigo-700/50">
                <CheckCircle size={20} className="text-green-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300">**Peningkatan Layanan:** Melakukan analitik untuk memperbaiki fungsionalitas dan fitur platform. </p>
              </div>
              <div className="flex items-start space-x-3 bg-gray-900 p-4 rounded-lg shadow-md border border-indigo-700/50">
                <CheckCircle size={20} className="text-green-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300">**Komunikasi:** Mengirim pembaruan event dan notifikasi penting terkait layanan. </p>
              </div>
            </div>
          </section>

          {/* Bagian 3: Komitmen Perlindungan Data */}
          <section>
            <h2 className="text-2xl font-bold text-indigo-400 mb-4 flex items-center space-x-3">
              <ShieldCheck size={24} />
              <span>3. Komitmen Perlindungan Data</span>
            </h2>
            
            <div className="border-l-4 border-indigo-500 pl-4 bg-gray-800/50 p-4 rounded-r-lg">
              <p className="text-gray-300 leading-relaxed italic">
                "Keamanan dan privasi data pengguna adalah prioritas utama Festify. Kami telah menerapkan langkah-langkah teknis dan organisasi yang ketat."
              </p>
            </div>

            <ul className="list-disc ml-6 space-y-2 text-gray-400 mt-4">
              <li>Kami menggunakan teknologi **enkripsi SSL/TLS** untuk melindungi transmisi data.</li>
              <li>Sistem kami dilindungi oleh **firewall** dan pemantauan keamanan 24/7.</li>
              <li>Akses ke data pribadi dibatasi hanya untuk staf yang berwenang.</li>
            </ul>
          </section>
          
          {/* Bagian 4: Hubungi Kami - REVISI AKHIR */}
          <section className="pt-6 border-t border-gray-800">
            <h2 className="text-2xl font-bold text-indigo-400 mb-4 flex items-center space-x-3">
              <Mail size={24} />
              <span>4. Hubungi Kami</span>
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Jika Anda memiliki pertanyaan mengenai kebijakan privasi ini atau praktik data kami,
              silakan hubungi kami melalui jalur berikut:
            </p>
            
            {/* Opsi Kontak Dibuat Berdampingan */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                
                {/* Opsi Email DENGAN SUBJEK OTOMATIS */}
                <a 
                    href="mailto:officialfestify@gmail.com?subject=Pertanyaan%20Kebijakan%20Privasi%20FESTIFY" 
                    className="flex items-center space-x-2 bg-gray-800 p-3 rounded-lg font-semibold text-indigo-400 hover:bg-gray-700 transition duration-200 w-full sm:w-auto"
                >
                    <Mail size={20} className="flex-shrink-0" />
                    <span>officialfestify@gmail.com</span>
                </a>
                
                {/* Opsi WhatsApp (Live Chat) */}
                <a 
                    href="https://wa.me/6285718014006"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-indigo-600 p-3 rounded-lg font-semibold text-white hover:bg-indigo-500 transition duration-200 w-full sm:w-auto"
                >
                    <MessageCircle size={20} className="flex-shrink-0" />
                    <span>Live Chat (WA) +62 857 1801 4006</span>
                </a>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}