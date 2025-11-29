import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
return (
<aside className="w-60 bg-blue-600 text-white p-6 flex flex-col">
<h2 className="text-lg font-semibold mb-4">Menu</h2>

  <nav className="flex flex-col gap-3 flex-1">
    <Link to="/admin/create" className="hover:text-blue-200">Tambah Event</Link>
    <Link to="/admin/events" className="hover:text-blue-200">Daftar Event</Link>
    <Link to="/admin/payments" className="hover:text-blue-200">Status Pembayaran</Link>
  </nav>

  <button className="bg-white text-blue-600 px-4 py-2 rounded">
    Logout
  </button>
</aside>


);
}