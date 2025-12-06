import { Gavel, FileText, Lock, Users, CreditCard, AlertTriangle, Calendar } from "lucide-react"; 

export default function Terms() {
  return (
    // Kontainer Utama Dark Mode
    <div className="bg-gray-950 text-white min-h-screen">
      <div className="max-w-5xl mx-auto px-6 py-20">
        
        {/* Header Section */}
        <div className="mb-12 border-b border-gray-800 pb-6">
          <Gavel size={48} className="text-indigo-400 mb-4 mx-auto md:mx-0" />
          <h1 className="text-4xl font-extrabold text-white mb-2">
            Syarat dan Ketentuan Layanan
          </h1>

          <p className="text-lg text-gray-400 leading-relaxed">
            Dengan mengakses dan menggunakan platform Festify, Anda menyetujui syarat dan ketentuan
            berikut. Kami menyarankan Anda membaca seluruh dokumen ini sebelum menggunakan layanan.
          </p>
          
          {/* Timestamp dan Versi */}
          <div className="flex items-center space-x-4 text-sm text-gray-500 mt-4">
            <div className="flex items-center space-x-2">
                <Calendar size={16} className="text-indigo-400" />
                <span>Efektif Sejak: 30 November 2025</span>
            </div>
            <div className="flex items-center space-x-2">
                <FileText size={16} className="text-indigo-400" />
                <span>Versi: 2.1</span>
            </div>
          </div>
        </div>

        {/* Daftar Pasal/Klausul Utama */}
        <div className="space-y-10">

          {/* Pasal 1: Penggunaan Platform & Akun */}
          <section className="bg-gray-900 p-6 rounded-xl border border-gray-800 shadow-xl">
            <h2 className="text-2xl font-bold text-indigo-400 mb-3 flex items-center space-x-3">
              <Users size={24} />
              <span>1. Penggunaan Platform & Akun</span>
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Anda wajib menjaga kerahasiaan informasi akun dan bertanggung jawab atas semua aktivitas 
              yang terjadi melalui akun Anda. Penggunaan platform harus sesuai dengan hukum yang berlaku.
            </p>
            <ul className="list-disc ml-6 space-y-2 text-gray-400 text-sm">
                <li>Pengguna dilarang memalsukan identitas atau membuat akun ganda.</li>
                <li>Setiap aktivitas yang melanggar hukum, merugikan pihak lain, atau mengganggu stabilitas sistem akan ditindak.</li>
            </ul>
          </section>

          {/* Pasal 2: Pembayaran & Transaksi */}
          <section className="bg-gray-900 p-6 rounded-xl border border-gray-800 shadow-xl">
            <h2 className="text-2xl font-bold text-indigo-400 mb-3 flex items-center space-x-3">
              <CreditCard size={24} />
              <span>2. Pembayaran & Proses Transaksi</span>
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Semua harga tiket yang tertera sudah final, kecuali ada biaya tambahan yang diinformasikan 
              sebelum proses checkout. Pembayaran harus diselesaikan dalam batas waktu yang ditentukan.
            </p>
            <ul className="list-disc ml-6 space-y-2 text-gray-400 text-sm">
                <li>Kami menggunakan sistem pembayaran pihak ketiga yang aman dan terenkripsi.</li>
                <li>Kebijakan pembatalan dan pengembalian dana (refund) sepenuhnya tergantung pada ketentuan penyelenggara event.</li>
            </ul>
          </section>

          {/* Pasal 3: Pelanggaran & Penangguhan */}
          <section className="bg-gray-900 p-6 rounded-xl border border-gray-800 shadow-xl">
            <h2 className="text-2xl font-bold text-indigo-400 mb-3 flex items-center space-x-3">
              <AlertTriangle size={24} />
              <span>3. Pelanggaran & Penangguhan Akun</span>
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Festify berhak, tanpa pemberitahuan sebelumnya, untuk menangguhkan, memblokir, atau 
              menghentikan akun pengguna yang terbukti melanggar Syarat dan Ketentuan ini.
            </p>
            <ul className="list-disc ml-6 space-y-2 text-gray-400 text-sm">
                <li>Contoh pelanggaran termasuk *reselling* tiket ilegal, *scamming*, dan serangan DDoS.</li>
                <li>Keputusan penangguhan bersifat final dan tidak dapat diganggu gugat.</li>
            </ul>
          </section>

          {/* Pasal 4: Batasan Tanggung Jawab */}
          <section className="bg-gray-900 p-6 rounded-xl border border-gray-800 shadow-xl">
            <h2 className="text-2xl font-bold text-indigo-400 mb-3 flex items-center space-x-3">
              <Lock size={24} />
              <span>4. Batasan Tanggung Jawab</span>
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Festify hanya bertindak sebagai platform penyedia layanan tiket. Kami tidak bertanggung jawab 
              atas perubahan jadwal, pembatalan event, atau kualitas pelaksanaan event itu sendiri, 
              yang merupakan tanggung jawab penuh Penyelenggara.
            </p>
          </section>
          
        </div>

        {/* Penutup: Kontak Legal */}
        <div className="mt-16 p-6 bg-gray-900 rounded-xl border-t-4 border-indigo-500 shadow-2xl">
            <h3 className="text-xl font-bold text-white mb-2">
                Kontak Legal
            </h3>
            <p className="text-gray-400 leading-relaxed">
                Untuk pertanyaan terkait Syarat dan Ketentuan ini, silakan hubungi tim legal kami:
            </p>
            <p className="mt-2 font-semibold text-indigo-400">
                Email: officialfestify@gmail.com
            </p>
        </div>
      </div>
    </div>
  );
}