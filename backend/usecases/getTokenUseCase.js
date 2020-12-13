const jwt = require('jsonwebtoken');

const TOKEN_SECRET = '7bc78545b1a3923cc1e1e19523fd5c3f20b409509';
const userRepository = require('../repositories/userRepository');
const createError = require("http-errors");

const generateToken = (userId) => {
  return jwt.sign(userId, TOKEN_SECRET);
};

const handle = async (userInput) => {
  
  const existUser = await userRepository.find(userInput.username);
  console.log(existUser);
  
  if(!existUser) {
    throw createError(400, "This account is not exist!");
  }

  if (existUser.password !== userInput.password) {
    throw createError(400, "Incorrect password!");
  } 

  return generateToken(existUser.userId);
};

module.exports = { handle };
