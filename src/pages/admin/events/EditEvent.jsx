// // src/pages/admin/events/EditEvent.jsx
// import { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";

// const API_BASE = "http://localhost:3000";

// export default function EditEvent() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [event, setEvent] = useState(null);
//   const token = localStorage.getItem("token");

//   useEffect(() => {
//     fetch(`${API_BASE}/events/all`)
//       .then((r) => r.json())
//       .then((data) => {
//         const found = data.find((e) => e.id_event === Number(id));
//         setEvent(found);
//       });
//   }, [id]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData(e.target);
//     const data = Object.fromEntries(formData);

//     try {
//       const res = await fetch(`${API_BASE}/events/upd/${id}`, {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify(data),
//       });

//       if (res.ok) {
//         alert("Event berhasil diupdate!");
//         navigate("/admin/events");
//       } else {
//         alert("Gagal update event");
//       }
//     } catch (err) {
//       alert("Error server");
//     }
//   };

//   if (!event) return <div className="p-8 text-center">Loading...</div>;

//   return (
//     <div className="p-8 max-w-4xl mx-auto">
//       <h1 className="text-4xl font-bold text-gray-800 mb-8">Edit Event</h1>

//       <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8 space-y-6">
//         <div>
//           <label className="block text-lg font-medium text-gray-700 mb-2">Nama Event</label>
//           <input
//             name="nama_event"
//             type="text"
//             defaultValue={event.nama_event}
//             required
//             className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         <div>
//           <label className="block text-lg font-medium text-gray-700 mb-2">Lokasi</label>
//           <input
//             name="lokasi"
//             type="text"
//             defaultValue={event.lokasi}
//             required
//             className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         <div>
//           <label className="block text-lg font-medium text-gray-700 mb-2">Tanggal</label>
//           <input
//             name="tanggal_event"
//             type="date"
//             defaultValue={event.tanggal_event.split("T")[0]}
//             required
//             className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         <div className="flex gap-4 pt-6">
//           <button
//             type="submit"
//             className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700"
//           >
//             Update Event
//           </button>
//           <button
//             type="button"
//             onClick={() => navigate("/admin/events")}
//             className="bg-gray-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-600"
//           >
//             Batal
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// // src/pages/admin/events/EditEvent.jsx
// import { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";

// const API_BASE = "http://localhost:5000";

// export default function EditEvent() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [event, setEvent] = useState(null);
//   const token = localStorage.getItem("token");

//   useEffect(() => {
//     fetch(`${API_BASE}/events/all`)
//       .then((r) => r.json())
//       .then((data) => {
//         const found = data.find((e) => e.id_event === Number(id));
//         setEvent(found);
//       });
//   }, [id]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData(e.target);
//     const data = Object.fromEntries(formData);

//     try {
//       const res = await fetch(`${API_BASE}/events/upd/${id}`, {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify(data),
//       });

//       if (res.ok) {
//         alert("Event berhasil diupdate!");
//         navigate("/admin/events");
//       } else {
//         alert("Gagal update event");
//       }
//     } catch (err) {
//       alert("Error server");
//     }
//   };

//   if (!event) return <div className="p-8 text-center">Loading...</div>;

//   return (
//     <div className="p-8 max-w-4xl mx-auto">
//       <h1 className="text-4xl font-bold text-gray-800 mb-8">Edit Event</h1>

//       <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8 space-y-6">
//         <div>
//           <label className="block text-lg font-medium text-gray-700 mb-2">Nama Event</label>
//           <input
//             name="nama_event"
//             type="text"
//             defaultValue={event.nama_event}
//             required
//             className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         <div>
//           <label className="block text-lg font-medium text-gray-700 mb-2">Lokasi</label>
//           <input
//             name="lokasi"
//             type="text"
//             defaultValue={event.lokasi}
//             required
//             className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         <div>
//           <label className="block text-lg font-medium text-gray-700 mb-2">Tanggal</label>
//           <input
//             name="tanggal_event"
//             type="date"
//             defaultValue={event.tanggal_event.split("T")[0]}
//             required
//             className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//          <div>
//           <label className="block text-lg font-medium text-gray-700 mb-2">Harga Tiket</label>
//           <input
//             name="harga_tiket"
//             type="number"
//             defaultValue={event.harga_tiket}
//             required
//             className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         <div>
//           <label className="block text-lg font-medium text-gray-700 mb-2">Jumlah Tiket</label>
//           <input
//             name="jumlah_tiket"
//             type="number"
//             defaultValue={event.jumlah_tiket}
//             required
//             className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
//           />
//         </div>
//         <div>
//           <label className="block text-lg font-medium text-gray-700 mb-2">image</label>
//           <input
//             name="img"
//             type="text"
//             defaultValue={event.img}
//             required
//             className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         <div className="flex gap-4 pt-6">
//           <button
//             type="submit"
//             className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700"
//           >
//             Update Event
//           </button>
//           <button
//             type="button"
//             onClick={() => navigate("/admin/events")}
//             className="bg-gray-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-600"
//           >
//             Batal
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// src/pages/admin/events/EditEvent.jsx
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../../../config/api";

const API_BASE = API_BASE_URL;

export default function EditEvent() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetch(`${API_BASE}/events/all`)
      .then((r) => {
        if (!r.ok) throw new Error("Gagal fetch events");
        return r.json();
      })
      .then((data) => {
        const found = data.find((e) => e.id_event === Number(id));
        if (!found) {
          alert("Event tidak ditemukan!");
          navigate("/admin/events");
          return;
        }
        setEvent(found);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        alert("Error loading event");
        navigate("/admin/events");
      });
  }, [id, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    // ✅ PENTING: Convert number fields ke integer
    const payload = {
      nama_event: formData.get("nama_event"),
      lokasi: formData.get("lokasi"),
      tanggal_event: formData.get("tanggal_event"),
      harga_tiket: Number(formData.get("harga_tiket")),   // ✅ Convert ke number
      jumlah_tiket: Number(formData.get("jumlah_tiket")), // ✅ Convert ke number
      img: formData.get("img") || null,
      jenis_tiket: formData.get("jenis_tiket") || "Reguler",
      deskripsi: formData.get("deskripsi") || "Deskripsi belum ditambahkan."
    };

    console.log("📤 Payload yang dikirim:", payload); // Debug

    try {
      // ✅ FIX: Ganti endpoint dari /upd/ ke /update/
      const res = await fetch(`${API_BASE}/events/upd/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      const result = await res.json();
      console.log("📥 Response dari server:", result); // Debug

      if (res.ok) {
        alert("✅ Event berhasil diupdate!");
        navigate("/admin/events");
      } else {
        alert(`❌ ${result.error || result.message || "Gagal update event"}`);
        console.error("Error response:", result);
      }
    } catch (err) {
      console.error("❌ Error:", err);
      alert("Error server - cek console (F12)");
    }
  };

  if (loading) {
    return (
      <div className="p-8 text-center">
        <div className="text-2xl text-gray-600">⏳ Loading event...</div>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="p-8 text-center">
        <div className="text-2xl text-red-600">❌ Event tidak ditemukan</div>
        <button
          onClick={() => navigate("/admin/events")}
          className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg"
        >
          Kembali ke Daftar Event
        </button>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">📝 Edit Event</h1>

      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8 space-y-6">

        {/* Nama Event */}
        <div>
          <label className="block text-lg font-medium text-gray-700 mb-2">
            Nama Event <span className="text-red-500">*</span>
          </label>
          <input
            name="nama_event"
            type="text"
            defaultValue={event.nama_event}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Contoh: Concert Sheila On 7"
          />
        </div>

        {/* Lokasi */}
        <div>
          <label className="block text-lg font-medium text-gray-700 mb-2">
            Lokasi <span className="text-red-500">*</span>
          </label>
          <input
            name="lokasi"
            type="text"
            defaultValue={event.lokasi}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Contoh: Jakarta Convention Center"
          />
        </div>

        {/* Tanggal Event */}
        <div>
          <label className="block text-lg font-medium text-gray-700 mb-2">
            Tanggal Event <span className="text-red-500">*</span>
          </label>
          <input
            name="tanggal_event"
            type="date"
            defaultValue={event.tanggal_event.split("T")[0]}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Harga Tiket */}
        <div>
          <label className="block text-lg font-medium text-gray-700 mb-2">
            Harga Tiket (Rp) <span className="text-red-500">*</span>
          </label>
          <input
            name="harga_tiket"
            type="number"
            defaultValue={event.harga_tiket}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="150000"
          />
          <p className="text-sm text-gray-500 mt-1">Masukkan harga dalam Rupiah</p>
        </div>

        {/* Jumlah Tiket */}
        <div>
          <label className="block text-lg font-medium text-gray-700 mb-2">
            Jumlah Tiket <span className="text-red-500">*</span>
          </label>
          <input
            name="jumlah_tiket"
            type="number"
            min="1"
            defaultValue={event.jumlah_tiket}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="100"
          />
          <p className="text-sm text-gray-500 mt-1">Jumlah tiket yang tersedia</p>
        </div>

        <div>
          <label className="block text-lg font-medium text-gray-700 mb-2">
            jenis Tiket <span className="text-red-500">*</span>
          </label>
          <input
            name="jenis_tiket"
            type="text"
            min="1"
            defaultValue={event.jenis_tiket}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="100"
          />
          <p className="text-sm text-gray-500 mt-1">Jenis tiket yang di inginkan</p>
        </div>
        {/* Deskripsi Event */}
        <div>
          <label className="block text-lg font-medium text-gray-700 mb-2">
            Deskripsi Event <span className="text-red-500">*</span>
          </label>
          <textarea
            name="deskripsi"
            defaultValue={event.deskripsi || ""}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Deskripsi singkat mengenai event ini..."
            rows={4}
          />
        </div>

        {/* Image URL */}
        <div>
          <label className="block text-lg font-medium text-gray-700 mb-2">
            URL Gambar Event
          </label>
          <input
            name="img"
            type="text"
            defaultValue={event.img || ""}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="https://example.com/image.jpg"
          />
          <p className="text-sm text-gray-500 mt-1">
            Kosongkan jika tidak ingin mengubah gambar
          </p>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 pt-6">
          <button
            type="submit"
            className="flex-1 bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition shadow-lg"
          >
            💾 Update Event
          </button>
          <button
            type="button"
            onClick={() => navigate("/admin/events")}
            className="flex-1 bg-gray-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-600 transition"
          >
            ✖️ Batal
          </button>
        </div>
      </form>
    </div>
  );
}