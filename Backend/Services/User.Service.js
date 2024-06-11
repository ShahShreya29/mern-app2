
// userService.js
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../Model/User.Model.js");
const RefreshToken = require("../Model/RefreshToken.Model.js")

// Function to hash password
const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

// Function to generate access token
const generateAccessToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_KEY, {
    expiresIn: "15m",
  });
};

// Function to generate refresh token
const generateRefreshToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_KEY);
};



// Function to create new user in the database
exports.signUp = async (userData) => {
  try {
    const { name, email, password, profile } = userData;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return { error: "User already exists with this email   : ", email };
    }

    const hashedPassword = await hashPassword(password);
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      profile,
    });
    console.log(newUser);
    await newUser.save();
    return newUser;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Function to authenticate user and generate access token
exports.signIn = async (email, password) => {
  try {
    const user = await User.findOne({ email });
    if (!user) throw new Error("Invalid email or password");

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error("Invalid email or password");

    const accessToken = generateAccessToken(user._id);
    const refreshToken = generateRefreshToken(user._id);

    // Save refresh token to database
    const newRefreshToken = new RefreshToken({ token: refreshToken });
    await newRefreshToken.save();

    return { user, accessToken, refreshToken };
  } catch (error) {
    throw error;
  }
};

exports.getUserById = async (userId) => {
  try {
    const user = await User.findById(userId);
    // .populate("address");
    if (!user) throw new Error("User not found");
    return user;
  } catch (error) {
    throw error;
  }
}

exports.getUserByEmail = async (email) => {
  try {
    const user = await User.findOne({ email });
    if (!user) throw new Error({message : "User not found"});
    return user;
  } catch (error) {
    throw error;
  }
}

exports.getUsers = async () => {
  try {
    const users = await User.find();
    return users;
  } catch (error) {
    throw error;
  }
}

exports.getUserByToken = async (token) => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    const userId = decoded.userId;

    const user = await getUserById(userId);
    if (!user) throw new Error("User not found");
    console.log(user);
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
}
                                  

// Function to verify refresh token and generate new access token
exports.refreshToken = async (refreshToken) => {
  try {
    const existingToken = await refreshToken.findOne({ token: refreshToken });
    if (!existingToken) throw new Error("Invalid refresh token");

    const decoded = jwt.verify(refreshToken, process.env.JWT_KEY);
    const userId = decoded.userId;

    const accessToken = generateAccessToken(userId);

    return accessToken;
  } catch (error) {
    throw new Error(error.message);
  }
};


