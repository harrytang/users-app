const path = require('path');
const fs = require('fs').promises;

const dataFile = path.join(__dirname, '..', 'db', 'posts.json');
console.log(dataFile);
const readDb = async () => {
  try {
    const posts = await fs.readFile(dataFile, 'utf-8');
    return JSON.parse(posts);
  } catch (err) {
    return [];
  }
};

const findByUserName = async (username) => {
  const posts = await readDb();
  const filteredPost = posts.filter((p) => {
    return p.username === username;
  });
  return filteredPost[0] || null;
};

module.exports = { findByUserName };
