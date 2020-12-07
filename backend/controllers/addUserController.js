const addUserUseCase = require('../usecases/addUserUseCase');

const invoke = async (req) => {
  const userInput = req.body;
  if (!userInput.username && !userInput.email && !userInput.password) {
    return {
      code: 422,
      message: `Invalid user's input`,
      success: false,
    };
  } else {
    const newUser = await addUserUseCase.handle(userInput);
    if (newUser === false) {
      return {
        code: 400,
        message: 'Cannot create new user. User might already exist!',
        success: false,
      };
    }
    {
      return {
        code: 200,
        data: newUser,
        success: 'true',
      };
    }
  }
};

module.exports = { invoke };
