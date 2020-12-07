const getUserUseCase = require('../usecases/getUserUseCase');
const jwt = require('jsonwebtoken');
const TOKEN_SECRET = '7bc78545b1a3923cc1e1e19523fd5c3f20b409509';

const invoke = (req) => {
  // Get token
  const authorization = req.headers['authorization'];
  const [type, token] = authorization.split(' ');
  console.log(type, token);

  return jwt.verify(token, TOKEN_SECRET, (err, userId) => {
    if (err) {
      console.log(err);
      return { code: 403, message: `${err}`, success: false };
    } else {
      return getUserUseCase.handle(parseInt(userId)).then((data) => {
        return data;
      });
    }
  });
};

module.exports = { invoke };
