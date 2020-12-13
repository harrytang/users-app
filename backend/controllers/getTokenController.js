const getTokenUseCase = require("../usecases/getTokenUseCase");

const invoke = async (req) => {
  const userInput = req.body;
  const token = await getTokenUseCase.handle(userInput);
  return {token};
};

module.exports = { invoke };
