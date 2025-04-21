class User {
    static idCounter = 0; // Counter to keep track of user IDs
    static users = []; // Static array to hold users
  
    constructor(firstName, lastName, email, password) {
      this.id = User.idCounter++; // Incrementing ID for each new user
      this.firstName = firstName;
      this.lastName = lastName;
      this.email = email;
      this.password = password;
      User.users.push(this); // push the user to the array
    }
    static getUserByIndex(index) {
        if (index >= 0 && index < User.users.length) {
          return User.users[index]; // return the user at the given index
        } else {
          return null; // return null if the index is out of range
        }
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
  