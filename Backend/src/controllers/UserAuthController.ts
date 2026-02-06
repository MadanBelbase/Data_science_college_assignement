import { Request, Response } from 'express';
import user from '../models/User';


export const loginUser = async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;
  
      const usercheck = await user.findOne({ email });
  
      if (!usercheck) {
        return res.status(401).json({
          message: "Authentication failed: User not found",
        });
      }
  
      if (usercheck.password !== password) {
        return res.status(401).json({
          message: "Authentication failed: Incorrect password",
        });
      }
  
      console.log(`Login successful for email ${email}`);
  
      return res.status(200).json({
        message: "User logged in successfully",
        user: {
          id: usercheck._id,
          email: usercheck.email,
          firstName: usercheck.firstName,
        },
      });
  
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Server error" });
    }
  };
  

export const RegisterUser = async(req: Request, res: Response) => {
    const {firstName, lastName , email, password } = req.body;

    const existingUser = await user.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already registered" });
    }
    const newUser = new user({
        firstName,
        lastName,
        email,
        password
    });
    await newUser.save();
    console.log(`user registration attempt for ${firstName} ${lastName} with  email ${email} and password ${password}`);
};