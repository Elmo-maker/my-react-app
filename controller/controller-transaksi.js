const {PrismaClient} = require("@prisma/client")
const prisma = new PrismaClient();

module.exports = {

createTransaksi: async (req, res) => {
    try {
      const { loginId, tiketId, jumlah } = req.body;

      const tiket = await prisma.detail_tiket.findUnique({
        where: { id_tiket: tiketId }
      });

      if (!tiket) {
        return res.status(404).json({ message: "Tiket tidak ditemukan" });
      }

      const total_harga = tiket.harga_tiket * jumlah;

      const result = await prisma.transaksi.create({
        data: {
          loginId,
          tiketId,
          jumlah,
          total_harga,
        }
      });

      res.json({
        message: "Transaksi berhasil dibuat",
        data: result
      });

    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  getAllTransaksi: async (req, res) => {
    try {
      const transaksi = await prisma.transaksi.findMany({
        include: {
          user: { select: { username: true, email: true, role: true } },
          tiket: {
            include: {
              event: true
            }
          }
        }
      });

      res.json(transaksi);

    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  getTransaksiById: async(req, res)=> {
    try {
        const {id} = req.params;

        const transaksi = await prisma.transaksi.findUnique({
            where: {id_transaksi: Number(id)},
            include:{
                user:{select: {username: true, email:true, role:true }},
                tiket: {
                    include: {
                        event: true
                    }
                }
            }
        });
        if (!transaksi) {
            return res.status(500).json({message:"Transaksi tidak ada"});
        }
        res.json(transaksi)
    }catch(err) {
        res.status(500).json({error:err.message});
    }
  }
};