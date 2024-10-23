const { User } = require('../models'); // Esto es correcto

const createUser = async (req, res) => {
  try {
    const users = await User.create(req.body);
    res.status(201).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users= await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const updateUser = async (req, res) => {
    try {
      const {name_user,last_name_user,email_user,password} = req.body;
      const user= await User.findByPk(req.params.id);
  
      if (user) {
       User.name_user=name_user
       User.last_name_user=last_name_user
       User.email_user=email_user
       User.password=password
  
        await user.save();
        res.status(200).json(user);
      } else {
        res.status(404).json({ message: 'user not found' });
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
        res.status(200).json({ message: 'user deleted successfully' });
      } else {
        res.status(404).json({ message: 'user not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };




module.exports = {
    createUser,
    getAllUsers,
    updateUser,
    deleteUser
};
