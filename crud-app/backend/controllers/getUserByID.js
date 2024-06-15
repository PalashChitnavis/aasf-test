const User = require("../model/User");
const getUserByID = async (req, res) => {
  //logic this approach edgecases id > 0 & id <= lastID
  const { id } = req.params;
  const lastUser = await User.findOne().sort({ id: -1 });
  const user = await User.findOne({ id: id });
  res.send(user);
};

module.exports = getUserByID;
