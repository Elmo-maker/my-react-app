// import { useParams, useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import { Calendar, MapPin, Tag, ArrowRight } from "lucide-react";

// export default function EventDetail() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [event, setEvent] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // Ambil detail event dari backend
//     fetch(`http://localhost:3000/event/event`, {
//       headers: { "Content-Type": "application/json" },
//     })
//       .then((res) => {
//         if (!res.ok) throw new Error("Gagal fetch event");
//         return res.json();
//       })
//       .then((data) => {
//         const found = data.find((e) => e.id_event === Number(id));
//         if (!found) throw new Error("Event tidak ditemukan");
//         setEvent(found);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error(err);
//         setError(err.message);
//         setLoading(false);
//       });
//   }, [id]);

//   if (loading)
//     return (
//       <div className="bg-gray-950 text-white min-h-screen pt-32 text-center">
//         Loading...
//       </div>
//     );
//   if (error)
//     return (
//       <div className="bg-gray-950 text-white min-h-screen pt-32 text-center">
//         Error: {error}
//       </div>
//     );

//   return (
//     <>
//       <Navbar />
//       <div className="bg-gray-950 text-white min-h-screen pt-24 pb-16">
//         <div className="max-w-6xl mx-auto px-6">
//           <div className="mb-8 relative">
//             <img
//               src={event.img || "/placeholder.jpg"}
//               alt={event.nama_event}
//               className="w-full h-96 object-cover rounded-xl shadow-2xl shadow-gray-900/50"
//             />
//             <div className="absolute inset-0 bg-black/30 rounded-xl flex items-end p-8">
//               <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tighter leading-none drop-shadow-lg">
//                 {event.nama_event}
//               </h1>
//             </div>
//           </div>

//           <div className="grid md:grid-cols-3 gap-10">
//             <div className="md:col-span-2">
//               <h2 className="text-3xl font-bold mb-4 border-b border-gray-800 pb-2 text-indigo-400">
//                 Deskripsi Event
//               </h2>
//               <p className="text-gray-300 leading-relaxed whitespace-pre-line">
//                 {event.deskripsi || "Deskripsi event ini belum tersedia."}
//               </p>

//               <div className="mt-8 p-6 bg-gray-800 rounded-xl border border-gray-700 space-y-4">
//                 <h3 className="text-2xl font-bold text-white mb-4 flex items-center space-x-2">
//                   Detail Penting
//                 </h3>
//                 <p className="text-lg font-semibold text-gray-300 flex items-center space-x-3">
//                   <Calendar size={20} className="text-indigo-400" />
//                   <span>Tanggal:</span>
//                   <span className="font-bold text-white">{event.tanggal_event}</span>
//                 </p>
//                 <p className="text-lg font-semibold text-gray-300 flex items-center space-x-3">
//                   <MapPin size={20} className="text-indigo-400" />
//                   <span>Lokasi:</span>
//                   <span className="font-bold text-white">{event.lokasi}</span>
//                 </p>
//               </div>
//             </div>

//             <div className="md:col-span-1 md:sticky md:top-28 self-start">
//               <div className="p-6 bg-gray-800 rounded-xl shadow-2xl border-t-4 border-indigo-600">
//                 <p className="text-xl font-bold mb-4 flex items-center space-x-3 text-indigo-400">
//                   <Tag size={24} />
//                   <span>Harga Tiket Mulai:</span>
//                 </p>
//                 <p className="text-4xl font-extrabold text-white mb-6">
//                   Rp {event.harga_tiket?.toLocaleString() || "0"}
//                 </p>

//                 <button
//                   onClick={() => navigate("/checkout", { state: { event } })}
//                   className="w-full mt-4 bg-indigo-600 text-white font-semibold px-6 py-4 rounded-lg text-lg hover:bg-indigo-500 transition duration-300 transform shadow-lg shadow-indigo-600/30 flex items-center justify-center space-x-2"
//                 >
//                   <span>Beli Tiket Sekarang</span>
//                   <ArrowRight size={20} />
//                 </button>

//                 <p className="text-xs text-gray-500 mt-4 text-center">
//                   *Harga dapat berubah sewaktu-waktu dan belum termasuk pajak.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// }

import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Calendar, MapPin, Tag, ArrowRight } from "lucide-react";
import { API_BASE_URL } from "../config/api";

export default function EventDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  const handleBuyTicket = () => {
    const token = localStorage.getItem("token");

    if (!token) {
      window.dispatchEvent(new Event("open-login"));
      return;
    }

    navigate("/checkout", { state: { event } });
  };


  useEffect(() => {
    // Ambil detail event dari backend
    fetch(`${API_BASE_URL}/events/public`, {
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Gagal fetch event");
        return res.json();
      })
      .then((data) => {
        const found = data.find((e) => e.id_event === Number(id));
        if (!found) throw new Error("Event tidak ditemukan");
        setEvent(found);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading)
    return (
      <div className="bg-gray-950 text-white min-h-screen pt-32 text-center">
        Loading...
      </div>
    );
  if (error)
    return (
      <div className="bg-gray-950 text-white min-h-screen pt-32 text-center">
        Error: {error}
      </div>
    );

  return (
    <>
      <Navbar />
      <div className="bg-gray-950 text-white min-h-screen pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-8 relative">
            <img
              src={event.img || "/placeholder.jpg"}
              alt={event.nama_event}
              className="w-full h-96 object-cover rounded-xl shadow-2xl shadow-gray-900/50"
            />
            <div className="absolute inset-0 bg-black/30 rounded-xl flex items-end p-8">
              <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tighter leading-none drop-shadow-lg">
                {event.nama_event}
              </h1>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold mb-4 border-b border-gray-800 pb-2 text-indigo-400">
                Deskripsi Event
              </h2>
              <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                {event.deskripsi || "Deskripsi event ini belum tersedia."}
              </p>

              <div className="mt-8 p-6 bg-gray-800 rounded-xl border border-gray-700 space-y-4">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center space-x-2">
                  Detail Penting
                </h3>
                <p className="text-lg font-semibold text-gray-300 flex items-center space-x-3">
                  <Calendar size={20} className="text-indigo-400" />
                  <span>Tanggal:</span>
                  <span className="font-bold text-white">{event.tanggal_event}</span>
                </p>
                <p className="text-lg font-semibold text-gray-300 flex items-center space-x-3">
                  <MapPin size={20} className="text-indigo-400" />
                  <span>Lokasi:</span>
                  <span className="font-bold text-white">{event.lokasi}</span>
                </p>
              </div>
            </div>

            <div className="md:col-span-1 md:sticky md:top-28 self-start">
              <div className="p-6 bg-gray-800 rounded-xl shadow-2xl border-t-4 border-indigo-600">
                <p className="text-xl font-bold mb-4 flex items-center space-x-3 text-indigo-400">
                  <Tag size={24} />
                  <span>Harga Tiket Mulai:</span>
                </p>
                <p className="text-4xl font-extrabold text-white mb-6">
                  Rp {event.harga_tiket?.toLocaleString() || "0"}
                </p>

                <button
                  onClick={handleBuyTicket}
                  className="w-full mt-4 bg-indigo-600 text-white font-semibold px-6 py-4 rounded-lg text-lg hover:bg-indigo-500 transition duration-300 transform shadow-lg shadow-indigo-600/30 flex items-center justify-center space-x-2"
                >
                  <span>Beli Tiket Sekarang</span>
                  <ArrowRight size={20} />
                </button>

                <p className="text-xs text-gray-500 mt-4 text-center">
                  *Harga dapat berubah sewaktu-waktu dan belum termasuk pajak.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
