import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AboutUs() {
  return (
    <>
      <Navbar />
      <div className="pt-20 min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
            <p className="text-lg text-blue-100">
              Discover the story behind FESTIFY - Your ultimate event ticketing platform
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          {/* About Section */}
          <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Who We Are</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                FESTIFY adalah platform ticketing terdepan yang menghadirkan pengalaman terbaik 
                dalam pembelian tiket untuk berbagai event. Dari konser musik, festival seni, 
                hingga acara olahraga, kami hadir untuk memudahkan Anda.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Dengan teknologi terkini dan tim profesional, kami berkomitmen memberikan 
                layanan terbaik dan pengalaman yang tak terlupakan bagi setiap pengunjung event.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg h-64 flex items-center justify-center">
              <div className="text-white text-center">
                <svg
                  className="w-24 h-24 mx-auto mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p className="text-xl font-semibold">Join Our Community</p>
              </div>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-blue-500">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">🎯 Misi Kami</h3>
              <p className="text-gray-600 leading-relaxed">
                Menyediakan platform ticketing yang mudah digunakan, aman, dan terpercaya 
                untuk membantu jutaan orang menemukan dan membeli tiket event favorit mereka.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-purple-500">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">👁️ Visi Kami</h3>
              <p className="text-gray-600 leading-relaxed">
                Menjadi platform ticketing nomor satu di Asia Tenggara yang menghubungkan 
                jutaan penggemar dengan event-event terbaik mereka.
              </p>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Nilai-Nilai Kami</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition">
                <div className="text-4xl mb-4">💡</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Inovasi</h3>
                <p className="text-gray-600">
                  Terus berinovasi untuk memberikan solusi terbaik dalam industri ticketing.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Kepercayaan</h3>
                <p className="text-gray-600">
                  Menjaga kepercayaan pelanggan dengan transparansi dan keamanan data.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition">
                <div className="text-4xl mb-4">🎉</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Pengalaman</h3>
                <p className="text-gray-600">
                  Menciptakan pengalaman memorable untuk setiap pengguna platform kami.
                </p>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-8 mb-16">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">5M+</div>
                <p className="text-blue-100">Users</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">50K+</div>
                <p className="text-blue-100">Events</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">100M+</div>
                <p className="text-blue-100">Tickets Sold</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">15+</div>
                <p className="text-blue-100">Countries</p>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Tim Kami</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: "Elmo Rafi Utomo", role: "CEO & Founder" },
                { name: "Aditya Narayan", role: "CTO" },
                { name: "Ahmad Ridho", role: "Head of Marketing" },
                { name: "Raysa Ghaftan", role: "UI/UX" },
                { name: "Zidan Yanuar", role: "Profesional Backend" },
              ].map((member, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
                  <p className="text-blue-600">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
