// src/pages/admin/events/CreateEvent.jsx  ← GANTI YANG INI SAJA
import { useNavigate } from "react-router-dom";




export default function CreateEvent() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    // PAKSA KIRIM SEMUA FIELD YANG DIBUTUHKAN CONTROLLER
    const payload = {
      nama_event: formData.get("nama_event"),
      tanggal_event: formData.get("tanggal_event"),
      lokasi: formData.get("lokasi"),
      detailTiket: formData.get("detail_tiket") || "Reguler",     // WAJIB ADA
         // WAJIB NUMBER
    };

    try {
      const res = await fetch("http://localhost:5000/events/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      console.log(res);

      const result = await res.json();

      if (res.ok) {
        alert("Event berhasil dibuat!");
        navigate("/admin/events");
      } else {
        alert(result.error || result.message || "Gagal buat event");
      }
    } catch (err) {
      console.error(err);
      alert("Server error – cek console (F12)");
    }
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Buat Event Baru</h1>

      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg space-y-6">
        <input name="nama_event" required placeholder="Nama Event" className="w-full p-4 border rounded-lg" />
        <input name="lokasi" required placeholder="Lokasi" className="w-full p-4 border rounded-lg" />
        <input name="tanggal_event" type="date" required className="w-full p-4 border rounded-lg" />

        {/* WAJIB ISI INI DUA BIAR GAK ERROR */}
        <input 
          name="tipe_tiket" 
          required 
          placeholder="Tipe Tiket (contoh: VIP, Reguler, Presale)" 
          className="w-full p-4 border rounded-lg" 
        />
        

        <div className="flex gap-4">
          <button type="submit" className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg">
            Buat Event
          </button>
          <button type="button" onClick={() => navigate("/admin/events")} className="bg-gray-500 text-white px-8 py-4 rounded-lg text-lg">
            Batal
          </button>
        </div>
      </form>
    </div>
  );
}