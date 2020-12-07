const postRepository = require('../repositories/postRepository');

const handle = async (validatedUsername) => {
  const postsByUser = await postRepository.findByUserName(validatedUsername);
  if (postsByUser) {
    return postsByUser;
  } else {
    return false;
  }
};

module.exports = { handle };
