const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const prisma = new PrismaClient();

exports.register = async (req, res) => {
  try {
    const { username, password, email } = req.body;
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
    const user = await prisma.login.findFirst({ where: { email } });
    if (!user) return res.status(404).json({ error: "Email Salah" });

    const validpass = await bcrypt.compare(password, user.password);
    if (!validpass) return res.status(401).json({ error: "Password Salah" });

    const isAdmin = user.username.includes("@admin");

    const token = jwt.sign(
      { id_login: user.id_login, role: isAdmin ? "admin" : "user" },
      "RAHASIA_KEY",
      { expiresIn: "1h" }
    );

    res.json({
      message: "Login berhasil",
      token,
      user: { ...user, role: isAdmin ? "admin" : "user" }
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
