import express from "express";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: [true, "user name is already taken"],
    required: true,
  },
  email: {
    type: String,
    unique: [true, "user is alqeady registered please login"],
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});
const User = mongoose.model("user", userSchema);

export default User;
