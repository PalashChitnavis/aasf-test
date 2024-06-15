const User = require("../model/User");
const getUsers = async (req, res) => {
  const { domain, gender, availability, search, page } = req.query;
  const query = {};
  if (domain) {
    query.domain = domain;
  }
  if (availability) {
    query.available = availability === "Available" ? true : false;
  }
  if (gender) {
    query.gender = gender;
  }
  const perPage = 20;
  const skip = parseInt(page || 0) * perPage;
  const users = await User.find(query).skip(skip).limit(perPage);
  if (search) {
    const searchUsers = await User.find({
      $text: { $search: search, $caseSensitive: false },
    });
    res.send(searchUsers);
    return;
  }
  res.send(users);
};

module.exports = getUsers;
