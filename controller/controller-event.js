const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Fungsi CREATE (Memastikan data event dan tiket disimpan)
exports.createEvent = async (req, res) => {
    try {
        const { nama_event, tanggal_event, lokasi, tipe_tiket, harga_tiket } = req.body;

        // 1. BUAT EVENT UTAMA
        const event = await prisma.event_tiket.create({
            data: { nama_event, tanggal_event, lokasi }
        });

        // 2. BUAT DETAIL TIKET MENGGUNAKAN ID EVENT BARU
        const tiket = await prisma.detail_tiket.create({
            data: {
                // Pastikan nama kolom Primary Key di event_tiket adalah 'id_event'
                id_event: event.id_event, 
                tipe_tiket,
                lokasi, 
                harga_tiket
            }
        });

        res.json({ message: "Event Berhasil Dibuat", event, tiket });
    } catch (err) {
        // Log error di server agar mudah di debug
        console.error("Kesalahan saat membuat event:", err.message);
        res.status(500).json({ error: "Gagal menyimpan data event. Detail: " + err.message });
    }
};

// Fungsi READ (Mengambil semua event) - Tetap OK
exports.getEvents = async (req, res) => {
    try {
        // Ini akan mengembalikan array data untuk Page User (Home.jsx)
        const event = await prisma.event_tiket.findMany();
        res.json(event);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Fungsi UPDATE (Perbaikan: Menggunakan id_event)
exports.updateEvent = async (req, res) => {
    try {
        const { id } = req.params;
        const { nama_event, lokasi, tanggal_event } = req.body;

        const updated = await prisma.event_tiket.update({
            // MENGUBAH id menjadi id_event
            where: { id_event: Number(id) }, 
            data: { nama_event, lokasi, tanggal_event }
        });

        res.json(updated);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Fungsi DELETE (Perbaikan: Menggunakan model event_tiket dan id_event)
exports.deleteEvent = async (req, res) => {
    try {
        const { id } = req.params;

        // MENGUBAH prisma.event menjadi prisma.event_tiket
        await prisma.event_tiket.delete({ where: { id_event: Number(id) } }); 

        res.json({ message: "Event Berhasil Dihapus" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};