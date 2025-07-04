const prisma = require("./prisma");

exports.createUser = async (first_name,username,password) => {
  return await prisma.user.create({
    data: {
      first_name: first_name,
      username: username,
      password: password,
    }
  });
}

exports.getUserByUsername = async (username) => {
  const user = await prisma.user.findUnique({
    where: {username: username}
  });

  return user;
}
