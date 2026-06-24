import mongoose from "mongoose";
const blackListTokenSchema = new mongoose.Schema(
  {
    token: {
      type: String,
      require: [true, "token is require to be adden in blacklist"],
    },
  },
  {
    timestamps: true,
  },
);

const tokenBlackListModel = mongoose.model(
  "blackListToken",
  blackListTokenSchema,
);

export default tokenBlackListModel;
