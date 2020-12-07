const getUserUseCase = require('../usecases/getUserUseCase');
const listPostsUseCase = require('../usecases/listPostsUseCase');
const jwt = require('jsonwebtoken');
const TOKEN_SECRET = '7bc78545b1a3923cc1e1e19523fd5c3f20b409509';

const invoke = (req) => {
  const authorization = req.headers['authorization'];
  const [type, token] = authorization.split(' ');

  return jwt.verify(token, TOKEN_SECRET, async (err, userId) => {
    if (err) {
      console.log(err);
      return { code: 403, message: `${err}`, success: false };
    } else {
      const foundUser = await getUserUseCase.handle(parseInt(userId));
      const foundPosts = await listPostsUseCase.handle(foundUser.username);
      if (foundPosts) {
        return { code: 200, data: foundPosts, success: true };
      } else {
        return { code: 400, message: 'Cannot find any posts', success: false };
      }
    }
  });
};

module.exports = { invoke };
