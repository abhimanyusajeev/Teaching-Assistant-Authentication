import { NextApiRequest, NextApiResponse } from "next";
import { validateEmail } from "../../../lib/emailValidation";
import { hashPassword } from "../../../lib/passwordHashing";
import { connectToMongoDB } from "../../../lib/mongodb";
import User from "../../../models/user";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { email, password } = req.body;

  if (!validateEmail(email)) {
    return res.status(400).json({ message: "Invalid email format" });
  }

  const hashedPassword = hashPassword(password);

  try {
    await connectToMongoDB();

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    const newUser = new User({ email, password: hashedPassword });
    const result = await newUser.save();

    if (!result) {
      return res.status(500).json({ message: "Failed to create user" });
    }

    // User created successfully
    // You can add code here to generate JWT token or use NextAuth.js for authentication

    return res.status(201).json({ message: "Signup successful" });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
