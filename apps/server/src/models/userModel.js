import prisma from "../db.js";

const usersModel = {
  async getAllUsers() {
    return await prisma.user.findMany();
  },

  async addUser(name) {
    return await prisma.user.create({
      data: {
        name,
      },
    });
  },
};

export default usersModel;
