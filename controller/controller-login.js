const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { OAuth2Client } = require('google-auth-library');

const prisma = new PrismaClient();
const googleClient = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

exports.register = async (req, res) => {
  try {
    const { username, password, email } = req.body;
    if (!username || !email || !password) {
      return res.status(400).json({ error: "Semua field harus diisi" });
    }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test) {
      return res.status(400).json({error : "Format Email tidak benar"});
    }

    const existingUser = await prisma.login.findFirst({
      where: {email:email.trim()}
    });

    if(existingUser) {
      return res.status(400).json({error:"email sudah terdaftar"});
    }

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    if(!passwordRegex.test(password)) {
      return res.status(400).json({error:"Password minimal 6 karakter dan harus mengandung huruf & angka"});
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.login.create({
      data: { username, password: hashedPassword, email, role: "user" }
    });

    res.json({
      id_login: newUser.id_login,
      username: newUser.username,
      email: newUser.email,
      role: newUser.role
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. Cari user di database
    
    const user = await prisma.login.findFirst({ where: { email: email.trim()} });
    if (!user) return res.status(404).json({ error: "Email Salah" });

    const validpass = await bcrypt.compare(password, user.password);
    if (!validpass) return res.status(401).json({ error: "Password Salah" });

    // 3. Tentukan role berdasarkan email (contoh sederhana)
    //    Lebih baik simpan kolom `role` di tabel user, tapi kalau memang pakai @admin ini contohnya:
    const isAdmin = email.includes("@admin");
    const role = isAdmin ? "admin" : "user";

    // 4. Buat JWT
    const token = jwt.sign(
      { id: user.id_login, role },          // payload
      "RAHASIA_KEY",
      { expiresIn: "1h" }                    // 1 jam
    );

    // 5. Kirim response
    res.json({
      message: isAdmin ? "Selamat datang Admin!" : "Selamat datang User!",
      token,
      user: {
        id: user.id_login,
        email: user.email,
        name: user.name,
        role,                               // admin atau user
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Terjadi kesalahan server" });
  }
};

// exports.login = async (req, res) => {
//   try {
    // const { email, password } = req.body;
    // const user = await prisma.login.findFirst({ where: { email: email.trim()} });
    // if (!user) return res.status(404).json({ error: "Email Salah" });

    // const validpass = await bcrypt.compare(password, user.password);
    // if (!validpass) return res.status(401).json({ error: "Password Salah" });

//     const isAdmin = user.email.has ("@admin");

//     const token = jwt.sign(
//       { id_login: user.id_login, role: isAdmin ? "admin" : "user" },
//       "RAHASIA_KEY",
//       { expiresIn: "1h" }
//     );

//     res.json({
//       message: "selamat datang admin",
//       token,
//       user: { ...user, role: isAdmin ? "admin" : "user" }
//     });
//     if (res.data.user.role === 'admin') {
//       navigate('..Admin/src/pages/admin');           // atau '/admin/dashboard'
//     } else {
//       navigate('home.jsx');           // atau '/user/dashboard'
//     }
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

exports.loginGoogle = async (req, res) => {
  try {
    const { token } = req.body;

    const ticket = await googleClient.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID
    });

    const payload = ticket.getPayload();
    const email = payload.email;
    const username = payload.name;

    let user = await prisma.login.findFirst({ where: { email } });

    if (!user) {
      user = await prisma.login.create({
        data: {
          username,
          email,
          password: "",
          role: "user"
        }
      });
    }

    const jwtToken = jwt.sign(
      { id_login: user.id_login, role: user.role },
      "RAHASIA_KEY",
      { expiresIn: "1h" }
    );

    res.json({
      message: "Google Connected",
      token: jwtToken,
      user: {
        id_login: user.id_login,
        username: user.username,
        email: user.email,
        role: user.role
      }
    });

  } catch (err) {
    res.status(500).json({ error: "Token Google tidak valid: " + err.message });
  }
};