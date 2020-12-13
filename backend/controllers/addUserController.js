const addUserUseCase = require("../usecases/addUserUseCase");
const createError = require("http-errors");

const invoke = async (req) => {
  const userInput = req.body;
  if (!userInput.username) {
    throw createError(400, "Please enter username!");
  }
  if (!userInput.email) {
    throw createError(400, "Please enter email!");
  }
  if (!userInput.password) {
    throw createError(400, "Please enter password!");
  }



  return {
    data: await addUserUseCase.handle(userInput),
  };
};

module.exports = { invoke };