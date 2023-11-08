const { PrismaClient } = require("@prisma/client");

const prismaClientSingleton = () => {
  return new PrismaClient();
};

const globalForPrisma = globalThis || this;

const prisma = globalForPrisma.prisma || prismaClientSingleton();

module.exports = prisma;

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
