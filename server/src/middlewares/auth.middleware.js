import jwt from "jsonwebtoken";
import tokenBlackListModel from "../models/blacklist.model.js";

async function authUser(req, res, next) {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({
      message: "token not found",
    });
  }
  const isTokenBlackList = await tokenBlackListModel.findOne({ token });
  if (isTokenBlackList) {
    return res.status(401).json({
      message: "token is invalid",
    });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({
      message: "invalid token",
    });
  }
}

export default authUser;
