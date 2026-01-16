// src/pages/admin/Tickets.jsx
import { useState, useEffect } from "react";
import { API_BASE_URL } from "../../config/api";

export default function Tickets() {
  const [tickets, setTickets] = useState([]);
  const [events, setEvents] = useState([]);
  const token = localStorage.getItem("token");
  const API = API_BASE_URL;

  const fetchData = async () => {
    const [tRes, eRes] = await Promise.all([
      fetch(`${API}/tiket`),
      fetch(`${API}/events`)
    ]);
    const tData = await tRes.json();
    const eData = await eRes.json();
    setTickets(tData);
    setEvents(eData);
  };

  useEffect(() => { fetchData(); }, []);

  const handleDelete = async (id) => {
    if (!confirm("Hapus tiket ini?")) return;
    await fetch(`${API}/tiket/${id}`, { method: "DELETE", headers: { Authorization: `Bearer ${token}` } });
    fetchData();
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-8">Kelola Tiket</h1>
      <div className="grid gap-6">
        {tickets.map((t) => (
          <div key={t.id_tiket} className="bg-white p-6 rounded-xl shadow flex justify-between items-center">
            <div>
              <h3 className="font-bold text-xl">{t.tipe_tiket}</h3>
              <p>Harga: Rp {t.harga_tiket.toLocaleString()}</p>
              <p>Event ID: {t.id_event}</p>
            </div>
            <button onClick={() => handleDelete(t.id_tiket)} className="bg-red-600 text-white px-6 py-3 rounded">
              Hapus
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}