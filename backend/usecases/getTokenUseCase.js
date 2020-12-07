const jwt = require('jsonwebtoken');

const TOKEN_SECRET = '7bc78545b1a3923cc1e1e19523fd5c3f20b409509';
const userRepository = require('../repositories/userRepository');

const generateToken = (userId) => {
  return jwt.sign(userId, TOKEN_SECRET);
};

const handle = async (user) => {
  const existUser = await userRepository.find(user.username);

  if (existUser && existUser.password === user.password) {
    const token = generateToken(existUser.userId);
    return token;
  } else {
    return false;
  }
};

module.exports = { handle };
