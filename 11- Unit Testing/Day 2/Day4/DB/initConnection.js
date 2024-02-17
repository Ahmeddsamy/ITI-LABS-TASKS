// Database connection
import mongoose from "mongoose";

const initConnection = () => {
  return mongoose
    .connect(
      "mongodb+srv://sononame:brnXHYz9BIz1oBvT@cluster0.6cavapm.mongodb.net/nodetask4?retryWrites=true&w=majority"
    )
    .then(() => console.log("DB Connected"))
    .catch((err) => console.log("ConnectionError"));
};

export default initConnection;
