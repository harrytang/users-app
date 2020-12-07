const getTokenUseCase = require('../usecases/getTokenUseCase');

const invoke = async (req) => {
  const user = req.body;
  console.log(user);
  const token = await getTokenUseCase.handle(user);
  if (token) {
    return { code: 200, token, success: true };
  } else {
    return { code: 400, message: 'User does not exist!', success: false };
  }
};

module.exports = { invoke };
