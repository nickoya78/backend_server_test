import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';
import { sendVerificationEmail } from '../services/emailService';
import { generateToken } from '../utils/tokenUtil';

const prisma = new PrismaClient();

// backend/src/controllers/userController.ts

export const registerUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        email,
        password: hashedPassword
      },
    });

    // Generate the token after the user is created
    const verificationToken = generateToken({ id: newUser.id, email: newUser.email });

    await prisma.user.update({
      where: { id: newUser.id },
      data: { verificationToken }
    });

    await sendVerificationEmail(newUser.email, verificationToken);
    res.status(201).json({ message: 'Registration successful, please check your email' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};


export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Ensure user.id is defined and is a number
    if (typeof user.id !== 'number') {
      return res.status(500).json({ message: 'Internal server error' });
    }

    const token = generateToken({ id: user.id, email: user.email });
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};