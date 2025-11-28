const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.createTiket = async (req, res) => {
  try {
    const { id_event, tipe_tiket, harga_tiket, lokasi } = req.body;

    const tiket = await prisma.detail_tiket.create({
      data: { id_event: Number(id_event), tipe_tiket, harga_tiket, lokasi }
    });

    res.json({
      message: "Detail Tiket Berhasil Dibuat",
      tiket
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getDetailTiket = async (req, res) => {
  try {
    const { id_event } = req.params;

    const tiket = await prisma.detail_tiket.findMany({
      where: { id_event: Number(id_event) }
    });

    res.json(tiket);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateTiket = async (req, res) => {
  try {
    const { id } = req.params;
    const { tipe_tiket, harga_tiket } = req.body;

    const updated = await prisma.detail_tiket.update({
      where: { id: Number(id) },
      data: { tipe_tiket, harga_tiket }
    });

    res.json({
      message: "Update tiket berhasil",
      updated
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteTiket = async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.detail_tiket.delete({
      where: { id: Number(id) }
    });

    res.json({ message: "Tiket berhasil dihapus" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
