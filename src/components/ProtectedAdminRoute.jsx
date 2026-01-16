// src/components/ProtectedAdminRoute.jsx
import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

/**
 * Komponen untuk melindungi route admin.
 * Hanya user dengan role "admin" yang bisa mengakses halaman ini.
 * User biasa atau yang belum login akan di-redirect ke homepage.
 */
export default function ProtectedAdminRoute({ children }) {
    const token = localStorage.getItem("token");

    // Jika tidak ada token, redirect ke halaman utama
    if (!token) {
        return <Navigate to="/" replace />;
    }

    try {
        // Decode JWT token untuk mendapatkan informasi user
        const decoded = jwtDecode(token);

        // Cek apakah token sudah expired
        const currentTime = Date.now() / 1000;
        if (decoded.exp && decoded.exp < currentTime) {
            // Token expired, hapus dan redirect
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            return <Navigate to="/" replace />;
        }

        // Cek apakah user memiliki role admin
        if (decoded.role !== "admin") {
            // Bukan admin, redirect ke halaman utama
            return <Navigate to="/" replace />;
        }

        // User adalah admin, render children
        return children;
    } catch (error) {
        // Error saat decode token (token tidak valid)
        console.error("Error decoding token:", error);
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        return <Navigate to="/" replace />;
    }
}
