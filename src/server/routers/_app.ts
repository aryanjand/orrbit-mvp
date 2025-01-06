/**
 * This file contains the root router of your tRPC-backend
 */
import { createCallerFactory, publicProcedure, router } from '../trpc';

export const appRouter = router({
  healthcheck: publicProcedure.query(() => 'yay!'),
});

/**
 * @deprecated Should not use this function. Need to create a substitute for create call
 */
export const createCaller = createCallerFactory(appRouter);

export type AppRouter = typeof appRouter;
