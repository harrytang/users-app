class User {
  constructor(username, email, password) {
    this.userId = Date.now();
    this.username = username;
    this.email = email;
    this.password = password;
  }
}

module.exports = User;
