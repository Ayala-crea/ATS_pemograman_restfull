// const connectDB = require("../config/database");

// class User {
//   constructor(fullname, nickname, email, phoneNumber, password) {
//     this.fullname = fullname;
//     this.nickname = nickname;
//     this.email = email;
//     this.phoneNumber = phoneNumber;
//     this.password = password;
//     const SQLQuery = 'INSERT INTO users (fullname, nickname, email, phoneNumber, password) VALUES (?,?,?,?,?)';
//     const values = [this.fullname, this.nickname, this.email, this.phoneNumber, this.password];
//     return connectDB.execute(SQLQuery, values);
//   }
// }

// try {
//     if (User) {
//         const SQLQuery = 'INSERT INTO users (fullname, nickname, email, phoneNumber, password) VALUES (?,?,?,?,?)';
//     const values = [User.fullname, User.nickname, User.email, User.phoneNumber, User.password];
// }
// return connectDB.execute(User);

// } catch (error) {
    
// }

// module.exports = { User };