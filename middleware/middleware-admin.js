// middleware/middleware-admin.js
const jwt = require("jsonwebtoken");

const verifyAdmin = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({
      error: "Akses ditolak. Token tidak ditemukan.",
    });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("JWT ADMIN:", decoded);

    // Cek apakah role adalah admin
    if (decoded.role !== "admin") {
      return res.status(403).json({ error: "Akses hanya untuk admin" });
    }

    req.user = decoded; // { id, role }
    next();
  } catch (err) {
    return res.status(401).json({ error: "Token tidak valid." });
  }
};

module.exports = verifyAdmin;

