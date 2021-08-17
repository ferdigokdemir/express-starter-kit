import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  FullName: {
    type: String,
    trim: true,
    required: true,
  },
  Email: {
    type: String,
    trim: true,
  },
  Password: String,
  About: {
    type: String,
    trim: true,
  },
  IsActive: Boolean,
  IsBlocked: Boolean,
});

export default mongoose.model("User", userSchema);
