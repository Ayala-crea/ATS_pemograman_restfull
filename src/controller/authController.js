const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User } = require('../model/users'); // Import the User model

exports.register = async (req, res) => {
  const { fullname, nickname, email, phoneNumber, password } = req.body;

  try {
    if (!fullname ||!nickname ||!email ||!phoneNumber ||!password) {
      return res.status(400).json({
        status: 400,
        message: 'Please provide all required fields',
      });
    }

    const hashedPassword = await bcrypt.hash(password, 8);

    const user = new User(fullname, nickname, email, phoneNumber, hashedPassword); // Create a new user instance

    res.status(201).json({
      status: 201,
      message: 'Registration successful',
      data: {
        fullname: user.fullname,
        nickname: user.nickname,
        email: user.email,
        phoneNumber: user.phoneNumber,
      },
    });
    await user.save();
  } catch (error) {
    if (error.code === 'ER_DUP_ENTRY') {
      const field = error.sqlMessage.match(/'([^']+)'/)[1];
      const message = `${field.charAt(0).toUpperCase() + field.slice(1)} already exists. Please use a different ${field}.`;
      res.status(409).json({
        status: 409,
        message: message,
        field: field,
      });
    } else {
      res.status(500).json({
        status: 500,
        message: 'Internal server error',
        error: error.message,
      });
    }
  }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
    } catch (error) {
        
    }
}