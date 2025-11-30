// src/pages/admin/components/EventForm.jsx
export default function EventForm({ event, onClose, onSuccess }) {
  const token = localStorage.getItem("token");
  const API = "http://localhost:3000";

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    const url = event ? `${API}/events/${event.id_event}` : `${API}/events/create`;
    const method = event ? "PUT" : "POST";

    await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });

    onSuccess();
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6">
          {event ? "Edit Event" : "Buat Event Baru"}
        </h2>
        <form onSubmit={handleSubmit}>
          <input name="nama_event" defaultValue={event?.nama_event} placeholder="Nama Event" required className="w-full p-3 border mb-4 rounded" />
          <input name="lokasi" defaultValue={event?.lokasi} placeholder="Lokasi" required className="w-full p-3 border mb-4 rounded" />
          <input name="tanggal_event" type="date" defaultValue={event?.tanggal_event?.split("T")[0]} required className="w-full p-3 border mb-4 rounded" />
          <input name="tipe_tiket" placeholder="Tipe Tiket (VIP/Reguler)" required className="w-full p-3 border mb-4 rounded" />
          <input name="harga_tiket" type="number" placeholder="Harga Tiket" required className="w-full p-3 border mb-6 rounded" />

          <div className="flex gap-4">
            <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-lg">
              {event ? "Update" : "Buat"}
            </button>
            <button type="button" onClick={onClose} className="bg-gray-500 text-white px-6 py-3 rounded-lg">
              Batal
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}