import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Example: Function to find a user by email
export const findUserByEmail = async (email: string) => {
  return await prisma.user.findUnique({
    where: {
      email,
    },
  });
};
