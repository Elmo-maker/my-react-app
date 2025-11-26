const express = require('express');
const app = express();

const authRouter = require('./routes/login');
const adminRouter = require('./routes/admin');
const eventRouter = require('/.routes/even');
const detailRouter = require('/.routers/detail');

app.use(express.json());


app.use('/login', authRouter);
app.use('/admin', adminRouter);
app.use('/even', eventRouter);
app.use('/detail', detailRouter);

app.get('/', (req, res) => {
  res.send('jalan kali');
});

app.use((req, res) => {
  res.status(404).json({ error: "Route tidak ditemukan" });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});