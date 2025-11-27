import { Link } from "react-router-dom";
import { Calendar, MapPin, Ticket } from "lucide-react"; // Ikon tambahan untuk estetika

export default function EventCard({ event }) {
  return (
    // CARD CONTAINER: Latar belakang gelap, border halus, shadow premium
    <div className="bg-gray-800 rounded-xl shadow-xl hover:shadow-indigo-500/20 overflow-hidden transition duration-300 transform hover:-translate-y-1 border border-gray-700/50">
      
      {/* GAMBAR */}
      <img 
        src={event.img} 
        alt={event.title}
        className="w-full h-48 object-cover object-center" 
      />

      <div className="p-5">
        
        {/* JUDUL EVENT */}
        <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">
          {event.title}
        </h3>

        {/* DETAIL */}
        <div className="space-y-2 text-sm text-gray-400 mb-4">
          <p className="flex items-center space-x-2">
            <Calendar size={16} className="text-indigo-400" />
            <span>{event.date}</span>
          </p>
          <p className="flex items-center space-x-2">
            <MapPin size={16} className="text-indigo-400" />
            <span>{event.location}</span>
          </p>
        </div>

        {/* HARGA */}
        <p className="text-lg text-indigo-400 font-bold border-t border-gray-700 pt-3">
          <span className="text-gray-400 font-normal">Mulai dari:</span> Rp {event.price.toLocaleString()}
        </p>

        {/* TOMBOL */}
        <Link to={`/event/${event.id}`}>
          <button 
                className="mt-5 w-full bg-indigo-600 text-white font-semibold px-6 py-3 rounded-lg 
                           hover:bg-indigo-500 transition duration-300 transform shadow-md shadow-indigo-500/20
                           flex items-center justify-center space-x-2"
          >
             <Ticket size={20} />
            <span>Lihat Detail</span>
          </button>
        </Link>
      </div>
    </div>
  );
}