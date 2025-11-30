// src/pages/admin/events/EditEvent.jsx
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const API_BASE = "http://localhost:3000";

export default function EditEvent() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetch(`${API_BASE}/events/all`)
      .then((r) => r.json())
      .then((data) => {
        const found = data.find((e) => e.id_event === Number(id));
        setEvent(found);
      });
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    try {
      const res = await fetch(`${API_BASE}/events/upd/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        alert("Event berhasil diupdate!");
        navigate("/admin/events");
      } else {
        alert("Gagal update event");
      }
    } catch (err) {
      alert("Error server");
    }
  };

  if (!event) return <div className="p-8 text-center">Loading...</div>;

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Edit Event</h1>

      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8 space-y-6">
        <div>
          <label className="block text-lg font-medium text-gray-700 mb-2">Nama Event</label>
          <input
            name="nama_event"
            type="text"
            defaultValue={event.nama_event}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-lg font-medium text-gray-700 mb-2">Lokasi</label>
          <input
            name="lokasi"
            type="text"
            defaultValue={event.lokasi}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-lg font-medium text-gray-700 mb-2">Tanggal</label>
          <input
            name="tanggal_event"
            type="date"
            defaultValue={event.tanggal_event.split("T")[0]}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex gap-4 pt-6">
          <button
            type="submit"
            className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700"
          >
            Update Event
          </button>
          <button
            type="button"
            onClick={() => navigate("/admin/events")}
            className="bg-gray-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-600"
          >
            Batal
          </button>
        </div>
      </form>
    </div>
  );
}