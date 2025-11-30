const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


exports.createEvent = async (req, res) => {
    try {
        const { nama_event, tanggal_event, lokasi, tipe_tiket, harga_tiket } = req.body;

        const event = await prisma.event_tiket.create({
            data: { nama_event, tanggal_event, lokasi }
        });

        const tiket = await prisma.detail_tiket.create({
            data: {
                id_event: event.id_event, 
                tipe_tiket,
                lokasi, 
                harga_tiket
            }
        });

        res.json({ message: "Event Berhasil Dibuat", event, tiket });
    } catch (err) {
        console.error("Kesalahan saat membuat event:", err.message);
        res.status(500).json({ error: "Gagal menyimpan data event. Detail: " + err.message });
    }
};

exports.getEvents = async (req, res) => {
    try {
        const event = await prisma.event_tiket.findMany();
        res.json(event);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateEvent = async (req, res) => {
    try {
        const { id } = req.params;
        const { nama_event, lokasi, tanggal_event } = req.body;

        const updated = await prisma.event_tiket.update({
            where: { id_event: Number(id) }, 
            data: { nama_event, lokasi, tanggal_event }
        });

        res.json(updated);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteEvent = async (req, res) => {
    try {
        const { id } = req.params;


        await prisma.event_tiket.delete({ where: { id_event: Number(id) } }); 

        res.json({ message: "Event Berhasil Dihapus" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};