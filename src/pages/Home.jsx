import { useEffect, useState } from "react";
import EventCard from "../components/EventCard";

export default function Home() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Ambil token dari localStorage setelah login
    const token = localStorage.getItem("token");
    if (!token) {
      setError("Anda belum login");
      setLoading(false);
      return;
    }

    fetch("http://localhost:3000/event", {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}` // pakai token
      }
    })
      .then((res) => {
        if (!res.ok) throw new Error(`Gagal fetch event: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        setEvents(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading)
    return <p className="text-white text-center pt-32">Loading...</p>;
  if (error)
    return <p className="text-white text-center pt-32">Error: {error}</p>;

  return (
    <div className="bg-gray-950 text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-16 pt-28">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12 tracking-tighter">
          <span className="text-indigo-400">#</span>Event Populer
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {events.map((event) => (
            <EventCard key={event.id_event} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
}
