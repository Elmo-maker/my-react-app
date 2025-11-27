import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Users, Target, Eye, Zap, Shield, Heart } from "lucide-react"; // Ikon modern

export default function AboutUs() {
  return (
    <>
      <Navbar />
      
      {/* Background Utama: Tema Gelap */}
      <div className="bg-gray-950 text-white min-h-screen">
        
        {/* Hero Section */}
        <section className="pt-32 pb-16 border-b border-gray-800">
          <div className="max-w-6xl mx-auto px-6 text-center">
                <Users size={48} className="text-indigo-400 mx-auto mb-4" />
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight">
                Kisah di Balik FESTIFY
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Temukan cerita di balik platform tiket event terkemuka, misi, dan nilai-nilai yang kami junjung.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          {/* About Section (Who We Are) */}
          <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
            <div>
              <h2 className="text-4xl font-extrabold mb-6 text-indigo-400">Siapa Kami?</h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                FESTIFY adalah platform ticketing terdepan yang menghadirkan pengalaman terbaik 
                dalam pembelian tiket untuk berbagai event. Dari konser musik, festival seni, 
                hingga acara olahraga, kami hadir untuk memudahkan Anda.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Dengan teknologi terkini dan tim profesional, kami berkomitmen memberikan 
                layanan terbaik dan pengalaman yang tak terlupakan bagi setiap pengunjung event.
              </p>
            </div>
            {/* Placeholder Gambar dengan Gaya Dark Mode */}
            <div className="bg-gray-800 rounded-xl h-64 flex items-center justify-center border border-indigo-500/30">
              <div className="text-white text-center">
                <Users className="w-24 h-24 mx-auto mb-4 text-indigo-400" />
                <p className="text-xl font-semibold">Komunitas Penggemar Event</p>
              </div>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gray-800 p-8 rounded-xl shadow-xl border-l-4 border-indigo-500 hover:shadow-indigo-500/10 transition duration-300">
              <h3 className="text-2xl font-bold mb-4 text-white flex items-center space-x-2">
                    <Target className="text-indigo-400" size={24} /> <span>Misi Kami</span>
                </h3>
              <p className="text-gray-400 leading-relaxed">
                Menyediakan platform ticketing yang mudah digunakan, aman, dan terpercaya 
                untuk membantu jutaan orang menemukan dan membeli tiket event favorit mereka.
              </p>
            </div>
            <div className="bg-gray-800 p-8 rounded-xl shadow-xl border-l-4 border-indigo-500 hover:shadow-indigo-500/10 transition duration-300">
              <h3 className="text-2xl font-bold mb-4 text-white flex items-center space-x-2">
                    <Eye className="text-indigo-400" size={24} /> <span>Visi Kami</span>
                </h3>
              <p className="text-gray-400 leading-relaxed">
                Menjadi platform ticketing nomor satu di Asia Tenggara yang menghubungkan 
                jutaan penggemar dengan event-event terbaik mereka.
              </p>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-extrabold mb-8 text-center text-indigo-400">Nilai-Nilai Kami</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-800 p-6 rounded-xl shadow-xl text-center hover:shadow-indigo-500/10 transition duration-300 transform hover:-translate-y-1">
                <Zap size={40} className="text-indigo-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-white">Inovasi</h3>
                <p className="text-gray-400">
                  Terus berinovasi untuk memberikan solusi terbaik dalam industri ticketing.
                </p>
              </div>
              <div className="bg-gray-800 p-6 rounded-xl shadow-xl text-center hover:shadow-indigo-500/10 transition duration-300 transform hover:-translate-y-1">
                <Shield size={40} className="text-indigo-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-white">Kepercayaan</h3>
                <p className="text-gray-400">
                  Menjaga kepercayaan pelanggan dengan transparansi dan keamanan data yang maksimal.
                </p>
              </div>
              <div className="bg-gray-800 p-6 rounded-xl shadow-xl text-center hover:shadow-indigo-500/10 transition duration-300 transform hover:-translate-y-1">
                <Heart size={40} className="text-indigo-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-white">Pengalaman</h3>
                <p className="text-gray-400">
                  Menciptakan pengalaman tak terlupakan bagi setiap pengguna platform kami.
                </p>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="bg-gray-800 text-white rounded-xl p-8 mb-16 shadow-2xl border border-indigo-500/30">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-extrabold mb-2 text-indigo-400">5M+</div>
                <p className="text-gray-300">Pengguna Aktif</p>
              </div>
              <div>
                <div className="text-4xl font-extrabold mb-2 text-indigo-400">50K+</div>
                <p className="text-gray-300">Total Event</p>
              </div>
              <div>
                <div className="text-4xl font-extrabold mb-2 text-indigo-400">100M+</div>
                <p className="text-gray-300">Tiket Terjual</p>
              </div>
              <div>
                <div className="text-4xl font-extrabold mb-2 text-indigo-400">15+</div>
                <p className="text-gray-300">Negara Mitra</p>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-extrabold mb-8 text-center text-indigo-400">Tim Kami</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: "Elmo Rafi Utomo", role: "CEO & Founder" },
                { name: "Aditya Narayan", role: "CTO" },
                { name: "Ahmad Ridho", role: "Head of Marketing" },
                { name: "Raysa Ghaftan", role: "UI/UX Designer" },
                { name: "Zidan Yanuar", role: "Professional Backend" },
              ].map((member, index) => (
                <div key={index} className="bg-gray-800 p-6 rounded-xl shadow-xl text-center hover:shadow-indigo-500/10 transition duration-300">
                  {/* Avatar Placeholder */}
                  <div className="w-20 h-20 mx-auto mb-4 bg-indigo-700/50 border border-indigo-400 rounded-full flex items-center justify-center">
                    <span className="text-indigo-200 text-2xl font-bold">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">{member.name}</h3>
                  <p className="text-indigo-400">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}