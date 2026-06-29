import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import tokenBlackList from "../models/blacklist.model.js";
import User from "../models/user.model.js";

export const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(400).json({
        message: "Please provide all required fields",
      });
    }

    const normalizedEmail = email.trim().toLowerCase();
    const normalizedUsername = username.trim();

    const isUser = await User.findOne({
      $or: [{ username: normalizedUsername }, { email: normalizedEmail }],
    });
    if (isUser) {
      return res.status(400).json({
        message: "Account already exists with this email or username",
      });
    }
    const hash = await bcrypt.hash(password, 10);
    const user = await User.create({
      username: normalizedUsername,
      email: normalizedEmail,
      password: hash,
    });
    const token = jwt.sign(
      {
        id: user._id,
        username: user.username,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1d" },
    );
    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "lax",
    });
    res.status(201).json({
      message: "user register successfully",
      user: {
        username: user.username,
        email: user.email,
        id: user._id,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "register api failed",
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        message: "Please provide email and password",
      });
    }

    const normalizedEmail = email.trim().toLowerCase();
    const user = await User.findOne({ email: normalizedEmail });
    if (!user) {
      return res.status(400).json({
        message: "invalid email or password",
      });
    }
    const isPassword = await bcrypt.compare(password, user.password);
    if (!isPassword) {
      return res.status(400).json({
        message: "invalid email or password",
      });
    }
    const token = jwt.sign(
      {
        id: user._id,
        username: user.username,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1d" },
    );
    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "lax",
    });
    res.status(200).json({
      message: "User logged in successfully",
      user: {
        id: user._id,
        email: user.email,
        username: user.username,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "login api failed",
    });
  }
};

export const logout = async (req, res) => {
  const token = req.cookies.token;
  if (token) {
    await tokenBlackList.create({ token });
  }
  res.clearCookie("token");
  res.status(200).json({
    message: "user logged out successfully",
  });
};

export const grtMeController = async (req, res) => {
  const user = await User.findById(req.user.id);
  res.status(200).json({
    message: "User details fatch successfully",
    user: {
      id: user._id,
      username: user.username,
      email: user.email,
    },
  });
};
