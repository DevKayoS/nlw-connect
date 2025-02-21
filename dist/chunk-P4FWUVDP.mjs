import {
  accessInviteLink
} from "./chunk-P43JECHZ.mjs";
import {
  env
} from "./chunk-K3UWI67F.mjs";

// src/routes/access-invite-link-route.ts
import z from "zod";
var accessInviteLinkRoute = async (app) => {
  app.get(
    "/invite/:subscriberId",
    {
      schema: {
        summary: "Access invite link and redirect user",
        tags: ["Referral"],
        params: z.object({
          subscriberId: z.string()
        }),
        response: {
          302: z.null()
        }
      }
    },
    async (request, reply) => {
      const { subscriberId } = request.params;
      await accessInviteLink({ subscriberId });
      const redirect = new URL(env.WEB_URL);
      redirect.searchParams.set("referrer", subscriberId);
      return reply.redirect(redirect.toString(), 302);
    }
  );
};

export {
  accessInviteLinkRoute
};
