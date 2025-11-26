import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <div className="pt-20 min-h-screen bg-gray-50">
        {/* Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            <img
                src="https://via.placeholder.com/300x200?text=Konser+Rockhttps://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.canva.com%2Fid_id%2Fcontoh%2Fs%2Fkonser%2F&psig=AOvVaw1TOi60Tx1sQhKvnt_FfjfF&ust=1764145544821000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKi_xbbwjJEDFQAAAAAdAAAAABAU"
                alt=""
                className="w-full h-48 object-cover"
              />
            Event Terbaru: Konser Musik Internasional
          </h2>
        </div>

        {/* Events Section */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Event Populer</h2>
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Event Card 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
              <img
                src="https://via.placeholder.com/300x200?text=Konser+Rock"
                alt="Konser Rock"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Konser Rock Band</h3>
                <p className="text-gray-600 mb-1">Tanggal: 15 Oktober 2023 | Lokasi: Jakarta</p>
                <p className="text-gray-600 mb-4">Harga: Rp 150.000</p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                  Beli Tiket
                </button>
              </div>
            </div>

            {/* Event Card 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
              <img
                src="https://via.placeholder.com/300x200?text=Festival+Jazz"
                alt="Festival Jazz"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Festival Jazz</h3>
                <p className="text-gray-600 mb-1">Tanggal: 20 Oktober 2023 | Lokasi: Bandung</p>
                <p className="text-gray-600 mb-4">Harga: Rp 200.000</p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                  Beli Tiket
                </button>
              </div>
            </div>

            {/* Event Card 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
              <img
                src="https://via.placeholder.com/300x200?text=Event+Lainnya"
                alt="Event Lainnya"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Konser Pop</h3>
                <p className="text-gray-600 mb-1">Tanggal: 25 Oktober 2023 | Lokasi: Surabaya</p>
                <p className="text-gray-600 mb-4">Harga: Rp 175.000</p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                  Beli Tiket
                </button>
              </div>
            </div>

          </div>
        </section>
      </div>

      
    </>
  );
}
