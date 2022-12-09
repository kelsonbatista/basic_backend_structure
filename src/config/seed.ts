import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const userAdmin = await prisma.users.upsert({
    where: { email: "admin@email.com" },
    update: {},
    create: {
      username: "admin",
      email: "admin@email.com",
      role: "ADMIN",
      password: "Admin12!#$@",
      refreshToken: "refreshToken",
    },
  });

  const userBasic = await prisma.users.upsert({
    where: { email: "user@email.com" },
    update: {},
    create: {
      username: "user",
      email: "user@email.com",
      role: "BASIC",
      password: "User12!#$@",
      refreshToken: "refreshToken",
    },
  });
  console.log({ userAdmin, userBasic });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
