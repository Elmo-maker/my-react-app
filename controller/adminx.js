exports.getDashboard = (req, res) => {
  res.json({
    message: `Halo admin ${req.user.id_login}`,
    user: req.user
  });
};