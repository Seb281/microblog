import usersModel from "../models/userModel.js";

const usersController = {
  async get(req, res) {
    res.send(await usersModel.getAllUsers());
  },
  async post(req, res) {
    const { name } = req.body;
    await usersModel.addUser(name);
    res.status(201).json({ message: "User added succesfully" });
  },
};

export default usersController;
