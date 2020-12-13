const path = require("path");
const fs = require("fs").promises;
const createError = require("http-errors");

const dataFile = path.join(__dirname, "..", "db", "users.json");

// Private methods
const readDb = async () => {
  try {
    const users = await fs.readFile(dataFile, "utf-8");
    return JSON.parse(users);
  } catch (err) {
    //console.log(err);
    throw createError(500, "Cannot read from DB json file!");
  }
};

const writeToDb = async (data) => {
  try {
    await fs.writeFile(dataFile, JSON.stringify(data, null, 4), {
      encoding: "utf-8",
      flag: "w",
    });
  } catch (err) {
    throw createError(500, "Cannot write to DB json file!");
  }
};

// MAIN methods
const checkExist = async (username) => {
  const users = await readDb();
  const filteredResult = users.filter((u) => {
    return username === u.username;
  });
  return filteredResult.length > 0;
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
