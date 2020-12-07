const path = require('path');
const fs = require('fs').promises;

const dataFile = path.join(__dirname, '..', 'db', 'users.json');

const readDb = async () => {
  try {
    const users = await fs.readFile(dataFile, 'utf-8');
    return JSON.parse(users);
  } catch (err) {
    return [];
  }
};

const writeToDb = async (data) => {
  try {
    await fs.writeFile(dataFile, JSON.stringify(data, null, 4), {
      encoding: 'utf-8',
      flag: 'w',
    });
    return 'Write successfully';
  } catch (err) {
    return err;
  }
};

const checkExist = async (user) => {
  const users = await readDb();
  const existUser = users.filter((u) => {
    return u.username === user.username;
  });
  return existUser.length > 0;
};

const insert = async (user) => {
  const users = await readDb();
  users.push(user);
  await writeToDb(users);
  return user;
};

const find = async (username) => {
  const users = await readDb();
  const foundUser = users.find((u) => {
    return u.username === username;
  });
  return foundUser || null;
};

const get = async (userId) => {
  const users = await readDb();
  const foundUser = users.find((u) => {
    return u.userId === userId;
  });
  return foundUser || null;
};
module.exports = { insert, checkExist, find, get };
