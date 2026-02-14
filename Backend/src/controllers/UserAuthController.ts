import { Request, Response } from 'express';
import User from '../models/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const userCheck = await User.findOne({ email });

    if (!userCheck) {
      return res.status(401).json({
        message: "Authentication failed: User not found",
      });
    }

    const isMatch = await bcrypt.compare(password, userCheck.password);

    if (!isMatch) {
      return res.status(401).json({
        message: "Authentication failed: Incorrect password",
      });
    }

    const token = jwt.sign(
      {
        id: userCheck._id,
        email: userCheck.email,
      },
      process.env.JWT_SECRET as string,
      { expiresIn: '7d' }
    );

    return res.status(200).json({
      message: "User logged in successfully",
      token,
      user: {
        id: userCheck._id,
        email: userCheck.email,
        firstName: userCheck.firstName,
      },
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};

export const registerUser = async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "Email already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    const token = jwt.sign(
      {
        id: newUser._id,
        email: newUser.email,
      },
      process.env.JWT_SECRET as string,
      { expiresIn: '7d' }
    );

    return res.status(201).json({
      message: "User registered successfully",
      token,
      user: {
        id: newUser._id,
        email: newUser.email,
        firstName: newUser.firstName,
      },
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};

