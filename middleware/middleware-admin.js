// const jwt = require('jsonwebtoken');

// function verifyToken(req, res, next) {
//   console.log("Memverifikasi token untuk admin...");
//   const token = req.headers.authorization?.split(" ")[1];
//   if (!token) return res.status(401).json({ error: "Token tidak ada" });

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);

//     if (decoded.role !== "admin") {
//       return res.status(403).json({ error: "Akses hanya untuk admin" });
//     }

//     req.user = decoded;
//     next();
//   } catch (err) {
//     res.status(401).json({ error: "Token tidak valid" });
//   }
// }

// module.exports = { verifyToken };


//// 

// function verifyToken(req, res, next) {
//   console.log("Memverifikasi token untuk admin...");
//   const token = req.headers.authorization?.split(" ")[1];
//   if (!token) return res.status(401).json({ error: "Token tidak ada" });

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);

//     if (decoded.role !== "admin") {
//       return res.status(403).json({ error: "Akses hanya untuk admin" });
//     }

//     req.user = decoded;
//     next();
//   } catch (err) {
//     res.status(401).json({ error: "Token tidak valid" });
//   }
// }

// module.exports = { verifyToken };
const verifyAdmin = (req, res, next) => {
  if (!req.user) {
    return res.status(401).json({ error: "Harus login" });
  }

  if (req.user.role !== "admin") {
    return res.status(403).json({ error: "Akses admin saja" });
  }

  next();
};

module.exports = verifyAdmin;
