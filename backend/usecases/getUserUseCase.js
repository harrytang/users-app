const userRepository = require('../repositories/userRepository');

const handle = async (validatedInputData) => {
  const user = await userRepository.get(validatedInputData);
  return user || false;
};

module.exports = { handle };
