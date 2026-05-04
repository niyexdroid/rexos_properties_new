/**
 * Prisma Client Singleton
 *
 * With Prisma v5, it's simple: import PrismaClient, create an instance.
 * No adapters, no config files — it reads DATABASE_URL from .env automatically.
 *
 * The singleton pattern prevents too many connections during Next.js hot reloads.
 */

import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
