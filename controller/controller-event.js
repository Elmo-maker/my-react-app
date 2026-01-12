// yang di komentarin adalah kode lama sebelum di update dengan menambahkan fitur tiket dan beberapa validasi

// const { PrismaClient } = require('@prisma/client');
// const prisma = new PrismaClient();


// exports.createEvent = async (req, res) => {
//     try {
//         console.log("Request Body:", req.body); // Debug: log request body
//         const { nama_event, lokasi, tanggal_event, detailTiket} = req.body;

//         const tanggalFix = tanggal_event.includes("T") 
//       ? tanggal_event 
//       : `${tanggal_event}T00:00:00.000Z`;

//         const newEvent = await prisma.event_tiket.create({
//       data: {
//         nama_event,
//         tanggal_event: new Date(tanggal_event),
//         lokasi,
//         detailTiket,
//       },
//       include: {
//         detailTiket: true,
//       },
//     });

//         const tiket = await prisma.detail_tiket.create({
//             data: {
//                 id_event: event.id_event, 
//                 tipe_tiket,
//                 lokasi, 
//                 harga_tiket
//             }
//         });

//         res.json({ message: "Event Berhasil Dibuat", event, tiket });
//     } catch (err) {
//         console.error("Kesalahan saat membuat event:", err.message);
//         res.status(500).json({ error: "Gagal menyimpan data event. Detail: " + err.message });
//     }
// };

// exports.getEvents = async (req, res) => {
//     try {
//         const event = await prisma.event_tiket.findMany();
//         res.json(event);
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// };

// exports.updateEvent = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const { nama_event, lokasi, tanggal_event } = req.body;

//         const updated = await prisma.event_tiket.update({
//             where: { id_event: Number(id) }, 
//             data: { nama_event, lokasi, tanggal_event }
//         });

//         res.json(updated);
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// };

// exports.deleteEvent = async (req, res) => {
//     try {
//         const { id } = req.params;


//         await prisma.event_tiket.delete({ where: { id_event: Number(id) } }); 

//         res.json({ message: "Event Berhasil Dihapus" });
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// };

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// controllers/event.js (atau nama file sesuai kamu)

exports.createEvent = async (req, res) => {
  try {
    console.log("Request Body:", req.body);

    const { nama_event, lokasi, tanggal_event, harga_tiket, jumlah_tiket, jenis_tiket, deskripsi, img } = req.body;

    // Validasi input wajib
    // if (!nama_event || !lokasi || !tanggal_event || harga_tiket || jumlah_tiket === undefined) {
    //   return res.status(400).json({
    //     error: "Field nama event, lokasi, tanggal event, harga tiket dan jumlah ticket wajib diisi",
    //   });
    // }

    // Fix format tanggal: tambahkan waktu jika belum ada
    const tanggalObj = new Date(tanggal_event)
    


    // Pastikan harga_tiket adalah integer
    const hargaInt = parseInt(harga_tiket, 10);
    if (isNaN(hargaInt) || hargaInt < 0) {
      return res.status(400).json({ error: "harga tiket harus berupa angka positif" });
    }

   const TicketInt = Number(jumlah_tiket);

if (!Number.isInteger(TicketInt) || TicketInt <= 0) {
  return res.status(400).json({
    error: "jumlah tiket harus berupa angka positif"
  });
}

    // Buat event
    const newEvent = await prisma.event_tiket.create({
      data: {
        nama_event: nama_event,
        lokasi:lokasi,
        tanggal_event: tanggalObj, // gunakan tanggal yang sudah difix
        harga_tiket: hargaInt,
        jumlah_tiket: TicketInt,
        jenis_tiket: jenis_tiket,
        deskripsi: deskripsi,
        img: img,// 
      },
      // Hapus include detailTiket karena tidak ada relasi di schema
      // Jika nanti ada relasi, baru ditambahkan kembali
    });

    // Respon sukses
    res.status(201).json({
      message: "Event berhasil dibuat",
      event: newEvent,
    });
  } catch (err) {
    console.error("Kesalahan saat membuat event:", err);

    // Tangani error Prisma khusus (misal validasi atau constraint)
    if (err.code === "P2002") {
      return res.status(409).json({ error: "Event dengan nama tersebut sudah ada" });
    }

    res.status(500).json({
      error: "Gagal menyimpan data event",
      detail: err.message,
    });
  }
};
// exports.createEvent = async (req, res) => {
//     try {
//         console.log("Request Body:", req.body); // Debug: log request body
//         const { nama_event, lokasi, tanggal_event, harga_tiket} = req.body;

//         const tanggalFix = tanggal_event.includes("T") 
//       ? tanggal_event 
//       : `${tanggal_event}T00:00:00.000Z`;

//         const newEvent = await prisma.event_tiket.create({
//       data: {
//         nama_event,
//         tanggal_event: new Date(tanggal_event),
//         lokasi,
//         harga_tiket,
//       },
//       include: {
//         detailTiket: true,
//       },
//     });


//         res.json({ message: "Event Berhasil Dibuat", event, tiket });
//     } catch (err) {
//         console.error("Kesalahan saat membuat event:", err.message);
//         res.status(500).json({ error: "Gagal menyimpan data event. Detail: " + err.message });
//     }
// };

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
        const { nama_event, lokasi, tanggal_event, harga_tiket, jumlah_tiket, img } = req.body;

        const updated = await prisma.event_tiket.update({
            where: { id_event: Number(id) }, 
            data: { nama_event, lokasi, tanggal_event : new Date(tanggal_event), 
              harga_tiket : Number(harga_tiket), 
              jumlah_tiket : Number(jumlah_tiket), 
              deskripsi : deskripsi,  jenis_tiket : jenis_tiket,
              img : img},
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