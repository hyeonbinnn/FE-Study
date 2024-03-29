const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');

const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxLength: 50,
  },
  email: {
    type: String,
    trim: true,
    unique: 1,
  },
  password: {
    type: String,
    minLength: 5,
  },
  lastName: {
    type: String,
    maxLength: 50,
  },
  role: {
    type: Number,
    default: 0,
  },
  image: String,
  token: {
    type: String,
  },
  tokenExp: {
    type: Number,
  },
});

userSchema.pre('save', async function (next) {
  try {
    if (!this.isModified('password')) {
      return next();
    }
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(this.password, salt);
    this.password = hash;
    next();
  } catch (err) {
    next(err);
  }
});

userSchema.methods.comparePassword = async function (plainPassword) {
  try {
    return await bcrypt.compare(plainPassword, this.password);
  } catch (error) {
    throw error;
  }
};

userSchema.methods.generateToken = async function () {
  try {
    // jsonwebtoken을 이용해서 token을 생성하기
    const token = jwt.sign({ userId: this._id.toHexString() }, 'secretToken');
    this.token = token;
    await this.save();
    return token;
  } catch (err) {
    throw err;
  }
};

userSchema.statics.findByToken = async function (token) {
  try {
    const decoded = jwt.verify(token, 'secretToken');
    const user = await this.findOne({ _id: decoded.userId, token: token });
    return user;
  } catch (error) {
    throw error;
  }
};

const User = mongoose.model('User', userSchema);

module.exports = { User };
