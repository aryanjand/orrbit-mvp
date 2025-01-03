import { z } from "zod";
import { router, publicProcedure, protectedProcedure } from "../trpc";
import { prisma } from "../prisma";

const getUser = protectedProcedure.query(({ ctx }) => {
  return ctx.user;
});

const createUser = publicProcedure
  .input(
    z.object({
      auth0Id: z.string(),
      email: z.string().email(),
      name: z.string().optional(),
    })
  )
  .mutation(async ({ input }) => {
    return prisma.user.upsert({
      where: { auth0Id: input.auth0Id },
      update: { name: input.name },
      create: input,
    });
  });

export const authRouter = router({
  getUser: getUser,
  createUser: createUser,
});
