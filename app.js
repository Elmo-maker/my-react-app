const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const loginRoutes = require('./routes/routes-login');
const adminRoutes = require('./routes/routes-admin');
const eventRoutes = require('./routes/routes-event');
const detailRoutes = require('./routes/routes-tiket');
const paymentRoutes = require('./routes/routes-payments');


app.use('/login', loginRoutes);
app.use('/admin', adminRoutes);
app.use('/event', eventRoutes);
app.use('/tiket', detailRoutes);
app.use('/api/payment', paymentRoutes);


const PORT = process.env.port || 3000;

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
