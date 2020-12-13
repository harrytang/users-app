const userRepository = require('../repositories/userRepository');
const createError = require("http-errors");

const handle = async (validatedInputData) => {
  const user = await userRepository.get(validatedInputData);
  if(!user) {
    throw createError.NotFound();
  }

  return user;
};

module.exports = { handle };
