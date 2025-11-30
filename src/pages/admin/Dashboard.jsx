// src/pages/admin/Dashboard.jsx
import { Link } from "react-router-dom";

export default function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Halo Admin, {user.name || user.email}!
        </h1>
        <p className="text-gray-600 mb-10">Kelola Event, Tiket & Transaksi</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link to="/admin/events" className="bg-blue-600 text-white p-10 rounded-xl text-center hover:bg-blue-700 transition">
            <h2 className="text-2xl font-bold">Events</h2>
            <p className="mt-2">Create, Update, Delete Event</p>
          </Link>

          <Link to="/admin/tickets" className="bg-green-600 text-white p-10 rounded-xl text-center hover:bg-green-700 transition">
            <h2 className="text-2xl font-bold">Tickets</h2>
            <p className="mt-2">Kelola Jenis & Harga Tiket</p>
          </Link>

          <Link to="/admin/transactions" className="bg-purple-600 text-white p-10 rounded-xl text-center hover:bg-purple-700 transition">
            <h2 className="text-2xl font-bold">Transactions</h2>
            <p className="mt-2">Lihat Semua Pembelian</p>
          </Link>
        </div>
      </div>
    </div>
  );
}