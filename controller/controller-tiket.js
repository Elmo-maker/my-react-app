const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const QRcode = require("qrcode");
const nodemailer = require("nodemailer");
const { QrCode } = require('lucide-react');

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

exports.sendQrToEmail = async (req, res) => {
  try {
    const{email, transaksi_id} = req.body;
    if(!email || !transaksi_id) {
      return res.status(400).json({
        success: false,
        message: "Email Dan transaksi_id Wajib Diisi",
      });
    }

    const transaksi = await prisma.transaksi.findUnique({
      where : {id: Number(transaksi_id)},
      include : {
        detail_tiket: true,
        event: true,
      },
    });
    
    if (!transaksi) {
      return res.status(400).json({
        success: false,
        message: "Transaksi Tidak Ditemukan",
      });
    }

    const qrPayLoad = {
      transaksi_id: transaksi_id,
      event: transaksi.event?.nama_event,
      tipe_tiket: transaksi.detail_tiket?.tipe_tiket,
      email,
    };

    const qrBase64 = await QRCode.toDataURL(JSON.stringify(qrPayload));

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth : {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

await transporter.sendMail({
      from: `"Festify Ticket" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "E-Ticket & QR Code Anda",
      html: `
        <h2>E-Ticket Festify 🎟️</h2>
        <p>Event: <b>${qrPayload.event}</b></p>
        <p>Tipe Tiket: <b>${qrPayload.tipe_tiket}</b></p>
        <p>Gunakan QR Code ini saat check-in</p>
        <img src="${qrBase64}" />
        <p>ID Transaksi: ${transaksi.id}</p>
      `,
    });

    res.json({
      success: true,
      message: "QR Code berhasil dikirim ke email",
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({
      success:false,
      message:"Gagal Mengirim QrCode",
      error: err.message,
    });
  }
}