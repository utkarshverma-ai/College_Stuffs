const UserModel = require('../models/userModules');

exports.getAllUsers = async (req, res) => {
  try {
    const users = await UserModel.find({});
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await UserModel.findById(id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.addUser = async (req,res) => {
  const userMeta = req.body;
  console.log("userMeta:", userMeta);

  if(userMeta?._id){
    const existingUser = await UserModel.findOne({_id: Number(userMeta._id)});
    if(existingUser){
      return res.send({ message: "User with this ID already exists" });
    }
  }
  await UserModel.create(userMeta);
  res.send({ message: "User added successfully" });
}


// exports.getUserById = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const user = await UserModel.findById(id);

//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     return res.json(user);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// exports.addUsers = async (req, res) => {
//   try {
//     const student = req.body;

//     if (!student || Object.keys(student).length === 0) {
//       return res.status(400).json({ message: "Request body required" });
//     }

//     const newUser = await UserModel.create(student);
//     return res.status(201).json(newUser);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    if (!updates || Object.keys(updates).length === 0) {
      return res.status(400).json({ message: "Request body required" });
    }

    const user = await UserModel.findByIdAndUpdate(
      id,
      updates,
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await UserModel.findByIdAndDelete(id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.json({ message: "User deleted successfully", user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
