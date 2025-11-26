import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Checkout() {
  const { state: event } = useLocation();
  const navigate = useNavigate();

  const [ticketCount, setTicketCount] = useState(1);
  const [form, setForm] = useState({ name: "", email: "", phone: "" });

  if (!event) return <p>Tidak ada event</p>;

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/payment", {
      state: {
        event,
        totalPrice: ticketCount * event.price,
        form,
      },
    });
  };

  return (
    <div className="max-w-lg mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Checkout Tiket</h2>

      <p className="font-semibold mb-2">{event.title}</p>

      <label className="block font-semibold">Jumlah Tiket:</label>
      <input
        type="number"
        min="1"
        value={ticketCount}
        onChange={(e) => setTicketCount(e.target.value)}
        className="border p-2 w-full mb-4"
      />

      <form onSubmit={handleSubmit}>
        <label className="block">Nama Lengkap</label>
        <input
          className="border p-2 w-full mb-3"
          required
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <label className="block">Email</label>
        <input
          className="border p-2 w-full mb-3"
          required
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <label className="block">Nomor Telepon</label>
        <input
          className="border p-2 w-full mb-4"
          required
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />

        <button className="bg-blue-600 text-white w-full py-2 rounded">
          Lanjut ke Pembayaran
        </button>
      </form>
    </div>
  );
}
