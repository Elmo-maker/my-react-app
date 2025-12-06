// File: NewTicket.jsx
// Lokasi file: src/pages/help/NewTicket.jsx

import { Send, FileText, User, Mail, Hash, ChevronDown } from "lucide-react";
import Navbar from "../../components/Navbar"; 
import Footer from "../../components/Footer"; 
import emailjs from '@emailjs/browser'; 

// --- KONSTANTA EMAILJS (FINAL) ---
const SERVICE_ID = 'service_03dyybb'; 
const PUBLIC_KEY = 'geF7ZK32bRObt_B4C'; 
const TEMPLATE_ID = 'template_bntt0kw'; // <--- TEMPLATE ID TERBARU ANDA
// --- END KONSTANTA ---

export default function NewTicket() {
  
  const handleSubmit = (e) => {
    e.preventDefault();

    // 1. Double Check Security Settings (Optional, but helps debugging)
    console.log("Attempting to send email via EmailJS...");

    // 2. Menggunakan EmailJS untuk mengirim formulir
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then((result) => {
          console.log("Email sent successfully:", result.text);
          alert("✅ Tiket dukungan Anda telah berhasil dikirim! Silakan periksa email Anda.");
          e.target.reset(); // Reset formulir setelah berhasil
      }, (error) => {
          console.error("EmailJS Error:", error);
          alert(`❌ Gagal mengirim tiket. Error: ${error.text}. Tolong periksa KONSOL BROWSER untuk detail kegagalan (F12).`);
      });
  };

  return (
    <>
      <Navbar />

      {/* Kontainer Utama: Tema Gelap */}
      <div className="bg-gray-950 text-white min-h-screen">
        <div className="max-w-4xl mx-auto px-6 py-20">

          {/* Header Formulir */}
          <div className="text-center mb-12 border-b border-gray-800 pb-8">
            <FileText size={48} className="text-indigo-400 mx-auto mb-4" />
            <h1 className="text-4xl font-extrabold tracking-tight mb-2">
              Buat Tiket Dukungan Baru
            </h1>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Isi formulir di bawah ini dengan detail masalah Anda. Tim support kami siap
              membantu Anda dalam waktu 24-48 jam kerja.
            </p>
          </div>

          {/* Form Utama */}
          <form onSubmit={handleSubmit} className="bg-gray-900 p-10 rounded-xl shadow-2xl border border-gray-800">
            
            {/* Field tersembunyi untuk penerima email tujuan (elmorafiutomo@gmail.com) */}
            <input type="hidden" name="to_email" value="elmorafiutomo@gmail.com" />
            
            {/* Bagian Informasi Kontak */}
            <h2 className="text-xl font-bold text-white mb-6 flex items-center space-x-2">
                <User size={20} className="text-indigo-400" />
                <span>Informasi Kontak</span>
            </h2>

            <div className="space-y-6 mb-8">
              {/* Nama Lengkap */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Nama Lengkap
                </label>
                <div className="relative">
                  <User size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                  <input
                    type="text"
                    id="name"
                    name="user_name" 
                    placeholder="Nama Anda"
                    required
                    className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg py-3 pl-10 pr-4 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
                  />
                </div>
              </div>

              {/* Email Aktif */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Aktif
                </label>
                <div className="relative">
                  <Mail size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                  <input
                    type="email"
                    id="email"
                    name="user_email" 
                    placeholder="emailanda@contoh.com"
                    required
                    className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg py-3 pl-10 pr-4 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
                  />
                </div>
              </div>
            </div>

            {/* Bagian Detail Tiket */}
            <h2 className="text-xl font-bold text-white mb-6 flex items-center space-x-2 border-t border-gray-800 pt-8">
                <Hash size={20} className="text-indigo-400" />
                <span>Detail Masalah</span>
            </h2>

            <div className="space-y-6 mb-8">
              {/* Topik Bantuan (Dropdown) */}
              <div>
                <label htmlFor="topic" className="block text-sm font-medium text-gray-300 mb-2">
                  Topik Bantuan
                </label>
                <div className="relative">
                  <FileText size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                  <select
                    id="topic"
                    name="ticket_topic" 
                    required
                    className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg py-3 pl-10 pr-10 appearance-none focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
                  >
                    <option value="">Pilih Topik Masalah Anda</option>
                    <option value="pembayaran">Masalah Pembayaran & Refund</option>
                    <option value="teknis">Kendala Teknis Website/Aplikasi</option>
                    <option value="akun">Masalah Akun & Login</option>
                    <option value="event">Pertanyaan Seputar Event</option>
                    <option value="lainnya">Lainnya</option>
                  </select>
                  <ChevronDown size={18} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" />
                </div>
              </div>

              {/* Deskripsi Masalah */}
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-2">
                  Deskripsi Masalah <span className="text-gray-500">(Minimum 50 Karakter)</span>
                </label>
                <textarea
                  id="description"
                  name="ticket_description" 
                  rows="6"
                  placeholder="Jelaskan masalah Anda selengkap dan sedetail mungkin, termasuk ID transaksi jika ada."
                  minLength="50"
                  required
                  className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg py-3 px-4 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
                ></textarea>
              </div>
            </div>

            {/* Tombol Kirim */}
            <button
              type="submit"
              className="w-full flex items-center justify-center space-x-2 bg-indigo-600 text-white font-bold py-3 rounded-lg shadow-lg hover:bg-indigo-500 transition duration-300 transform hover:scale-[1.01]"
            >
              <Send size={20} />
              <span>Kirim Tiket Dukungan</span>
            </button>
          </form>

        </div>
      </div>
    </>
  );
}