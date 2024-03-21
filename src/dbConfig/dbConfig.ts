import mongoose from "mongoose";

const Connect = async () => {
  try {
    console.log("url ===>", process.env.MONGODB_URL!);
    mongoose.connect(process.env.MONGODB_URL!);

    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("MongoDB Connected Successfully!");
    });

    connection.on("error", (error: any) => {
      console.log("Error in mongodb connection", error);
    });
  } catch (error) {
    console.log("db connection error", error);
  }
};

export default Connect;
