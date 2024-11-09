import mongoose from "mongoose";

export function connectDB() {
  mongoose
    .connect("mongodb+srv://nguyet100147:I5j5uPrkCNKhij6V@cluster0.58hdl.mongodb.net/test")
    .then(() => console.log("Connected!"));
}
