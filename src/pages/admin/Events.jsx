// src/pages/admin/Events.jsx
import { useState, useEffect } from "react";
import { API_BASE_URL } from "../../config/api";

const API_BASE = API_BASE_URL; // sesuaikan port backend kamu

export default function Events() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token");

  // Fetch semua event → pake /all
  const fetchEvents = async () => {
    try {
      const res = await fetch(`${API_BASE}/events/all`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      setEvents(data);
    } catch (err) {
      alert("Gagal mengambil data event");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  // Hapus event → pake /del/:id
  const handleDelete = async (id) => {
    if (!confirm("Yakin ingin menghapus event ini?")) return;

    try {
      const res = await fetch(`${API_BASE}/events/del/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.ok) {
        alert("Event berhasil dihapus!");
        fetchEvents(); // refresh list
      } else {
        const error = await res.json();
        alert(error.message || "Gagal menghapus event");
      }
    } catch (err) {
      alert("Error server");
    }
  };

  if (loading) {
    return <div className="p-8 text-center text-xl">Loading events...</div>;
  }

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800">Kelola Event</h1>
        <a
          href="/admin/events/create"
          className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
        >
          + Buat Event Baru
        </a>
      </div>

      {events.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-xl shadow">
          <p className="text-2xl text-gray-600">Belum ada event</p>
          <p className="text-gray-500 mt-2">Klik tombol di atas untuk membuat event pertama!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div
              key={event.id_event}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
            >
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  {event.nama_event}
                </h3>
                <div className="space-y-2 text-gray-600">
                  <p className="flex items-center gap-2">
                    Lokasi: {event.lokasi}
                  </p>
                  <p className="flex items-center gap-2">
                    Tanggal: {new Date(event.tanggal_event).toLocaleDateString("id-ID", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>

                <div className="mt-6 flex gap-3">
                  <a
                    href={`/admin/events/edit/${event.id_event}`}
                    className="flex-1 bg-yellow-500 text-white text-center py-3 rounded-lg font-medium hover:bg-yellow-600 transition"
                  >
                    Edit
                  </a>
                  <button
                    onClick={() => handleDelete(event.id_event)}
                    className="flex-1 bg-red-600 text-white py-3 rounded-lg font-medium hover:bg-red-700 transition"
                  >
                    Hapus
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}