import { useParams, useNavigate } from "react-router-dom";
import events from "../data/events";

export default function EventDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const event = events.find((e) => e.id === parseInt(id));

  if (!event) return <p>Event tidak ditemukan</p>;

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <img src={event.img} className="w-full h-72 object-cover rounded" />

      <h1 className="text-3xl font-bold mt-6">{event.title}</h1>
      <p className="text-gray-700 mt-2">{event.desc}</p>

      <p className="mt-4 text-lg font-semibold">
        Tanggal: {event.date}
      </p>

      <p className="text-lg font-semibold">
        Lokasi: {event.location}
      </p>

      <p className="text-lg font-bold mt-4">
        Harga Ticket: Rp {event.price.toLocaleString()}
      </p>

      <button
        onClick={() => navigate("/checkout", { state: event })}
        className="mt-6 bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700"
      >
        Beli Tiket
      </button>
    </div>
  );
}
