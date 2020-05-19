import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function createUser() {
  const createUser = await prisma.user.create({
    data: {
      email: "daviRibeiro@gmail.com",
      name: "Davi Ribeiro",
    },
  });

  return createUser;
}
