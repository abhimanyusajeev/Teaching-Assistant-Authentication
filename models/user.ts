import mongoose, { Schema, model, models } from "mongoose";
const UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: [true, "Email is required"],
    // match: [
    //   /^w+([\.-]?w+)*@w+([\.-]?w+)*(\.\w{2,3})+$/,
    //   "Please fill a valid e-mail address",
    // ],
  },
  fullName: {
    type: String,
    required: [true, "Fullname is required"],
    minLength: [4, "Full name should be atleast 4 characters long"],
    maxlength: [30, "Full name should not exceed 30 characters"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    select: false,
  },
});
const User = mongoose.models.User || model("User", UserSchema);
export default User;
