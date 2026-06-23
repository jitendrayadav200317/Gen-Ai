import mongoose from "mongoose";

const connectToDb = async () => {
  try {
    const connecting = await mongoose.connect(
      "mongodb://localhost:27017/gen-ai",
    );
    console.log(" mongoode connect✅");
  } catch (error) {
    console.log(error);
  }
};

export default connectToDb;
