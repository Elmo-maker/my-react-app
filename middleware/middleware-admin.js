const jwt = require('jsonwebtoken');

function hanyaadm(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ error: "Token tidak ada" });

  try {
    const decoded = jwt.verify(token, "RAHASIA_KEY");

    if (decoded.role !== "admin") {
      return res.status(403).json({ error: "Akses hanya untuk admin" });
    }

    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ error: "Token tidak valid" });
  }
}

module.exports = { hanyaadm };
