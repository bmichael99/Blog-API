const prisma = require("./prisma");

async function createUser(first_name,username,password){
  return await prisma.user.create({
    data: {
      first_name: first_name,
      username: username,
      password: password,
    }
  });
}

module.exports = {
  createUser,

};