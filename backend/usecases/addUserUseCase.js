const userRepository = require("../repositories/userRepository");
const User = require("../entities/User");
const createError = require("http-errors");

const handle = async (validatedData) => {
  const isUserExist = await userRepository.checkExist(validatedData.username);
  if (isUserExist) {
    throw createError(400, "Username already exist!");
  }

  const user = new User(
    validatedData.username,
    validatedData.email,
    validatedData.password
  );
  return await userRepository.insert(user);
};

module.exports = { handle };
