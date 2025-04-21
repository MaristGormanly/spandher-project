class User {
    static idCounter = 0; // Counter to keep track of user IDs
    static users = []; // Static array to hold users
  
    constructor(firstName, lastName, email, password) {
      this.id = User.idCounter++; // Incrementing ID for each new user
      this.firstName = firstName;
      this.lastName = lastName;
      this.email = email;
      this.password = password;
    }
  
    // Static method to create a user and add to the list
    static createUser(firstName, lastName, email, password) {
      const newUser = new User(firstName, lastName, email, password);
      User.users.push(newUser);
      return newUser;
    }
  
    update(data) {
      if (data.firstName) this.firstName = data.firstName;
      if (data.lastName) this.lastName = data.lastName;
      if (data.email) this.email = data.email;
      if (data.password) this.password = data.password;
    }
  }
  
  module.exports = User;
  