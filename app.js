const express = require('express');
const app = express();

app.use(express.json());

const loginRoutes = require('./routes/routes-login');
const adminRoutes = require('./routes/routes-admin');
const eventRoutes = require('./routes/routes-event');
const detailRoutes = require('./routes/routes-tiket');
const transaksiRoutes = require('./routes/routes-transaksi');


app.use('/login', loginRoutes);
app.use('/admin', adminRoutes);
app.use('/event', eventRoutes);
app.use('/tiket', detailRoutes);
app.use('/transaksi', transaksiRoutes);


app.listen(3000, () => {
  console.log("Server berjalan pada port 3000");
});
