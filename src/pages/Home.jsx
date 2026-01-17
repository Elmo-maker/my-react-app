// import { useEffect, useState } from "react";
// import EventCard from "../components/EventCard";

// export default function Home() {
//   const [events, setEvents] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // LOGIKA TOKEN DIHAPUS - Akses Publik

//     fetch("http://localhost:3000/event", {
//       // HEADER AUTHORIZATION DIHAPUS
//       headers: { "Content-Type": "application/json" } 
//     })
//       .then((res) => {
//         // Jika server mengembalikan status 404, 500, dll.
//         if (!res.ok) throw new Error(`Gagal fetch event: ${res.status}`);
//         return res.json();
//       })
//       .then((data) => {
//         setEvents(data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error(err);
//         // Menampilkan pesan error fetch
//         setError(err.message); 
//         setLoading(false);
//       });
//   }, []); // Dependensi array kosong agar hanya berjalan sekali

//   if (loading)
//     return <p className="text-white text-center pt-32">Loading...</p>;
//   if (error)
//     return <p className="text-white text-center pt-32">Error: {error}</p>;

//   return (
//     <div className="bg-gray-950 text-white min-h-screen">
//       <div className="max-w-7xl mx-auto px-6 py-16 pt-28">
//         <h2 className="text-4xl md:text-5xl font-extrabold mb-12 tracking-tighter">
//           <span className="text-indigo-400">#</span>Event Populer
//         </h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//           {events.map((event) => (
//             // Pastikan event.id_event cocok dengan primary key dari Prisma
//             <EventCard key={event.id_event} event={event} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import EventCard from "../components/EventCard";
import { API_BASE_URL } from "../config/api";
import { useLocation } from "react-router-dom";

export default function Home() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { search } = useLocation();
  const keyword = new URLSearchParams(search).get("search") || "";
  const filteredEvents = events.filter((event) =>
    event.nama_event.toLowerCase().includes(keyword.toLowerCase())
  );


  useEffect(() => {
    // LOGIKA TOKEN DIHAPUS - Akses Publik

    fetch(`${API_BASE_URL}/events/public`, {
      // HEADER AUTHORIZATION DIHAPUS
      headers: { "Content-Type": "application/json" }
    })
      .then((res) => {
        // Jika server mengembalikan status 404, 500, dll.
        if (!res.ok) throw new Error(`Gagal fetch event: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        setEvents(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        // Menampilkan pesan error fetch
        setError(err.message);
        setLoading(false);
      });
  }, []); // Dependensi array kosong agar hanya berjalan sekali

  if (loading)
    return <p className="text-black text-center pt-32">Loading...</p>;
  if (error)
    return <p className="text-black text-center pt-32">Error: {error}</p>;

  return (
    <div className="bg-gray-950 text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-16 pt-28">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12 tracking-tighter">
          <span className="text-indigo-400">#</span>Event Populer
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredEvents.map((event) => (
            // Pastikan event.id_event cocok dengan primary key dari Prisma
            <EventCard key={event.id_event} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
}
//{events.map((event) => (