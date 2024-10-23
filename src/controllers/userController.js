const { User } = require("../models"); // Esto es correcto
const bcrypt = require("bcrypt");
const user = require("../models/user");

const createUser = async (req, res) => {
  try {
    let user = req.body;

    const hash = await bcrypt.hash(user.password, 10)
    user.password = hash

    user = await User.create(user);

    res.status(201).json({id_user: user.id_user});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const login = async (req, res) => {
  const { email_user, password } = req.body;

  const users = await User.findAll({ where: { email_user: email_user } });
  const user = users[0];

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
    return res.status(401).send("valid credentials");
  }

  res.json({
    access: true,
    id_user: user.id_user,
  });
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const { name_user, last_name_user, email_user, password } = req.body;
    const user = await User.findByPk(req.params.id);

    if (user) {
      User.name_user = name_user;
      User.last_name_user = last_name_user;
      User.email_user = email_user;
      User.password = password;

      await user.save();
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: "user not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);

    if (user) {
      await user.destroy();
      res.status(200).json({ message: "user deleted successfully" });
    } else {
      res.status(404).json({ message: "user not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createUser,
  getAllUsers,
  updateUser,
  deleteUser,
  login,
};
