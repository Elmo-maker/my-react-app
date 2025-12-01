const express = require('express');
const cors = require ('cors');
const app = express();
require('dotenv').config();


app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Methods", "*");
  if (req.method === "OPTIONS") return res.sendStatus(200);
  next();
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const loginRoutes = require('./routes/routes-login');
const adminRoutes = require('./routes/routes-admin');
const eventRoutes = require('./routes/routes-event');
const detailRoutes = require('./routes/routes-tiket');
const paymentRoutes = require('./routes/routes-payments');
const transaksiRoutes = require('./routes/routes-transaksi');
  // atau "./routes/events.js"

app.get("/test", (req, res) => {
  res.json({ message: "BACKEND JALAN BRO!!!" });
});

app.post("/test-post", (req, res) => {
  console.log("ADA YANG POST KE /test-post:", req.body);
  res.json({ success: true, data: req.body });
});
app.use('/login', loginRoutes);
app.use('/admin', adminRoutes);
app.use("/events", eventRoutes);
app.use('/tiket', detailRoutes);
app.use('/api/payment', paymentRoutes);
app.use('/transaksi', transaksiRoutes);


const PORT = process.env.port || 5000;

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
