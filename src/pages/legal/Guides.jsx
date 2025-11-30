import { Gavel, Scale, UserCheck, Briefcase, Ticket } from "lucide-react"; 

export default function Guides() {
  return (
    // Kontainer Utama Dark Mode
    <div className="bg-gray-950 text-white min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-20"> {/* Lebar ditingkatkan sedikit */}
        
        {/* Header Section */}
        <div className="text-center mb-16 border-b border-gray-800 pb-8">
            <Scale size={48} className="text-indigo-400 mx-auto mb-4" />
            <h1 className="text-5xl font-extrabold tracking-tight mb-4">
                Panduan & Ketentuan Hukum
            </h1>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
                Panduan ini disediakan untuk membantu semua pengguna Festify memahami hak, 
                kewajiban, dan kerangka hukum yang mengatur penggunaan platform kami.
            </p>
        </div>

        {/* Daftar Panduan Hukum (Menggunakan Grid 3 Kolom) */}
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Panduan 1: Hak Pengguna */}
          <a href="/legal/user-rights" className="group block h-full"> 
            <section className="bg-gray-900 p-6 rounded-xl border border-gray-800 shadow-2xl h-full hover:border-indigo-500 hover:shadow-indigo-500/10 transition duration-300 transform hover:-translate-y-1">
              <UserCheck size={32} className="text-indigo-400 mb-4 group-hover:text-white transition" />
              <h2 className="text-xl font-bold text-white mb-3">
                Hak Pengguna
              </h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                Memahami hak Anda dalam hal keamanan data, transparansi informasi event, 
                dan proses klaim layanan.
              </p>
              <span className="text-indigo-400 font-semibold group-hover:text-indigo-300 transition">
                Baca Selengkapnya &rarr;
              </span>
            </section>
          </a>

          {/* Panduan 2: Tanggung Jawab Penyelenggara */}
          <a href="/legal/organizer-liability" className="group block h-full"> 
            <section className="bg-gray-900 p-6 rounded-xl border border-gray-800 shadow-2xl h-full hover:border-indigo-500 hover:shadow-indigo-500/10 transition duration-300 transform hover:-translate-y-1">
              <Briefcase size={32} className="text-indigo-400 mb-4 group-hover:text-white transition" />
              <h2 className="text-xl font-bold text-white mb-3">
                Tanggung Jawab Penyelenggara
              </h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                Ketentuan yang mengatur penyelenggara event, mulai dari keakuratan data event 
                hingga kepatuhan terhadap kebijakan tiket.
              </p>
              <span className="text-indigo-400 font-semibold group-hover:text-indigo-300 transition">
                Baca Selengkapnya &rarr;
              </span>
            </section>
          </a>

          {/* Panduan 3: Ketentuan Tiket & Refund */}
          <a href="/legal/refund-policy" className="group block h-full">
            <section className="bg-gray-900 p-6 rounded-xl border border-gray-800 shadow-2xl h-full hover:border-indigo-500 hover:shadow-indigo-500/10 transition duration-300 transform hover:-translate-y-1">
              <Ticket size={32} className="text-indigo-400 mb-4 group-hover:text-white transition" />
              <h2 className="text-xl font-bold text-white mb-3">
                Ketentuan Tiket & Refund
              </h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                Rincian mengenai kebijakan pengembalian dana, pembatalan event, 
                dan validitas tiket yang dijual di platform.
              </p>
              <span className="text-indigo-400 font-semibold group-hover:text-indigo-300 transition">
                Baca Selengkapnya &rarr;
              </span>
            </section>
          </a>
        </div>
        
        {/* Call to Action/Penyangkalan (Disclaimer) */}
        <div className="mt-16 p-8 bg-gray-900 rounded-xl border border-indigo-500/30">
            <h3 className="text-2xl font-bold text-indigo-400 mb-3 flex items-center space-x-3">
                <Gavel size={24} />
                <span>Penting: Penyangkalan Hukum</span>
            </h3>
            <p className="text-gray-400 leading-relaxed">
                Panduan ini hanya bertujuan sebagai referensi dan tidak menggantikan 
                Ketentuan Layanan (Terms of Service) resmi Festify. Untuk rincian legal 
                lengkap, silakan merujuk pada dokumen Terms & Conditions.
            </p>
        </div>

      </div>
    </div>
  );
}