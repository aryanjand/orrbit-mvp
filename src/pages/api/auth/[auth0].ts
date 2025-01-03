import {
  handleAuth,
  handleCallback,
  Session,
  AfterCallback,
  handleLogin,
} from "@auth0/nextjs-auth0";
import { NextApiRequest, NextApiResponse } from "next";
import { createTRPCContext } from "@/server/context";
import { trpc } from "@/utils/trpc";

const afterCallback: AfterCallback = async (
  req: NextApiRequest,
  res: NextApiResponse,
  session: Session | null
) => {
  // Todo: Fix this I think the context is not called correctly
  if (session?.user) {
    const { sub, email, name } = session.user;
    if (sub && email) {
      await createTRPCContext({ req, res });
      const createUserMutation = trpc.auth.createUser.useMutation();
      createUserMutation.mutateAsync({
        auth0Id: sub,
        email,
        name: name || undefined,
      });
    }
  }

  return session || undefined;
};

export default handleAuth({
  async login(req: NextApiRequest, res: NextApiResponse) {
    await handleLogin(req, res, {
      returnTo: "/",
    });
  },
  async callback(req: NextApiRequest, res: NextApiResponse) {
    try {
      await handleCallback(req, res, { afterCallback });
    } catch (error) {
      console.error("Error in Auth0 callback:", error);
      res.status(500).end("Internal Server Error");
    }
  },
});
