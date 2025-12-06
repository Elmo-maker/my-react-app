// src/layouts/AdminLayout.jsx
import { Outlet, Link } from "react-router-dom";

export default function AdminLayout({ children }) {
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 p-6">
        <h1 className="text-3xl font-bold mb-10 text-yellow-400">Festify Admin</h1>
        <nav className="space-y-4">
          <Link to="/admin" className="block py-3 px-4 bg-gray-700 rounded hover:bg-gray-600">Dashboard</Link>
          <Link to="/admin/events" className="block py-3 px-4 rounded hover:bg-gray-600">Events</Link>
          <Link to="/admin/tickets" className="block py-3 px-4 rounded hover:bg-gray-600">Tickets</Link>
          <Link to="/admin/transactions" className="block py-3 px-4 rounded hover:bg-gray-600">Transactions</Link>
        </nav>
        <button onClick={handleLogout} className="mt-12 w-full bg-red-600 py-3 rounded hover:bg-red-700">
          Logout
        </button>
      </aside>

      {/* Content */}
      <div className="flex-1 bg-gray-100 text-gray-900">
        <header className="bg-white shadow p-6">
          <h2 className="text-2xl font-bold">Admin Panel</h2>
        </header>
        <main className="p-8">
          {children || <Outlet />}
        </main>
      </div>
    </div>
  );
}