// File: Support.js

import { Mail, HelpCircle, Users, BookOpen, Layers, MessageCircle } from "lucide-react"; 

export default function Support() {
  return (
    // Kontainer Utama Dark Mode
    <div className="bg-gray-950 text-white min-h-screen"> 
      <div className="max-w-6xl mx-auto px-6 py-20">
        
        {/* Header Section dihilangkan untuk fokus */}

        {/* Jalur Bantuan Utama (Grid 3 Kolom) */}
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Opsi 1: Kirim Support Ticket (Umum) */}
          <div className="bg-gray-900 p-8 rounded-xl border border-gray-800 shadow-2xl hover:border-indigo-500 transition duration-300 transform hover:-translate-y-1">
            <Mail size={32} className="text-indigo-400 mb-4" />
            <h2 className="text-xl font-bold text-white mb-2">
              Kirim Support Ticket
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Untuk kendala teknis yang membutuhkan penelusuran detail atau masalah akun.
              Respons dijanjikan dalam waktu **24–48 jam kerja**.
            </p>
            <a 
                href="/help/new-ticket" // <--- JALUR SUDAH SESUAI ROUTER APP.JSX
                className="inline-flex items-center text-indigo-400 hover:text-indigo-300 font-semibold transition duration-300"
            >
                Buat Tiket Baru &rarr;
            </a>
          </div>

          {/* Opsi 2: Pertanyaan Umum (FAQ) */}
          <div className="bg-gray-900 p-8 rounded-xl border border-gray-800 shadow-2xl hover:border-indigo-500 transition duration-300 transform hover:-translate-y-1">
            <BookOpen size={32} className="text-indigo-400 mb-4" />
            <h2 className="text-xl font-bold text-white mb-2">
              Pusat Pertanyaan Umum (FAQ)
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Cari jawaban cepat mengenai pembayaran, kebijakan refund, pembuatan akun,
              dan cara pembelian tiket.
            </p>
            <a 
                href="/faq" // <--- JALUR SUDAH SESUAI ROUTER APP.JSX
                className="inline-flex items-center text-indigo-400 hover:text-indigo-300 font-semibold transition duration-300"
            >
                Kunjungi FAQ &rarr;
            </a>
          </div>

          {/* Opsi 3: Dukungan Acara & Penyelenggara */}
          <div className="bg-gray-900 p-8 rounded-xl border border-gray-800 shadow-2xl hover:border-indigo-500 transition duration-300 transform hover:-translate-y-1">
            <Users size={32} className="text-indigo-400 mb-4" />
            <h2 className="text-xl font-bold text-white mb-2">
              Dukungan Penyelenggara
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Layanan khusus untuk mitra event. Dapatkan bantuan terkait pengaturan,
              pengelolaan tiket, laporan penjualan, dan integrasi sistem.
            </p>
            <a 
                href="/contact" // <--- JALUR SUDAH SESUAI ROUTER APP.JSX (path="/contact")
                className="inline-flex items-center text-indigo-400 hover:text-indigo-300 font-semibold transition duration-300"
            >
                Hubungi Tim Kami &rarr;
            </a>
          </div>

        </div>
        
        {/* Bagian Kontak Cepat (Panggilan Aksi) - WHATSAPP FUNGSIONAL */}
        <div className="mt-20 text-center bg-gray-800 p-10 rounded-xl border border-indigo-500/30 shadow-2xl shadow-indigo-500/10">
            <Layers size={32} className="text-indigo-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-3">
                Butuh Bantuan Mendesak?
            </h3>
            <p className="text-gray-300 max-w-3xl mx-auto mb-6">
                Untuk masalah kritis atau pertanyaan yang tidak terjawab di atas, Anda dapat menghubungi tim kami secara langsung melalui jalur tercepat.
            </p>
            
            <div className="flex justify-center space-x-6">
                
                {/* TOMBOL WHATSAPP FUNGSIONAL */}
                <a 
                    href="https://wa.me/6285718014006"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-green-500 transition duration-300"
                >
                    <div className="flex items-center space-x-2">
                        <MessageCircle size={18} />
                        <span>Live Chat WhatsApp</span>
                    </div>
                </a>
                
                {/* TOMBOL EMAIL */}
                <a 
                    href="mailto:support@festify.com?subject=Bantuan%20Mendesak%20FESTIFY"
                    className="bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-gray-600 transition duration-300"
                >
                    <div className="flex items-center space-x-2">
                        <Mail size={18} />
                        <span>Email Support Mendesak</span>
                    </div>
                </a>
            </div>
        </div>
        
      </div>
    </div>
  );
}