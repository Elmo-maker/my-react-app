import { Link } from "react-router-dom";

export default function EventCard({ event }) {
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-xl overflow-hidden transition">
      <img src={event.img} className="w-full h-48 object-cover" />

      <div className="p-4">
        <h3 className="text-xl font-bold mb-1">{event.title}</h3>
        <p className="text-gray-600">{event.date} | {event.location}</p>
        <p className="text-gray-800 font-semibold mt-2">
          Harga: Rp {event.price.toLocaleString()}
        </p>

        <Link to={`/event/${event.id}`}>
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Lihat Detail
          </button>
        </Link>
      </div>
    </div>
  );
}
