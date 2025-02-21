import {
  getSubscribersInviteClicks
} from "./chunk-KTRIMD37.mjs";

// src/routes/get-subscriber-invite-click-route.ts
import z from "zod";
var getSubscriberInviteClicksRoute = async (app) => {
  app.get(
    "/subscribers/:subscriberId/ranking/clicks",
    {
      schema: {
        summary: "Get subscriber invite clicks count",
        tags: ["Referral"],
        params: z.object({
          subscriberId: z.string()
        }),
        response: {
          200: z.object({
            count: z.number()
          })
        }
      }
    },
    async (request) => {
      const { subscriberId } = request.params;
      const { count } = await getSubscribersInviteClicks({
        subscriberId
      });
      return {
        count
      };
    }
  );
};

export {
  getSubscriberInviteClicksRoute
};
