// API Configuration
// Gunakan environment variable jika ada, fallback ke localhost untuk development
export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

// Helper function untuk API calls
export const apiUrl = (path) => `${API_BASE_URL}${path}`;
