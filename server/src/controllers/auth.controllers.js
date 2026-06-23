import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
// import userModel from "../models/user.model.js";

export const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if ((!username, !email, !password)) {
      return res.status(400).json({
        message: "pleade provide input",
      });
    }
    const isUser = await User.findOne({ $or: [{ username }, { email }] });
    if (isUser) {
      return res.status(400).json({
        message: "Account already exists with this email or usernaem ",
      });
    }
    const hash = await bcrypt.hash(password, 10);
    const user = await User.create({
      username,
      email,
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
    res.cookie("token", token);
    res.status(201).json({
      message: "user register successfully",
      user: {
        username: user.username,
        user: user.email,
        id: user._id,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(404).json({
      message: "register api faie",
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
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
      { expiresIn: "id" },
    );
    res.cookie("token", token);
    res.status(200).json({
      message: "User loggedin successfully",
      user: {
        id: user._id,
        email: user.email,
        username: user.username,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(404).json({
      message: "login api fail",
    });
  }
};
