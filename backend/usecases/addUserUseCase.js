const userRepository = require('../repositories/userRepository');
const User = require('../entities/User');

const handle = async (user) => {
  const existUser = await userRepository.checkExist(user);
  if (!existUser) {
    const newUser = new User(user.username, user.email, user.password);
    await userRepository.insert(newUser);
    return newUser;
  } else {
    return false;
  }
};

module.exports = { handle };
